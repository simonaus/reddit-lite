import React from 'react';
import { PostTitle } from './PostTitle';
import { SearchBar } from '../SearchBar';

export const SubredditSubscriber = () => {

  return(
    <div className = "NewsFeed">
      <h1>Reddit Homepage</h1>
      <SearchBar className="SearchBar" />
      <PostTitle className="PostTitle" />
      <PostTitle className="PostTitle" />
      <PostTitle className="PostTitle" />
      <PostTitle className="PostTitle" />
      <PostTitle className="PostTitle" />
      <PostTitle className="PostTitle" />
      <PostTitle className="PostTitle" />
      <PostTitle className="PostTitle" />
      <PostTitle className="PostTitle" />
      <PostTitle className="PostTitle" />
    </div>
  )
}