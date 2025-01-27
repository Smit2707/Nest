import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import axios from 'axios';

const Cart = () => {
    const [cartData, setCartData] = useState({ items: [], totalAmount: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCartItems();

        // Add event listener for cart updates
        window.addEventListener('cartUpdated', fetchCartItems);

        // Cleanup
        return () => {
            window.removeEventListener('cartUpdated', fetchCartItems);
        };
    }, []);

    const fetchCartItems = async () => {
        try {
            setLoading(true);
            setError(null);
            console.log('Fetching cart items...');
            
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login to view your cart');
            }

            console.log('Using token:', token);
            const response = await axios.get('https://ecommerce-shop-qg3y.onrender.com/api/cart/displayCart', {
                headers: {
                    'Authorization': token
                }
            });

            console.log('Cart API Response:', response.data);

            if (response.data.success) {
                const cartData = response.data.data[0] || { items: [], totalPrice: 0 };
                console.log('Raw cart data:', cartData);
                
                if (!cartData.items) {
                    console.log('No items in cart data:', cartData);
                    setCartData({ items: [], totalAmount: 0 });
                    return;
                }

                const transformedData = {
                    items: cartData.items.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        price: item.price,
                        totalPrice: item.totalPrice,
                        productColour: item.productColour,
                        productSize: item.productSize,
                        product: item.product
                    })),
                    totalAmount: cartData.totalPrice
                };
                
                console.log('Transformed cart data:', transformedData);
                setCartData(transformedData);
                
                // Dispatch event to update cart count in navbar
                window.dispatchEvent(new Event('cartUpdated'));
            } else {
                throw new Error(response.data.message || 'Failed to fetch cart items');
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
            const errorMessage = error.response?.data?.message || error.message;
            setError(errorMessage);
            
            // Only redirect if token is actually invalid
            if (error.response?.status === 401 && !localStorage.getItem('token')) {
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleQuantityChange = async (itemId, newQuantity) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login to update cart');
            }

            const response = await axios.post(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/updateQuantity',
                { itemId, quantity: newQuantity },
                { 
                    headers: { 
                        'Authorization': `Bearer ${token}`
                    } 
                }
            );

            if (response.data.success) {
                fetchCartItems();
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
            if (error.response?.status === 401 || error.response?.status === 403) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                alert(error.message || 'Failed to update quantity. Please try again.');
            }
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login to remove items from cart');
            }

            const response = await axios.delete(
                `https://ecommerce-shop-qg3y.onrender.com/api/cart/removeCart/${itemId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            if (response.data.success) {
                fetchCartItems();
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            console.error('Error removing item:', error);
            if (error.response?.status === 401 || error.response?.status === 403) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                alert(error.message || 'Failed to remove item. Please try again.');
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

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    if (!cartData.items || cartData.items.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
                <Link to="/shop" className="text-[#3BB77E] hover:underline">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[#253D4E] mb-8">Shopping Cart</h1>
            
            <div className="bg-white rounded-lg shadow-sm">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 p-4 border-b text-gray-600 font-medium">
                    <div className="col-span-4">PRODUCT</div>
                    <div className="col-span-2 text-center">PRICE</div>
                    <div className="col-span-2 text-center">QUANTITY</div>
                    <div className="col-span-2 text-center">SIZE/COLOR</div>
                    <div className="col-span-2 text-center">TOTAL</div>
                </div>

                {/* Cart Items */}
                {cartData.items.map((item) => (
                    <div key={item.productId} className="grid grid-cols-12 gap-4 p-4 border-b items-center">
                        <div className="col-span-4">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={item.product?.product_images?.[0]} 
                                    alt={item.product?.name}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div>
                                    <h3 className="font-medium text-gray-800">{item.product?.name}</h3>
                                    <p className="text-gray-500">{item.product?.brand}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 text-center">₹{item.price}</div>
                        <div className="col-span-2">
                            <div className="flex items-center justify-center">
                                <button 
                                    onClick={() => handleQuantityChange(item.productId, Math.max(1, item.quantity - 1))}
                                    className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-l"
                                    aria-label="Decrease quantity"
                                >
                                    -
                                </button>
                                <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                                <button 
                                    onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                                    className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-r"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="col-span-2 text-center">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-sm text-gray-600">Stock: {item.product?.stock || 'Available'}</span>
                            </div>
                        </div>
                        <div className="col-span-2 text-center flex items-center justify-between px-4">
                            <span>₹{item.totalPrice}</span>
                            <button 
                                onClick={() => handleRemoveItem(item.productId)}
                                className="text-gray-400 hover:text-red-500"
                                aria-label="Remove item"
                            >
                                <FiTrash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-8 bg-white rounded-lg shadow-sm p-6 max-w-md ml-auto">
                <h2 className="text-xl font-bold text-[#253D4E] mb-4">Cart Summary</h2>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">₹{cartData.totalAmount?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium">Free</span>
                </div>
                <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-[#253D4E]">Total:</span>
                        <span className="text-lg font-bold text-[#3BB77E]">₹{cartData.totalAmount?.toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-[#3BB77E] text-white py-3 rounded-lg hover:bg-[#2a9c64]">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart; 