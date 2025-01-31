import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Address = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        addressLine1: '',
        addressLine2: '',
        landmark: '',
        city: '',
        state: '',
        pincode: '',
        country: 'India',
        address_type: 'Home'
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editingAddressId, setEditingAddressId] = useState(null);

    useEffect(() => {
        // Check if we're editing an existing address
        const editingAddressData = localStorage.getItem('editingAddress');
        if (editingAddressData) {
            const address = JSON.parse(editingAddressData);
            setFormData({
                fullName: address.fullName || '',
                phoneNumber: address.phoneNumber || '',
                addressLine1: address.addressLine1 || '',
                addressLine2: address.addressLine2 || '',
                landmark: address.landmark || '',
                city: address.city || '',
                state: address.state || '',
                pincode: address.pincode || '',
                country: address.country || 'India',
                address_type: address.address_type || 'Home'
            });
            setIsEditing(true);
            setEditingAddressId(address._id);
            // Clear the stored address data
            localStorage.removeItem('editingAddress');
        } else {
            // If not editing, fetch default address for new address form
            fetchDefaultAddress();
        }
    }, []);

    const fetchDefaultAddress = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
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
                const defaultAddress = response.data.data.find(addr => addr.isDefault);
                if (defaultAddress) {
                    setFormData({
                        fullName: defaultAddress.fullName || '',
                        phoneNumber: defaultAddress.phoneNumber || '',
                        addressLine1: defaultAddress.addressLine1 || '',
                        addressLine2: defaultAddress.addressLine2 || '',
                        landmark: defaultAddress.landmark || '',
                        city: defaultAddress.city || '',
                        state: defaultAddress.state || '',
                        pincode: defaultAddress.pincode || '',
                        country: defaultAddress.country || 'India',
                        address_type: defaultAddress.address_type || 'Home'
                    });
                }
            }
        } catch (error) {
            console.error('Error fetching default address:', error);
            // Don't set error state here as it's not critical
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        // Phone number validation
        if (name === 'phoneNumber') {
            // Only allow numbers and limit to 10 digits
            const phoneNumber = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({
                ...prev,
                [name]: phoneNumber
            }));
            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate phone number
        if (formData.phoneNumber.length !== 10) {
            toast.error('Phone number must be 10 digits');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            let response;
            if (isEditing) {
                // Update existing address
                response = await axios.put(
                    `https://ecommerce-shop-qg3y.onrender.com/api/address/updateAddress?addressId=${editingAddressId}`,
                    formData,
                    {
                        headers: {
                            'Authorization': `${token}`
                        }
                    }
                );
            } else {
                // Add new address
                response = await axios.post(
                    'https://ecommerce-shop-qg3y.onrender.com/api/address/addAddress',
                    formData,
                    {
                        headers: {
                            'Authorization': `${token}`
                        }
                    }
                );
            }

            if (response.data.success) {
                toast.success(isEditing ? 'Address updated successfully!' : 'Address added successfully!');
                navigate('/my-addresses'); // Always navigate back to address list after success
            } else {
                throw new Error(response.data.message || `Failed to ${isEditing ? 'update' : 'add'} address`);
            }
        } catch (error) {
            console.error(`Error ${isEditing ? 'updating' : 'adding'} address:`, error);
            toast.error(error.response?.data?.message || `Failed to ${isEditing ? 'update' : 'add'} address. Please try again.`);
            setError(error.response?.data?.message || `Failed to ${isEditing ? 'update' : 'add'} address. Please try again.`);
        } finally {
            setLoading(false);
        }
    };

    const handleClearForm = () => {
        setFormData({
            fullName: '',
            phoneNumber: '',
            addressLine1: '',
            addressLine2: '',
            landmark: '',
            city: '',
            state: '',
            pincode: '',
            country: 'India',
            address_type: 'Home'
        });
        toast.success('Form cleared successfully!');
    };

    return (
        <div className="container mx-auto px-4 py-8 lg:mt-40">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-[#253D4E]">
                    {isEditing ? 'Edit Address' : 'Add New Address'}
                </h1>
                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={handleClearForm}
                        className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Clear Form
                    </button>
                    <button
                        onClick={() => navigate('/my-addresses')}
                        className="bg-white border-2 border-[#3BB77E] text-[#3BB77E] px-6 py-2 rounded-full hover:bg-[#3BB77E] hover:text-white transition-colors"
                    >
                        Back to Addresses
                    </button>
                </div>
            </div>
            
            {error && (
                <div className="mb-4 p-4 bg-red-50 text-red-500 rounded-lg">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto rounded-lg shadow-sm p-6 bg-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 text-sm mb-2">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            placeholder="Enter 10 digit mobile number"
                            pattern="[0-9]{10}"
                            maxLength="10"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                        />
                        <p className="text-xs text-gray-500 mt-1">Enter 10 digit mobile number without country code</p>
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-gray-700 text-sm mb-2">Address Line 1</label>
                        <input
                            type="text"
                            name="addressLine1"
                            value={formData.addressLine1}
                            onChange={handleChange}
                            required
                            placeholder="House No., Building Name, Street"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-gray-700 text-sm mb-2">Address Line 2</label>
                        <input
                            type="text"
                            name="addressLine2"
                            value={formData.addressLine2}
                            onChange={handleChange}
                            placeholder="Area, Colony, Street (Optional)"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm mb-2">Landmark</label>
                        <input
                            type="text"
                            name="landmark"
                            value={formData.landmark}
                            onChange={handleChange}
                            placeholder="Nearby landmark (Optional)"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm mb-2">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            placeholder="Enter your city"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm mb-2">State</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            placeholder="Enter your state"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm mb-2">Pincode</label>
                        <input
                            type="text"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            required
                            placeholder="Enter 6 digit pincode"
                            pattern="[0-9]{6}"
                            maxLength="6"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                        />
                        <p className="text-xs text-gray-500 mt-1">Enter 6 digit pincode</p>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-sm mb-2">Address Type</label>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="address_type"
                                    value="Home"
                                    checked={formData.address_type === 'Home'}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <span className="text-gray-700 text-sm">Home</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="address_type"
                                    value="Work"
                                    checked={formData.address_type === 'Work'}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <span className="text-gray-700 text-sm">Work</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="address_type"
                                    value="Other"
                                    checked={formData.address_type === 'Other'}
                                    onChange={handleChange}
                                    className="form-radio"
                                />
                                <span className="text-gray-700 text-sm">Other</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-[#3BB77E] text-white py-3 rounded-full hover:bg-[#2a9c66] transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Processing...' : (isEditing ? 'Update Address' : 'Add Address')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Address; 