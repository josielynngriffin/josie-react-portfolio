import React from 'react';

function Landing(props) {
    console.log(props);
    return (
        <div className="landing-page">
            <h1>hi, i'm josie!</h1>
            <h2> &gt; aspiring full stack web developer</h2>
            <h2> &gt; based in pennsylvania</h2>
            <p>looking to combine creativity, user-friendly and inclusive designs, and function!</p> 
            <p>i believe in working together toward something greater and making an impact. welcome to my portfolio!</p>
            <figure>
                <img className='landing-headshot' src={props.headshot} alt='Headshot of Josie Griffin in black and white'/>
            </figure>
        </div>
    );
}

export default Landing;