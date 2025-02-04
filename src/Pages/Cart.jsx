import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';
import Cart_mobile from '../Components/Cart_mobile';

const Cart = () => {
    const [cartData, setCartData] = useState({ items: [], totalAmount: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchCartItems = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            const response = await axios.get(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/displayCart',
                {
                    headers: {
                        'Authorization': ` ${token}`
                    }
                }
            );

            console.log('Cart Response:', response.data);

            if (response.data.success && response.data.data.length > 0) {
                const cartData = response.data.data[0];
                // Transform the cart data to include product details
                const transformedItems = cartData.items.map(item => ({
                    ...item,
                    productSize: item.size || item.productSize || (item.productDetails?.size?.[0] || 'N/A'),
                    productColour: item.colour || item.productColour || (item.productDetails?.colour?.[0] || 'N/A')
                }));

                setCartData({
                    items: transformedItems,
                    totalAmount: cartData.totalPrice || 0
                });
            } else {
                setCartData({ items: [], totalAmount: 0 });
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
            // toast.error('Failed to fetch cart items');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    const handleRemoveItem = async ( productId, productColour, productSize) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Please login to remove items');
                navigate('/login');
                return;
            }

            const response = await axios({
                method: 'DELETE',
                url: 'https://ecommerce-shop-qg3y.onrender.com/api/cart/removeCart',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    productId: productId,
                    productColour: productColour,
                    productSize: productSize
                }
            });

            if (response.data.success) {
                toast.success('Item removed from cart');
                fetchCartItems(); // Refresh cart after deletion
            } else {
                toast.error(response.data.message || 'Failed to remove item');
            }
        } catch (error) {
            console.error('Error removing item:', error);
            // toast.error('Failed to remove item from cart');
        }
    };

    const handleQuantityChange = async (itemId, action) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Please login to update cart');
                navigate('/login');
                return;
            }

            const currentItem = cartData.items.find(item => item.productId === itemId);
            if (!currentItem) return;

            let newQuantity;
            if (action === 'increase') {
                newQuantity = parseInt(currentItem.quantity) + 1;
            } else if (action === 'decrease') {
                newQuantity = Math.max(1, parseInt(currentItem.quantity) - 1);
            } else {
                return;
            }

            const response = await axios.put(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/updateCart',
                {
                    productId: itemId,
                    quantity: newQuantity,
                    productSize: currentItem.productSize,
                    productColour: currentItem.productColour
                },
                { 
                    headers: { 
                        'Authorization': ` ${token}`,
                        'Content-Type': 'application/json'
                    } 
                }
            );

            if (response.data.success) {
                toast.success('Cart updated successfully');
                fetchCartItems(); // Refresh the cart
            } else {
                toast.error(response.data.message || 'Failed to update quantity');
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
            toast.error('Failed to update quantity');
        }
    };

    const calculateSubtotal = () => {
        return cartData.items.reduce((total, item) => {
            const itemTotal = item.price * item.quantity;
            console.log(`Item: ${item.productName}, Price: ${item.price}, Quantity: ${item.quantity}, Total: ${itemTotal}`);
            return total + itemTotal;
        }, 0);
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
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-[#253D4E] mb-8">Shopping Cart</h1>
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
                        <p className="text-gray-600">Looks like you haven't added any items to your cart yet.</p>
                        <Link 
                            to="/shop" 
                            className="mt-4 px-6 py-2 bg-[#3BB77E] text-white rounded-full hover:bg-[#2a9c66] transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Mobile Version */}
            <Cart_mobile 
                cartData={cartData}
                loading={loading}
                error={error}
                handleQuantityChange={handleQuantityChange}
                handleRemoveItem={handleRemoveItem}
                calculateSubtotal={calculateSubtotal}
            />

            {/* Desktop Version */}
            <div className="hidden lg:block container mx-auto px-4 py-8 md:mt-[220px] lg:mt-40">
                <h1 className="text-2xl md:text-3xl font-bold text-[#253D4E] mb-6">Shopping Cart</h1>

                {loading ? (
                    <div className="flex justify-center items-center min-h-[400px]">
                        <p>Loading cart...</p>
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center p-4">{error}</div>
                ) : cartData.items.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">Your cart is empty</p>
                        <button
                            onClick={() => navigate('/shop')}
                            className="bg-[#3BB77E] text-white px-6 py-2 rounded-full hover:bg-[#2a9c66] transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-col gap-8">
                        {/* Cart Items Section */}
                        <div className="flex-grow">
                            {/* Cart Headers - Hidden on Mobile */}
                            <div className="hidden md:grid md:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-t-lg">
                                <div className="col-span-2">PRODUCT</div>
                                <div className="text-center">QUANTITY</div>
                                <div className="text-center">SIZE/COLOR</div>
                                <div className="text-right">TOTAL</div>
                            </div>

                            {/* Cart Items */}
                            <div className="space-y-4">
                                {cartData.items.map((item) => (
                                    <div key={item.productId} className="bg-white p-4 rounded-lg shadow-sm">
                                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                                            {/* Product Info - Full width on mobile */}
                                            <div className="col-span-1 md:col-span-2">
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={item.productImage[0] || 'https://via.placeholder.com/80'}
                                                        alt={item.productName}
                                                        className="w-20 h-20 object-cover rounded"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = 'https://via.placeholder.com/80';
                                                        }}
                                                    />
                                                    <div>
                                                        <h3 className="font-medium text-[#253D4E]">{item.productName}</h3>
                                                        <p className="text-sm text-gray-500">₹{item.price}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex justify-between md:justify-center items-center">
                                                <span className="md:hidden">Quantity:</span>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleQuantityChange(item.productId, 'decrease')}
                                                        className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="w-8 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => handleQuantityChange(item.productId, 'increase')}
                                                        className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Size/Color */}
                                            <div className="flex justify-between md:justify-center items-center">
                                                <span className="md:hidden">Size/Color:</span>
                                                <div className="text-gray-600">
                                                    <div>Size: {item.productSize}</div>
                                                    <div>Color: {item.productColour}</div>
                                                </div>
                                            </div>

                                            {/* Total Price */}
                                            <div className="flex justify-between md:justify-end items-center">
                                                <span className="md:hidden">Total:</span>
                                                <div className="text-[#3BB77E] font-medium">
                                                    ₹{(item.price * item.quantity).toFixed(2)}
                                                </div>
                                            </div>

                                            {/* Remove Button - Full width on mobile */}
                                            <div className="col-span-1 md:col-span-5 flex justify-end">
                                                <button
                                                    onClick={() => handleRemoveItem(item.productId, item.productColour, item.productSize)}
                                                    className="text-red-500 hover:text-red-700 text-sm"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cart Summary - Full width on mobile */}
                        <div className="lg:w-full">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h2 className="text-xl font-bold text-[#253D4E] mb-4">Cart Summary</h2>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span>Subtotal:</span>
                                        <span>₹{calculateSubtotal().toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Shipping:</span>
                                        <span>Calculated at next step</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-lg">
                                        <span>Total:</span>
                                        <span>₹{calculateSubtotal().toFixed(2)}</span>
                                    </div>
                                    <p className="text-sm text-gray-500">Including GST</p>
                                </div>

                                <button
                                    onClick={() => {
                                        const token = localStorage.getItem('token');
                                        if (!token) {
                                            toast.error('Please login to proceed');
                                            navigate('/login');
                                            return;
                                        }
                                        navigate('/my-addresses');
                                    }}
                                    className="w-full bg-[#3BB77E] text-white py-3 rounded-full hover:bg-[#2a9c66] transition-colors"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart; 