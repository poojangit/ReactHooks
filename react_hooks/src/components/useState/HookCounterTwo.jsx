// ! Use state with previous state

import React, { useState } from 'react';

function HookCounterTwo() {
    const [count, setCount] = useState(0)

    const IncrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h1> UseState with previous state</h1>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={IncrementFive}>Increment to 5</button>
        </div>
    );
}

export default HookCounterTwo;
