import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderDets = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrderDetails();
    }, [orderId]);

    const fetchOrderDetails = async () => {
        try {
            const response = await axios.get(
                `https://ecommerce-shop-qg3y.onrender.com/api/order/displayOrder?orderId=${orderId}`
            );

            if (response.data.success) {
                console.log('Order Details:', response.data.data);
                setOrderDetails(response.data.data);
            } else {
                toast.error('Failed to fetch order details');
            }
        } catch (error) {
            console.error('Error fetching order details:', error);
            toast.error('Error fetching order details');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3BB77E]"></div>
            </div>
        );
    }

    if (!orderDetails) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center text-red-500">Order not found</div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h1 className="text-2xl font-bold text-[#253D4E] mb-4">Order Details</h1>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p className="text-gray-600">Order ID</p>
                        <p className="font-medium">{orderDetails._id}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Order Date</p>
                        <p className="font-medium">
                            {new Date(orderDetails.createdAt).toLocaleString()}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600">Payment Method</p>
                        <p className="font-medium">{orderDetails.paymentMethod}</p>
                    </div>
                    <div>
                        <p className="text-gray-600">Total Amount</p>
                        <p className="font-medium text-[#3BB77E]">₹{orderDetails.totalAmount}</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Items</h2>
                    <div className="space-y-4">
                        {orderDetails.items.map((item, index) => (
                            <div key={index} className="border rounded-lg p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-medium">{item.productName}</h3>
                                        <p className="text-sm text-gray-600">Category: {item.productCategory}</p>
                                        <p className="text-sm text-gray-600">Size: {item.productSize}</p>
                                        <p className="text-sm text-gray-600">Color: {item.productColour}</p>
                                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                        <p className="text-sm text-gray-600">{item.productDescription}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-[#3BB77E]">₹{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-3">Delivery Address</h2>
                    <div className="border rounded-lg p-4">
                        <p className="font-medium">{orderDetails.deliveryAddress.fullName}</p>
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
                        <p className="text-gray-600">Phone: {orderDetails.deliveryAddress.phoneNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDets; 