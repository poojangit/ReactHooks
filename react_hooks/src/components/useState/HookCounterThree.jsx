// ! UseState with objects

import React, { useState } from 'react';

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: '' })
    return (
        <div>
            <h1>UseState with Object</h1>
            <input
                type='text'
                value={name.firstName}
                onChange={e => setName({...name, firstName : e.target.value})}
            />
            <input
                type='text'
                value={name.lastName}
                onChange={(e) => setName({...name, lastName: e.target.value})}
            />
            <h4>My First Name is {name.firstName}</h4>
            <h4>My Last Name is {name.lastName}</h4>
        </div>
    );
}

export default HookCounterThree;
