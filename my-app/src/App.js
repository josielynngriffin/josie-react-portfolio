import React, { useState } from 'react';
//import './App.css';
//Component Imports
import Header from './components/Header.js';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Footer from './components/Footer.js';

//Asset Imports
import headshot from './assets/images/darkmode.png';
import './assets/styles/style.css';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Landing headshot={headshot}/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
