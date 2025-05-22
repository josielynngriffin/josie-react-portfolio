import React from 'react';

function DoubleImgCS({header, subtitle, textContent, listContent, imgLabel, img, imgAlt, imgLabel2, img2, imgAlt2, imgDescription, imgDescription2, imgStyle, Link, LinkText, className = ""}) {
    const paragraphs = textContent ? textContent.split('\n').filter(b => b.trim() !== '') : [];
    const bullets= listContent ? listContent.split('\n').filter(b => b.trim() !== '') : [];
    const hasTextContent= header || subtitle || paragraphs.length > 0 || bullets.length > 0;
    return (
        <div className={`CS-component__wrapper case-study__padding fullCS__wrapper ${className}`}>
            {hasTextContent && <section className="fullCS--text-wrap">
                {header && <h3>{header}</h3>}
                {subtitle && <h4>{subtitle}</h4>}
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="case-study-text">{paragraph}</p>
                ))}
                {listContent && <ul className="CS-component__list">{bullets.map((bullet, index) => (
                    <li key={index} className="case-study-text">{bullet}</li>
                ))}</ul>}
                {Link && <a className="portfolio-case__link" href={Link}>{LinkText}</a>}
            </section>}
            <div class="doubleCS-images__wrapper">
                <section className="doubleCS--image-wrap">
                    <p className="label-text">{imgLabel}</p>
                    <img  className={`doubleCS--image case-study-image__radius ${imgStyle}`} src={img} alt={imgAlt}></img>
                    <p className="small-text imgDescription">{imgDescription}</p>
                </section>
                <section className="doubleCS--image-wrap">
                    <p className="label-text">{imgLabel2}</p>
                    <img  className={`doubleCS--image case-study-image__radius ${imgStyle}`} src={img2} alt={imgAlt2}></img>
                    <p className="small-text imgDescription">{imgDescription2}</p>
                </section>
            </div>
            
        </div>
    );
}

export default DoubleImgCS;