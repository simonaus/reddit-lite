import React from 'react';

export const PostTitle = ({title, subredditName, votes, image, postTitleClass}) => {

  return (
    <div className={postTitleClass}>
      <p className="subreddit">{subredditName}</p>
      <h3>{title}</h3>
      <img src={image} />
      <p className="votes" >Votes: {votes}</p>
    </div>
  )
}