import React from 'react';
import {Link, useLocation} from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <div className= "header-wrap">
            <header className="mobile-nav">
                <Link to='/'><h1 className="portfolio-name">josie <span className='portfolio-name__span'>griffin</span></h1></Link>
                <a className="mobile-nav__menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i className="mobile-nav__menu fa-solid fa-bars"></i></a>
            </header>
            <nav>
                <ul className='portfolio-nav portfolio-nav-hidden'>
                    <Link to="/about"><li className={location.pathname === '/about' ? 'portfolio__nav-item active' : 'portfolio__nav-item'}>about me</li></Link>
                    <Link to="/ux-ui"><li className={location.pathname === '/ux-ui' ? 'portfolio__nav-item active' : 'portfolio__nav-item'}>ux/ui</li></Link>
                    <Link to="/web-dev"><li className={location.pathname === '/web-dev' ? 'portfolio__nav-item active' : 'portfolio__nav-item'}>web dev</li></Link>
                    <Link to="/contact"><li className={location.pathname === '/contact' ? 'portfolio__nav-item active' : 'portfolio__nav-item'}>contact</li></Link>
                    <Link to="/resume"><li className={location.pathname === '/resume' ? 'portfolio__nav-item portfolio__nav-button active' : 'portfolio__nav-item portfolio__nav-button'}>resume</li></Link>
                    {/* <li className='portfolio__nav-item'><i className="portfolio__nav-icon fa-solid fa-circle-half-stroke"></i></li> */}
                </ul>
            </nav>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel"><Link to='/'><h1 className="portfolio-name portfolio-name-m" data-bs-dismiss="offcanvas">josie <span className='portfolio-name__span portfolio-name__span-m'>griffin</span></h1></Link></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="mobile-nav-close fa-solid fa-x"></i></button>
                </div>
                <div class="offcanvas-body">
                    <nav>
                        <ul className='portfolio-nav'>
                            <Link to="/about"><li className='portfolio__nav-item portfolio__nav-item-m' data-bs-dismiss="offcanvas">about me</li></Link>
                            <Link to="/ux-ui"><li className='portfolio__nav-item portfolio__nav-item-m' data-bs-dismiss="offcanvas">ux/ui</li></Link>
                            <Link to="/web-dev"><li className='portfolio__nav-item portfolio__nav-item-m' data-bs-dismiss="offcanvas">web dev</li></Link>
                            <Link to="/contact"><li className='portfolio__nav-item portfolio__nav-item-m' data-bs-dismiss="offcanvas">contact</li></Link>
                            <Link to="/resume"><li className='portfolio__nav-item portfolio__nav-item-m' data-bs-dismiss="offcanvas">resume</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;

