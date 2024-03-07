import React from 'react';
import ProjectIntroCS from '../components/ProjectIntroCS';

function Bloomer({ uxProjects, projectIndex}) {
    const project = uxProjects[projectIndex];
    return (
        <div className="case-study__wrapper">
            <ProjectIntroCS project={project}/>
        </div>
    );
}

export default Bloomer;