import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

export default () => {
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const scrollEvent = window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                // if user has scrolled down 100px
                setShowBackground(true);
            } else setShowBackground(false)
        });
        return () => {
            // every time it unmounts so that there are
            // no cascading event listeners
            scrollEvent && window.removeEventListener(scrollEvent);
        }
    }, []);

    return (
        <div className={` nav ${showBackground && 'nav__black'}`}>
            <img className="nav__logo"

                src="/Logo.png"
                alt="Netflix"
            />
            <button>Sign In</button>
        </div>
    )
}