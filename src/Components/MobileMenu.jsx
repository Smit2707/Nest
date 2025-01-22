import React from 'react';
import { Link } from 'react-router-dom';
import { IoLeafOutline } from "react-icons/io5";

const MobileMenu = ({ isOpen, onClose }) => {
    const handleLinkClick = () => {
        onClose(); // Close menu when a link is clicked
    };

    return (
        <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={onClose}
        >
            <div 
                className={`fixed inset-y-0 left-0 w-[280px] bg-white transform transition-transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                onClick={e => e.stopPropagation()}
            >
                <div className="p-4 border-b flex justify-between items-center">
                    <span className="text-[#253D4E] font-medium">Menu</span>
                    <button onClick={onClose} className="text-gray-500">✕</button>
                </div>

                <div className="overflow-y-auto h-full">
                    <Link 
                        to="/deals" 
                        className="flex items-center gap-2 px-4 py-3 text-[#3BB77E] border-b"
                        onClick={handleLinkClick}
                    >
                        <IoLeafOutline className="text-xl" />
                        <span className="text-sm font-medium">Deals</span>
                    </Link>

                    <Link 
                        to="/" 
                        className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b"
                        onClick={handleLinkClick}
                    >
                        <span className="text-sm font-medium">Home</span>
                        <span className="text-xs">→</span>
                    </Link>

                    <Link to="/about" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                        <span className="text-sm font-medium">About</span>
                    </Link>

                    <Link to="/shop" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                        <span className="text-sm font-medium">Shop</span>
                        <span className="text-xs">→</span>
                    </Link>

                    <Link to="/vendors" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                        <span className="text-sm font-medium">Vendors</span>
                        <span className="text-xs">→</span>
                    </Link>

                    <Link to="/mega-menu" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                        <span className="text-sm font-medium">Mega menu</span>
                        <span className="text-xs">→</span>
                    </Link>

                    <Link to="/blog" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                        <span className="text-sm font-medium">Blog</span>
                        <span className="text-xs">→</span>
                    </Link>

                    <Link to="/pages" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                        <span className="text-sm font-medium">Pages</span>
                        <span className="text-xs">→</span>
                    </Link>

                    <Link to="/contact" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                        <span className="text-sm font-medium">Contact</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu; 