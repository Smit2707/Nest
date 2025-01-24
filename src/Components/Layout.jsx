import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const isAboutOrShop = location.pathname === '/about' || location.pathname === '/shop' || location.pathname === '/blog' || location.pathname === '/contact' || location.pathname === '/add-product';
    
    // Add check for login and signup pages
    const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <div className="w-full overflow-x-hidden">
            {/* Only show Navbar if not on login/signup pages */}
            
            {!hideNavbar && <Navbar />}
            
            {/* Remove all margins for login/signup pages */}
            <main className={`${
                hideNavbar 
                    ? '' // No margin or padding for login/signup
                    : isAboutOrShop 
                        ? 'md:mt-[80px] mt-[50px]' 
                        : 'md:mt-[180px] mt-[50px]'
            } max-w-[100vw]`}>
                {children}
            </main>
        </div>
    );
};

export default Layout;