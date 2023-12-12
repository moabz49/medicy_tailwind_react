import React,{ useState, useEffect } from "react";
import { Link, Events, scrollSpy } from 'react-scroll';

type NavLinkProps = {
    children: React.ReactNode,
    to: string,
    offset?: number
    mobileMenu? : boolean
    noClassName?: boolean 
}


const NavLink = ({ children, to, offset = -50, mobileMenu = false, noClassName}: NavLinkProps) => {
    const className = mobileMenu 
        ? "text-base text-white font-medium tracking-tight hover:text-teal-500 cursor-pointer text-center hover:scale-[110%] hover:line-through hover:animate-pulse "
        : "py-4 tracking-tight px-4 text-sm font-medium text-white hover:border-b-4 hover:border-emerald-500 cursor-pointer flex items-center text-center transition-transform duration-200 ease-in transform hover:mb-1"
    
    const linkClassName = noClassName ? '' : className

    const activeClass = to === 'home' ? '' :  mobileMenu 
        ? "text-base font-medium tracking-tight text-teal-500 text-center scale-[110%] line-through animate-pulse "
        : "py-4 tracking-tight px-4 text-sm font-medium text-white border-b-4 border-emerald-500 cursor-pointer flex items-center text-center mb-1"
    
    return  (
        <Link
            to={to}
            // If we are scrolling pass the link section it will show it as an  :active link by applying the css styles 
            spy={true}
            smooth={true}
             // It allows you to specify an offset value (in pixels) that adjusts the scroll position. For example, if you set offset to -50, the scroll position will be adjusted upward by 50 pixels of viewport
            // similar to scroll-mt-40 in tailwind css .
            offset={offset}
            // The 1000 stand for 1000 so it will take 1 second for the scroll to complete
            duration={1000}
            className={linkClassName}
            activeClass={activeClass}

        >
            {children}
        </Link>

    )
}

export default NavLink;
