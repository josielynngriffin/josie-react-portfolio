import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

//Page Imports
import Landing from './pages/Landing.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Portfolio from './pages/Portfolio.js';
import UXPortfolio from './pages/UXPortfolio.js';
import Resume from './pages/Resume.js';
import Cohabitat from './pages/Cohabitat.js';
import LCCR from './pages/LCCR.js';
import AboutUs from './pages/AboutUs.js';
import Checkout from './pages/Checkout.js';

//Component Imports
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ScrollButton from './components/ScrollButton.js';

//Image Imports
import Somniary from './assets/images/somniary-landing.png';
import WeatherDash from './assets/images/weather-dashboard.png';
import Catterday from './assets/images/catterday-screenshot.png';
import Workday from './assets/images/workday-screenshot.png';
import Jate from './assets/images/jate-screenshot.png';
import Notes from './assets/images/notes-screenshot.png';
import Feev from './assets/images/feev-screenshot.png';
import LCCRImg from './assets/images/lccr-project-preview.png';
import AboutUsImg from './assets/images/aboutus-preview.png';
import CohabitatImg from './assets/images/cohabitat-preview-1.png';
import CheckoutImg from './assets/images/checkout-project-preview.png';

//Asset Imports
import './assets/styles/reset.css';
import './assets/styles/style.css';

