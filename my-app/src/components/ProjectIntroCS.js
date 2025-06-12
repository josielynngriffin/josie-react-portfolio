import React from 'react';

function ProjectIntroCS({project}) {
    
    return (
        <div className="projectIntroCS__wrapper CS-component__wrapper case-study__padding">
            <section className="projectIntro--text-wrap">
                <h1 className="caseStudy__title">{project.csName}</h1>
                <ul className="project__skills--list">
                    {project.skills.map((skill, skillIndex) => (
                        <li className="label-text" key={skillIndex}>{skill}</li>
                    ))}
                </ul>
                <p className="case-study-text">{project.description}</p>
                <p className="label-text">Design Role</p>
                <p>{project.roles}</p>
                <p className="label-text">Timeline</p>
                <p>{project.timeline}</p>
                <p className="label-text">Tools</p>
                <p>{project.tools}</p>
            </section>
            <section className="projectIntro--image-wrap">
                <img  className="projectIntro--image-main case-study-image__radius" src={project.image} alt={project.imgAlt}></img>
            </section>
        </div>
    );
}

export default ProjectIntroCS;