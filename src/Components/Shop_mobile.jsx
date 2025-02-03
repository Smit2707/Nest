import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import Section from './Section';
import Footer_mobile from './Footer_mobile';
import DealCard from './DealCard';

const Shop_mobile = ({ products, loading, error }) => {
    const navigate = useNavigate();
    const [showFilters, setShowFilters] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Featured');
    const token = localStorage.getItem('token');

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

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleAddProduct = () => {
        if (!token) {
            navigate('/login');
            return;
        }
        navigate('/add-product');
    };

    // Transform API product data to match ProductCard props
    const transformProduct = (product) => ({
        id: product._id,
        badge: product.stock === "in stock" ? "Hot" : "Sale",
        badgeColor: product.stock === "in stock" ? "bg-green-500" : "bg-blue-500",
        image: product.product_images[0] || "/assets/placeholder.png",
        brand: product.brand,
        title: product.name,
        rating: 4,
        reviews: "4.0",
        currentPrice: product.price,
        originalPrice: (product.price * 1.1).toFixed(2)
    });

    return (
        <div className="lg:hidden pb-2">
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
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-xl font-bold text-[#253D4E]">Products</h1>
                </div>
                <p className="text-sm text-gray-500">We found <span className="text-[#3BB77E] font-medium">{products?.length || 0}</span> items for you!</p>
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
                        // onClick={() => setShowFilters(!showFilters)}
                        className="flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                        <IoFilterOutline className="text-lg" />
                        Filter
                    </button>

                    <div className="relative">
                        <button 
                            className="flex items-center gap-2 text-sm font-medium text-gray-700"
                            // onClick={() => setShowFilters(!showFilters)}
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
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3BB77E]"></div>
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center">{error}</div>
                ) : (
                    <div className="grid grid-cols-2 gap-3">
                        {products?.map((product) => (
                            <div 
                                key={product._id}
                                onClick={() => handleProductClick(product._id)}
                                className="cursor-pointer"
                            >
                                <ProductCard product={transformProduct(product)} />
                            </div>
                        ))}
                    </div>
                )}
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
            {products?.length > 0 && (
                <div className="px-4 py-4">
                    <button className="w-full py-2.5 border border-[#3BB77E] text-[#3BB77E] rounded-md text-sm font-medium">
                        Load More
                    </button>
                </div>
            )}

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