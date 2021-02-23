import React from 'react';
import { SubredditTitle } from './SubredditTitle';
import { useSelector } from 'react-redux';

export const SubredditList = () => {

  const state = useSelector( state => state.subredditList)
  return(
    <div className='SubredditList'>
      <p className='subredditListTitle'>Check out these subreddits</p>
      {state.subreddits.map( subreddit => {
        return <SubredditTitle key={subreddit.displayName}
                               displayName={subreddit.displayName}
                               urlName={subreddit.urlName}
                               />
      })}
      <p className="addSubreddit">Or add your own using the subreddit subscriber</p>
    </div>
  )
}