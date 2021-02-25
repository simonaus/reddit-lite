import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from './iconfinder_feather_2561433icon.png';

export const Header = () => {

  const dispatch = useDispatch()

  const handleHomepageClick = () => {
  // if search mode is toggled on, toggle off, this will remove search parameter from url
  dispatch({
    type: 'newsFeed/changeIsSearching',
    payload: false,
  })

  dispatch({
    type: 'newsFeed/updateUrl',
    payload: 'https://www.reddit.com/'
  })

  dispatch({
    type: 'newsFeed/changeActiveSubreddit',
    payload: 'Homepage',
  })
  }

  const handleSubscriberClick = () => {
    // if search mode is toggled on, toggle off, this will remove search parameter from url
    dispatch({
      type: 'newsFeed/clearPosts',
      payload: [],
    })

    }



  return (
    <div className='Header'>

      <Link to='/reddit-lite' onClick={handleHomepageClick} className='icon'>
        <img src={logo} />
        <p className="iconTitle">reddit-lite</p>
      </Link>
      <div className="nav">
        <Link className="anchor" to='/reddit-lite'>
          <h2 className="link">Homepage</h2>
        </Link>
        <Link onClick={handleSubscriberClick} className="anchor" to='/subredditsubscriber'>
          <h2 className="link">Subreddit Subscriber</h2>
        </Link>
      </div>
    </div>
  )
}