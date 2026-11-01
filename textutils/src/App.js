

import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';


function App() {

  // State for Dark Mode
  const [mode, setMode] = useState('light');

  // State for Alert
  const [alert, setAlert] = useState(null);

  // Show Alert Function
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  // Toggle Dark Mode Function
  const toggleMode = () => {

    if (mode === 'light') {

      setMode('dark');

      document.body.style.background = '#042743';

      showAlert('Dark mode has been enabled', 'success');

      document.title = 'TextUtils - Dark Mode';

    } else {

      setMode('light');

      document.body.style.background = 'white';

      showAlert('Light mode has been enabled', 'success');

      document.title = 'TextUtils - Light Mode';
    }
  };


  // Return JSX
  return (

    <>

      {/* <Router> */}

        {/* Navbar Component */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />

        {/* Alert Component */}
        <Alert alert={alert} />

        <div className="container my-3">

          {/* React Router */}
          {/* <Routes> */}

            {/* About Page */}
            {/* <Route
              path="/about"
              element={<About />}
            /> */}

            {/* Home Page */}
            {/* <Route
              path="/"*/}
                <Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode} />
             {/* }
         /> */}

          {/* </Routes> */}

        </div>

      {/* // </Router> */}

    </>

  );

}

export default App;
  //allows other files to import the component.


// In React.js, App.js is the main component file where you usually write the user interface (UI) of your application. It brings together different components and decides what content should be displayed.
// Think of App.js as the main room of a house: other components are like individual rooms that you bring together inside it.
// 1. What is the work of App.js?
// - UI creation: Displays headings, buttons, images, forms, and other elements.
// - Component management: Combines multiple React components.
// - Data handling: Manages data and state when needed.
// - Event handling: Handles user actions, such as button clicks.
// - Layout: Organizes how different parts of your application appear.


// index.js
// Creates the React root and renders the App component.

// App.js
// Defines the main UI and combines other components.

// index.js = Where React starts and renders.
// App.js = What your application displays.

//In simple words, UI(User Interface) is everything you see on the screen when you open a website or app.

// The things which is inside the JSX elements are called UI.
// A heading: “Welcome!”
// A paragraph: “This is my first UI.”
// A button: “Click Me”

// JSX Fragement 
// In React, you generally need to return a single JSX element at the top level. A Fragment lets you group several elements into one return structure without adding an unnecessary parent element.

// my-3 is the margin in the Y-axis at the 3rem.


// App.js = Main component; brings other components together.
// Organizes the application components