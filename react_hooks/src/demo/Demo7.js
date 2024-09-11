import React, { useEffect, useState } from 'react';

function Demo7() {
    const [count, setCount] = useState(0)
    let timer;

    const handleClick = () => {
        if (timer)
            clearTimeout(timer)

        timer = setCount(count + 1)
        setTimeout(() => {
            alert(count)
        }, 3000)
    }

    return (
        <div>
            <h1>Helloo {count}</h1>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Demo7;
