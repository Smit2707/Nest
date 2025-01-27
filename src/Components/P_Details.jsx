import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import axios from 'axios';
import ProductCard from './ProductCard';
import Section from './Section';
import Footer from './Footer';

const P_Details = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);
                console.log('Fetching product with ID:', id);
                
                const response = await axios.get(`https://ecommerce-shop-qg3y.onrender.com/api/product/display?id=${id}`);
                console.log('API Response:', response.data);

                if (response.data && response.data.success) {
                    // Access the product directly from response.data.data.product
                    const productData = response.data.data.product;
                    const similarProductsData = response.data.data.similarProducts;

                    console.log('Product Data:', productData);
                    console.log('Similar Products:', similarProductsData);

                    if (!productData) {
                        throw new Error('Product data not found');
                    }

                    setProduct(productData);
                    setSimilarProducts(similarProductsData || []);

                    // Set initial size if available
                    if (productData.size && productData.size.length > 0) {
                        setSelectedSize(productData.size[0]);
                    }
                } else {
                    throw new Error(response.data?.message || 'Failed to fetch product');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                setError(error.message || 'Failed to load product');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    const handleImageSelect = (index) => {
        setSelectedImage(index);
    };

    const handleAddToCart = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            if (!selectedSize) {
                alert('Please select a size');
                return;
            }

            const cartData = {
                productId: product._id,
                quantity: quantity,
                price: product.price,
                totalPrice: product.price * quantity,
                productSize: selectedSize,
                productColour: product.colour?.[0] || null
            };

            console.log('Adding to cart:', cartData);

            const response = await axios.post(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/addToCart',
                cartData,
                {
                    headers: {
                        'Authorization': token
                    }
                }
            );

            console.log('Add to cart response:', response.data);

            if (response.data.success) {
                // Dispatch event to update cart count
                window.dispatchEvent(new Event('cartUpdated'));
                alert('Product added to cart successfully!');
                navigate('/cart');
            } else {
                throw new Error(response.data.message || 'Failed to add item to cart');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            const errorMessage = error.response?.data?.message || error.message;
            
            // Only redirect if token is actually invalid
            if (error.response?.status === 401 && !localStorage.getItem('token')) {
                navigate('/login');
            } else {
                alert(errorMessage || 'Failed to add item to cart. Please try again.');
            }
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3BB77E]"></div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500">{error || 'Product not found'}</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Home</Link>
                <span className="text-gray-500">•</span>
                <Link to="/shop" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Shop</Link>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">{product.name}</span>
            </div>

            {/* Product Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Product Images */}
                <div>
                    <div className="bg-[#F4F6FA] rounded-lg p-4 mb-4">
                        <img
                            src={product.product_images[selectedImage]}
                            alt={product.name}
                            className="w-full h-[400px] object-contain"
                        />
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        {product.product_images.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => handleImageSelect(index)}
                                className={`bg-[#F4F6FA] rounded-lg p-2 cursor-pointer ${
                                    selectedImage === index ? 'border-2 border-[#3BB77E]' : ''
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`${product.name} ${index + 1}`}
                                    className="w-full h-20 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <div className="mb-4">
                        <span className="text-[#3BB77E] text-sm">
                            {product.stock === 'available' ? 'In Stock' : 'Out of Stock'}
                        </span>
                        <h1 className="text-3xl font-bold text-[#253D4E] mt-2">{product.name}</h1>
                        <div className="flex items-center gap-4 mt-4">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={16} />
                                ))}
                            </div>
                            <span className="text-gray-500">(32 reviews)</span>
                            <span className="text-[#3BB77E]">By {product.brand}</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold text-[#3BB77E]">₹{product.price}</span>
                            <span className="text-xl text-gray-400 line-through">₹{(product.price * 1.1).toFixed(2)}</span>
                            <span className="bg-[#FFE5E5] text-[#FA5246] px-3 py-1 rounded-full text-sm">10% Off</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-600">{product.description}</p>
                    </div>

                    {/* Size Selection */}
                    {product.size && (
                        <div className="mb-6">
                            <h3 className="text-[#253D4E] font-medium mb-2">Size:</h3>
                            <div className="flex gap-2">
                                {product.size.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded-full ${
                                            selectedSize === size
                                                ? 'bg-[#3BB77E] text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-[#3BB77E] hover:text-white'
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Color Selection */}
                    {product.colour && (
                        <div className="mb-6">
                            <h3 className="text-[#253D4E] font-medium mb-2">Colors:</h3>
                            <div className="flex gap-2">
                                {product.colour.map((color) => (
                                    <span key={color} className="px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                                        {color}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity and Add to Cart */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center border rounded">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="px-3 py-2 text-gray-600 hover:text-[#3BB77E]"
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-16 text-center border-0 focus:ring-0"
                            />
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="px-3 py-2 text-gray-600 hover:text-[#3BB77E]"
                            >
                                +
                            </button>
                        </div>
                        <button 
                            onClick={handleAddToCart}
                            className="bg-[#3BB77E] text-white px-6 py-2 rounded hover:bg-[#2a9c64]"
                        >
                            Add to Cart
                        </button>
                        <button className="p-2 text-gray-400 hover:text-[#3BB77E]">
                            <FiHeart size={24} />
                        </button>
                    </div>

                    {/* Product Details */}
                    <div className="border-t pt-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-500">Category:</p>
                                <p className="text-gray-500">Brand:</p>
                                <p className="text-gray-500">Stock:</p>
                            </div>
                            <div>
                                <p className="text-[#3BB77E]">{product.categoryName}</p>
                                <p className="text-[#3BB77E]">{product.brand}</p>
                                <p className="text-[#3BB77E]">{product.stock}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Description */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#253D4E] mb-4">Product Details</h2>
                <p className="text-gray-600">{product.product_details}</p>
            </div>

            {/* Similar Products */}
            {similarProducts.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold text-[#253D4E] mb-6">Similar Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {similarProducts.map((similarProduct) => (
                            <ProductCard
                                key={similarProduct._id}
                                product={{
                                    id: similarProduct._id,
                                    image: similarProduct.product_images[0],
                                    title: similarProduct.name,
                                    brand: similarProduct.brand,
                                    price: similarProduct.price,
                                    badge: 'New',
                                    badgeColor: 'bg-[#3BB77E]'
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}

            <Section />
            <Footer />
        </div>
    );
};

export default P_Details; 