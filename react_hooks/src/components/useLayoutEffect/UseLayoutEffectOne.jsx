import React, { useEffect, useLayoutEffect } from 'react';

function UseLayoutEffectOne() {

  useEffect (() => {
    console.log("Message from useEffect");
  }, [])
  useLayoutEffect (() => {
    console.log('Message from useLayoutEffect');
  }, [])
  return (
    <div>
      <h2>UseLayout test message</h2>
    </div>
  );
}

export default UseLayoutEffectOne;
