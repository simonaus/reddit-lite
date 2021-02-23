import React, { useEffect } from 'react';
import { PostTitle } from './PostTitle';
import { SearchBar } from '../SearchBar';
import { useSelector, useDispatch } from 'react-redux';

export const NewsFeed = () => {

  //subscribe to store and obtain relevant slice
  let state = useSelector( state => state.newsFeed)
  const dispatch= useDispatch();

  //fetch newsfeed data from reddit. get from either homepage or selected subreddit
  const fetchNewsFeed = async (query = '') => {

    window.scrollTo(0, 0);

    dispatch({
      type: 'newsFeed/changeIsLoading',
      payload: true,
    })

    if (!state.isSearching) {
      query = '/.json' + query
    }

    let response;
    console.log(state.url +query)
    response = await fetch(state.url + query);
    const responseJSON = await response.json();

    console.log(state.url +query)
    console.log(responseJSON);
    console.log(state);

    // access array of posts
    const posts = responseJSON.data.children;

    // initialise payload for newsFeed/loadPosts action
    const payload = {posts: [], after: '', before: ''};

    payload.before = responseJSON.data.before;
    payload.after = responseJSON.data.after;


    let counter = 0;

    // interate through array of posts and add to payload object
    for (let post of posts) {
      payload.posts[counter] = {
        title: post.data.title,
        subredditName: post.data.subreddit_name_prefixed,
        image: post.data.preview,
        votes: post.data.score,
        id: post.data.id,
      }
      if (post.data.preview) {
        if (post.data.preview.images[0].resolutions.length === 0) {
          payload.posts[counter].image = post.data.preview.images[0].source.url.replaceAll('&amp;', '&');
        } else {
          payload.posts[counter].image = post.data.preview.images[0].resolutions[post.data.preview.images[0].resolutions.length - 1].url.replaceAll('&amp;', '&');
        }
        }
        counter++;
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
  }, [state.url]);

  const handleClickAfter = () => {
    if (state.isLoading) {
      return;
    }
    //state of query is & or ? depending on whether url alredy contains search query
    const isSearching = (state.isSearching) ? '&' : '?'
    fetchNewsFeed(isSearching + 'after=' + state.after + '&count=' + (state.pageNumber * 25));
    dispatch({
      type: 'newsFeed/changePageNumber',
      payload: state.pageNumber + 1,
    });
  }

  const handleClickBefore = () => {
    if (state.isLoading) {
      return;
    }
    //state of query is & or ? depending on whether url alredy contains search query
    const isSearching = (state.isSearching) ? '&' : '?'
    fetchNewsFeed(isSearching + 'before=' + state.before + '&count=' + ((state.pageNumber - 1)  * 25));

    dispatch({
      type: 'newsFeed/changePageNumber',
      payload: state.pageNumber - 1,
    });
  }

  return(
    <div className = "NewsFeed">
      <h1>Reddit Homepage</h1>
      <SearchBar className="SearchBar" location="newsFeed" placeholder="Search the newsfeed" />
      <div className="page">
      {(state.pageNumber !== 1) ? <button type="button" onClick={handleClickBefore} >&#60;</button> : <p></p>}
        <p>Page {state.pageNumber}</p>
        <button type="button" onClick={handleClickAfter} >&#62;</button>
      </div>
      {state.posts.map((postTitle) => {
        return <PostTitle className="PostTitle"
                          key={postTitle.id}
                          title={postTitle.title}
                          subredditName={postTitle.subredditName}
                          image={postTitle.image}
                          votes={postTitle.votes}
                          postTitleClass={(state.isLoading) ? 'hidden' : 'PostTitle'} />
      })}
      <div className={(state.isLoading) ? 'hidden' : 'page'}>
      {(state.pageNumber !== 1) ? <button type="button" onClick={handleClickBefore} >&#60;</button> : <p></p>}
        <p>Page {state.pageNumber}</p>
        <button type="button" onClick={handleClickAfter} >&#62;</button>
      </div>
      <p className={(!state.isLoading) ? 'hidden' : 'loading'}>Loading...</p>
    </div>
  )
}