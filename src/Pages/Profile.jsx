import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [updateData, setUpdateData] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: ''
    });
    const [updateSuccess, setUpdateSuccess] = useState('');
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [showPasswords, setShowPasswords] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false
    });
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(
                    'https://ecommerce-shop-qg3y.onrender.com/api/user/profileDisplay',
                    {
                        headers: {
                            'Authorization': token,
                            'Content-Type': 'application/json',
                        }
                    }
                );

                if (response.data.success) {
                    setUserData(response.data.data);
                    setUpdateData({
                        name: response.data.data.name,
                        email: response.data.data.email,
                        mobile: response.data.data.mobile,
                        gender: response.data.data.gender
                    });
                } else {
                    setError(response.data.message || 'Failed to load profile data');
                }
            } catch (error) {
                console.error('Profile fetch error:', error.response?.data);
                if (error.response?.status === 401) {
                    localStorage.clear();
                    navigate('/login');
                } else {
                    setError(error.response?.data?.message || 'Failed to load profile data');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, [navigate]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setError('');
        setUpdateSuccess('');
        setLoading(true);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(
                'https://ecommerce-shop-qg3y.onrender.com/api/user/update',
                updateData,
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json',
                    }
                }
            );

            if (response.data.success) {
                setUserData({ ...userData, ...updateData });
                setUpdateSuccess('Profile updated successfully!');
                setIsEditing(false);
            } else {
                setError(response.data.message || 'Failed to update profile');
            }
        } catch (error) {
            console.error('Update error:', error.response?.data);
            if (error.response?.status === 401) {
                localStorage.clear();
                navigate('/login');
            } else {
                setError(error.response?.data?.message || 'Failed to update profile');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setError('');
        setUpdateSuccess('');
        setLoading(true);

        // Validate passwords match
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setError('New passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(
                'https://ecommerce-shop-qg3y.onrender.com/api/user/changePassword',
                {
                    oldPassword: passwordData.currentPassword,
                    newPassword: passwordData.newPassword
                },
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.success) {
                setUpdateSuccess('Password changed successfully! Please login again with your new password.');
                setPasswordData({
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                });
                // Clear all auth data and redirect to login
                localStorage.clear();
                setTimeout(() => {
                    navigate('/login');
                }, 1500);
            } else {
                setError(response.data.message || 'Failed to change password');
            }
        } catch (error) {
            console.error('Password change error:', error.response?.data);
            if (error.response?.status === 400) {
                setError('Current password is incorrect. Please try again.');
            } else if (error.response?.status === 401) {
                setError('Session expired. Please login again.');
                localStorage.clear();
                navigate('/login');
            } else {
                setError(error.response?.data?.message || 'Failed to change password. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handlePasswordInputChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
            </div>
        </div>
    );

    return (
        <div className="min-h-[50vh] bg-[#4ABD88] pt-24 pb-8 px-4">
            <div className="max-w-xl mx-auto bg-[#b6ede2] rounded-lg shadow-sm">
                <div className="p-6">
                    <div className='flex justify-between items-center'>
                        <h1 className="text-2xl font-semibold text-[#253D4E] mb-6">My Profile</h1>

                        <div className="flex items-center justify-center mb-6 gap-2 w-1/2">
                            <button
                                onClick={() => {
                                    setIsEditing(!isEditing);
                                    setIsChangingPassword(false);
                                }}
                                className="w-full bg-[#3BB77E] text-white py-2 text-xs px-2 rounded-lg font-medium hover:bg-[#2a9c66] transition-colors"
                            >
                                Edit Profile
                            </button>
                            <button
                                onClick={() => {
                                    setIsChangingPassword(!isChangingPassword);
                                    setIsEditing(false);
                                }}
                                className="w-full bg-[#FDD339] text-white py-2 text-xs px-2 rounded-lg font-medium hover:bg-[#f4b33a] transition-colors"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>

                    {updateSuccess && (
                        <div className="mb-6 p-3 bg-green-100 text-green-700 rounded-lg">
                            {updateSuccess}
                        </div>
                    )}
                
                {userData && (
                        isChangingPassword ? (
                            <form onSubmit={handlePasswordChange} className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-[#253D4E] text-sm font-medium mb-2">
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            name="currentPassword"
                                            value={passwordData.currentPassword}
                                            onChange={handlePasswordInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#253D4E] text-sm font-medium mb-2">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="newPassword"
                                            value={passwordData.newPassword}
                                            onChange={handlePasswordInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[#253D4E] text-sm font-medium mb-2">
                                            Confirm New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={passwordData.confirmPassword}
                                            onChange={handlePasswordInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#3BB77E] text-white py-3 rounded-lg font-medium hover:bg-[#2a9c66] transition-colors"
                                    >
                                        Update Password
                                    </button>
                                </div>
                            </form>
                        ) : (
                    <div className="space-y-6">
                                <div>
                                    <label className="block text-[#253D4E] text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="name"
                                            value={updateData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                                        />
                                    ) : (
                                        <p className="w-full px-4 py-3 bg-white rounded-lg border border-gray-100">{userData.name}</p>
                                    )}
                            </div>
                            
                                <div>
                                    <label className="block text-[#253D4E] text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <p className="w-full px-4 py-3 bg-white rounded-lg border border-gray-100">{userData.email}</p>
                            </div>
                            
                                <div>
                                    <label className="block text-[#253D4E] text-sm font-medium mb-2">
                                        Mobile
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={updateData.mobile}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                                        />
                                    ) : (
                                        <p className="w-full px-4 py-3 bg-white rounded-lg border border-gray-100">{userData.mobile}</p>
                                    )}
                            </div>
                            
                                <div>
                                    <label className="block text-[#253D4E] text-sm font-medium mb-2">
                                        Gender
                                    </label>
                                    {isEditing ? (
                                        <select
                                            name="gender"
                                            value={updateData.gender}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BB77E]"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    ) : (
                                        <p className="w-full px-4 py-3 bg-white rounded-lg border border-gray-100">{userData.gender}</p>
                                    )}
                            </div>
                            
                                {isEditing && (
                                    <div>
                                        <button
                                            onClick={handleUpdate}
                                            className="w-full bg-[#3BB77E] text-white py-3 rounded-lg font-medium hover:bg-[#2a9c66] transition-colors"
                                        >
                                            Save Changes
                                        </button>
                            </div>
                                )}
                            </div>
                        )
                    )}
                    </div>
            </div>
        </div>
    );
};

export default Profile; 