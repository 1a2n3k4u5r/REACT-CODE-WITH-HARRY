import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const  handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    // text = "new text" // wrong way to change the state
    // setText = "new text" // correct way to change the state
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
       <div className="mb-3"> 
       <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
       <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


     </div>
     <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
     </div>
    </>
   )
 }




 // React Hooks
//  React Hooks are special functions in React that let you use features like state and lifecycle behavior inside functional components.
// In simple words, Hooks help your React components remember data, respond to user actions, and perform tasks when needed.

// Main React Hooks are
// 1) useState = Remembers changing data or useState() is a React Hook that allows a component to store data and update it when needed.
// 2)useEffect = Performs side effects
// 3)useRef = Keeps a reference or value between renders
// 4)useMemo = Remembers a calculated result
// 5)useCallback = Remembers a function


//useState Syntax = 
// import { useState } from "react";
// const [state, setState] = useState(initialValue);
//  useState(0) initializes the counter at 0.
// count stores the current counter value
// setCount(count + 1) requests an update to increase the value by one.
// React renders the component again, displaying the updated count.


// Textform.js contains the functionality and user interface for working with text or Displays the text area and button and manages text input and conversion.

// const handleUpClick = () => {}
// const — declares a variable that cannot be reassigned.
// handleUpClick — the variable stores a function.
// () — the function takes no parameters.



//const [text, setText] = useState('Enter text here2');

// const — declares the state variables.
// [text, setText] — uses array destructuring to get two values returned by useState.
// text — contains the current state value
// setText — updates the state value.
// useState() — the React Hook used to add state to a functional component.
// 'Enter text here2' — the initial value of the state.


// className="mb-3"	Adds a Bootstrap bottom margin utility class.
// className="form-control"	Applies Bootstrap form styling.
// onChange={handleOnChange}	Calls your function when the textarea value changes.
// value={text}	Displays the current state value inside the textarea.