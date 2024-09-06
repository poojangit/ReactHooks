import React, { useRef } from 'react';
import useLocalStorage from '../customHook/useLocalStorage';

function UseRefThree() {

    const [name, setName] = useLocalStorage('userName', '')
    const inputRef = useRef(null)

    const handleClick =() => {
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>Focusing the input with useRef</h1>
            <input
                type='text'
                placeholder='Focus here'
                ref={inputRef}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleClick}>Click here to enter</button>
        </div>
    );
}

export default UseRefThree;

