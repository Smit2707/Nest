import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import axios from 'axios';

const Cart = () => {
    const [cartData, setCartData] = useState({ items: [], totalAmount: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [selectedSizes, setSelectedSizes] = useState({});
    const [selectedColors, setSelectedColors] = useState({});

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
            
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login to view your cart');
            }

            const response = await axios.get('https://ecommerce-shop-qg3y.onrender.com/api/cart/displayCart', {
                headers: {
                    'Authorization': token
                }
            });

            console.log('Cart API Response:', response.data);

            if (response.data.success) {
                const cartData = response.data.data[0] || { items: [], totalPrice: 0 };
                console.log('Raw cart data:', cartData);
                
                // Check if cartData.items exists and is an array
                if (!cartData.items || !Array.isArray(cartData.items)) {
                    setCartData({ items: [], totalAmount: 0 });
                    return;
                }

                // Transform the cart data
                const transformedData = {
                    items: cartData.items.map(item => {
                        console.log('Processing cart item:', item);
                        return {
                            productId: item.productId,
                            productName: item.productName,
                            productImage: item.productImage,
                            quantity: item.quantity,
                            price: item.price,
                            totalPrice: item.price * item.quantity,
                            productSize: item.size || item.productSize,
                            productColour: item.colour || item.productColour,
                            brand: item.brand,
                            // Keep the original size and color arrays for options
                            size: item.size,
                            colour: item.colour
                        };
                    }),
                    totalAmount: cartData.totalPrice || 0
                };
                
                console.log('Transformed cart data:', transformedData);
                setCartData(transformedData);
            } else {
                // If the API call is successful but returns no data, set empty cart
                setCartData({ items: [], totalAmount: 0 });
            }
        } catch (error) {
            console.error('Error fetching cart:', error);
            const errorMessage = error.response?.data?.message || error.message;
            setError(errorMessage);
            
            if (error.response?.status === 401 && !localStorage.getItem('token')) {
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleQuantityChange = async (itemId, action) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login to update cart');
            }

            const currentItem = cartData.items.find(item => item.productId === itemId);
            if (!currentItem) return;

            // Calculate new quantity based on action
            let newQuantity;
            if (action === 'increase') {
                newQuantity = parseInt(currentItem.quantity) + 1;
            } else if (action === 'decrease') {
                newQuantity = Math.max(1, parseInt(currentItem.quantity) - 1);
            } else {
                return;
            }

            console.log('Updating quantity:', { 
                itemId, 
                currentQuantity: currentItem.quantity, 
                newQuantity,
                size: currentItem.productSize,
                color: currentItem.productColour
            });

            const response = await axios.post(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/addToCart',
                {
                    productId: itemId,
                    productName: currentItem.productName,
                    productImage: currentItem.productImage,
                    quantity: newQuantity,
                    price: currentItem.price,
                    totalPrice: currentItem.price * newQuantity,
                    productSize: currentItem.productSize,
                    productColour: currentItem.productColour,
                    brand: currentItem.brand,
                    size: currentItem.size,
                    colour: currentItem.colour
                },
                { 
                    headers: { 
                        'Authorization': token
                    } 
                }
            );

            console.log('Update quantity response:', response.data);

            if (response.data.success) {
                // Update the cart data directly instead of fetching
                const updatedItems = cartData.items.map(item => {
                    if (item.productId === itemId) {
                        return {
                            ...item,
                            quantity: newQuantity,
                            totalPrice: item.price * newQuantity
                        };
                    }
                    return item;
                });

                const newTotalAmount = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                
                setCartData({
                    items: updatedItems,
                    totalAmount: newTotalAmount
                });

                // Only dispatch the event for navbar update
                window.dispatchEvent(new Event('cartUpdated'));
            } else {
                throw new Error(response.data.message || 'Failed to update quantity');
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
            if (error.response?.status === 401) {
                localStorage.removeItem('token');
                navigate('/login');
            } else {
                alert(error.response?.data?.message || 'Failed to update quantity. Please try again.');
            }
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login to remove items from cart');
            }

            console.log('Removing item:', itemId);
            const response = await axios.delete(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/removeCart',
                {
                    headers: {
                        'Authorization': token
                    },
                    data: {
                        productId: itemId
                    }
                }
            );

            console.log('Remove item response:', response.data);

            if (response.data.success) {
                // Refresh cart data
                fetchCartItems();
                // Update cart count in navbar
                window.dispatchEvent(new Event('cartUpdated'));
            } else {
                throw new Error(response.data.message || 'Failed to remove item');
            }
        } catch (error) {
            console.error('Error removing item:', error);
            const errorMessage = error.response?.data?.message || error.message;
            alert(errorMessage || 'Failed to remove item. Please try again.');
        }
    };

    const handleSizeChange = async (itemId, newSize) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login to update cart');
            }

            const currentItem = cartData.items.find(item => item.productId === itemId);
            if (!currentItem) return;

            const response = await axios.post(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/addToCart',
                {
                    productId: itemId,
                    quantity: currentItem.quantity,
                    price: currentItem.price,
                    totalPrice: currentItem.price * currentItem.quantity,
                    productSize: newSize,
                    productColour: currentItem.productColour || ''
                },
                { 
                    headers: { 
                        'Authorization': token
                    } 
                }
            );

            if (response.data.success) {
                setSelectedSizes(prev => ({
                    ...prev,
                    [itemId]: newSize
                }));
                
                // Update cart data
                const updatedItems = cartData.items.map(item => {
                    if (item.productId === itemId) {
                        return {
                            ...item,
                            productSize: newSize
                        };
                    }
                    return item;
                });
                
                setCartData({
                    ...cartData,
                    items: updatedItems
                });
            }
        } catch (error) {
            console.error('Error updating size:', error);
            alert('Failed to update size. Please try again.');
        }
    };

    const handleColorChange = async (itemId, newColor) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login to update cart');
            }

            const currentItem = cartData.items.find(item => item.productId === itemId);
            if (!currentItem) return;

            const response = await axios.post(
                'https://ecommerce-shop-qg3y.onrender.com/api/cart/addToCart',
                {
                    productId: itemId,
                    quantity: currentItem.quantity,
                    price: currentItem.price,
                    totalPrice: currentItem.price * currentItem.quantity,
                    productSize: currentItem.productSize || '',
                    productColour: newColor
                },
                { 
                    headers: { 
                        'Authorization': token
                    } 
                }
            );

            if (response.data.success) {
                setSelectedColors(prev => ({
                    ...prev,
                    [itemId]: newColor
                }));
                
                // Update cart data
                const updatedItems = cartData.items.map(item => {
                    if (item.productId === itemId) {
                        return {
                            ...item,
                            productColour: newColor
                        };
                    }
                    return item;
                });
                
                setCartData({
                    ...cartData,
                    items: updatedItems
                });
            }
        } catch (error) {
            console.error('Error updating color:', error);
            alert('Failed to update color. Please try again.');
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
                <div className="grid grid-cols-12 gap-4 p-4 border-b text-gray-600 font-medium">
                    <div className="col-span-4">PRODUCT</div>
                    <div className="col-span-2 text-center">PRICE</div>
                    <div className="col-span-2 text-center">QUANTITY</div>
                    <div className="col-span-2 text-center">SIZE/COLOR</div>
                    <div className="col-span-2 text-center">TOTAL</div>
                </div>

                {/* Cart Items */}
                {cartData.items.map((item) => (
                    <div key={item.productId} className="grid grid-cols-12 gap-4 p-4 border-b items-center hover:bg-gray-50">
                        {/* Product Info */}
                        <div className="col-span-4">
                            <div className="flex items-center gap-4">
                                {item.productImage && (
                                    <img 
                                        src={item.productImage} 
                                        alt={item.productName} 
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                )}
                                <div>
                                    <h3 className="font-medium text-gray-800">{item.productName || 'Product Name'}</h3>
                                    <p className="text-sm text-gray-500">ID: {item.productId}</p>
                                    {item.brand && <p className="text-sm text-[#3BB77E]">{item.brand}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-center">
                            <span className="font-medium text-gray-800">₹{item.price.toFixed(2)}</span>
                        </div>

                        {/* Quantity */}
                        <div className="col-span-2">
                            <div className="flex items-center justify-center">
                                <button 
                                    onClick={() => handleQuantityChange(item.productId, 'decrease')}
                                    className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-l"
                                    disabled={parseInt(item.quantity) <= 1}
                                >
                                    -
                                </button>
                                <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                                <button 
                                    onClick={() => handleQuantityChange(item.productId, 'increase')}
                                    className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-r"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Size and Color */}
                        <div className="col-span-2">
                            <div className="flex flex-col items-center gap-2">
                                {item.productSize && (
                                    <div className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700 w-full text-center">
                                        Size: {item.productSize}
                                    </div>
                                )}
                                {item.productColour && (
                                    <div className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700 w-full text-center">
                                        Color: {item.productColour}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Total Price and Remove Button */}
                        <div className="col-span-2 flex items-center justify-between px-4">
                            <span className="font-medium text-[#3BB77E]">₹{(item.price * item.quantity).toFixed(2)}</span>
                            <button 
                                onClick={() => handleRemoveItem(item.productId)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                                aria-label="Remove item"
                            >
                                <FiTrash2 size={18} />
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
                        <span className="text-[#3BB77E] font-medium">₹{calculateSubtotal().toLocaleString('en-IN', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Shipping:</span>
                        <span>Calculated at next step</span>
                    </div>
                    <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold">Total:</span>
                            <div className="text-right">
                                <span className="text-xl font-semibold text-[#3BB77E]">₹{calculateSubtotal().toLocaleString('en-IN', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}</span>
                                <p className="text-sm text-gray-500">Including GST</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            const token = localStorage.getItem('token');
                            if (!token) {
                                alert('Please login to proceed');
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