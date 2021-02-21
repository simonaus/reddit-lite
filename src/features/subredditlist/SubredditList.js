import React from 'react';
import { SubredditTitle } from './SubredditTitle';

export const SubredditList = () => {

  return(
    <div className='SubredditList'>
      <p className='subredditListTitle'>Check out these subreddits</p>
      <SubredditTitle />
      <SubredditTitle />
      <SubredditTitle />
      <p className="addSubreddit">Or add your own using the subreddit subscriber</p>
    </div>
  )
}