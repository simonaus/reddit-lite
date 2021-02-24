import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export const Comment = ({ body, commentLevel, user, votes, replies, hidden}) => {

  const [hiddenChildren, setHiddenChildren] = useState(true)

  // if reply is hidden, it's children will be hidden once the reply is unhidden
  if (!hiddenChildren && hidden) {
    setHiddenChildren(true);
  }

  const repliesToggle = (hiddenChildren) ? 'Show replies' : 'Hide replies'

  const widthPercent = (100 - (commentLevel * 5)) + '%';
  const marginLeft = (commentLevel * 5) + '%';
  const marginTop = commentLevel ? '0px' : '10px';

  // only render child comment if there are comments in the replies array
  if (!replies || replies.length === 0) {
    replies = false;
  }

  //class depends on whether comment is top level, and whether it is currently hidden
  let commentContainerClass = null;
  if (!commentLevel) {
    commentContainerClass = 'commentContainer'
  }

  if (hidden) {
    commentContainerClass = 'hidden'
  }

  const handleClick = () => {setHiddenChildren(!hiddenChildren);}

  // ignore undefined comments
  if (body !== undefined) {
  return (
    <div className={commentContainerClass}>
      <div className='Comment' style={{width: widthPercent, 'marginLeft': marginLeft, 'marginTop': marginTop}}>
        <p className="commentUser">{user}</p>
        <p className="commentVotes">{votes}</p>
        <ReactMarkdown className="commentBody" source={body} />
      </div>
      <p style={{'marginLeft': marginLeft}} onClick={handleClick}>{(replies) ? repliesToggle : ''}</p>
      {(replies) ? replies.map( comment => {
        return <Comment key={comment.id}
                        body={comment.body}
                        commentLevel={comment.commentLevel}
                        user={'Posted by' + comment.user}
                        votes={comment.votes}
                        replies={comment.replies}
                        hidden={hiddenChildren} />
      }) : ''}
    </div>
  )
  } else {
    return null;
  }
}