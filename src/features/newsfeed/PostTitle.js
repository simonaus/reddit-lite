import React from 'react';

export const PostTitle = ({title, subredditName, votes, image}) => {

  return (
    <div className='PostTitle'>
      <p className="subreddit">{subredditName}</p>
      <h3>{title}</h3>
      <img src={image} />
      <p className="votes" >Votes: {votes}</p>
    </div>
  )
}