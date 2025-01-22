import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Section from './Section';
import Footer_mobile from './Footer_mobile';
import DealCard from './DealCard';

const Shop_mobile = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Featured');

    const products = [
        {
            id: 1,
            badge: "Hot",
            badgeColor: "bg-red-500",
            image: "/assets/Product Images/1.png",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 2,
            badge: "Sale",
            badgeColor: "bg-blue-500",
            image: "/assets/Product Images/2.png",
            brand: "Stouffer",
            title: "All Natural Italian-Style Chicken Meatballs",
            rating: 5,
            reviews: "4.0",
            currentPrice: "52.85",
            originalPrice: "55.8"
        },
        {
            id: 3,
            badge: "New",
            badgeColor: "bg-green-500",
            image: "/assets/Product Images/3.png",
            brand: "NestFood",
            title: "Angie's Boomchickapop Sweet & Salty",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 4,
            badge: "-14%",
            badgeColor: "bg-orange-500",
            image: "/assets/Product Images/4.png",
            brand: "Stouffer",
            title: "Foster Farms Takeout Crispy Classic",
            rating: 5,
            reviews: "4.0",
            currentPrice: "52.85",
            originalPrice: "55.8"
        }
    ];

    const dealsData = [
        {
            image: "/assets/bg2.png",
            days: "426",
            hours: "08",
            mins: "17",
            sec: "58",
            title: "Seeds of Change Organic Quinoa, Brown",
            rating: "4.0",
            by: "NestFood",
            currentPrice: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "/assets/bg.png",
            days: "822",
            hours: "08",
            mins: "17",
            sec: "59",
            title: "Perdue Simply Smart Organics Gluten",
            rating: "4.0",
            by: "Old El Paso",
            currentPrice: "24.85",
            originalPrice: "26.8"
        }
    ];

    return (
        <div className="lg:hidden pb-20">
            {/* Breadcrumb */}
            <div className="px-4 py-2 bg-white">
                <div className="flex items-center gap-2 text-xs">
                    <Link to="/" className="text-gray-500 hover:text-[#3BB77E]">Home</Link>
                    <span className="text-gray-500">•</span>
                    <span className="text-[#3BB77E]">Shop</span>
                </div>
            </div>

            {/* Title and Count */}
            <div className="px-4 py-3">
                <h1 className="text-xl font-bold text-[#253D4E] mb-2">Snack</h1>
                <p className="text-sm text-gray-500">We found <span className="text-[#3BB77E] font-medium">29</span> items for you!</p>
            </div>

            {/* Filter Tags */}
            <div className="px-4 overflow-x-auto">
                <div className="flex gap-2 pb-2">
                    {['Cabbage', 'Broccoli', 'Artichoke', 'Celery', 'Spinach'].map((tag) => (
                        <button key={tag} className="bg-white px-4 py-1.5 rounded-full text-xs whitespace-nowrap flex items-center gap-1">
                            <span className="text-[#3BB77E]">•</span>
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter and Sort Bar */}
            <div className="sticky top-0 z-10 bg-white border-b">
                <div className="flex justify-between items-center px-4 py-3">
                    <button 
                        onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                        <IoFilterOutline className="text-lg" />
                        Filter
                    </button>

                    <div className="relative">
                        <button 
                            className="flex items-center gap-2 text-sm font-medium text-gray-700"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            Sort by: {selectedSort}
                            <IoIosArrowDown />
                        </button>
                    </div>
                </div>
            </div>

            {/* Filter Drawer */}
            {showFilters && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    {/* ... existing filter drawer code ... */}
                </div>
            )}

            {/* Products Grid */}
            <div className="px-4 py-4">
                <div className="grid grid-cols-2 gap-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* Deals Section */}
            <div className="px-4 py-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-[#253D4E]">Deals Of The Day</h2>
                    <button className="text-gray-500 hover:text-[#3BB77E] text-xs flex items-center gap-1">
                        All Deals <span>→</span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {dealsData.map((deal, index) => (
                        <DealCard key={index} product={deal} />
                    ))}
                </div>
            </div>

            {/* Load More Button */}
            <div className="px-4 py-4">
                <button className="w-full py-2.5 border border-[#3BB77E] text-[#3BB77E] rounded-md text-sm font-medium">
                    Load More
                </button>
            </div>

            {/* Newsletter Section */}
            <div className="mt-8">
                <Section />
            </div>

            {/* Footer */}
            <Footer_mobile />
        </div>
    );
};

export default Shop_mobile;