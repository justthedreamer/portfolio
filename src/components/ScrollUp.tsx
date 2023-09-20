// Scrolling to the top of site.


import { useState, useEffect } from 'react';
// Scroll navigator component
import { Link as LinkScroll,} from 'react-scroll';
import ScrollUpIcon from '../images/shuttle.png';

export const ScrollUp = () =>{

    const [isScrolled, setIsScrolled] = useState(false);

    // When distance from top is over 500px, component is activating.
    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 500)
            { setIsScrolled(true) }
            else
            { setIsScrolled(false) }
        };

        // Set listener when component is mounted
        window.addEventListener('scroll',handleScroll);
        
        // Removeing listener when component is unmounted
        return () => {
            window.removeEventListener('scroll',handleScroll)
        };
    },[])

    return (
        <div className={`slide-up ${isScrolled ?'active' : ""}`}>
            <LinkScroll to="aboutme" offset={-100} smooth={true} duration={500} >
                <img src={ScrollUpIcon} alt="slide up icon" />
            </LinkScroll>
        </div>
    )
}