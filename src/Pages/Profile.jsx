import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        <div className="h-[60vh] bg-[url('https://s3-alpha-sig.figma.com/img/7f7d/5c4f/7cf727a1d919b3a2000dc17aa3892559?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3AEpjBKL46xV7cskNTtWe2qoT~FKj-XF8NxxaRUDTnMUHmjl3YsYMnPVx9E1yQzbUg5A-Z~poFHzMk8Kj0NOUBzlk1yYjhk6WDLug-QZtX45JTk8XA4ku0bQ4MG7WPlrVn83BKyRHZE5SlCvJlFYnpb1IYK7balgB4bsD1lKW8fmRdzLPZOA3Ttfmt28zUhWm35dAIzJYi94C83rSjWfytpK0-HMjeAc~t5VdnuhbHaymjq~U8qhULbWtsA6aww4ySUlz2NBDA0ekrnEgjPak~u54hEm69PSPkmY4UQc3FJMSabWODC0zKv4Dy6NxV4wq5xlYolgP5ZcBarYtjV5g__')] bg-cover py-8 flex items-center justify-center">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
                <div className="flex justify-between gap-28 items-center mb-8">
                    <h1 className="text-2xl font-semibold">My Profile</h1>
                    <div className="space-x-4">
                        <button
                            onClick={() => {
                                setIsEditing(!isEditing);
                                setIsChangingPassword(false);
                            }}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                        </button>
                        <button
                            onClick={() => {
                                setIsChangingPassword(!isChangingPassword);
                                setIsEditing(false);
                            }}
                            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
                        >
                            {isChangingPassword ? 'Cancel' : 'Change Password'}
                        </button>
                    </div>
                </div>

                {updateSuccess && (
                    <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                        {updateSuccess}
                    </div>
                )}

                {userData && (
                    isChangingPassword ? (
                        <form onSubmit={handlePasswordChange} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">Current Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPasswords.currentPassword ? "text" : "password"}
                                            name="currentPassword"
                                            value={passwordData.currentPassword}
                                            onChange={handlePasswordInputChange}
                                            className="w-full px-3 py-2 border rounded outline-none"
                                            required
                                            placeholder="Enter your current password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => togglePasswordVisibility('currentPassword')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        >
                                            {showPasswords.currentPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">New Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPasswords.newPassword ? "text" : "password"}
                                            name="newPassword"
                                            value={passwordData.newPassword}
                                            onChange={handlePasswordInputChange}
                                            className="w-full px-3 py-2 border rounded outline-none"
                                            required
                                            placeholder="Enter your new password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => togglePasswordVisibility('newPassword')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        >
                                            {showPasswords.newPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">Confirm New Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPasswords.confirmPassword ? "text" : "password"}
                                            name="confirmPassword"
                                            value={passwordData.confirmPassword}
                                            onChange={handlePasswordInputChange}
                                            className="w-full px-3 py-2 border outline-none rounded "
                                            required
                                            placeholder="Confirm your new password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => togglePasswordVisibility('confirmPassword')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        >
                                            {showPasswords.confirmPassword ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-[#C5EAD9] text-white rounded hover:bg-[#BFE3CE] transition-colors"
                                    disabled={loading}
                                    
                                >
                                    {loading ? 'Changing Password...' : 'Change Password'}
                                </button>
                            </div>
                        </form>
                    ) : isEditing ? (
                        <form onSubmit={handleUpdate} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={updateData.name}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={updateData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">Mobile</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={updateData.mobile}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">Gender</label>
                                    <select
                                        name="gender"
                                        value={updateData.gender}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                                    disabled={loading}
                                >
                                    {loading ? 'Updating...' : 'Update Profile'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">Name</label>
                                    <p className="text-gray-800 bg-gray-50 p-3 rounded">{userData.name}</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">Email</label>
                                    <p className="text-gray-800 bg-gray-50 p-3 rounded">{userData.email}</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">Mobile</label>
                                    <p className="text-gray-800 bg-gray-50 p-3 rounded">{userData.mobile}</p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-600 font-medium">Gender</label>
                                    <p className="text-gray-800 bg-gray-50 p-3 rounded">{userData.gender}</p>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Profile; 