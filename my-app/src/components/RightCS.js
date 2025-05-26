import React from 'react';

function RightCS({header, subtitle, textContent, listContent, imgLabel, img, imgAlt, imgDescription, imgStyle, Link, LinkText, className = ""}) {
    const paragraphs = textContent ? textContent.split('\n').filter(b => b.trim() !== '') : [];
    const bullets= listContent ? listContent.split('\n').filter(b => b.trim() !== '') : [];

    return (
        <div className={`CS-component__wrapper case-study__padding rightCS__wrapper ${className}`}>
           <section className="projectIntro--text-wrap rightCS-text__wrapper">
                <h3>{header}</h3>
                <h4>{subtitle}</h4>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="case-study-text">{paragraph}</p>
                ))}
                <ul className="CS-component__list">{bullets.map((bullet, index) => (
                    <li key={index} className="case-study-text">{bullet}</li>
                ))}</ul>
                {Link && <a className="portfolio-case__link" href={Link}>{LinkText}</a>}
            </section>
            <section className="sideCS--image-wrap">
                <p className="label-text">{imgLabel}</p>
                <img  className={`sideCS--image case-study-image__radius ${imgStyle}`} src={img} alt={imgAlt}></img>
                <p className="small-text imgDescription">{imgDescription}</p>
            </section> 
        </div>
    );
}

export default RightCS;