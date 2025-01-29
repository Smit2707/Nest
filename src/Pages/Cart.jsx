import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';

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

    const handleRemoveItem = async (productId) => {
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
                    productId: productId
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
                    quantity: newQuantity
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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-[#253D4E] mb-8">Shopping Cart</h1>
            
            <div className="bg-white rounded-lg shadow-sm">
                {/* Table Header */}
                <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4 border-b bg-gray-50">
                    <div>PRODUCT</div>
                    <div>QUANTITY</div>
                    <div>SIZE/COLOR</div>
                    <div>TOTAL</div>
                </div>

                {/* Cart Items */}
                {cartData.items && cartData.items.map((item, index) => (
                    <div key={index} className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 p-4 border-b items-center">
                        {/* Product Info */}
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 flex-shrink-0">
                                {item.productImage ? (
                                    <img
                                        src={item.productImage}
                                        alt={item.productName}
                                        className="w-full h-full object-cover rounded"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                                        <span className="text-gray-400 text-xs">No Image</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                <h3 className="font-medium">{item.productName}</h3>
                                <p className="text-sm text-gray-500">₹{item.price}</p>
                            </div>
                        </div>

                        {/* Quantity Controls */}
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

                        {/* Size and Color */}
                        <div className="space-y-2">
                            <div className="text-sm text-gray-600">
                                <p>Size: {item.size || item.productSize || (item.productDetails?.size?.[0] || 'N/A')}</p>
                                <p>Color: {item.colour || item.productColour || (item.productDetails?.colour?.[0] || 'N/A')}</p>
                            </div>
                        </div>

                        {/* Total and Remove */}
                        <div className="flex items-center justify-between">
                            <span className="font-medium text-[#3BB77E]">₹{(item.price * item.quantity).toFixed(2)}</span>
                            <button
                                onClick={() => handleRemoveItem(item.productId)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Remove item"
                            >
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-8 flex flex-col items-end">
                <div className="w-full max-w-md space-y-4">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal:</span>
                        <span className="text-[#3BB77E] font-medium">₹{calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Shipping:</span>
                        <span>Calculated at next step</span>
                    </div>
                    <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold">Total:</span>
                            <div className="text-right">
                                <span className="text-xl font-semibold text-[#3BB77E]">₹{calculateSubtotal().toFixed(2)}</span>
                                <p className="text-sm text-gray-500">Including GST</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            const token = localStorage.getItem('token');
                            if (!token) {
                                toast.error('Please login to proceed');
                                navigate('/login');
                                return;
                            }
                            navigate('/address');
                        }}
                        className="w-full bg-[#3BB77E] text-white py-3 rounded-full hover:bg-[#2a9c66] transition-colors mt-4"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart; 