import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();
    const isAboutOrShop = location.pathname === '/about' || location.pathname === '/shop';

    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <main className={`${
                isAboutOrShop ? 'md:mt-[100px]' : 'md:mt-[180px]'
            } mt-[50px] max-w-[100vw]`}>
                {children}
            </main>
        </div>
    );
};

export default Layout;