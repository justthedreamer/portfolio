// Navigation Section

import { useState } from "react";
import { Link } from 'react-router-dom'
import { Link as LinkScroll, Element, animateScroll as scroll } from 'react-scroll';
import { Hamburger } from "./Hamburger"

import useMediaQuery from '../resources/Media_Query/useMediaQuery';


export const Navigation = () =>{
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);
    let isMobile = useMediaQuery('(min-width: 960px)');

    return (
        isMobile? 
            <nav className="mobile-navigation">
                <div className="logo">
                    <LinkScroll to="aboutme" offset={-100} smooth={true} duration={1000}>
                        <h2>Piotr <span className='accent'>Z</span></h2>
                    </LinkScroll>
                </div>

                <div className="links">
                    <LinkScroll to="aboutme" offset={-100} smooth={true} duration={500} >About me</LinkScroll>
                    <LinkScroll to="education" offset={-100} smooth={true} duration={500} >Education</LinkScroll>
                    <LinkScroll to="skills" offset={-100} smooth={true} duration={500} >Skills</LinkScroll>
                    <LinkScroll to="projects" offset={-100} smooth={true} duration={500} >Projects</LinkScroll>
                    <LinkScroll to="contact" offset={-100} smooth={true} duration={500} >Contact</LinkScroll>
                </div>

            </nav>
        : 
        <>
            <nav className="desktop-navigation">
                <div className="logo">
                    <LinkScroll to="aboutme" offset={-100} smooth={true} duration={1000}>
                        <h2>Piotr <span className='accent'>Z</span></h2>
                    </LinkScroll>
                </div>
                
                <Hamburger isHamburgerActive={isHamburgerActive} setIsHamburgerActive={setIsHamburgerActive} />
            </nav> 

            <div className={`mobile-menu ${isHamburgerActive && 'mobile-menu-active'}`}>
                    <LinkScroll className="mobile-menu-link" to="aboutme" offset={-100} smooth={true} duration={1000} onClick={()=>{setIsHamburgerActive(!isHamburgerActive)}}>About me</LinkScroll>
                    <LinkScroll className="mobile-menu-link" to="skills" offset={-100} smooth={true} duration={1000} onClick={()=>{setIsHamburgerActive(!isHamburgerActive)}}>Skills</LinkScroll>
                    <LinkScroll className="mobile-menu-link" to="education" offset={-100} smooth={true} duration={1000} onClick={()=>{setIsHamburgerActive(!isHamburgerActive)}}>Education</LinkScroll>
                    <LinkScroll className="mobile-menu-link" to="projects" offset={-100} smooth={true} duration={1000} onClick={()=>{setIsHamburgerActive(!isHamburgerActive)}}>Projects</LinkScroll>
                    <LinkScroll className="mobile-menu-link" to="contact" offset={-100} smooth={true} duration={1000} onClick={()=>{setIsHamburgerActive(!isHamburgerActive)}}>Contact</LinkScroll>
            </div>
        </>
    );

}