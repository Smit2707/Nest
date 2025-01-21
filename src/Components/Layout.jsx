import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <main className="mt-[180px] max-w-[100vw]"> {/* Added max-w-[100vw] */}
                {children}
            </main>
        </div>
    );
};

export default Layout; 