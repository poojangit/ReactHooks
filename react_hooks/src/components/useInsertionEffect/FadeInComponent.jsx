import React, { useDeferredValue, useInsertionEffect, useRef, useState } from 'react';

function FadeInComponent() {
    const elementRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useInsertionEffect(()=> {
        const style = document.createElement('style')
        style.textContent = `
           @keyframes fadeIn {
           
           from {
           opacity : 0
           }

           to {useDeferredValue
            opacity: 1

           }
           }
           .fade-in {
           animation : fadeIn 1.5s ease-in-out
           
           }
        `
        document.head.appendChild(style)
    })
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => setVisible((prev) => !prev)}> {visible ? "Hide " : "Show "} the Reward</button>
            {
                visible && 
                (
                    <div ref={elementRef} className='fade-in'>
                        <h2>You have won the bonus!!!!!</h2>
                    </div>
                )
            } 
        </div>
    );
}

export default FadeInComponent;
