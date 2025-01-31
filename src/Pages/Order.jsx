import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Order = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        if (orderId) {
            fetchOrderById(orderId);
        } else {
            fetchCartItems();
            fetchDefaultAddress();
        }
    }, [orderId]);

    const fetchOrderById = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            console.log('Fetching order details for ID:', id);
            const response = await axios.get(
                `https://ecommerce-shop-qg3y.onrender.com/api/order/displayOrderById?orderId=${id}`,
                {
                    headers: {
                        'Authorization': `${token}`
                    }
                }
            );

            console.log('Order details response:', response.data);

            if (response.data.success) {
                const orderData = response.data.data;
                setOrderDetails(orderData);
                // Set cart items from order items
                setCartItems(orderData.items.map(item => ({
                    ...item,
                    productSize: item.productSize || 'N/A',
                    productColour: item.productColour || 'N/A',
                    quantity: item.quantity || 1,
                    price: item.price || 0
                })));
                // Set delivery address
                setSelectedAddress(orderData.deliveryAddress);
            } else {
                throw new Error('Failed to fetch order details');
            }
        } catch (error) {
            console.error('Error fetching order details:', error);
            // toast.error('Failed to fetch order details');
        }
    };

    const fetchCartItems = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            console.log('Fetching cart items...');
            // First get the cart ID
            const cartResponse = await axios.get(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/displayCart',
                {
                    headers: {
                        'Authorization': `${token}`
                    }
                }
            );

            if (cartResponse.data.success && cartResponse.data.data.length > 0) {
                const cartId = cartResponse.data.data[0]._id; // Get the cart ID
                console.log('Cart ID:', cartId);

                // Now fetch the specific cart using the ID
                const response = await axios.get(
                    `https://ecommerce-shop-qg3y.onrender.com/api/cart/displayCartById?cartId=${cartId}`,
                    {
                        headers: {
                            'Authorization': `${token}`
                        }
                    }
                );

                console.log('Cart API Response:', response.data);

                if (response.data.success) {
                    // Process cart items with all available data
                    const processedItems = response.data.data.items.map(item => ({
                        productId: item.productId,
                        productName: item.productName,
                        productImage: Array.isArray(item.productImage) ? item.productImage[0] : item.productImage,
                        productSize: item.size || item.productSize || 'N/A',
                        productColour: item.colour || item.productColour || 'N/A',
                        quantity: item.quantity || 1,
                        price: item.price || 0,
                        totalPrice: (item.price || 0) * (item.quantity || 1),
                        productBrand: item.productBrand || '',
                        productCategory: item.productCategory || '',
                        productDescription: item.productDescription || '',
                        productStock: item.productStock || 'In Stock'
                    }));

                    console.log('Processed cart items:', processedItems);
                    setCartItems(processedItems);
                } else {
                    throw new Error('Failed to fetch cart items');
                }
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
            // toast.error('Failed to fetch cart items');
        }
    };

    const fetchDefaultAddress = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) return;

            const response = await axios.get(
                'https://ecommerce-shop-qg3y.onrender.com/api/address/displayAllAdress',
                {
                    headers: {
                        'Authorization': `${token}`
                    }
                }
            );

            if (response.data.success) {
                const defaultAddr = response.data.data.find(addr => addr.isDefault);
                setSelectedAddress(defaultAddr || null);
            }
        } catch (error) {
            console.error('Error fetching addresses:', error);
            // toast.error('Failed to fetch address');
        }
    };

    const createOrder = async () => {
        if (!selectedAddress) {
            toast.error('Please select a delivery address');
            return;
        }

        if (cartItems.length === 0) {
            toast.error('Your cart is empty');
            return;
        }

        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Please login to continue');
                navigate('/login');
                return;
            }

            // Format items according to API requirements
            const formattedItems = cartItems.map(item => ({
                productId: item.productId || item._id,
                productName: item.productName || item.name,
                price: parseFloat(item.price),
                quantity: parseInt(item.quantity),
                productDescription: item.productDescription || "Product Description",
                productCategory: item.productCategory || "General",
                productSize: Array.isArray(item.productSize) ? item.productSize[0] : (item.productSize || "Standard"),
                productColour: Array.isArray(item.productColour) ? item.productColour[0] : (item.productColour || "Default"),
                product_details: item.product_details || "Product Details"
            }));

            // Calculate total amount
            const totalAmount = formattedItems.reduce((total, item) => total + (item.price * item.quantity), 0);

            const orderData = {
                items: formattedItems,
                totalAmount: totalAmount,
                paymentMethod: "Cash on Delivery",
                deliveryAddress: selectedAddress._id
            };

            console.log('Creating order with data:', JSON.stringify(orderData, null, 2));

            // Get cart ID first
            const cartResponse = await axios.get(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/displayCart',
                {
                    headers: {
                        'Authorization': `${token}`
                    }
                }
            );

            if (!cartResponse.data.success || !cartResponse.data.data.length) {
                throw new Error('Cart not found');
            }

            const cartId = cartResponse.data.data[0]._id;

            // Create order
            const response = await axios.post(
                'https://ecommerce-shop-qg3y.onrender.com/api/order/createOrder',
                orderData,
                {
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('Order API Response:', response.data);

            if (response.data.success) {
                const orderId = response.data.data._id;
                console.log('Order created successfully! Order ID:', orderId);

                // Show success message immediately after order creation
                toast.success('🎉 Order placed successfully! You can view your order details in My Orders page', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                // Try to clear cart but don't let it block navigation
                try {
                    await axios.delete(
                        `https://ecommerce-shop-qg3y.onrender.com/api/cart/clearCartById?cartId=${cartId}`,
                        {
                            headers: {
                                'Authorization': `${token}`
                            }
                        }
                    );
                } catch (cartError) {
                    console.error('Error clearing cart:', cartError);
                    // Don't show error to user since order was successful
                }

                // Navigate to my-orders page after a short delay
                setTimeout(() => {
                    navigate('/my-orders');
                }, 2000);
            } else {
                throw new Error(response.data.message || 'Failed to create order');
            }
        } catch (error) {
            console.error('Error creating order:', error);
            const errorMessage = error.response?.data?.message || error.message || 'Error creating order';
            toast.error(`Error: ${errorMessage}`);
            
            // If order was created but there was an error afterwards, still navigate
            if (error.response?.data?.success) {
                setTimeout(() => {
                    navigate('/my-orders');
                }, 2000);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 lg:mt-40">
            <h1 className="text-3xl font-bold text-[#253D4E] mb-8">
                {orderId ? 'Order Details' : 'Order Summary'}
            </h1>

            {/* Order ID and Date (only shown when viewing existing order) */}
            {orderDetails && (
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600 text-sm">Order ID</p>
                            <p className="font-medium">{orderDetails._id}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm">Order Date</p>
                            <p className="font-medium">
                                {new Date(orderDetails.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Delivery Address Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                    {orderId ? 'Delivery Address' : 'Select Delivery Address'}
                </h2>
                {selectedAddress ? (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="font-medium text-lg">{selectedAddress.fullName}</p>
                        <p className="text-gray-600 mt-1">{selectedAddress.addressLine1}</p>
                        {selectedAddress.addressLine2 && (
                            <p className="text-gray-600">{selectedAddress.addressLine2}</p>
                        )}
                        {selectedAddress.landmark && (
                            <p className="text-gray-600">Landmark: {selectedAddress.landmark}</p>
                        )}
                        <p className="text-gray-600">{`${selectedAddress.city}, ${selectedAddress.state} - ${selectedAddress.pincode}`}</p>
                        <p className="text-gray-600 mt-1">📱 {selectedAddress.phoneNumber}</p>
                        {!orderId && (
                            <button
                                onClick={() => navigate('/my-addresses')}
                                className="mt-4 text-[#3BB77E] hover:underline"
                            >
                                Change Address
                            </button>
                        )}
                    </div>
                ) : (
                    !orderId && (
                        <div className="text-center py-8 bg-white rounded-lg shadow-md">
                            <p className="text-gray-600 mb-4">No delivery address selected</p>
                            <button
                                onClick={() => navigate('/address')}
                                className="bg-[#3BB77E] text-white px-6 py-2 rounded-full hover:bg-[#2a9c66] transition-colors"
                            >
                                Add New Address
                            </button>
                        </div>
                    )
                )}
            </div>

            {/* Order Items Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Order Items</h2>
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-6">
                            <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                                {item.productImage ? (
                                    <img 
                                        src={item.productImage}
                                        alt={`${item.productName} - ${item.productBrand || ''} ${item.productColour || ''} ${item.productSize || ''}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            const fallbackText = document.createElement('span');
                                            fallbackText.className = 'text-gray-400 text-sm text-center p-2';
                                            fallbackText.textContent = `${item.productName} Image`;
                                            e.target.parentNode.appendChild(fallbackText);
                                        }}
                                    />
                                ) : (
                                    <div className="text-gray-400 text-sm text-center p-2">
                                        <span>{item.productName}</span>
                                        <br />
                                        <span className="text-xs">
                                            {[
                                                item.productBrand,
                                                item.productColour,
                                                item.productSize
                                            ].filter(Boolean).join(' - ')}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-lg text-gray-900">{item.productName}</h3>
                                {item.productBrand && (
                                    <p className="text-sm text-gray-500 mb-2">Brand: {item.productBrand}</p>
                                )}
                                <div className="mt-2 space-y-1">
                                    <p className="text-gray-600">
                                        <span className="font-medium">Size:</span> {item.productSize}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Color:</span> {item.productColour}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Quantity:</span> {item.quantity} × ₹{item.price}
                                    </p>
                                    {item.productDescription && (
                                        <p className="text-gray-600 text-sm mt-2">
                                            <span className="font-medium">Description:</span> {item.productDescription}
                                        </p>
                                    )}
                                    {item.productCategory && (
                                        <p className="text-gray-600 text-sm">
                                            <span className="font-medium">Category:</span> {item.productCategory}
                                        </p>
                                    )}
                                    <p className="text-[#3BB77E] text-sm mt-1">
                                        {item.productStock}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-lg text-[#3BB77E]">₹{item.price * item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Order Total Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex justify-between mb-2 text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</span>
                </div>
                <div className="flex justify-between mb-2 text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-[#3BB77E]">
                            ₹{orderDetails ? orderDetails.totalAmount : cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Place Order Button - Only show when creating new order */}
            {!orderId && (
                <div className="flex justify-end">
                    <button
                        onClick={createOrder}
                        disabled={loading || !selectedAddress || cartItems.length === 0}
                        className="bg-[#3BB77E] text-white px-8 py-3 rounded-full hover:bg-[#2a9c66] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium"
                    >
                        {loading ? 'Placing Order...' : 'Place Order'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Order; 