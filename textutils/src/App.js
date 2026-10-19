import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {             
   return (                 
      <>
      {/* <Navbar title = "Textutils" aboutText = "About us"/> */}
      <Navbar/>
      </> 
  );
}

export default App;  //allows other files to import the component.


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