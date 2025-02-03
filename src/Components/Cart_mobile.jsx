import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Cart_mobile = ({ cartData, loading, error, handleQuantityChange, handleRemoveItem, calculateSubtotal }) => {
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center lg:hidden">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3BB77E]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center lg:hidden">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    if (!cartData.items || cartData.items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 lg:hidden">
                <h1 className="text-2xl font-bold text-[#253D4E] mb-6">Shopping Cart</h1>
                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h2 className="text-xl font-bold text-gray-800">Your cart is empty</h2>
                        <p className="text-gray-600 text-center">Looks like you haven't added any items to your cart yet.</p>
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
        <div className="container mx-auto px-4 py-8 lg:hidden">
            <h1 className="text-2xl font-bold text-[#253D4E] mb-6">Shopping Cart</h1>
            
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
                {cartData.items.map((item) => (
                    <div key={item.productId} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-start gap-4">
                            {/* Product Image */}
                            <img
                                src={item.productImage[0] || 'https://via.placeholder.com/80'}
                                alt={item.productName}
                                className="w-24 h-24 object-cover rounded"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/80';
                                }}
                            />
                            
                            {/* Product Details */}
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-medium text-[#253D4E]">{item.productName}</h3>
                                    <button
                                        onClick={() => handleRemoveItem(item.productId, item.productColour, item.productSize)}
                                        className="text-red-500 p-1"
                                    >
                                        <FaTrash size={16} />
                                    </button>
                                </div>
                                
                                <p className="text-[#3BB77E] font-medium mt-1">₹{item.price}</p>
                                
                                {/* Size and Color */}
                                <div className="text-sm text-gray-600 mt-2">
                                    <p>Size: {item.productSize}</p>
                                    <p>Color: {item.productColour}</p>
                                </div>
                                
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2 mt-3">
                                    <span className="text-sm text-gray-600">Quantity:</span>
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
                                
                                {/* Item Total */}
                                <div className="mt-3 text-right">
                                    <span className="text-sm text-gray-600">Total: </span>
                                    <span className="font-medium text-[#3BB77E]">
                                        ₹{(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Cart Summary */}
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
                    onClick={() => navigate('/my-addresses')}
                    className="w-full bg-[#3BB77E] text-white py-3 rounded-full hover:bg-[#2a9c66] transition-colors"
                >
                    Proceed to Checkout
                </button>
                
                <Link 
                    to="/shop"
                    className="w-full mt-4 py-3 text-center block text-[#3BB77E] hover:text-[#2a9c66] transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
};

export default Cart_mobile; 