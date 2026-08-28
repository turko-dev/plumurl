"use client"
import { useEffect, useState } from "react";
import { MobileNavbar } from "./mobilenavbar";
import NavbarDesktopLinks from "./navbar-desktop-links";

export default function ResourcesNavbar() {
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
         <div className="h-14 flex flex-row justify-end items-center p-4 w-full">

                        {isMobile ?
                        // Mobile Navbar
                        <MobileNavbar />
                        : 
                        // Desktop Navbar
                        <NavbarDesktopLinks />
                        }
                        
                    </div>

      
                        
    )
}