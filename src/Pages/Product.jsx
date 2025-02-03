import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Product_mobile from '../Components/Product_mobile';

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://ecommerce-shop-qg3y.onrender.com/api/product/${id}`);
            if (response.data.success) {
                setProduct(response.data.data);
                setSelectedImage(response.data.data.images[0]);
                if (response.data.data.sizes && response.data.data.sizes.length > 0) {
                    setSelectedSize(response.data.data.sizes[0]);
                }
                if (response.data.data.colours && response.data.data.colours.length > 0) {
                    setSelectedColor(response.data.data.colours[0]);
                }
            }
        } catch (error) {
            console.error('Error fetching product:', error);
            toast.error('Failed to fetch product details');
        } finally {
            setLoading(false);
        }
    };

    const handleAddToCart = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Please login to add items to cart');
                navigate('/login');
                return;
            }

            if (product.sizes && product.sizes.length > 0 && !selectedSize) {
                toast.error('Please select a size');
                return;
            }

            if (product.colours && product.colours.length > 0 && !selectedColor) {
                toast.error('Please select a color');
                return;
            }

            const response = await axios.post(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/addToCart',
                {
                    productId: product._id,
                    quantity: 1,
                    productSize: selectedSize,
                    productColour: selectedColor
                },
                {
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.success) {
                toast.success('Item added to cart successfully');
            } else {
                toast.error(response.data.message || 'Failed to add item to cart');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            toast.error('Failed to add item to cart');
        }
    };

    const handleAddToWishlist = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Please login to add items to wishlist');
                navigate('/login');
                return;
            }

            const response = await axios.post(
                'https://ecommerce-shop-qg3y.onrender.com/api/wishlist/add',
                {
                    productId: product._id
                },
                {
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.success) {
                toast.success('Item added to wishlist successfully');
            } else {
                toast.error(response.data.message || 'Failed to add item to wishlist');
            }
        } catch (error) {
            console.error('Error adding to wishlist:', error);
            toast.error('Failed to add item to wishlist');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3BB77E]"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500">Product not found</div>
            </div>
        );
    }

    return (
        <>
            {/* Mobile Version */}
            <Product_mobile
                product={product}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                handleAddToCart={handleAddToCart}
                handleAddToWishlist={handleAddToWishlist}
                loading={loading}
            />

            {/* Desktop Version */}
            <div className="hidden lg:block container mx-auto px-4 py-8 mt-40">
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="grid grid-cols-2 gap-8 p-8">
                        {/* Product Images */}
                        <div>
                            <div className="mb-4 aspect-square">
                                <img
                                    src={selectedImage || product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(image)}
                                        className={`aspect-square border-2 rounded-lg overflow-hidden 
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

                        {/* Product Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-[#253D4E] mb-4">{product.name}</h1>
                            
                            {/* Ratings */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className="text-yellow-400">★</span>
                                    ))}
                                </div>
                                <span className="text-gray-600">({product.reviews} reviews)</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-3xl font-bold text-[#3BB77E]">₹{product.price}</span>
                                {product.originalPrice && (
                                    <>
                                        <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                                        <span className="text-sm text-red-500 bg-red-50 px-3 py-1 rounded-full">
                                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                                        </span>
                                    </>
                                )}
                            </div>

                            {/* Size Selection */}
                            {product.sizes && product.sizes.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-medium text-gray-700 mb-3">Select Size</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-6 py-2 rounded-full border ${
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
                                <div className="mb-8">
                                    <h3 className="text-sm font-medium text-gray-700 mb-3">Select Color</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {product.colours.map((color) => (
                                            <button
                                                key={color}
                                                onClick={() => setSelectedColor(color)}
                                                className={`px-6 py-2 rounded-full border ${
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
                            <div className="flex gap-4">
                                <button
                                    onClick={handleAddToWishlist}
                                    className="flex-1 py-3 border border-[#3BB77E] text-[#3BB77E] rounded-full hover:bg-[#3BB77E] hover:text-white transition-colors"
                                    disabled={loading}
                                >
                                    Add to Wishlist
                                </button>
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 py-3 bg-[#3BB77E] text-white rounded-full hover:bg-[#2a9c66] transition-colors"
                                    disabled={loading}
                                >
                                    Add to Cart
                                </button>
                            </div>

                            {/* Product Description */}
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-[#253D4E] mb-4">Product Description</h2>
                                <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product; 