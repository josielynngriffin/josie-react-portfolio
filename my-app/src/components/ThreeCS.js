import React from 'react';

function ThreeCS({header, subtitle, textContent, listContent, statText, statTitle, statText2, statTitle2, statText3, statTitle3, className = ""}) {
    const paragraphs = textContent ? textContent.split('\n').filter(b => b.trim() !== '') : [];
    const bullets= listContent ? listContent.split('\n').filter(b => b.trim() !== '') : [];
    const hasTextContent= header || subtitle || paragraphs.length > 0 || bullets.length > 0;

    return (
        <div className={`CS-component__wrapper case-study__padding fullCS__wrapper ${className}`}>
            {/*<section className="fullCS--text-wrap">
                <p className="label-text">{csLabel}</p>
                <h3>{header}</h3>
                <h4>{subtitle}</h4>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="case-study-text">{paragraph}</p>
                ))}
                <ul className="CS-component__list">{bullets.map((bullet, index) => (
                    <li key={index} className="case-study-text">{bullet}</li>
                ))}</ul>
            </section>*/}
            {hasTextContent && <section className="fullCS--text-wrap">
                {header && <h3>{header}</h3>}
                {subtitle && <h4>{subtitle}</h4>}
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="case-study-text">{paragraph}</p>
                ))}
                {listContent && <ul className="CS-component__list">{bullets.map((bullet, index) => (
                    <li key={index} className="case-study-text">{bullet}</li>
                ))}</ul>}
            </section>}
            <section className="threeCS--stats__wrap">
                <div className="threeCS--stat__wrap">
                    <h4>{statTitle}</h4>
                    <p>{statText}</p>
                </div>
                <div className="threeCS--stat__wrap">
                    <h4>{statTitle2}</h4>
                    <p>{statText2}</p>
                </div>
                <div className="threeCS--stat__wrap">
                    <h4>{statTitle3}</h4>
                    <p>{statText3}</p>
                </div>
            </section>
        </div>
    );
}

export default ThreeCS;