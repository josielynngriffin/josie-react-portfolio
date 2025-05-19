import React from 'react';
import ProjectIntroCS from '../components/ProjectIntroCS';

function FWS({ uxProjects, projectIndex}) {
    const project = uxProjects[projectIndex];
    return (
        <div className="case-study__wrapper">
            <ProjectIntroCS project={project}/>
            <div className="case-study__button-wrap case-study__padding">
                <a href="https://docs.google.com/presentation/d/1muh4MYGVuEvbtmjKKr7yzY2b3Mq5bh1pWbHLTcWSPEU/edit?usp=sharing" className="contactForm__button case-study__link">Case study slidedeck here<i class="fa-solid fa-arrow-right"></i></a>
                <a href="https://www.figma.com/proto/dhkYwORFlVCOGwIiBVGL5R/government-redesign?type=design&node-id=617-13547&t=EFGea7fTl57O1fIt-1&scaling=min-zoom&page-id=207%3A290&starting-point-node-id=382%3A10964&show-proto-sidebar=1&mode=design" className="contactForm__button case-study__link">Full prototype here<i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    );
}

export default FWS;