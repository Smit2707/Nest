import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Product_mobile = ({ 
    product, 
    selectedImage, 
    setSelectedImage,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
    handleAddToCart,
    handleAddToWishlist,
    loading 
}) => {
    if (!product) return null;

    return (
        <div className="lg:hidden">
            {/* Product Images Section */}
            <div className="px-4 py-6 bg-white">
                {/* Main Image */}
                <div className="w-full h-[350px] mb-4">
                    <img
                        src={selectedImage || product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Thumbnail Images */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {product.images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(image)}
                            className={`flex-shrink-0 w-16 h-16 border-2 rounded-lg overflow-hidden 
                                ${selectedImage === image ? 'border-[#3BB77E]' : 'border-gray-200'}`}
                        >
                            <img
                                src={image}
                                alt={`${product.name} view ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Info Section */}
            <div className="px-4 py-6">
                <h1 className="text-2xl font-bold text-[#253D4E] mb-2">{product.name}</h1>
                
                {/* Ratings */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className="text-yellow-400">★</span>
                        ))}
                    </div>
                    <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl font-bold text-[#3BB77E]">₹{product.price}</span>
                    {product.originalPrice && (
                        <>
                            <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                            <span className="text-sm text-red-500 bg-red-50 px-2 py-1 rounded">
                                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                            </span>
                        </>
                    )}
                </div>

                {/* Size Selection */}
                {product.sizes && product.sizes.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Select Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 rounded-full border ${
                                        selectedSize === size
                                            ? 'border-[#3BB77E] bg-[#3BB77E] text-white'
                                            : 'border-gray-300 hover:border-[#3BB77E]'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Color Selection */}
                {product.colours && product.colours.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Select Color</h3>
                        <div className="flex flex-wrap gap-2">
                            {product.colours.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`px-4 py-2 rounded-full border ${
                                        selectedColor === color
                                            ? 'border-[#3BB77E] bg-[#3BB77E] text-white'
                                            : 'border-gray-300 hover:border-[#3BB77E]'
                                    }`}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex gap-3">
                    <button
                        onClick={handleAddToWishlist}
                        className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#3BB77E] text-[#3BB77E] rounded-full hover:bg-[#3BB77E] hover:text-white transition-colors"
                        disabled={loading}
                    >
                        <FaHeart />
                        <span>Wishlist</span>
                    </button>
                    <button
                        onClick={handleAddToCart}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#3BB77E] text-white rounded-full hover:bg-[#2a9c66] transition-colors"
                        disabled={loading}
                    >
                        <FaShoppingCart />
                        <span>Add to Cart</span>
                    </button>
                </div>

                {/* Product Description */}
                <div className="mt-8 mb-24">
                    <h2 className="text-xl font-bold text-[#253D4E] mb-4">Product Description</h2>
                    <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Product_mobile; 