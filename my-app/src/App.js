import React, { useState } from 'react';

//Component Imports
import Header from './components/Header.js';
import Landing from './components/Landing.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import Resume from './components/Resume.js';
import Somniary from './assets/images/somniary-landing.png';
import WeatherDash from './assets/images/weather-dashboard.png';
import Catterday from './assets/images/catterday-screenshot.png';
import Workday from './assets/images/workday-screenshot.png';
import Jate from './assets/images/jate-screenshot.png';
import Notes from './assets/images/notes-screenshot.png';
//Asset Imports
import './assets/styles/reset.css';
import './assets/styles/style.css';

function App() {
  const [page,setPage] = useState(<Landing/>);
  const changePageAbout = () => {
    setPage(<About/>);
  };
  const projects = [
    {
      name:"Somniary",
      githubLink:"https://github.com/Cat-Scratch-Feev/somniary",
      liveLink:"https://pacific-tor-76597-f8e2bab9d69c.herokuapp.com/landing",
      image:{Somniary},
      imgAlt:'Screenshot of Somniary web application showcasing the landing page, a dreamy landscape with a music player and Explore button.',
      description:"An application designed for users to log their dreams. Users may securely track their dreams in a private journal upon login with full user authentication and secure password management, submit them to a public collective if they wish, and catalog their dreams by type.",
      skills: ['Express.js', 'Handlebars.js', 'MySQL', 'JavaScript'],
    },
    {
      name:"Catterday",
      githubLink:"https://github.com/Cat-Scratch-Feev/Catterday",
      liveLink:"https://cat-scratch-feev.github.io/Catterday/",
      image:{Catterday},
      imgAlt:'Screenshot of Catterday web application showcasing the navigation, header, and two sample generated cat profiles with jokes.',
      description:"Inspired by the Useless Web, Catterday is a silly website that uses API to generate cat jokes and profiles. It's a bit of a parody of social media for entertainment only. ",
    },
    {
      name:"Just Another Text Editor",
      githubLink:"https://github.com/josielynngriffin/text-editor-pwa",
      liveLink:"https://powerful-refuge-08388-9a04dc55601c.herokuapp.com/",
      image:{Jate},
      imgAlt:'Screenshot of Just Another Text Editor web application showcasing the default editor screen with no input.',
      description:"This is a simple text editor that functions as a Progressive Web Application(PWA). It runs offline and is installable to your desktop.",
      skills: ['Node.js', 'Express.js', 'Webpack', 'IndexedDB']
    },
    {
      name:"Work Day Scheduler",
      githubLink:"https://github.com/josielynngriffin/workday-scheduler-challenge-05",
      liveLink:"https://josielynngriffin.github.io/workday-scheduler-challenge-05/index.html",
      image:{Workday},
      imgAlt:'Screenshot of Work Day Scheduler web application showcasing work hours, save buttons, and time blocks color-coded for different times of the day.',
      description:"A work day planning app that changes dynamically with the time of day based on past or present.",
      skills: ['JavaScript, JQuery, Bootstrap, DayJS'],
    },
    {
      name:"Weather Dashboard",
      githubLink:"https://github.com/josielynngriffin/weather-dash-challenge-06",
      liveLink:"https://josielynngriffin.github.io/weather-dash-challenge-06/index.html",
      image:{WeatherDash},
      imgAlt:"Screenshot of Weather Dashboard showcasing the application with Philadelphia's weather forecast searched and a sample search history in the side navigation.",
      description:"A weather dashboard that saves your search history and gives a five-day forecast by a user's searched location",
      skills: ['JavaScript, JQuery, Bootstrap, API'],
    },
    {
      name:"Note Taker",
      githubLink:"https://github.com/josielynngriffin/note-taker-challenge-11",
      liveLink:"https://boiling-lake-51643.herokuapp.com/notes",
      image:{Notes},
      imgAlt:'Screenshot of Note Taker showing a blank note entry and saved notes to the side.',
      description:"A simple user-friendly note taking application that saves and routes to your note entries.",
      skills: ['Express.js, JavaScript, CSS'],
    },
  ]
  const changePagePortfolio = () => {
    setPage(<Portfolio projects={projects}/>);
  };
  const changePageContact = () => {
    setPage(<Contact/>);
  };
  const changePageLanding = () => {
    setPage(<Landing/>);
  }
  const changePageResume = () => {
    setPage(<Resume/>);
  }
  
  return (
    <div className="portfolio-page__wrapper App" >
      <Header
        onAbout={changePageAbout}
        onPortfolio={changePagePortfolio}
        onContact={changePageContact}
        onLanding={changePageLanding}
        onResume={changePageResume}
      />
      {page}

      <Footer/>
    </div>
  );
}

export default App;
