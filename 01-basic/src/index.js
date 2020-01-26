// Import the libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React.Component
const App = () => {
    const buttonText = "Click me!"
    return (
        <div>
            <label className="label" htmlFor="name"> Enter name: </label>
            <input id="name" type="text" />
            <button
                style={{ backgroundColor: 'blue', color: 'white', border: 0, padding: '4px 10px' }
                }> {buttonText}  </button>
        </div>
    )
}

// Show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);