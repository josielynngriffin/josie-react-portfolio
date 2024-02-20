import React from 'react';
import {Link} from 'react-router-dom';

function UxProjects({uxProjects}) {

    return (
        <section className="portfolio__projects">
                {uxProjects.map((uxProject, index) =>{
                    return(
                        <section className={index % 2 === 0 ? "portfolio__project--card-even" : "portfolio__project--card"} key={index}>
                            <div>
                                <img src={uxProject.image} alt={uxProject.imgAlt} className="portfolio__project-image"></img>
                            </div>
                            <div
                            className={index % 2 === 0 ? "portfolio__project--info-even" : "portfolio__project--info"} >
                                <h2 className="project__title">{uxProject.name}</h2>
                                <p className="portfolio__project--description">{uxProject.description}</p>
                                <ul className="project__skills--list">
                                    {uxProject.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex}>{skill}</li>
                                    ))}
                                </ul>
                                <section>
                                <Link to={uxProject.link} onClick={() => window.scrollTo(0, 0)}>
                                    <a className="portfolio-case__link">View Case Study</a>
                                </Link>
                                </section>
                               
                            </div>
                        </section>
                    )
                })}
            </section>
    );
        
    
}

export default UxProjects;