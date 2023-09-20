import { useState } from "react"

interface HamburgerProps{
    isHamburgerActive: boolean;
    setIsHamburgerActive: (active: boolean) => void;
}

export const Hamburger: React.FC<HamburgerProps> = ({
    isHamburgerActive,
    setIsHamburgerActive,
  }) => {

    return (
        <div className="hamburger-button" onClick={
            ()=> {setIsHamburgerActive(!isHamburgerActive)}} >
            <div className={`hamburger-line-top ${isHamburgerActive && 'hamburger-top-active'}`}></div>
            <div className={`hamburger-line-middle ${isHamburgerActive && 'hamburger-middle-active'}`}></div>
            <div className={`hamburger-line-bottom ${isHamburgerActive && 'hamburger-bottom-active'}`}></div>
        </div>
    )
}