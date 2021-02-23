import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const SearchBar = ({ placeholder, location }) => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector( state => state)

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!value) {
      return;
    }

    dispatch({
      type: 'newsFeed/changeIsSearching',
      payload: true,
    })

    if (location === 'subredditSubscriber') {

      dispatch({
        type: 'subredditSubscriber/changeSearchQuery',
        payload: value,
      })

    } else {

      dispatch({
        type: 'newsFeed/updateUrl',
        payload: state.newsFeed.url + '/search/.json?restrict_sr=1&q=' + value,
      })

    }

    setValue('');


  }

  return <form onSubmit={handleSubmit} className="SearchBar">
           <input value={value} placeholder={placeholder} onChange={handleChange}></input>
           <button type="submit" >Search</button>
         </form>

}