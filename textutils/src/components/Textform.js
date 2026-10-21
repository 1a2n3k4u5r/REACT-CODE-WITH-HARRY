import React, {useState} from 'react'



export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked")
        setText("You have clicked on handleUpClick")
    }

    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here2');
    // text = "new text" // wrong way to change the state
    // setText = "new text" // correct way to change the state
  return (
    <div>
        <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary" onclick={handleUpClick}>Convert to Uppercase</button>
     </div>
    
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