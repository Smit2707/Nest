import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DisplayAddress = () => {
    const navigate = useNavigate();
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [updatingDefault, setUpdatingDefault] = useState(false);

    const fetchAddresses = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Please login to view addresses');
                return;
            }

            const response = await axios.get(
                'https://ecommerce-shop-qg3y.onrender.com/api/address/displayAllAdress',
                {
                    headers: {
                        'Authorization': `${token}`
                    }
                }
            );

            if (response.data.success) {
                setAddresses(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching addresses:', error);
            setError('Failed to fetch addresses. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAddresses();
        // Check if addresses were just updated
        const addressesUpdated = localStorage.getItem('addressesUpdated');
        if (addressesUpdated) {
            fetchAddresses();
            localStorage.removeItem('addressesUpdated');
        }
    }, []);

    const handleSetDefault = async (addressId) => {
        if (updatingDefault) return;

        try {
            setUpdatingDefault(true);
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Please login to update address');
                return;
            }

            const response = await axios.put(
                `https://ecommerce-shop-qg3y.onrender.com/api/address/selectDefaultAddress?addressId=${addressId}`,
                {},
                {
                    headers: {
                        'Authorization': `${token}`
                    }
                }
            );

            if (response.data.success) {
                const updatedAddresses = addresses.map(addr => ({
                    ...addr,
                    isDefault: addr._id === addressId
                }));
                setAddresses(updatedAddresses);
                toast.success('Default address updated successfully!');
            }
        } catch (error) {
            console.error('Error updating default address:', error);
            toast.error('Failed to update default address. Please try again.');
        } finally {
            setUpdatingDefault(false);
        }
    };

    const handleDelete = async (addressId) => {
        if (!window.confirm('Are you sure you want to delete this address?')) {
            return;
        }

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Please login to delete address');
                return;
            }
            
            const response = await axios.delete(
                `https://ecommerce-shop-qg3y.onrender.com/api/address/deleteAddress?addressId=${addressId}`,
                {
                    headers: {
                        'Authorization': `${token}`
                    }
                }
            );

            if (response.data.success) {
                toast.success('Address deleted successfully!');
                fetchAddresses();
            }
        } catch (error) {
            console.error('Error deleting address:', error);
            toast.error('Failed to delete address. Please try again.');
        }
    };

    const handleEdit = (address) => {
        try {
            localStorage.setItem('editingAddress', JSON.stringify({
                ...address,
                fullName: address.fullName || '',
                phoneNumber: address.phoneNumber || '',
                addressLine1: address.addressLine1 || '',
                addressLine2: address.addressLine2 || '',
                landmark: address.landmark || '',
                city: address.city || '',
                state: address.state || '',
                pincode: address.pincode || '',
                country: address.country || 'India',
                address_type: address.address_type || 'Home',
                isDefault: address.isDefault || false,
                _id: address._id
            }));
            navigate('/address');
        } catch (error) {
            console.error('Error preparing address for edit:', error);
            toast.error('Failed to edit address. Please try again.');
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-[400px]">Loading addresses...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center p-4">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-[#253D4E]">Select Your Addresses</h1>
                <button
                    onClick={() => {
                        localStorage.removeItem('editingAddress'); // Clear any existing edit state
                        navigate('/address');
                    }}
                    className="bg-[#3BB77E] text-white px-6 py-2 rounded-full hover:bg-[#2a9c66] transition-colors flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add New Address
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {addresses.map((address) => (
                    <div 
                    
                        key={address._id} 
                        className={`p-6 rounded-lg shadow-md ${
                            address.isDefault ? 'bg-green-50 border-2 border-[#3BB77E]' : 'bg-white'
                        }`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-semibold text-[#253D4E]">
                                {address.userName}
                            </h3>
                            <div className="flex items-center gap-2">
                                <label className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={address.isDefault}
                                        onChange={() => !address.isDefault && handleSetDefault(address._id)}
                                        className="form-checkbox h-4 w-4 text-[#3BB77E] rounded border-gray-300 focus:ring-[#3BB77E]"
                                        disabled={updatingDefault}
                                    />
                                    <span className="ml-2 text-sm text-gray-600">Default</span>
                                </label>
                            </div>
                        </div>
                        
                        <div className="space-y-2 text-gray-600">
                            <p className="font-medium">
                                {address.fullName}
                            </p>
                            <p>
                                {`${address.addressLine1}${address.addressLine2 ? ', ' + address.addressLine2 : ''}`}
                            </p>
                            <p>
                                📱 {address.phoneNumber}
                            </p>
                            <p>
                                📍 {address.country}
                            </p>
                            <p className="text-sm text-gray-500">
                                Type: {address.address_type}
                            </p>
                        </div>

                        <div className="mt-4 flex justify-end gap-2">
                            <button
                                onClick={() => handleEdit(address)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-sm"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(address._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors text-sm"
                                disabled={address.isDefault}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {addresses.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                    No addresses found. Add a new address to get started.
                </div>
            ) : (
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => {
                            localStorage.removeItem('editingAddress');
                            navigate('/order');
                        }}
                        className="w-full max-w-md bg-[#3BB77E] text-white py-3 rounded-full hover:bg-[#2a9c66] transition-colors text-lg font-semibold flex items-center justify-center gap-2"
                    >
                        Proceed to Payment
                    </button>
                </div>
            )}
        </div>
    );
};

export default DisplayAddress; 