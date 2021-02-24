import React, { useEffect } from 'react';
import { Comment } from './Comment';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';


export const PostDetail = () => {

  const state = useSelector( state => state.postDetail);
  const dispatch = useDispatch();

  const loadPost = async () => {

    window.scrollTo(0, 0);

    dispatch({
      type: 'postDetail/changeIsLoading',
      payload: true,
    })

    console.log(state.url)
    let response;
    response = await fetch(state.url);
    const responseJSON = await response.json();
    console.log(responseJSON);

    const postData = responseJSON[0].data.children[0].data;

    const post = {
      title: postData.title,
      user: 'Posted by ' + postData.author,
      body: postData.selftext.replaceAll('\n', '\n\n'),
      subreddit: postData.subreddit_name_prefixed,
    }

    //check to see if there is an image
    if (postData.preview) {
      if (postData.preview.images) {
        post.image = postData.preview.images[0].resolutions[postData.preview.images[0].resolutions.length -1].url.replaceAll('&amp;', '&');
      }
    }

    //check to see whether a link should be included
    if (postData.post_hint === 'link' || postData.post_hint !== 'image' && postData.url_overridden_by_dest) {
          post.link = postData.url_overridden_by_dest;
        }


    dispatch({
      type: 'postDetail/loadPost',
      payload: post,
    })

    const commentData = responseJSON[1].data.children

    // format array of comment objects - removing most key/value pairs
    const reduceCommentsArray = (commentsArray, commentLevel) => {
      return commentsArray.map( comment => {

        const commentObject = {
          user: comment.data.author,
          votes: comment.data.score,
          body: comment.data.body,
          commentLevel: commentLevel,
          id: comment.data.id,
        }


        // check to see if comment has replies - if so, format this array of comment objects recursively
        if (comment.data.replies) {

          // filter out the replies which are not comments
          const filteredRepliesArray = comment.data.replies.data.children.filter( item => item.kind === 't1');

          const repliesArray = reduceCommentsArray(filteredRepliesArray, commentLevel + 1);
          commentObject.replies = repliesArray;
        }

        return commentObject;
      })
    }

    const commentsArray = reduceCommentsArray(commentData, 0);

    console.log(commentsArray);

    dispatch({
      type: 'postDetail/loadComments',
      payload: commentsArray,
    })

    dispatch({
      type: 'postDetail/changeIsLoading',
      payload: false,
    })
  }


  useEffect(() => {
    loadPost();
    return () => {
      dispatch({
        type: 'postDetail/resetSlice',
      });
    };
  }, [])



  return(
    <div className = "PostDetail">
      <p className={(!state.isLoading) ? 'hidden' : 'loading'}>Loading...</p>
      <h1>{state.post.subreddit}</h1>
      <h1>{state.post.title}</h1>
      <p className="user">{state.post.user}</p>
      <a href={state.post.link} className="postlink">{state.post.link}</a>
      <img src={state.post.image}></img>
      <ReactMarkdown className="body" source={state.post.body} />
      <h1>Comments</h1>
      {state.comments.map( comment => {
        return <Comment key={comment.id}
                        body={comment.body}
                        commentLevel={comment.commentLevel}
                        user={'Posted by' + comment.user}
                        votes={comment.votes}
                        replies={comment.replies} />
      })}
    </div>
  )
}