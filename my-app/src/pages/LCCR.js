import React from 'react';
import ProjectIntroCS from '../components/ProjectIntroCS';

function LCCR({ uxProjects, projectIndex}) {
    const project = uxProjects[projectIndex];
    return (
        <div className="case-study__wrapper">
            <ProjectIntroCS project={project}/>
            <div className="case-study__button-wrap case-study__padding">
                <a href="https://docs.google.com/presentation/d/1QcE_BvcXOFG2qXOvzdsLnifwmJxA5LwexuQ6hPGgb10/edit?usp=sharing" className="contactForm__button case-study__link">Case study slidedeck here<i class="fa-solid fa-arrow-right"></i></a>
                <a href="https://www.figma.com/proto/ofA43UYm4hiy4jShm0rHOm/nonprofit-group-4?type=design&node-id=766-5499&t=rH1uNP6z7fjXLDhU-1&scaling=min-zoom&page-id=434%3A7362&starting-point-node-id=766%3A5499&mode=design" className="contactForm__button case-study__link">Full prototype here<i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    );
}

export default LCCR;