import React from 'react';
import { PostTitle } from './PostTitle';
import { SearchBar } from '../SearchBar';

export const NewsFeed = () => {

  return(
    <div className = "NewsFeed">
      <h1>Reddit Homepage</h1>
      <SearchBar className="SearchBar" placeholder="Search the below by post title" />
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