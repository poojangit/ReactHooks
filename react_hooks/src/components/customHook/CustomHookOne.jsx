import React, { useEffect, useState } from 'react';
import useLocalStorage from './useLocalStorage';

function CustomHookOne() {
  // const [name, setName] = useState(
  //   localStorage.getItem('username') ? localStorage.getItem('username') : ''
  // )

  // useEffect (() => {
  //   localStorage.setItem('userName' , name)
  // }, [name])

 const [name, setName] = useLocalStorage('username', '')
  return (
    <div>
      <h1>Custom hook testing</h1>
      <input
        type='text'
        placeholder='Enter your name'
        onChange={(e) => setName(e.target.value)}
      />
     <h2>Hello,{name}</h2>
    </div>
  );
}

export default CustomHookOne;
