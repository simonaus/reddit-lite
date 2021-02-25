import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const Subreddit = ({name, numOfSubscribers, subredditClass}) => {

  const state = useSelector(state => state.subredditList);
  const dispatch = useDispatch();

  let hasSubscribed = false;

  // check if this subreddit is already on subreddit list
  for (let subreddit of state.subreddits) {
    if (subreddit.urlName === name) {
      hasSubscribed = true;
    }
  }

  const handleAddClick = () => {
    if (hasSubscribed) {
      dispatch({
        type: 'subredditList/removeSubreddit',
        payload: name,
      });
    } else {
      dispatch({
        type: 'subredditList/addSubreddit',
        payload: {urlName: name, displayName: name, key: name}
      });
    }
  }

  const handleClick = () => {

    // if search mode is toggled on, toggle off, this will remove search parameter from url
    dispatch({
      type: 'newsFeed/changeIsSearching',
      payload: false,
    })

    dispatch({
      type: 'newsFeed/updateUrl',
      payload: 'https://www.reddit.com/' + name
    })

    dispatch({
      type: 'newsFeed/changeActiveSubreddit',
      payload: name,
    })

  }

  return (

      <div className={subredditClass}>
      <Link className={'subredditLink'} to='/'>
        <div onClick={handleClick} className='subredditDetail'>
          <h3>{name}</h3>
          <p className="numOfSubscribers" >Total subscribers: {numOfSubscribers}</p>
        </div>
        </Link>
        <p className={(hasSubscribed) ? 'remove' : 'add'} onClick={handleAddClick} >{(hasSubscribed) ? '-' : '+'}</p>
      </div>

  )
}