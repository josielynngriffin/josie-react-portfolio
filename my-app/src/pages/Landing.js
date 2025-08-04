import React from 'react';
import headshot from '../assets/images/lightmode-headshot.png';
import {Link} from 'react-router-dom';
import ThreeCS from '../components/ThreeCS';

function Landing({uxProjects}) {
    //console.log(props);
    return (
        <div>
            <div className="landing__wrapper">
                <section className="landing__text">
                    <h1 className="landing__title">hi, i'm <span className="landing__name--color">josie</span>!</h1>
                    <h2 className="landing__subtitle">&gt; ux/ui <span className="landing__job-title--color">researcher</span> & <span className="landing__job-title--color">designer</span> </h2>
                    <h2 className="landing__subtitle"> &gt; <span className="landing__job-title--color">full stack web developer</span></h2>
                    <h2 className="landing__subtitle"> &gt; based in pennsylvania</h2>
                    <p className="landing__blurb">I’m on a quest to combine creativity, user-friendly design, and inclusivity into adventurous digital experiences!</p> 
                    <p className="landing__blurb">I firmly believe in collaborative efforts to not only find a solution, but to achieve something greater together and make a lasting impact. Welcome to my portfolio - let’s build something together!</p>
                    <div className="case-study__button-wrap">
                        <Link to="/ux-ui" className="contactForm__button case-study__link" onClick={() => window.scrollTo(0, 0)}>See ux/ui projects!<i class="fa-solid fa-arrow-right"></i></Link>
                        <Link to="/web-dev" className="contactForm__button case-study__link button__secondary" onClick={() => window.scrollTo(0, 0)}>See web dev projects<i class="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </section>
                <figure className="landing__image-wrap">
                    <img className='landing-headshot' src={headshot} alt='Headshot of Josie Griffin from her shoulders up in black and white'/>
                </figure>
            </div>
            {/*<section class="principles__wrapper">
            <h2 className="principles__title"><span className="title__break">|</span> my core principles</h2>
            <ThreeCS className="principles__wrapper" statTitle="Communication" statText="Truly listening to what others have to say and asking insightful questions to drive feedback." statTitle2="Problem-Solving" statText2="Approaching problems in a flexible way, using product strategy to seek simple solutions." statTitle3="Accessibility" statText3="Upholding accessibility standards with empathy to consider and meet every user's needs."></ThreeCS></section>*/}
            <section class="principles__wrapper CS-component__wrapper case-study__padding fullCS__wrapper">
                <h2><span className="title__break">|</span> my core principles</h2>
                <section className="threeCS--stats__wrap">
                    <div className="principle__wrap case-study-image__radius">
                        <div className="principle--icon__wrap">
                            <i className="fa-regular fa-comments principle--icon fa-3x"></i>
                        </div>
                        <div className="principle--text__wrap">
                            <h4>Communication</h4>
                            <p>Truly listening to what others have to say and asking insightful questions to drive feedback</p>
                        </div>
                    </div>
                    <div className="principle__wrap case-study-image__radius">
                        <div className="principle--icon__wrap">
                            <i className="fa-solid fa-pencil principle--icon fa-3x"></i>
                        </div>
                        <div className="principle--text__wrap">
                            <h4>Problem Solving</h4>
                            <p>Approaching problems in a flexible way, using product strategy to seek simple solutions.</p>
                        </div>
                    </div>
                    <div className="principle__wrap case-study-image__radius">
                        <div className="principle--icon__wrap">
                            <i className="fa-solid fa-hand-holding-heart principle--icon fa-3x"></i>
                        </div>
                        <div className="principle--text__wrap">
                            <h4>Accessibility</h4>
                            <p>Upholding accessibility standards with empathy to consider and meet every user's needs.</p>
                        </div>
                    </div>
                </section>
                
            </section>
            <section className="case-study__bg featured__wrapper">
            <h2><span className="title__break">|</span> featured case studies</h2>
                <div className="featured-projects__wrapper">
                    {uxProjects.slice(0,2).map((uxProject, index) =>{
                               return(
                                   <section className="portfolio__project--card portfolio__project--card-feature" key={index}>
                                       <div className="portfolio__project--info-feature">
                                           <img src={uxProject.image} alt={uxProject.imgAlt} className="featured__project-image"></img>
                                       </div>
                                       <div
                                       className="portfolio__project--info-feature">
                                           <h3 className="project__title">{uxProject.name}</h3>
                                           <ul className="project__skills--list">
                                               {uxProject.skills.map((skill, skillIndex) => (
                                                   <li className="label-text" key={skillIndex}>{skill}</li>
                                               ))}
                                           </ul>
                                           <section>
                                           <Link className="portfolio-case__link" to={uxProject.link} onClick={() => window.scrollTo(0, 0)}>View Case Study
                                           </Link>
                                           </section>
                                          
                                       </div>
                                   </section>
                               )
                           })}
                </div>
            </section>
        </div>
        
    );
}

export default Landing;