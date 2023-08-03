import React from 'react';

function Footer() {
    return (
        <footer classname="footer__wrapper">
            <h4 className="footer__name">josie griffin</h4>
            <hr className="footer__break"></hr>
            <small className="footer__small">jelynngriffin@gmail.com | © josie griffin dev</small>
            <section className="footer-contact">
                <a href="https://github.com/josielynngriffin" target="_blank"><i className="portfolio__icon fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/josiegriffin/" target="_blank"><i className="portfolio__icon fa-brands fa-linkedin"></i></a>
                <a href="mailto: jelynngriffin@gmail.com" target="_blank"><i className="portfolio__icon fa-solid fa-envelope"></i></a>
            </section>
        </footer>
    );
}

export default Footer;