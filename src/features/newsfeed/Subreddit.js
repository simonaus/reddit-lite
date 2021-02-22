import React from 'react';

export const Subreddit = () => {

  return (
    <div className='Subreddit'>
      <div className='subredditDetail'>
        <h3>Title of Subreddit</h3>
        <p className="numOfSubscribers" >Number of subscribers</p>
      </div>
      <p className="add">+</p>
    </div>
  )
}