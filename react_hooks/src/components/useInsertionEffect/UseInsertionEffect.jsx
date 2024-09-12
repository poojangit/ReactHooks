import React, { useInsertionEffect } from 'react';

function UseInsertionEffect() {

    useInsertionEffect(() => {
        // Create a style element
        const style = document.createElement('style')

        // Add some CSS rules dynamically

        style.textContent = `
        
            body {
                background-color: black;
            }
            h1{
                    color : pink;
                }
        `
        // The style is applied to the document
        document.head.appendChild(style)

        // Cleans up the style by removing it when the component unmounts.

        return () => {
            document.head.removeChild(style)
        }

    }, [])


    return (
        <div>
            <h1>Helloo</h1>
        </div>
    );
}

export default UseInsertionEffect;

// ^ introduced in react 18 
// ^ it is used to inject css styles into the dom before the browser paints or renders the UI