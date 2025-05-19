import React from 'react';
import headshot from '../assets/images/lightmode-headshot.png';
import {Link} from 'react-router-dom';

function Landing() {
    //console.log(props);
    return (
        <div className="landing__wrapper">
            <section className="landing__text">
                <h1 className="landing__title">hi, i'm <span className="landing__name--color">josie</span>!</h1>
                <h2 className="landing__subtitle">&gt; ux/ui <span className="landing__job-title--color">researcher</span> & <span className="landing__job-title--color">designer</span> </h2>
                <h2 className="landing__subtitle"> &gt; <span className="landing__job-title--color">full stack web developer</span></h2>
                <h2 className="landing__subtitle"> &gt; based in pennsylvania</h2>
                <p className="landing__blurb">I’m on a quest to combine creativity, user-friendly design, and inclusivity into adventurous digital experiences!</p> 
                <p className="landing__blurb">I firmly believe in collaborative efforts to not only find a solution, but to achieve something greater together and make a lasting impact. Welcome to my portfolio - let’s build something together!</p>
                <div className="case-study__button-wrap">
                    <Link to="/ux-ui" className="contactForm__button case-study__link">See ux/ui projects!<i class="fa-solid fa-arrow-right"></i></Link>
                    <Link to="/web-dev" className="contactForm__button case-study__link button__secondary">See web dev projects<i class="fa-solid fa-arrow-right"></i></Link>
                </div>
            </section>
            <figure className="landing__image-wrap">
                <img className='landing-headshot' src={headshot} alt='Headshot of Josie Griffin from her shoulders up in black and white'/>
            </figure>
        </div>
    );
}

export default Landing;