import React, { useState, useEffect } from 'react'
import './style.css'
function Top() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    function handleTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className={scrollPosition > 10 ? 'go-top scrolled' : 'go-top'} onClick={() => handleTop()}>
            <img src='https://uploads-ssl.webflow.com/602ceee1cc4788ef7fdd0ea4/602ceee1cc4788a686dd0fd7_icons8-sort-down%20(1).svg' alt='Go to Top' width='20' />
        </div>
    );
}

export default Top;

