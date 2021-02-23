import React, { useEffect } from 'react';
import { Subreddit } from './Subreddit';
import { SearchBar } from '../SearchBar';
import { useSelector, useDispatch } from 'react-redux';

export const SubredditSubscriber = () => {

  //subscribe to store and obtain relevant slice
  let state = useSelector( state => state.subredditSubscriber)
  const dispatch= useDispatch();

  //fetch newsfeed data from reddit. get from either homepage or selected subreddit
  const fetchSubreddits = async (query = '') => {

    if (!state.searchQuery) {
      return
    }
    window.scrollTo(0, 0);

    dispatch({
      type: 'subredditSubscriber/changeIsLoading',
      payload: true,
    })

    let response;
    response = await fetch('https://www.reddit.com/search/.json?q=' + state.searchQuery + '&type=sr%2Cuser' + query);
    const responseJSON = await response.json();

    console.log('https://www.reddit.com/search/.json?q=' + state.searchQuery + '&type=sr%2Cuser' + query)
    console.log(responseJSON);
    console.log(state);

    const subreddits = responseJSON.data.children;
    const before = responseJSON.data.before;
    const after = responseJSON.data.after;

    const payload = {subreddits: [], after: after, before: before};

    let counter = 0;

    for (let subreddit of subreddits) {

      //if name does not exist, the search result is a user and should not be added to array
      if(subreddit. data.display_name_prefixed) {
        payload.subreddits[counter] = {
          name: subreddit.data.display_name_prefixed,
          numOfSubscribers: subreddit.data.subscribers,
        }
      } else {
        counter--
      }

      //some subreddits are private so num of subscribers not available

      if (!subreddit.data.subscribers) {
        payload.subreddits[counter].numOfSubscribers = 'Private'
      }

      counter++;
    }

    dispatch({
      type: 'subredditSubscriber/changeIsLoading',
      payload: false,
    })

    // dispatch action to reload
    dispatch({
      type: 'subredditSubscriber/loadSubreddits',
      payload: payload,
    });

  }

  //only load results on mount or if search has changed
  useEffect(() => {
    dispatch({
      type: 'subredditSubscriber/changePageNumber',
      payload: 1,
    });
    fetchSubreddits();
  }, [state.searchQuery]);

  const handleClickAfter = () => {
    if (state.isLoading || state.searchQuery === '') {
      return;
    }


    fetchSubreddits('&after=' + state.after + '&count=' + (state.pageNumber * 25));
    dispatch({
      type: 'subredditSubscriber/changePageNumber',
      payload: state.pageNumber + 1,
    });
  }

  const handleClickBefore = () => {
    if (state.isLoading) {
      return;
    }

    fetchSubreddits('&before=' + state.before + '&count=' + ((state.pageNumber - 1)  * 25));

    dispatch({
      type: 'subredditSubscriber/changePageNumber',
      payload: state.pageNumber - 1,
    });
  }

  return(
    <div className={(state.isToggle) ? "NewsFeed toggleOn" : "NewsFeed"}>
      <h1>Subreddit Subscriber</h1>
      <SearchBar className="SearchBar" location='subredditSubscriber' placeholder="Search for a subreddit" />
      <div className={(!state.searchQuery || !state.after) ? 'hidden' : 'page'}>
      {(state.pageNumber !== 1) ? <button type="button" onClick={handleClickBefore} >&#60;</button> : <p></p>}
        <p>Page {state.pageNumber}</p>
        <button type="button" onClick={handleClickAfter} >&#62;</button>
      </div>
      {state.subreddits.map( subreddit => {
        return <Subreddit className="PostTitle"
                          key={subreddit.name}
                          name={subreddit.name}
                          numOfSubscribers={subreddit.numOfSubscribers}
                          subredditClass={(state.isLoading) ? 'hidden' : 'Subreddit'}
        />
      })}
      <div className={(state.isLoading || !state.searchQuery || !state.after) ? 'hidden' : 'page'}>
      {(state.pageNumber !== 1) ? <button type="button" onClick={handleClickBefore} >&#60;</button> : <p></p>}
        <p>Page {state.pageNumber}</p>
        <button type="button" onClick={handleClickAfter} >&#62;</button>
      </div>
      <p className={(!state.isLoading) ? 'hidden' : 'loading'}>Loading...</p>
    </div>
  )
}