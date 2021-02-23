import React, { useState } from 'react';

export const SearchBar = ({ placeholder }) => {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return <input value={value} placeholder={placeholder} onChange={handleChange} ></input>
}