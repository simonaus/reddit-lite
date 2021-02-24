import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Comment = ({ body, commentLevel, user, votes, replies }) => {

  const widthPercent = (80 - (commentLevel * 10)) + '%';
  const marginLeft = (commentLevel * 10) + '%';
  const marginTop = commentLevel ? '0px' : '10px';

  // ignore undefined comments
  if (body !== undefined) {
  return (
    <div className='Comment' style={{width: widthPercent, 'marginLeft': marginLeft, 'marginTop': marginTop}}>
      <p className="commentUser">{user}</p>
      <p className="commentVotes">{votes}</p>
      <ReactMarkdown className="commentBody" source={body} />
    </div>
  )
  } else {
    return null;
  }
}