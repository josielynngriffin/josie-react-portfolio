import React from 'react';
import WebDevProjects from '../components/WebDevProjects';

function Portfolio({projects}) {
    console.log(projects);
    console.log(projects[1].image)
    
    return (
        <div className="portfolio__wrapper">
            <h1 className="portfoliopage__title"><span className="title__break">|</span> my web dev projects</h1>
            <WebDevProjects projects={projects}/>
        </div>
    );
}
export default Portfolio;