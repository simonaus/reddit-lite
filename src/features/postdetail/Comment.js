import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Comment = ({ body, commentLevel, user, votes, replies }) => {

  const widthPercent = (100 - (commentLevel * 5)) + '%';
  const marginLeft = (commentLevel * 5) + '%';
  const marginTop = commentLevel ? '0px' : '10px';

  if (!replies || replies.length === 0) {
    replies = false;
  }

  // ignore undefined comments
  if (body !== undefined) {
  return (
    <div className={(commentLevel) ? "" : "commentContainer"}>
      <div className='Comment' style={{width: widthPercent, 'marginLeft': marginLeft, 'marginTop': marginTop}}>
        <p className="commentUser">{user}</p>
        <p className="commentVotes">{votes}</p>
        <ReactMarkdown className="commentBody" source={body} />
      </div>
      {(replies) ? replies.map( comment => {
        return <Comment key={comment.id}
                        body={comment.body}
                        commentLevel={comment.commentLevel}
                        user={'Posted by' + comment.user}
                        votes={comment.votes}
                        replies={comment.replies} />
      }) : ''}
    </div>
  )
  } else {
    return null;
  }
}