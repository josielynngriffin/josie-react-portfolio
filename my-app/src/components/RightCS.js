import React from 'react';

function RightCS({header, subtitle, textContent, imgLabel, img, imgAlt, imgDescription}) {
    const paragraphs = textContent.split('\n');

    return (
        <div className="projectIntroCS__wrapper rightCS__wrapper case-study__component--margin">
           <section className="projectIntro--text-wrap rightCS__wrapper">
                <h3>{header}</h3>
                <h4>{subtitle}</h4>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="case-study-text">{paragraph}</p>
                ))}
            </section>
            <section className="projectIntro--image-wrap">
                <p className="label-text">{imgLabel}</p>
                <img  className="projectIntro--image" src={img} alt={imgAlt}></img>
                <p className="small-text imgDescription">{imgDescription}</p>
            </section> 
        </div>
    );
}

export default RightCS;