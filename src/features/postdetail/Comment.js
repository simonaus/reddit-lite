import React from 'react';

export const Comment = ({ commentLevel }) => {

  const widthPercent = (80 - (commentLevel * 10)) + '%';
  const paddingPercent = (commentLevel * 10) + '%';
  const topMargin = commentLevel ? '0px' : '10px';

  return (
    <div className='Comment' style={{width: widthPercent, 'marginLeft': paddingPercent, 'marginTop': topMargin}}>
      <p className="commentUser">username</p>
      <p className="commentVotes">574</p>
      <p className="commentBody">body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body </p>
    </div>
  )
}