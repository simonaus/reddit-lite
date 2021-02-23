import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

  const handleClick = () => {
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

  return (
    <div className={subredditClass}>
      <div className='subredditDetail'>
        <h3>{name}</h3>
        <p className="numOfSubscribers" >Total subscribers: {numOfSubscribers}</p>
      </div>
      <p className="add" onClick={handleClick} >{(hasSubscribed) ? '-' : '+'}</p>
    </div>
  )
}