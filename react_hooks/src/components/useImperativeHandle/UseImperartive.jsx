import React from 'react';

function UseImperartive() {
    
  return (
    <div>
      <input >
      
      </input>
    </div>
  );
}

export default UseImperartive;

//^ useImperativeHandle is a React hook that lets a parent component control specific actions or methods of a child component by using a ref
// ^Without useImperativeHandle, the parent could only access the DOM element directly, but not custom methods
// ^ With useImperativeHandle, you can expose exactly what the parent should be able to do (e.g., methods like focus, reset, etc.).