import React from 'react';

function FullCS({header, subtitle, textContent, imgLabel, img, imgAlt, imgDescription}) {
    const paragraphs = textContent.split('\n');

    return (
        <div className="projectIntroCS__wrapper fullCS__wrapper case-study__component--margin">
            <section className="fullCS--text-wrap fullCS__wrapper">
                <h3>{header}</h3>
                <h4>{subtitle}</h4>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="case-study-text">{paragraph}</p>
                ))}
            </section>
            <section className="fullCS--image-wrap">
                <p className="label-text">{imgLabel}</p>
                <img  className="fullCS--image" src={img} alt={imgAlt}></img>
                <p className="small-text imgDescription">{imgDescription}</p>
            </section>
        </div>
    );
}

export default FullCS;