import React from 'react';
import ProjectIntroCS from '../components/ProjectIntroCS';
import RightCS from '../components/RightCS';
import LeftCS from '../components/LeftCS';
import FullCS from '../components/FullCS'

import placeholder from '../assets/images/placeholder.jpg';
import test from '../assets/images/bloomer-project-preview.png';

function Bloomer({ uxProjects, projectIndex}) {
    const project = uxProjects[projectIndex];
    return (
        <div className="case-study__wrapper">
            <ProjectIntroCS project={project}/>
            <div className="case-study__button-wrap case-study__padding">
                <a href="https://docs.google.com/presentation/d/1Ub0w1h1oIiMQwqN8_zuHRa2mXgfmvA-WpwcSSFG2uNo/edit?usp=sharing" className="contactForm__button case-study__link">Case study slidedeck here<i class="fa-solid fa-arrow-right"></i></a>
                <a href="https://www.figma.com/proto/cUEp0424ReEasaQQHVjBpr/final-project?type=design&node-id=435-19607&t=mw4iZDE4rDUpP0M7-1&scaling=scale-down&page-id=103%3A335&starting-point-node-id=435%3A19607&mode=design" className="contactForm__button case-study__link">Full prototype here<i class="fa-solid fa-arrow-right"></i></a>
            </div>
            {/* 
            <h2 className="m-auto"><span class ="title__break">|</span> research and definition</h2>
            <RightCS header="Guiding Our Research" subtitle="Designing with plant owners in mind, new or experienced." textContent={"Descriptive text about proto-persona, decisions, and how it will guide the overall research and case study direction.\nConsectetur lorem donec massa sapien faucibus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant Elit scelerisque mauris"} imgLabel="Proto-Persona" img={test} imgDescription="Consectetur lorem donec massa sapien faucibus. Elit scelerisque mauris pellentesque."></RightCS>
            <LeftCS header="Guiding Our Research" subtitle="Designing with plant owners in mind, new or experienced." textContent={"Descriptive text about proto-persona, decisions, and how it will guide the overall research and case study direction.\nConsectetur lorem donec massa sapien faucibus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant Elit scelerisque mauris"} imgLabel="Proto-Persona" img={placeholder} imgDescription="Consectetur lorem donec massa sapien faucibus. Elit scelerisque mauris pellentesque."></LeftCS>
            <FullCS className="case-study__bg" header="Guiding Our Research" subtitle="Designing with plant owners in mind, new or experienced." textContent={"Descriptive text about proto-persona, decisions, and how it will guide the overall research and case study direction.\nConsectetur lorem donec massa sapien faucibus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant Elit scelerisque mauris"} listContent={"Descriptive text about proto-persona, decisions, and how it will guide the overall research and case study direction.\nConsectetur lorem donec massa sapien faucibus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant Elit scelerisque mauris"}></FullCS>
            <FullCS header="Guiding Our Research" subtitle="Designing with plant owners in mind, new or experienced." textContent={"Descriptive text about proto-persona, decisions, and how it will guide the overall research and case study direction.\nConsectetur lorem donec massa sapien faucibus. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant Elit scelerisque mauris"} imgLabel="Proto-Persona" img={placeholder} imgDescription="Consectetur lorem donec massa sapien faucibus. Elit scelerisque mauris pellentesque."></FullCS>*/} 
        </div>
    );
}

export default Bloomer;