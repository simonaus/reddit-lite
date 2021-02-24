import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export const SubredditTitle = ({displayName, urlName}) => {

  const dispatch = useDispatch();

  const handleClick = () => {

    // if search mode is toggled on, toggle off, this will remove search parameter from url
    dispatch({
      type: 'newsFeed/changeIsSearching',
      payload: false,
    })

    dispatch({
      type: 'newsFeed/updateUrl',
      payload: 'https://www.reddit.com/' + urlName
    })

    dispatch({
      type: 'newsFeed/changeActiveSubreddit',
      payload: displayName,
    })

  }

  return <Link className="anchor" to='/'>
           <p onClick={handleClick} className="SubredditTitle">{displayName}</p>
         </Link>
}