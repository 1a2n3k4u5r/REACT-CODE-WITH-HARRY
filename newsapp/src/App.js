
import './App.css';
  import React, { Component } from 'react';
 import NavBar from './components/NavBar';
  import News from './components/News';
  
  export default class App extends Component {
    render() {
      return (
        <div>
          <NavBar/>
          <News/>
        </div>
      )
    }
  }
  

// App.js entry point hota hai or iska andar componenet hota hai.
// index.js app ko import karta hai or index.js ma jo app hota usko index.html ka andar dalta hai