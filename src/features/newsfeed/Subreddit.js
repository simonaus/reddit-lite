import React from 'react';

export const Subreddit = ({name, numOfSubscribers, subredditClass}) => {


  return (
    <div className={subredditClass}>
      <div className='subredditDetail'>
        <h3>{name}</h3>
        <p className="numOfSubscribers" >Total subscribers: {numOfSubscribers}</p>
      </div>
      <p className="add">+</p>
    </div>
  )
}