import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <div className='Header'>
      <div className='icon'>
        <img src="iconfinder_feather_2561433icon.png" />
        <p className="iconTitle">reddit-lite</p>
      </div>
      <div className="nav">
        <Link to='/'>
          <h2 className="link">Homepage</h2>
        </Link>
        <Link to='/subredditsubscriber'>
          <h2 className="link">Subreddit Subscriber</h2>
        </Link>
      </div>
    </div>
  )
}