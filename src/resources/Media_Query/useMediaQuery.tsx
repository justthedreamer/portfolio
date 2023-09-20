
/**
 * Hoot to media queries
 * 
 * @param {string} query - Format : '(min-width: 760px)'. Apostrophs is require.
 * 
 * @returns {boolean} - True if the media query matches the current view space, false otherwise.                     
 */

import {useState, useEffect} from 'react';

const useMediaQuery = (query : string) =>{
    const [matches, setMatches ] = useState(false);

    useEffect(()=>{
        const media = window.matchMedia(query);
        if(media.matches !== matches){
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize",listener);
        return () => {
            window.removeEventListener('resize',listener);
        }
    },[matches,query])

    return matches;
}
export default useMediaQuery;