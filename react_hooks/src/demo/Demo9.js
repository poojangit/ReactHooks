import React, { useEffect, useLayoutEffect } from 'react';

function Demo9() {
    useEffect(()=> {
        console.log("UseEffect");
    })
    useLayoutEffect(() => {
        console.log("uselayout");
    })
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default Demo9;
