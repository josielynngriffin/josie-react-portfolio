import React from 'react';
import aboutHero from '../assets/images/about-hero.png';

function About() {
    const skills=['CSS', 'JavaScript', 'MongoDB', 'SEO', 'Accessibility', 'MySQL', 'React', 'Express.js', 'APIs'
    ];
    const uxSkills=['User Testing', 'User Interviews', 'Surveys', 'Journey Mapping', 'A/B Testing', 'Card Sorts', 'Information Architecture', 'Microsoft Clarity','Google Analytics'];
    const uiSkills=['User Interface Design', 'Design Systems', 'Interaction Design', 'Prototyping', 'Visual Branding', 'Design Strategy', 'Adobe Illustrator & Photoshop', 'Figma','Miro, Trello, & Clickup'];
    return (
        <div className="about-page__wrapper">
            <section className="about-hero__wrapper">
                <img className="about-hero__image" src={aboutHero} alt="Several self-portrait illustrations of Josie in three different mediums."/>
                <section className="about__wrapper">
                <h1 className="about__title"><span className="title__break">|</span> about me</h1>
                <p className="about__blurb">I’m a designer with a year of experience designing intuitive e-commerce experiences at The Restaurant Store, driving measurable improvements in user engagement and usability. I specialize in clean interfaces that prioritze visual clarity, responsive design, and accessibility to reach all users.</p> 
                <p className="about__blurb">I thrive in cross-functional environments where product thinking, research, and my development knowledge come together in impactful design.</p>
                </section>
            </section>
            {/*<section class="principles__wrapper">
            <h2><span className="title__break">|</span> my core principles</h2>
            <section className="threeCS--stats__wrap">
                <div className="threeCS--stat__wrap">
                    <h4>Communication</h4>
                    <p>Truly listening to what others have to say and asking insightful questions to drive feedback.</p>
                </div>
                <div className="threeCS--stat__wrap">
                    <h4>Problem-Solving</h4>
                    <p>Approaching problems in a flexible way, using product strategy to seek simple solutions.</p>
                </div>
                <div className="threeCS--stat__wrap">
                    <h4>Accessibility</h4>
                    <p>Upholding accessibility standards with empathy to consider and meet every user's needs.</p>
                </div>
            </section></section>*/}
            <section className="moreabout__wrapper">
                <h2><span className="title__break">|</span> more about me</h2>
                <p className="about__blurb">Outside of design and development, I love to spend time in the kitchen, get outdoors, and read! I am a maker at heart, always dreaming up big ideas in my sketchbook and trying to learn new skills.</p>
            </section>
            {/*
            <section>
                <h2 className="case-study__section-title case-study__padding"><span class ="title__break">|</span>guiding principles</h2>
                <section className="fourCS--stats__wrap">
                <div className="fourCS--stat__wrap">
                    <h4>Communication</h4>
                    <p>Truly listening to what others have to say and asking insightful questions</p>
                </div>
                <div className="fourCS--stat__wrap">
                    <h4>Problem-Solving</h4>
                    <p>Approaching problems in a flexible way, seeking strategic solutions.</p>
                </div>
                <div className="fourCS--stat__wrap">
                    <h4>Accessibility</h4>
                    <p>Upholding accessibility standards to provide access to every user.</p>
                </div>
                <div className="fourCS--stat__wrap">
                    <h4>Empathy</h4>
                    <p>Taking steps to understand and consider different user perspectives.</p>
                </div>
                </section>
            </section>*/}
            
            <section className="skills__wrapper">
                <h2 className="skills__title"><span className="title__break">|</span>  skills</h2>
                <section class="skills__card skills__card-web">
                    <h3 className="skills__card-title">ux</h3>
                    <ul class="skills__list">
                        {uxSkills.map((uxSkill) => {
                            return (
                                <li className="skill__container">{uxSkill}</li>
                            )
                        })}
                    </ul>
                </section>
                <section class="skills__card skills__card-dev">
                    <h3 className="skills__card-title">ui</h3>
                    <ul class="skills__list">
                        {uiSkills.map((uiSkill) => {
                            return (
                                <li className="skill__container">{uiSkill}</li>
                            )
                        })}
                    </ul>
                </section>
                <section class="skills__card skills__card-3">
                    <h3 className="skills__card-title">web dev</h3>
                    <ul class="skills__list">
                        {skills.map((skill) => {
                            return (
                                <li className="skill__container">{skill}</li>
                            )
                        })}
                    </ul>
                </section>
            </section>
        </div>
    );
}

export default About;