import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderDetails = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    toast.error('Please login to view order details');
                    navigate('/login');
                    return;
                }

                const response = await axios.get(
                    `https://ecommerce-shop-qg3y.onrender.com/api/order/displayOrderById?orderId=${orderId}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );

                if (response.data.success) {
                    setOrderDetails(response.data.data);
                    console.log('Order details:', response.data.data);
                } else {
                    toast.error(response.data.message || 'Failed to fetch order details');
                }
            } catch (error) {
                console.error('Error fetching order details:', error);
                toast.error(error.response?.data?.message || 'Error loading order details');
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

    if (!orderDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500">Order not found</div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                {/* Order Header */}
                <div className="border-b pb-4 mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">Order Details</h1>
                    <p className="text-gray-600 mt-2">Order ID: {orderId}</p>
                    <p className="text-gray-600">Order Date: {new Date(orderDetails.createdAt).toLocaleDateString()}</p>
                    <div className="mt-2">
                        <span className="inline-block px-3 py-1 bg-[#3BB77E] text-white rounded-full text-sm">
                            {orderDetails.orderStatus || 'Processing'}
                        </span>
                    </div>
                </div>

                {/* Shipping Address */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium">{orderDetails.deliveryAddress.fullName}</p>
                        <p>{orderDetails.deliveryAddress.addressLine1}</p>
                        {orderDetails.deliveryAddress.addressLine2 && (
                            <p>{orderDetails.deliveryAddress.addressLine2}</p>
                        )}
                        {orderDetails.deliveryAddress.landmark && (
                            <p>Landmark: {orderDetails.deliveryAddress.landmark}</p>
                        )}
                        <p>{orderDetails.deliveryAddress.city}, {orderDetails.deliveryAddress.state} - {orderDetails.deliveryAddress.pincode}</p>
                        <p className="mt-2">📱 {orderDetails.deliveryAddress.phoneNumber}</p>
                    </div>
                </div>

                {/* Order Items */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Order Items</h2>
                    <div className="space-y-4">
                        {orderDetails.items.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 border-b pb-4">
                                <div className="w-20 h-20 flex-shrink-0">
                                    {item.productImage ? (
                                        <img
                                            src={item.productImage}
                                            alt={item.productName}
                                            className="w-full h-full object-cover rounded"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100 rounded text-sm text-gray-500">${item.productName}</div>`;
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded text-sm text-gray-500">
                                            {item.productName}
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-medium">{item.productName}</h3>
                                    <div className="mt-1 text-sm text-gray-600">
                                        <p>Size: {item.productSize}</p>
                                        <p>Color: {item.productColour}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#3BB77E]">₹{item.price}</p>
                                    <p className="text-sm text-gray-600">Total: ₹{item.price * item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>₹{orderDetails.totalAmount}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-semibold pt-2 border-t">
                                <span>Total:</span>
                                <div className="text-right">
                                    <span className="text-[#3BB77E]">₹{orderDetails.totalAmount}</span>
                                    <p className="text-sm text-gray-500">Including GST</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Information */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p>Payment Method: {orderDetails.paymentMethod}</p>
                        <p>Payment Status: {orderDetails.paymentStatus || 'Pending'}</p>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-8 flex justify-end">
                    <button
                        onClick={() => navigate('/order')}
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