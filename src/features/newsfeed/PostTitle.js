import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export const PostTitle = ({title, subredditName, votes, image, postTitleClass, permalink}) => {

  const state = useSelector( state => state.postDetail);
  const dispatch = useDispatch();

  const handleClick = () => {

    const url = 'https://www.reddit.com' + permalink + '.json';

    sessionStorage.setItem('url', url);

    dispatch({
      type: 'postDetail/updateUrl',
      payload: url,
    })
  }

  // only loads image if it is included in post
  const loadImage = () => {
    if (image) {
      return <img src={image} />
    }
  }

  return (

      <div onClick={handleClick} className={postTitleClass}>
        <Link to='/postdetail'>
          <p className="subreddit">{subredditName}</p>
          <h3>{title}</h3>
          <div>
            {loadImage()}
          </div>
          <p className="votes" >Votes: {votes}</p>
        </Link>
      </div>

  )
}