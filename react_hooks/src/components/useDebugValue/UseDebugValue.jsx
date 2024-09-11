import React, { useDebugValue, useEffect, useState } from 'react';

function UseDebugValue() {
    const[isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(()=> {
        function handleStatusChange() {
            setIsOnline(navigator.onLine)
        }

        window.addEventListener('online', handleStatusChange)
        window.addEventListener('offline', handleStatusChange)

        return () => {
            window.removeEventListener('online', handleStatusChange)
            window.removeEventListener('offline', handleStatusChange)
        }

    }, [])

    useDebugValue(isOnline ? 'online' : 'offline')

    console.log(isOnline);
  return (

   
    <div>
      <h1>Employee is {isOnline ? 'online' : 'offline'}</h1>
    </div>
  );
}

export default UseDebugValue;

// todo :  useDebugValue is a React hook that helps display extra information about your custom hooks in React DevTools.
// todo :   It’s used only for debugging purposes to make it easier to understand what’s going on inside a custom hook when you inspect it in the DevTools.
