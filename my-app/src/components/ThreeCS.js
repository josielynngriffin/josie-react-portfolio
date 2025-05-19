import React from 'react';

function threeCS({header, subtitle, textContent, listContent, csLabel, statText, statTitle, statText2, statTitle2, statText3, statTitle3, className = ""}) {
    const paragraphs = textContent.split('\n');
    const bullets= listContent ? listContent.split('\n').filter(b => b.trim() !== '') : [];

    return (
        <div className={`CS-component__wrapper case-study__padding ThreeCS__wrapper ${className}`}>
            <section className="fullCS--text-wrap">
                <p className="label-text">{csLabel}</p>
                <h3>{header}</h3>
                <h4>{subtitle}</h4>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="case-study-text">{paragraph}</p>
                ))}
                <ul className="CS-component__list">{bullets.map((bullet, index) => (
                    <li key={index} className="case-study-text">{bullet}</li>
                ))}</ul>
            </section>
            <section className="threeCS--stats-wrap">
                <div>
                    <h4>{statTitle}</h4>
                    <p>{statText}</p>
                </div>
                <div>
                    <h4>{statTitle2}</h4>
                    <p>{statText2}</p>
                </div>
                <div>
                    <h4>{statTitle3}</h4>
                    <p>{statText3}</p>
                </div>
            </section>
        </div>
    );
}

export default threeCS;