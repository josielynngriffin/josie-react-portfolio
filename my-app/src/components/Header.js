import React from 'react';
import {Link} from 'react-router-dom';

function Header() {

    return (
        <div className= "header-wrap">
            <header>
                <Link to='/'><h1 className="portfolio-name">josie griffin</h1></Link>
            </header>
            <nav>
                <ul className='portfolio-nav'>
                    <Link to="/about"><li className='portfolio__nav-item'>about me</li></Link>
                    <Link to="/ux-ui"><li className='portfolio__nav-item'>ux/ui</li></Link>
                    <Link to="/web-dev"><li className='portfolio__nav-item'>web dev</li></Link>
                    <Link to="/contact"><li className='portfolio__nav-item'>contact</li></Link>
                    <Link to="/resume"><li className='portfolio__nav-item portfolio__nav-button'>resume</li></Link>
                    {/* <li className='portfolio__nav-item'><i className="portfolio__nav-icon fa-solid fa-circle-half-stroke"></i></li> */}
                </ul>
            </nav>
        </div>
    );
}

export default Header;