// !Acccessing the dom elements

import React, { useRef } from 'react';

function UseRefTwo() {

    const inputEle = useRef()
    console.log(inputEle);

    const buttonClicked = () => {
        console.log(inputEle.current);
        inputEle.current.style.background = 'green'
    }
  return (
    <div>
      <h1>Acccessing the Dom elements</h1>
      <input type='text' ref={inputEle}></input>
      <button onClick={buttonClicked}>Click Here</button>
    </div>
  );
}

export default UseRefTwo;

// ^ useRef is used to access the DOM and store the mutable value
