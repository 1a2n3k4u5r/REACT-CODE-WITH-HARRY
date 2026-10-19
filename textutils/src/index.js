import React from 'react';  
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()


// ABOUT JSX
// In React.js, JSX stands for JavaScript XML. It is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript.
// In simple words, JSX allows you to write the UI of a React application in an easy and readable way.



// NOTE = IMPORTANT
// import React from 'react';	Imports React. This import is optional in many modern setups.
// import ReactDOM from 'react-dom/client';	Imports the React DOM APIs used to render components in the browser.
// import './index.css';	Loads the global CSS file.
// import App from './App';	Imports the main App component.
// import reportWebVitals from './reportWebVitals';	Imports an optional performance-measurement utility.
// document.getElementById('root')	Finds the HTML element with the ID root.
// ReactDOM.createRoot(...)	Creates a React root for rendering.
// root.render(...)	Tells React to render the component tree.
// <React.StrictMode>	Enables additional development checks.
// <App />	Renders your App component.
// reportWebVitals();	Calls the performance utility without a reporting callback; it does not send measurements anywhere by itself.



// RENDER 
// In React.js, rendering means displaying your React components and their content in the browser.

//</App> //tells React to render the component defined in App.js.

// Bootstrap is a free, open-source front-end framework used to create attractive, responsive websites quickly. It provides ready-made CSS styles and JavaScript components, so you don't have to design everything from scratch.

// In simple words, Bootstrap gives you pre-built designs for buttons, forms, navigation bars, cards, and other website elements.