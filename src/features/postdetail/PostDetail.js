import React, { useEffect } from 'react';
import { Comment } from './Comment';
import { useSelector, useDispatch } from 'react-redux';


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
      body: postData.selftext,
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
      commentsArray.map( comment => {

        const commentObject = {
          user: comment.data.author,
          votes: comment.data.score,
          body: comment.data.body,
          commentLevel: commentLevel,
        }


        // check to see if comment has replies - if so, format this array of comment objects recursively
        if (comment.data.replies) {
          const repliesArray = reduceCommentsArray(comment.data.replies.data.children, commentLevel);
          commentObject.replies = repliesArray;
        }

        console.log(commentObject);

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
      <p className="body">{state.post.body}</p>
      <h1>Comments</h1>
      <Comment commentLevel={0} />
      <Comment commentLevel={0} />
      <Comment commentLevel={0} />
      <Comment commentLevel={0} />
      <Comment commentLevel={0} />
      <Comment commentLevel={1} />
      <Comment commentLevel={2} />
      <Comment commentLevel={0} />
      <Comment commentLevel={0} />

    </div>
  )
}