function App() {
 
  const projects = [
    {
      name:"Somniary",
      githubLink:"https://github.com/Cat-Scratch-Feev/somniary",
      liveLink:"https://pacific-tor-76597-f8e2bab9d69c.herokuapp.com/landing",
      image:Somniary,
      imgAlt:'Screenshot of Somniary web application showcasing the landing page, a dreamy landscape with a music player and Explore button.',
      description:"An application designed for users to log their dreams. Users may securely track their dreams in a private journal upon login with full user authentication and secure password management, submit them to a public collective if they wish, and catalog their dreams by type.",
      skills: ['Express.js', 'Handlebars.js', 'MySQL', 'JavaScript', 'Saas Product Design'],
    },
    {
      name:"feev.io",
      githubLink:"https://github.com/Cat-Scratch-Feev/trivia-feev",
      liveLink:"https://feevio-9028928ec5ce.herokuapp.com/",
      image:Feev,
      imgAlt:'Screenshot of feev.io web application showcasing the landing page, sign up and log in links with informational graphics.',
      description:"A trivia application, elevated with a visually fun and responsive interface. Users can sign in and compete in a broad range of categories to earn a spot on feev.io's leaderboard!",
      skills: ['React.js', 'GraphQL', 'MongoDB', 'Mongoose', 'JavaScript', 'UI Design'],
    },
    {
      name:"Catterday",
      githubLink:"https://github.com/Cat-Scratch-Feev/Catterday",
      liveLink:"https://cat-scratch-feev.github.io/Catterday/",
      image:Catterday,
      imgAlt:'Screenshot of Catterday web application showcasing the navigation, header, and two sample generated cat profiles with jokes.',
      description:"Inspired by the Useless Web, Catterday is a silly website that uses API to generate cat jokes and profiles. It's a bit of a parody of social media for entertainment only. ",
      skills: ['HTML', 'CSS', 'JavaScript', 'APIs']
    },
    {
      name:"Just Another Text Editor",
      githubLink:"https://github.com/josielynngriffin/text-editor-pwa",
      liveLink:"https://powerful-refuge-08388-9a04dc55601c.herokuapp.com/",
      image:Jate,
      imgAlt:'Screenshot of Just Another Text Editor web application showcasing the default editor screen with no input.',
      description:"This is a simple text editor that functions as a Progressive Web Application (PWA). It runs offline and is installable to your desktop.",
      skills: ['Node.js', 'Express.js', 'Webpack', 'IndexedDB']
    },
    {
      name:"Work Day Scheduler",
      githubLink:"https://github.com/josielynngriffin/workday-scheduler-challenge-05",
      liveLink:"https://josielynngriffin.github.io/workday-scheduler-challenge-05/index.html",
      image:Workday,
      imgAlt:'Screenshot of Work Day Scheduler web application showcasing work hours, save buttons, and time blocks color-coded for different times of the day.',
      description:"A work day planning app that changes dynamically with the time of day based on past or present.",
      skills: ['JavaScript', 'JQuery', 'Bootstrap', 'DayJS'],
    },
    {
      name:"Weather Dashboard",
      githubLink:"https://github.com/josielynngriffin/weather-dash-challenge-06",
      liveLink:"https://josielynngriffin.github.io/weather-dash-challenge-06/index.html",
      image:WeatherDash,
      imgAlt:"Screenshot of Weather Dashboard showcasing the application with Philadelphia's weather forecast searched and a sample search history in the side navigation.",
      description:"A weather dashboard that saves your search history and gives a five-day forecast by a user's searched location",
      skills: ['JavaScript', 'JQuery', 'Bootstrap', 'API'],
    },
    {
      name:"Note Taker",
      githubLink:"https://github.com/josielynngriffin/note-taker-challenge-11",
      liveLink:"https://boiling-lake-51643.herokuapp.com/notes",
      image:Notes,
      imgAlt:'Screenshot of Note Taker showing a blank note entry and saved notes to the side.',
      description:"A simple user-friendly note taking application that saves and routes to your note entries.",
      skills: ['Express.js', 'JavaScript', 'CSS'],
    },
  ];

  const uxProjects = [
    {
      name:"The Restaurant Store Checkout - Redesigning to Drive Higher Conversion",
      csName:"Checkout Flow Redesign",
      roles: "UI Designer",
      timeline: "Q1 2025",
      link:"/checkout",
      image:CheckoutImg,
      imgAlt:"Mockup of The Restaurant Store's completed About Us page redesign on a green background.",
      description:"Revamping The Restaurant Store's checkout flow to enhance usability, increase flexibility, and drive higher conversion through a more intuitive, user-focused experience.",
      skills: ['Product Design', 'Prototyping', 'User Flows', 'B2B E-Commerce'],
      tools: 'Figma, Miro, Google Analytics, Microsoft Clarity, Lyssna',
    },
    {
      name:"The Restaurant Store About Us Page - Reimagining Customer Clarity",
      csName:"About Us Page Redesign",
      roles: "UX Researcher & UI Designer",
      timeline: "Q3 2024",
      link:"/aboutus",
      image:AboutUsImg,
      imgAlt:"Mockup of The Restaurant Store's completed About Us page redesign on a green background.",
      description:"Revitalizing The Restaurant Store's About Us page to improve shopping clarity, address user needs, and enhance customer trust.",
      skills: ['Brand Strategy', 'UI Design', 'B2B E-Commerce', 'User Research'],
      tools: 'Figma, Miro, Google Analytics, Microsoft Clarity',
    },
    {
      name:"Cohabitat - App Design Enabling Adult Roommates to Live In Harmony",
      csName:"Cohabitat",
      roles: "UX Researcher & UI Designer",
      timeline: "3 weeks",
      link:"/cohabitat",
      image:CohabitatImg,
      imgAlt:'Mockup of Cohabitat, showcasing various mobile mockups of a roommate management app on an orange background.',
      description:"Find harmony with your roommates with Cohabitat! Divvy up tasks, share expenses, and get rewarded for responsibility by creating a joyful home.",
      skills: ['UI Design', 'User Testing', 'Product Design','UX Research', 'Onboarding'],
      tools: 'Figma, Trello, Miro, Zoom',
    },
    {
      name:"Loving Care Cat Rescue - Nonprofit Redesign",
      csName: "Loving Care Cat Rescue Redesign",
      roles: "UX Researcher & UI Designer",
      timeline: "3 weeks",
      link:"/lccr",
      image:LCCRImg,
      imgAlt:'Mockup of the Loving Care Cat Rescue design across a phone and laptop on a lavender background.',
      description:"Help a local cat rescue rebuild their brand identity, create a dynamic donation experience, and transform usability barriers into an engaging design.",
      skills: ['UX Research', 'Branding Identity', 'Information Architecture'],
      tools: 'Figma, Trello, Miro, Zoom',
    }
  ];


  return (
    <HashRouter>
      <div className="portfolio-page__wrapper App" >
        <Header/>
        <Routes>
          <Route path='/' element={<Landing uxProjects={uxProjects}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/ux-ui' element={<UXPortfolio uxProjects={uxProjects}/>}/>
          <Route path='/checkout' element={<Checkout uxProjects={uxProjects} projectIndex={0}/>}/> 
          <Route path='/aboutus' element={<AboutUs uxProjects={uxProjects} projectIndex={1}/>}/>
          <Route path='/cohabitat' element={<Cohabitat uxProjects={uxProjects} projectIndex={2}/>}/> 
          <Route path='/lccr' element={<LCCR uxProjects={uxProjects} projectIndex={3}/>}/>
          <Route path='/web-dev' element={<Portfolio projects={projects} Somniary={Somniary}/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
        <ScrollButton/>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
