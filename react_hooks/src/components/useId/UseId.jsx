// ^ useId hook in React is used to generate a unique ID for elements in your component.

import React, { useId } from 'react';

function UseId() {
    const id = useId()
    console.log(id);
    return (
        <div>
            <h1>Enter your name here </h1>
            <label htmlFor={id}>Enter your Name : </label>
            <input
                type='text'
                id={id}
                onChange={(e) => e.target.value}
            />
            <h1></h1>
        </div>
    );
}

export default UseId;
