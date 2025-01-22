import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <main className="md:mt-[180px] mt-[100px] max-w-[100vw]"> {/* Added max-w-[100vw] */}
                {children}
            </main>
        </div>
    );
};

export default Layout; 