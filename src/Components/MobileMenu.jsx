import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoLeafOutline } from "react-icons/io5";
import LogoutModal from './LogoutModal';
import { toast } from 'react-toastify';

const MobileMenu = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const isLoggedIn = localStorage.getItem('token');

    const handleLogout = () => {
        setShowLogoutModal(true);
    };

    const confirmLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        toast.success('Logged out successfully');
        setShowLogoutModal(false);
        onClose(); // Close the mobile menu
        navigate('/');
    };

    const cancelLogout = () => {
        setShowLogoutModal(false);
    };

    const handleLinkClick = () => {
        onClose(); // Close menu when a link is clicked
    };

    const handleLoginClick = () => {
        navigate('/login');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <>
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
                    <div className="h-full flex flex-col">
                        <div className="p-4 border-b flex justify-between items-center">
                            <span className="text-[#253D4E] font-medium">Menu</span>
                            <button onClick={onClose} className="text-gray-500">✕</button>
                        </div>

                        <div className="overflow-y-auto h-full mt-4">
                            {/* <Link 
                                to="/deals" 
                                className="flex items-center gap-2 px-4 py-3 text-[#3BB77E] border-b"
                                onClick={handleLinkClick}
                            >
                                <IoLeafOutline className="text-xl" />
                                <span className="text-sm font-medium">Deals</span>
                            </Link> */}

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

                            {/* <Link to="/vendors" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                                <span className="text-sm font-medium">Vendors</span>
                                <span className="text-xs">→</span>
                            </Link>

                            <Link to="/mega-menu" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                                <span className="text-sm font-medium">Mega menu</span>
                                <span className="text-xs">→</span>
                            </Link> */}
                            <Link to="/my-orders" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                                <span className="text-sm font-medium">My Orders</span>
                            </Link>

                            <Link to="/blog" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                                <span className="text-sm font-medium">Blog</span>
                                <span className="text-xs">→</span>
                            </Link>

                            {/* <Link to="/pages" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                                <span className="text-sm font-medium">Pages</span>
                                <span className="text-xs">→</span>
                            </Link> */}

                            <Link to="/contact" className="flex items-center justify-between px-4 py-3 text-[#253D4E] hover:text-[#3BB77E] border-b" onClick={handleLinkClick}>
                                <span className="text-sm font-medium">Contact</span>
                            </Link>
                        </div>

                        <div className="border-t">
                            {isLoggedIn ? (
                                <>
                                    <Link 
                                        to="/profile" 
                                        className="block px-4 py-3 text-gray-600 hover:text-[#3BB77E] hover:bg-gray-50 flex items-center"
                                        onClick={handleLinkClick}
                                    >
                                        <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Profile
                                    </Link>
                                    <button 
                                        onClick={handleLogout}
                                        className="w-full px-4 py-3 text-left text-red-600 hover:text-red-700 hover:bg-red-50 flex items-center"
                                    >
                                        <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <button 
                                    onClick={handleLoginClick}
                                    className="w-full px-4 py-3 text-left text-[#3BB77E] hover:text-[#2a9c66] hover:bg-[#3BB77E]/10 flex items-center"
                                >
                                    <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Login/Signup
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Logout Confirmation Modal */}
            <LogoutModal
                isOpen={showLogoutModal}
                onClose={cancelLogout}
                onConfirm={confirmLogout}
            />
        </>
    );
};

export default MobileMenu; 