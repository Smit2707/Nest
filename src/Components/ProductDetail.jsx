import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import CategorySidebar from './CategorySidebar';
import { FaShoppingCart } from "react-icons/fa";
import Section from './Section';
import Footer from './Footer';
import ProductDetail_mobile from './ProductDetail_mobile';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);
                console.log('=== Fetching Product ===');
                console.log('Product ID:', id);
                
                const response = await axios.get(`https://ecommerce-shop-qg3y.onrender.com/api/product/display?id=${id}`);
                
                // Log detailed product information
                console.log('=== Product Details ===');
                console.log('Raw Response:', response.data);
                
                const productData = response.data.data;
                
                if (productData) {
                    console.log('Product Information:');
                    console.log('- Name:', productData.name);
                    console.log('- Brand:', productData.brand);
                    console.log('- Price:', productData.price);
                    console.log('- Description:', productData.description);
                    console.log('- Category:', productData.categoryName);
                    console.log('- Stock:', productData.stock);
                    console.log('- Colors:', productData.colour);
                    console.log('- Size:', productData.size);
                    console.log('- Images:', productData.product_images);
                    console.log('- Product Details:', productData.product_details);
                    console.log('===================');
                } else {
                    console.error('Product data is null or undefined');
                }

                setProduct(productData);
                
                if (productData?.size && Array.isArray(productData.size) && productData.size.length > 0) {
                    setSelectedSize(productData.size[0]);
                }
            } catch (error) {
                console.error('=== Error Fetching Product ===');
                console.error('Error Type:', error.name);
                console.error('Error Message:', error.message);
                console.error('Error Status:', error.response?.status);
                console.error('Error Response:', error.response?.data);
                console.error('==========================');
                setError(error.message || 'Failed to load product. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    // Debug log for product state changes
    useEffect(() => {
        if (product) {
            console.log('=== Product State Updated ===');
            console.log('Current Product State:', {
                id: product._id,
                name: product.name,
                price: product.price,
                brand: product.brand,
                category: product.categoryName,
                stock: product.stock
            });
            console.log('========================');
        }
    }, [product]);

    const handleImageSelect = (index) => {
        setSelectedImage(index);
    };

    // Show loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3BB77E]"></div>
            </div>
        );
    }

    // Show error state
    if (error || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500">{error || 'Product not found'}</div>
            </div>
        );
    }

    // Ensure product_images is an array
    const productImages = Array.isArray(product.product_images) ? product.product_images : [];

    return (
        <>
            {/* Mobile Version */}
            <ProductDetail_mobile product={product} loading={loading} error={error} />

            {/* Desktop Version */}
            <div className="hidden lg:block mt-[80px] container mx-auto px-4">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-8">
                    <Link to="/" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Home</Link>
                    <span className="text-gray-500">•</span>
                    <Link to="/shop" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Shop</Link>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">{product?.name || 'Product Details'}</span>
                </div>

                {/* Main Content with Sidebar Layout */}
                <div className="grid grid-cols-4 gap-8">
                    {/* Main Product Content - Takes 3 columns */}
                    <div className="col-span-3">
                        {/* Product Info Section */}
                        <div className="grid grid-cols-2 gap-12">
                            {/* Left - Product Images */}
                            <div>
                                <div className="bg-[#F4F6FA] rounded-lg p-4 mb-4">
                                    <img
                                        src={productImages[selectedImage] || '/assets/placeholder.png'}
                                        alt={product?.name}
                                        className="w-full h-[400px] object-contain"
                                    />
                                </div>
                                {productImages.length > 0 && (
                                    <div className="grid grid-cols-4 gap-4">
                                        {productImages.map((image, index) => (
                                            <div 
                                                key={index}
                                                onClick={() => handleImageSelect(index)}
                                                className={`bg-[#F4F6FA] rounded-lg p-2 cursor-pointer ${
                                                    selectedImage === index ? 'border-2 border-[#3BB77E]' : ''
                                                }`}
                                            >
                                                <img 
                                                    src={image}
                                                    alt={`${product.name || 'Product'} ${index + 1}`}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Right - Product Details */}
                            <div>
                                <span className="text-[#3BB77E] text-sm">
                                    {product.stock ? 'In Stock' : 'Out of Stock'}
                                </span>
                                <h1 className="text-2xl font-bold text-[#253D4E] mt-2">
                                    {product.name}
                                </h1>

                                {/* Rating Section */}
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="flex items-center">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} size={14} />
                                            ))}
                                        </div>
                                        <span className="text-gray-400 text-sm ml-2">(32 reviews)</span>
                                    </div>
                                    <span className="text-[#3BB77E] text-xs">By {product.brand}</span>
                                </div>

                                {/* Price Section */}
                                <div className="flex items-center gap-4 mt-6">
                                    <span className="text-[#3BB77E] text-xl font-semibold">₹{product.price}</span>
                                    <span className="text-gray-400 line-through text-lg">₹{(product.price * 1.1).toFixed(2)}</span>
                                    <span className="bg-[#FFE5E5] text-[#FA5246] px-2 py-1 rounded text-sm">10% Off</span>
                                </div>

                                {/* Description */}
                                <div className="mt-6">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Product Details List */}
                                <div className="mt-14 mb-6">
                                    <div>
                                        <div className="flex items-center text-sm">
                                            <span className="text-gray-500 w-24">Category:</span>
                                            <span className="text-[#3BB77E]">{product.categoryName}</span>
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <span className="text-gray-500 w-24">Stock:</span>
                                            <span className="text-[#3BB77E]">{product.stock ? 'In Stock' : 'Out of Stock'}</span>
                                        </div>
                                        {product.colour && (
                                            <div className="flex items-center text-sm">
                                                <span className="text-gray-500 w-24">Colors:</span>
                                                <span className="text-[#3BB77E]">{Array.isArray(product.colour) ? product.colour.join(', ') : product.colour}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Description */}
                        <div className="mt-16">
                            {/* Tab Headers */}
                            <div className="flex gap-4">
                                <button className="text-[#3bb77e] px-3 py-2 border-[1px] font-medium text-center rounded-full text-sm">
                                    Description
                                </button>
                                <button className="text-gray-500 hover:text-[#253D4E] px-3 py-2 border-[1px] font-medium text-center rounded-full text-sm">
                                    Additional info
                                </button>
                                <button className="text-gray-500 hover:text-[#253D4E] px-3 py-2 border-[1px] font-medium text-center rounded-full text-sm">
                                    Reviews (3)
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="py-8">
                                <div className="space-y-6">
                                    <h3 className="text-lg font-semibold text-[#253D4E] mb-4">
                                        {product.name || 'Product Details'}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {product.product_details || product.description || 'No details available'}
                                    </p>
                                    {product.description && product.product_details && (
                                        <p className="text-gray-600 text-sm leading-relaxed mt-4">
                                            {product.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="col-span-1">
                        <CategorySidebar />
                    </div>
                </div>

                <Section />
                <Footer />
            </div>
        </>
    );
};

export default ProductDetail; 