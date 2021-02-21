import React from 'react';

export const PostTitle = () => {

  return (
    <div className='PostTitle'>
      <p className="subreddit">r/subreddit</p>
      <h3>Title of post</h3>
      <p className="votes" >Number of up/downvotes</p>
    </div>
  )
}