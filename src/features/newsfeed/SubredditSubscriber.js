import React from 'react';
import { Subreddit } from './Subreddit';
import { SearchBar } from '../SearchBar';

export const SubredditSubscriber = () => {

  return(
    <div className = "NewsFeed">
      <h1>Subreddit Subscriber</h1>
      <SearchBar className="SearchBar" placeholder="Search the below by subreddit name" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
      <Subreddit className="PostTitle" />
    </div>
  )
}