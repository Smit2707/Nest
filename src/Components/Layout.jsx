import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <main className="md:mt-[90px] mt-[50px] max-w-[100vw]"> {/* Added max-w-[100vw] */}
                {children}
            </main>
        </div>
    );
};

export default Layout;