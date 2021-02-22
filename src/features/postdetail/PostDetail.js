import React from 'react';
import { Comment } from './Comment';

export const PostDetail = () => {

  return(
    <div className = "PostDetail">
      <h1>Title Title Title Title Title Title Title Title Title Title Title Title Title </h1>
      <p className="user">Username</p>
      <p className="body">Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body Body </p>
      <Comment commentLevel={0} />
      <Comment commentLevel={0} />
      <Comment commentLevel={0} />
      <Comment commentLevel={0} />
      <Comment commentLevel={0} />
      <Comment commentLevel={1} />
      <Comment commentLevel={2} />
      <Comment commentLevel={0} />
      <Comment commentLevel={0} />
    </div>
  )
}