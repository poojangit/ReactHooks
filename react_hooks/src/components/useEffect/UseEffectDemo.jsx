import React, { useEffect, useState } from 'react';

function UseEffectDemo() {
    const[count, setCount] = useState(0)

    useEffect(()=> {
      console.log("Compo rendered");
    }, [count])
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  );
}

export default UseEffectDemo;
