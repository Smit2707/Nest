import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { GrPowerCycle } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiUser } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import MobileMenu from './MobileMenu';
import axios from 'axios';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const token = localStorage.getItem('token');
    const [categories, setCategories] = useState([]);   
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const dropdownRef = React.useRef(null);
    const [cartCount, setCartCount] = useState(0);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const name = localStorage.getItem('userName');
        setUserName(name);
    }, []);

    // Fetch categories from API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://ecommerce-shop-qg3y.onrender.com/api/category/displayAllCategory');
                if (response.data.success) {
                    setCategories(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    // Add useEffect to fetch cart count and listen for updates
    useEffect(() => {
        fetchCartCount();

        // Listen for cart updates
        window.addEventListener('cartUpdated', fetchCartCount);
        return () => {
            window.removeEventListener('cartUpdated', fetchCartCount);
        };
    }, [token]);

    const fetchCartCount = async () => {
        if (!token) {
            setCartCount(0);
            return;
        }

        try {
            const response = await axios.get('https://ecommerce-shop-qg3y.onrender.com/api/cart/displayCart', {
                headers: {
                    'Authorization': token
                }
            });

            console.log('Cart response:', response.data);

            if (response.data.success && response.data.data && Array.isArray(response.data.data)) {
                const cart = response.data.data[0];
                const totalItems = cart && cart.items ? cart.items.length : 0;
                setCartCount(totalItems);
            } else {
                setCartCount(0);
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
            // Don't remove token or redirect on cart count errors
            setCartCount(0);
        }
    };

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return true;
        if (path !== '/' && location.pathname.startsWith(path)) return true;
        return false;
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const handleCategoryChange = (e) => {
        const categoryId = e.target.value;
        setSelectedCategory(categoryId);
        if (categoryId) {
            navigate(`/category/${categoryId}`);
        }
    };

    const handleCategoryClick = async (categoryId) => {
        try {
            console.log('Fetching category with ID:', categoryId);
            const response = await axios.get(`https://ecommerce-shop-qg3y.onrender.com/api/category/displayCategory?id=${categoryId}`);
            console.log('Category details:', response.data);
            
            if (response.data.success) {
                console.log('Selected category:', response.data.data);
                navigate(`/category/${categoryId}`);
            }
        } catch (error) {
            console.error('Error fetching category details:', error);
        }
        setShowCategoryDropdown(false);
    };

    return (
        <>
            <header className="fixed top-0 w-full z-[1000] bg-white shadow-sm">
                {/* Top Bar - Hidden on Mobile */}
                <div className="hidden md:block text-white py-2">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-6  text-gray-500">
                                <Link className='sm:text-xs' to="/about">About Us</Link>
                                <Link className='sm:text-xs' to="/account">My Account</Link>
                                <Link className='sm:text-xs' to="/wishlist">Wishlist</Link>
                                <Link className='sm:text-xs' to="/order-tracking">Order Tracking</Link>
                            </div>
                            <span className="text-gray-500 sm:text-xs">100% Secure delivery without contacting the courier</span>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-1">
                                    <span className="text-gray-500 sm:text-xs">Need help? Call Us:</span>
                                    <span className="text-green-500 sm:text-xs">1800 900</span>
                                </div>
                                <select className="border-none outline-none text-gray-500 sm:text-xs">
                                    <option>English</option>
                                    <option>Hindi</option>
                                    <option>Spanish</option>
                                    <option>Gujarati</option>
                                </select>
                                <select className="border-none outline-none text-gray-500 sm:text-xs">
                                    <option>USD</option>
                                    <option>INR</option>
                                    <option>Euro</option>
                                    <option>ED</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="container mx-auto px-4">
                    {/* Mobile Header */}
                    <div className="block md:hidden w-full">
                        <div className="flex items-center justify-between p-4 max-w-full">
                            <button 
                                onClick={toggleMobileMenu}
                                className="text-gray-600"
                            >
                                {isMobileMenuOpen ? (
                                    <FiX size={24} />
                                ) : (
                                    <FiMenu size={24} />
                                )}
                            </button>
                            
                            <Link to="/">
                                <img src="/assets/logo.png" alt="Nest" className="h-10" />
                            </Link>

                            <div className="flex items-center gap-4">

                                {/* Wishlist Icon with Badge */}
                                <Link to="/wishlist" className="text-gray-600 relative">
                                    <FaHeart size={24} />
                                    <span className="absolute -top-2 -right-2 bg-[#3BB77E] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                        4
                                    </span>
                                </Link>

                                {/* Cart Icon with Badge */}
                                <Link to="/cart" className="text-gray-600 relative">
                                    <FaShoppingCart size={24} />
                                    <span className="absolute -top-2 -right-2 bg-[#3BB77E] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                        {cartCount}
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Search - Toggleable */}
                        <div className={`${isSearchVisible ? 'block' : 'hidden'} px-4 pb-4 max-w-full transition-all duration-300`}>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Search for items..." 
                                    className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                />
                                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navbar - Hidden on Mobile */}
                    <div className="hidden md:block">
                        <div className="bg-white py-2">
                            <div className="container mx-auto px-4 flex items-center justify-between">
                                <Link to="/" className="flex items-center">
                                    <img src="/assets/logo.png" alt="Nest Mart" className="h-8" />
                                </Link>

                                <div className="flex-1 max-w-3xl mx-12">
                                    <div className="flex border-green-400 border-[1px] rounded-sm">
                                        <select 
                                            className="px-4 py-2 border border-r-0 rounded-l-md bg-white text-gray-600 focus:outline-none"
                                            value={selectedCategory}
                                            onChange={handleCategoryChange}
                                        >
                                            <option value="">All Categories</option>
                                            {categories.map((category) => (
                                                <option key={category._id} value={category._id}>
                                                    {category.category_name}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="flex-1 relative border-none">
                                            <input
                                                type="text"
                                                placeholder="Search for items..."
                                                className="w-full px-4 py-2 border border-gray-200 focus:outline-none"
                                            />
                                            <button className="absolute right-0 top-0 h-full px-6 bg-transparent">
                                                <BiSearch size={18} className="text-gray-400" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                                        <IoLocationOutline size={18} className="text-green-500" />
                                        <span>Your Location</span>
                                        <span className="text-gray-400">▼</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <div className="relative">
                                            <GrPowerCycle size={20} />
                                            <span className="absolute -top-2 -right-2 bg-[#3bb77e] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                                3
                                            </span>
                                        </div>
                                        <span>Compare</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <div className="relative">
                                            <FcLike size={20} />
                                            <span className="absolute -top-2 -right-2 bg-[#3bb77e] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                                4
                                            </span>
                                        </div>
                                        <span>Wishlist</span>
                                    </div>
                                    <Link to="/cart" className="flex items-center gap-2 text-gray-500 text-sm hover:text-[#3BB77E]">
                                        <div className="relative">
                                            <FaShoppingCart size={20} />
                                            <span className="absolute -top-2 -right-2 bg-[#3bb77e] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                                {cartCount}
                                            </span>
                                        </div>
                                        <span>Cart</span>
                                    </Link>
                                    {token ? (
                                        <div className="flex items-center space-x-4">
                                            <Link 
                                                to="/profile" 
                                                className="text-gray-600 hover:text-[#3BB77E]"
                                            >
                                                Profile
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="text-gray-600 hover:text-[#3BB77E]"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    ) : (
                                        <Link 
                                            to="/login" 
                                            className="text-gray-600 hover:text-[#3BB77E]"
                                        >
                                            Login/Signup
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* bottom-nav */}
                        <div className="bg-white border-t border-b-[1px]">
                            <div className="container mx-auto px-4">
                                <div className="flex items-center justify-between py-2">
                                    <div className="flex items-center gap-6">
                                        <div className="relative" ref={dropdownRef}>
                                            <button 
                                                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                                                className="bg-[#3BB77E] hover:bg-[#3BB77E]/90 text-white px-4 py-2.5 rounded-md flex items-center gap-2"
                                            >
                                                <HiOutlineSquares2X2 size={20} />
                                                <span className='text-sm'>Browse All Categories</span>
                                                <IoIosArrowDown 
                                                    className={`transition-transform duration-200 ${showCategoryDropdown ? 'rotate-180' : ''}`} 
                                                    size={20}
                                                />
                                            </button>

                                            {showCategoryDropdown && (
                                                <div className="absolute z-50 mt-2 w-[280px] bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                                                    {categories.map((category) => (
                                                        <button
                                                            key={category._id}
                                                            onClick={() => handleCategoryClick(category._id)}
                                                            className="w-full flex items-center px-4 py-2.5 hover:bg-gray-50 transition-colors"
                                                        >
                                                            <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                                                                <img 
                                                                    src={category.category_photo} 
                                                                    alt={category.category_name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                            <span className="text-gray-700 hover:text-[#3BB77E] text-sm">
                                                                {category.category_name}
                                                            </span>
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between gap-12 text-gray-600 text-sm">
                                            {/* <Link to="/deals" className="flex items-center gap-1 font-[600] text-sm">
                                                <span>Deals</span>
                                            </Link> */}
                                            <Link 
                                                to="/" 
                                                className={`text-[15px] ${isActive('/') ? 'text-[#3BB77E]' : 'text-gray-600 hover:text-[#3BB77E]'}`}
                                            >
                                                Home
                                            </Link>
                                            <Link 
                                                to="/about" 
                                                className={`text-[15px] ${isActive('/about') ? 'text-[#3BB77E]' : 'text-gray-600 hover:text-[#3BB77E]'}`}
                                            >
                                                About
                                            </Link>
                                            <Link 
                                                to="/shop" 
                                                className={`text-[15px] ${isActive('/shop') ? 'text-[#3BB77E]' : 'text-gray-600 hover:text-[#3BB77E]'}`}
                                            >
                                                Shop
                                            </Link>
                                            {/* <Link 
                                                to="/vendors" 
                                                className={`text-[15px] ${isActive('/vendors') ? 'text-[#3BB77E]' : 'text-gray-600 hover:text-[#3BB77E]'}`}
                                            >
                                                Vendors
                                            </Link> */}
                                            {/* <Link 
                                                to="/mega-menu" 
                                                className={`text-[15px] ${isActive('/mega-menu') ? 'text-[#3BB77E]' : 'text-gray-600 hover:text-[#3BB77E]'}`}
                                            >
                                                Mega menu
                                            </Link> */}
                                            <Link 
                                                to="/blog" 
                                                className={`text-[15px] ${isActive('/blog') ? 'text-[#3BB77E]' : 'text-gray-600 hover:text-[#3BB77E]'}`}
                                            >
                                                Blog
                                            </Link>
                                            {/* <Link 
                                                to="/pages" 
                                                className={`text-[15px] ${isActive('/pages') ? 'text-[#3BB77E]' : 'text-gray-600 hover:text-[#3BB77E]'}`}
                                            >
                                                Pages
                                            </Link> */}
                                            <Link 
                                                to="/contact" 
                                                className={`text-[15px] ${isActive('/contact') ? 'text-[#3BB77E]' : 'text-gray-600 hover:text-[#3BB77E]'}`}
                                            >
                                                Contact
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaPhoneAlt className="text-[#3bb77e]" size={16} />
                                        <div>
                                            <div className="text-[#3bb77e] font-semibold text-sm">1900 - 888</div>
                                            <div className="text-xs text-gray-400">24/7 Support Center</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <MobileMenu 
                isOpen={isMobileMenuOpen} 
                onClose={() => setIsMobileMenuOpen(false)} 
            />
        </>
    );
};

export default Navbar;