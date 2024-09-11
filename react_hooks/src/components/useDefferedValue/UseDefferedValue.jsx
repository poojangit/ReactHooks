import React, { useDeferredValue, useState } from 'react';
import SearchResults from './SearchResults';

function UseDefferedValue() {
    const [query, setQuery] = useState('')

    const deferredQuery = useDeferredValue(query)
    return (
        <div>
            <h1>Enter</h1>
            <input
                type='text'
                placeholder='search...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <SearchResults query = {deferredQuery} />
        </div>
    );
}

export default UseDefferedValue;

//^ useDeferredValue is a React hook that helps manage slow-rendering UI updates. 
//^ useDeferredValue tells React to "wait a bit" before updating that specific value, letting the app remain responsive while rendering the change more smoothly in the background.