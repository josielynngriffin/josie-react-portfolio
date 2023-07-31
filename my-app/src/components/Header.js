import React from 'react';

function Header(props) {
    const {onAbout, onPortfolio, onContact, onLanding, onResume} = props;
    return (
        <div className= "Header-page">
            <header>
                <h1 classname="portfolio-name"><a onClick={onLanding}>josie griffin</a></h1>
            </header>
            <nav className='portfolio-nav'>
                <ul>
                    <li><a onClick={onAbout}>about me</a></li>
                    <li><a onClick={onPortfolio}>portfolio</a></li>
                    <li><a onClick={onContact}>contact</a></li>
                    <li><a onClick={onResume}>resume</a></li>
                    <li><i className="fa-solid fa-circle-half-stroke"></i></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;