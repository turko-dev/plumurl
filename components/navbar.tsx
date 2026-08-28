"use client"
import Logo from "./ui/logo";
import { useEffect, useState } from "react";
import { MobileNavbar } from "./mobilenavbar";
import NavbarDesktopLinks from "./navbar-desktop-links";

export default function Navbar() {

    const [isMobile, setIsMobile] = useState<boolean>(false)


    useEffect(() => {
        const isMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        isMobile();
        window.addEventListener('resize', isMobile);
        return () => window.removeEventListener('resize', isMobile);
}, []);


    return(
        <div className="z-10000 fixed w-full h-fit flex-row justify-center flex items-center bg-white">
            <div className="h-14 flex flex-row justify-between items-center p-4 w-full border-b">
                <Logo />
                {isMobile ?
                // Mobile Navbar
                <MobileNavbar />
                : 
                // Desktop Navbar
                <NavbarDesktopLinks />
                }
                
            </div>
        </div>
    )
}