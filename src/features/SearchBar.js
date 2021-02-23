import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const SearchBar = ({ placeholder }) => {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector( state => state.newsFeed)

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(value);
    dispatch({
      type: 'newsFeed/changeIsSearching',
      payload: true,
    })

    dispatch({
      type: 'newsFeed/updateUrl',
      payload: state.url + '/search/.json?restrict_sr=1&q=' + value,
    })

    setValue('');


  }

  return <form onSubmit={handleSubmit} className="SearchBar">
           <input value={value} placeholder={placeholder} onChange={handleChange}></input>
           <button type="submit" >Search</button>
         </form>

}