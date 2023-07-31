import React, { useState } from 'react';
//import './App.css';
//Component Imports
import Header from './components/Header.js';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';

//Asset Imports
//import headshot from './assets/images/darkmode.png';
import './assets/styles/style.css';

function App() {
  const [page,setPage] = useState(<Landing/>);
  const changePageAbout = () => {
    setPage(<About/>);
  };
  const changePagePortfolio = () => {
    setPage(<Portfolio/>);
  };
  const changePageContact = () => {
    setPage(<Contact/>);
  };
  const changePageLanding = () => {
    setPage(<Landing/>);
  }
  return (
    <div className="App">
      <Header
        onAbout={changePageAbout}
        onPortfolio={changePagePortfolio}
        onContact={changePageContact}
        onLanding={changePageLanding}
      />
      {page}

      <Footer/>
    </div>
  );
}

export default App;
