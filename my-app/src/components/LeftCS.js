import React from 'react';

function LeftCS({header, subtitle, textContent, listContent, imgLabel, img, imgAlt, imgDescription, className = ""}) {
    const paragraphs = textContent.split('\n');
    const bullets= listContent ? listContent.split('\n').filter(b => b.trim() !== '') : [];

    return (
        <div className={`CS-component__wrapper leftCS__wrapper case-study__padding ${className}`}>
            <section className="projectIntro--text-wrap leftCS__wrapper">
                <h3>{header}</h3>
                <h4>{subtitle}</h4>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="case-study-text">{paragraph}</p>
                ))}
                <ul className="CS-component__list">{bullets.map((bullet, index) => (
                    <li key={index} className="case-study-text">{bullet}</li>
                ))}</ul>
            </section>
            <section className="sideCS--image-wrap">
                <p className="label-text">{imgLabel}</p>
                <img  className="sideCS--image case-study-image__radius" src={img} alt={imgAlt}></img>
                <p className="small-text imgDescription">{imgDescription}</p>
            </section>
        </div>
    );
}

export default LeftCS;