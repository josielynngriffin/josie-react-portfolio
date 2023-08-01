import React from 'react';
import headshot from '../assets/images/lightmode.png';

function Landing() {
    //console.log(props);
    return (
        <div className="landing__wrapper">
            <section className="landing__text">
                <h1 className="landing__title">hi, i'm <span className="landing__name--color">josie</span>!</h1>
                <h2 className="landing__subtitle"> &gt; aspiring <span className="landing__job-title--color">full stack web developer</span></h2>
                <h2 className="landing__subtitle"> &gt; based in pennsylvania</h2>
                <p className="landing__blurb">looking to combine creativity, user-friendly and inclusive designs, and function!</p> 
                
                <p className="landing__blurb">i believe in working together toward something greater and making an impact. welcome to my portfolio!</p>
            </section>
            <figure>
                <img className='landing-headshot' src={headshot} alt='Headshot of Josie Griffin from her shoulders up in black and white'/>
            </figure>
        </div>
    );
}

export default Landing;