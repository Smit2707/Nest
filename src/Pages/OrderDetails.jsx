import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderDetails = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchOrderDetails();
    }, [orderId]);

    const fetchOrderDetails = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Please login to view order details');
                navigate('/login');
                return;
            }

            const response = await axios.get(
                `https://ecommerce-shop-qg3y.onrender.com/api/order/displayOrder?orderId=${orderId}`,
                {
                    headers: {
                        'Authorization': token
                    }
                }
            );

            if (response.data.success) {
                setOrder(response.data.data);
                setError('');
            } else {
                throw new Error(response.data.message || 'Failed to fetch order details');
            }
        } catch (error) {
            console.error('Error fetching order details:', error);
            setError('Failed to fetch order details');
            toast.error(error.response?.data?.message || 'Failed to fetch order details');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                Loading order details...
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <p className="text-red-500 mb-4">{error}</p>
                    <button
                        onClick={fetchOrderDetails}
                        className="bg-[#3BB77E] text-white px-6 py-2 rounded-full hover:bg-[#2a9c66]"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-600">Order not found</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-[#253D4E]">Order Details</h1>
                <button
                    onClick={() => navigate('/orders')}
                    className="text-[#3BB77E] hover:underline flex items-center gap-2"
                >
                    ← Back to Orders
                </button>
            </div>

            {/* Order Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <p className="text-gray-600 text-sm">Order ID</p>
                        <p className="font-medium">{order._id}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm">Order Date</p>
                        <p className="font-medium">{formatDate(order.createdAt)}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm">Payment Method</p>
                        <p className="font-medium">{order.paymentMethod}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm">Total Amount</p>
                        <p className="font-bold text-[#3BB77E]">₹{order.totalAmount}</p>
                    </div>
                </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Order Items</h2>
                <div className="space-y-4">
                    {order.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 py-4 border-b last:border-0">
                            <div className="w-24 h-24 flex-shrink-0">
                                <img
                                    src={item.productDetails?.product_images?.[0] || item.productImage}
                                    alt={item.productName}
                                    className="w-full h-full object-cover rounded"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/150';
                                    }}
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-lg">{item.productName}</h3>
                                <div className="mt-2 space-y-1 text-sm text-gray-600">
                                    <p>Brand: {item.productDetails?.brand || 'N/A'}</p>
                                    <p>Size: {Array.isArray(item.productSize) ? item.productSize.join(', ') : item.productSize}</p>
                                    <p>Color: {Array.isArray(item.productColour) ? item.productColour.join(', ') : item.productColour}</p>
                                    <p>Quantity: {item.quantity} × ₹{item.price}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
                <div className="text-gray-600">
                    <p className="font-medium text-gray-900">{order.deliveryAddress.fullName}</p>
                    <p>{order.deliveryAddress.addressLine1}</p>
                    {order.deliveryAddress.addressLine2 && (
                        <p>{order.deliveryAddress.addressLine2}</p>
                    )}
                    {order.deliveryAddress.landmark && (
                        <p>Landmark: {order.deliveryAddress.landmark}</p>
                    )}
                    <p>
                        {order.deliveryAddress.city}, {order.deliveryAddress.state} - {order.deliveryAddress.pincode}
                    </p>
                    <p>📱 {order.deliveryAddress.phoneNumber}</p>
                    <p className="mt-2 text-sm">
                        Address Type: {order.deliveryAddress.address_type}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails; 