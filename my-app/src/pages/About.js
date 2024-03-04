import React from 'react';
import aboutHero from '../assets/images/about-photo.png';

function About() {
    const skills=['CSS', 'JavaScript', 'MongoDB', 'SEO', 'Accessibility', 'MySQL', 'React', 'Express.js', 'APIs'
    ];
    const uxSkills=['UI Design', 'User Research', 'User Testing', 'Prototyping', 'Visual Branding', 'Information Architecture', 'Design Systems', 'Figma','Miro'];
    return (
        <div className="about-page__wrapper">
            <section className="about-hero__wrapper">
                <img className="about-hero" src={aboutHero} alt="Several self-portrait illustrations of Josie in three different mediums."/>
            </section>
            <section className="about__wrapper">
                <h1 className="about__title"><span className="title__break">|</span> about me</h1>
                <p className="about__blurb">I turned to web dev because I love making things! I'm well versed in collaborating within team environments to bring projects to life and can quickly adapt to new technologies.</p> 
                <p className="about__blurb">I love design and anything related to art and communication. I approach problems in a rational and flexible way, seeking the simplest and most functional solutions to create pivotal moments online.</p>

            </section>
            <section className="moreabout__wrapper">
                <h1 className="about__title"><span className="title__break">|</span> more about me</h1>
                <p className="about__blurb">Outside of development, I love to spend time in the kitchen, get outdoors, and read! I am always trying to learn new things.</p>
            </section>
            <section className="skills__wrapper">
                <h2 className="about__title skills__title"><span className="title__break">|</span>  skills</h2>
                <section class="skills__card skills__card-web">
                    <h3 className="skills__card-title">web dev</h3>
                    <ul class="skills__list">
                        {skills.map((skill) => {
                            return (
                                <li className="skill__container">{skill}</li>
                            )
                        })}
                    </ul>
                </section>
                <section class="skills__card skills__card-dev">
                    <h3 className="skills__card-title">ux/ui</h3>
                    <ul class="skills__list">
                        {uxSkills.map((uxSkill) => {
                            return (
                                <li className="skill__container">{uxSkill}</li>
                            )
                        })}
                    </ul>
                </section>
            </section>
        </div>
    );
}

export default About;