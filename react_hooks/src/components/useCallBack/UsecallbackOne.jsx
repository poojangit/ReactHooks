import React, { useCallback, useState } from 'react';
import Header from './Header';

function UseCallbackOne() {
    const [count, setCount] = useState(0);

    const newFunction = useCallback(() => {}, [count])
  return (
    <div>
      <h1>UseContext</h1>
      <Header newFunction = {newFunction}></Header>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(prev => prev+1)}>Click</button>
    </div>
  );
}

export default UseCallbackOne;
