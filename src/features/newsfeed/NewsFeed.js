import React, { useEffect } from 'react';
import { PostTitle } from './PostTitle';
import { SearchBar } from '../SearchBar';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';

export const NewsFeed = () => {

  //subscribe to store and obtain relevant slice
  let state = useSelector( state => state.newsFeed)
  const dispatch= useDispatch();

  //fetch newsfeed data from reddit. get from either homepage or selected subreddit
  const fetchNewsFeed = async (query = '') => {

    dispatch({
      type: 'newsFeed/changeIsLoading',
      payload: true,
    })

    let response;

    if (state.activeSubreddit === 'Homepage') {
      response = await fetch('https://www.reddit.com/.json' + query);
      console.log('https://www.reddit.com/.json' + query)
    } else {
      response = await fetch('https://www.reddit.com/.json' + query);
    }

    const responseJSON = await response.json();
    console.log(responseJSON);

    console.log(state);

    // access array of posts
    const posts = responseJSON.data.children;

    console.log(posts)

    // initialise payload for newsFeed/loadPosts action
    const payload = {posts: {}, after: '', before: ''};

    console.log(responseJSON);
    payload.before = responseJSON.data.before;
    payload.after = responseJSON.data.after;

    console.log('Hello' + payload.before);


    // interate through array of posts and add to payload object
    for (let post of posts) {
      payload.posts[post.data.id] = {
        title: post.data.title,
        subredditName: post.data.subreddit_name_prefixed,
        image: post.data.preview,
        votes: post.data.score,
        id: post.data.id,
      }
      if (post.data.preview) {
        console.log(post);
        if (post.data.preview.images[0].resolutions.length === 0) {
          payload.posts[post.data.id].image = post.data.preview.images[0].source.url.replaceAll('&amp;', '&');
        } else {
          payload.posts[post.data.id].image = post.data.preview.images[0].resolutions[post.data.preview.images[0].resolutions.length - 1].url.replaceAll('&amp;', '&');
        }
        }
    }

    dispatch({
      type: 'newsFeed/changeIsLoading',
      payload: false,
    })

    // dispatch action to reload
    dispatch({
      type: 'newsFeed/loadPosts',
      payload: payload,
    });

  }

  //only load newsfeed on mount or if active subreddit has changed
  useEffect(() => {
    fetchNewsFeed();
    dispatch({
      type: 'newsFeed/changePageNumber',
      payload: 1,
    });
  }, [state.activeSubreddit]);

  state = useSelector( state => state.newsFeed)
  const postTitleArray = Object.values(state.posts);

  console.log(state.before)

  const handleClickAfter = () => {
    if (state.isLoading) {
      return;
    }
    fetchNewsFeed('?after=' + state.after + '&count=' + (state.pageNumber * 25));
    dispatch({
      type: 'newsFeed/changePageNumber',
      payload: state.pageNumber + 1,
    });
  }

  const handleClickBefore = () => {
    if (state.isLoading) {
      return;
    }

    fetchNewsFeed('?before=' + state.before + '&count=' + ((state.pageNumber - 1)  * 25));

    dispatch({
      type: 'newsFeed/changePageNumber',
      payload: state.pageNumber - 1,
    });
  }

  return(
    <div className = "NewsFeed">
      <h1>Reddit Homepage</h1>
      <SearchBar className="SearchBar" placeholder="Search the below by post title" />
      <div className="page">
      {(state.pageNumber !== 1) ? <button type="button" onClick={handleClickBefore} >&#60;</button> : <p></p>}
        <p>Page {state.pageNumber}</p>
        <button type="button" onClick={handleClickAfter} >&#62;</button>
      </div>
      {postTitleArray.map((postTitle) => {
        return <PostTitle className="PostTitle"
                          key={postTitle.id}
                          title={postTitle.title}
                          subredditName={postTitle.subredditName}
                          image={postTitle.image}
                          votes={postTitle.votes}
                          postTitleClass={(state.isLoading) ? 'hidden' : 'PostTitle'} />
      })}
      <p className={(!state.isLoading) ? 'hidden' : 'loading'}>Loading...</p>
    </div>
  )
}