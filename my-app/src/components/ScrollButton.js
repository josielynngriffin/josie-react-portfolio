import React, {useState, useEffect} from 'react';

function ScrollButton() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const toggleVisibility = () =>{
        if(window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        // Check if user has scrolled to the end of the page to fix footer overlap
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setIsAtEnd(true);
        } else {
            setIsAtEnd(false);
        }
    };
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return (
        <button className="scrollButton" onClick={scrollToTop} style={{display: isVisible ? 'block' : 'none', bottom: isAtEnd ? '10rem' : '2rem', right: '1rem'}}>
            <i class="fa-solid fa-arrow-up"></i>
        </button>
    );
}

export default ScrollButton;