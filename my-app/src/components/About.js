import React from 'react';

function About() {
    const skills=['JavaScript', 'UX/UI Design', 'MongoDB', 'Accessibility', 'React', 'MySQL'
    ]
    return (
        <div className="about-page__wrapper">
            <section className="about__wrapper">
                <h1 className="about__title"><span className="title__break">|</span> more about me</h1>
                <p className="about__blurb">i turned to web dev because i love making things! i'm well versed in collaborating within team environments to bring projects to life and can quickly adapt to new technologies.</p> 
                <p className="about__blurb">outside of development, i love to spend time in the kitchen, get outdoors, and read! i am always trying to learn new things.</p>
            </section>
            <section className="skills__wrapper">
                
                <h2 className="about__title"><span className="title__break">|</span>  skills</h2>
                
                <ul class="skills__list">
                
                    {skills.map((skill) => {
                        return (
                            <li className="skill__container">{skill}</li>
                        )
                    })}
                </ul>

            </section>
        </div>
    );
}

export default About;