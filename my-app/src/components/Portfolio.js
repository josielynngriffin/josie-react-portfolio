import React from 'react';

function Portfolio({projects, Somniary}) {
    console.log(projects);
    console.log(projects[1].image)
    
    return (
        <div className="portfolio__wrapper">
            <h1 className="portfoliopage__title"><span className="title__break">|</span> my work</h1>
            <section className="portfolio__projects">
                {projects.map((project, index) =>{
                    return(
                        <section className={index % 2 === 0 ? "portfolio__project--card-even" : "portfolio__project--card"} key={index}>
                            <div class="project-img">
                                <img src={project.image} alt={project.imgAlt} className="portfolio__project-image"></img>
                            </div>
                            <div
                            className={index % 2 === 0 ? "portfolio__project--info-even" : "portfolio__project--info"} >
                                <h2 className="project__title">{project.name}</h2>
                                <p className="portfolio__project--description">{project.description}</p>
                                <ul className="project__skills--list">
                                    {project.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex}>{skill}</li>
                                    ))}
                                </ul>
                                <section>
                                    <a href={project.githubLink} target="_blank"><i className="portfolio__icon fa-brands fa-github"></i></a>
                                    <a href={project.liveLink} target="_blank"><i className="portfolio__icon fa fa-solid fa-arrow-up-right-from-square"></i></a> 
                                </section>
                               
                            </div>
                        </section>
                    )
                })}
            </section>
        </div>
    );
}
export default Portfolio;