import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderDetails = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('Please login to view order details');
                    navigate('/login');
                    return;
                }

                const response = await axios.get(
                    `https://ecommerce-shop-qg3y.onrender.com/api/order/displayOrder?orderId=${orderId}`,
                    {
                        headers: {
                            'Authorization': `${token}`
                        }
                    }
                );

                if (response.data.success) {
                    setOrderDetails(response.data.data);
                } else {
                    setError('Failed to fetch order details');
                }
            } catch (error) {
                console.error('Error fetching order details:', error);
                setError('Failed to load order details');
            } finally {
                setLoading(false);
            }
        };

        if (orderId) {
            fetchOrderDetails();
        }
    }, [orderId, navigate]);

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
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            </div>
        );
    }

    if (!orderDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-500">Order not found</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 md:mt-[220px] lg:mt-40">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                {/* Order Header */}
                <div className="border-b pb-4 mb-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-semibold text-[#253D4E]">Order Details</h1>
                            <p className="text-gray-600 mt-2">Order ID: {orderDetails._id}</p>
                            <p className="text-gray-600">
                                Ordered on: {new Date(orderDetails.createdAt).toLocaleString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-[#3BB77E]">₹{orderDetails.totalAmount}</p>
                            <p className="text-gray-600">Cash on Delivery</p>
                        </div>
                    </div>
                </div>

                {/* Order Items */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Order Items</h2>
                    <div className="space-y-4">
                        {orderDetails.items.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 border-b pb-4">
                                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                                    {item.productImage ? (
                                        <img
                                            src={item.productImage}
                                            alt={item.productName}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) : (
                                        <span className="text-gray-400 text-sm">{item.productName}</span>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium text-[#253D4E]">{item.productName}</h3>
                                    <div className="mt-1 grid grid-cols-2 gap-2 text-sm text-gray-600">
                                        <p>Size: {item.productSize}</p>
                                        <p>Color: {item.productColour}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ₹{item.price}</p>
                                    </div>
                                    <p className="mt-2 text-[#3BB77E] font-medium">
                                        Total: ₹{item.price * item.quantity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Delivery Address */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-[#253D4E]">{orderDetails.deliveryAddress.fullName}</p>
                        <p className="text-gray-600">{orderDetails.deliveryAddress.addressLine1}</p>
                        {orderDetails.deliveryAddress.addressLine2 && (
                            <p className="text-gray-600">{orderDetails.deliveryAddress.addressLine2}</p>
                        )}
                        {orderDetails.deliveryAddress.landmark && (
                            <p className="text-gray-600">Landmark: {orderDetails.deliveryAddress.landmark}</p>
                        )}
                        <p className="text-gray-600">
                            {orderDetails.deliveryAddress.city}, {orderDetails.deliveryAddress.state} - {orderDetails.deliveryAddress.pincode}
                        </p>
                        <p className="text-gray-600 mt-2">
                            Phone: {orderDetails.deliveryAddress.phoneNumber}
                        </p>
                    </div>
                </div>

                {/* Back Button */}
                <div className="flex justify-end">
                    <button
                        onClick={() => navigate('/my-orders')}
                        className="bg-[#3BB77E] text-white px-6 py-2 rounded-full hover:bg-[#2a9c66] transition-colors"
                    >
                        Back to Orders
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails; 