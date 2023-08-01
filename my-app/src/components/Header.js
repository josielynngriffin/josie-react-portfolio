import React from 'react';

function Header(props) {
    const {onAbout, onPortfolio, onContact, onLanding, onResume} = props;
    return (
        <div className= "header-wrap">
            <header>
                <h1 className="portfolio-name"><a onClick={onLanding}>josie griffin</a></h1>
            </header>
            <nav>
                <ul className='portfolio-nav'>
                    <li className='portfolio__nav-item'><a onClick={onAbout}>about me</a></li>
                    <li className='portfolio__nav-item'><a onClick={onPortfolio}>portfolio</a></li>
                    <li className='portfolio__nav-item'><a onClick={onContact}>contact</a></li>
                    <li className='portfolio__nav-item portfolio__nav-button'><a onClick={onResume}>resume</a></li>
                    <li className='portfolio__nav-item'><i className="portfolio__nav-icon fa-solid fa-circle-half-stroke"></i></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;