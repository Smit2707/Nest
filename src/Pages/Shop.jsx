import React, { useState, useEffect } from 'react';
import Layout from '../Components/Layout';
import Shop_mobile from '../Components/Shop_mobile';
import { Link, useNavigate } from 'react-router-dom';
import CategorySidebar from '../Components/CategorySidebar';
import ProductCard from '../Components/ProductCard';
import Footer from '../Components/Footer';
import Section from '../Components/Section';
import DealCard from '../Components/DealCard';
import { IoMdAdd } from "react-icons/io";
import axios from 'axios';

const Shop = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log('Fetching products...');
                const response = await axios.get('https://ecommerce-shop-qg3y.onrender.com/api/product/displayAll');
                console.log('Products API response:', response.data);

                if (response.data.success) {
                    setProducts(response.data.data);
                } else {
                    setError('Failed to load products');
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to load products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

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

    // Transform product data for ProductCard component
    const transformProduct = (product) => ({
        product: {
            id: product._id,
            badge: "Sale",
            badgeColor: "bg-[#3BB77E]",
            image: product.product_images?.[0] || '/assets/placeholder.png',
            brand: product.brand,
            title: product.name,
            rating: 5,
            reviews: 0,
            currentPrice: product.price,
            originalPrice: (product.price * 1.1).toFixed(2), // 10% higher for original price
        }
    });

    return (
        <Layout>
            {/* Mobile Version */}
            <Shop_mobile products={products} loading={loading} error={error} />

            {/* Desktop Version */}
            <div className="hidden lg:block container mx-auto px-4 mt-[80px]">
                        {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-8">
                    <span className="text-[#3BB77E]">Home</span>
                            <span className="text-gray-500">•</span>
                    <span className="text-gray-500">Shop</span>
                        </div>

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-[#253D4E]">Products</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-500 text-sm">
                            {loading ? 'Loading...' : `${products.length} items found`}
                        </span>
                    </div>
                    </div>

                {/* Main Content with Sidebar Layout */}
                    <div className="grid grid-cols-4 gap-8">
                        {/* Left Sidebar */}
                        <div className="col-span-1">
                            <CategorySidebar />
                        </div>

                    {/* Product Grid */}
                        <div className="col-span-3">
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3BB77E]"></div>
                                    </div>
                        ) : error ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="text-red-500">{error}</div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product) => (
                                    <div 
                                        key={product._id}
                                        onClick={() => handleProductClick(product._id)}
                                        className="cursor-pointer"
                                    >
                                        <ProductCard {...transformProduct(product)} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Shop;