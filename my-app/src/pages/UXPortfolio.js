import React from 'react';
import UxProjects from '../components/UxProjects';

function UXPortfolio({uxProjects}) {
    console.log(uxProjects)
    return (
        <div className="portfolio__wrapper">
            <h1 className="portfoliopage__title"><span className="title__break">|</span> my ux/ui case studies</h1>
            <UxProjects uxProjects={uxProjects}/>
        </div>
    );
}

export default UXPortfolio;