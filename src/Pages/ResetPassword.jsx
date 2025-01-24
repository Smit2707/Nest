import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Get email from localStorage
        const storedEmail = localStorage.getItem('resetEmail');
        console.log('Retrieved email from localStorage:', storedEmail);
        
        if (!storedEmail) {
            console.log('No email found in localStorage, redirecting to forgot password...');
            navigate('/forgot-password');
            return;
        }
        setEmail(storedEmail);
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        console.log('Starting password reset process...');
        console.log('Email being used:', email);

        // Validate passwords match
        if (formData.newPassword !== formData.confirmPassword) {
            console.log('Password validation failed: passwords do not match');
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        // Validate password length
        if (formData.newPassword.length < 6) {
            console.log('Password validation failed: password too short');
            setError('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        try {
            console.log('Password validation passed');
            console.log('Sending reset request with:', {
                email: email,
                newPassword: formData.newPassword
            });

            // Send password reset request
            const response = await axios.post(
                'https://ecommerce-shop-qg3y.onrender.com/api/user/forgotPassword',
                {
                    email: email,
                    newPassword: formData.newPassword
                }
            );

            console.log('Password reset response:', response.data);

            if (response.data.success) {
                // Clear stored email
                localStorage.removeItem('resetEmail');
                console.log('Reset email cleared from localStorage');
                
                // Reset form
                setFormData({
                    newPassword: '',
                    confirmPassword: ''
                });
                
                console.log('Password reset successful, redirecting to login...');
                
                // Redirect to login page after a brief delay
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                throw new Error(response.data.message || 'Failed to reset password');
            }
        } catch (error) {
            console.error('Error in password reset:', error.response || error);
            const errorMessage = error.response?.data?.message || error.message;
            setError(errorMessage || 'Failed to reset password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('https://s3-alpha-sig.figma.com/img/7f7d/5c4f/7cf727a1d919b3a2000dc17aa3892559?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3AEpjBKL46xV7cskNTtWe2qoT~FKj-XF8NxxaRUDTnMUHmjl3YsYMnPVx9E1yQzbUg5A-Z~poFHzMk8Kj0NOUBzlk1yYjhk6WDLug-QZtX45JTk8XA4ku0bQ4MG7WPlrVn83BKyRHZE5SlCvJlFYnpb1IYK7balgB4bsD1lKW8fmRdzLPZOA3Ttfmt28zUhWm35dAIzJYi94C83rSjWfytpK0-HMjeAc~t5VdnuhbHaymjq~U8qhULbWtsA6aww4ySUlz2NBDA0ekrnEgjPak~u54hEm69PSPkmY4UQc3FJMSabWODC0zKv4Dy6NxV4wq5xlYolgP5ZcBarYtjV5g__')] bg-cover bg-center">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg m-4">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
                    <p className="text-gray-600 text-sm mt-2">Enter your new password</p>
                    <p className="text-gray-500 text-sm mt-1">Email: {email}</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700">
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E] transition-colors"
                            placeholder="Enter new password"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E] transition-colors"
                            placeholder="Confirm new password"
                            required
                            disabled={loading}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-[#3BB77E] text-white py-3 rounded-lg font-medium hover:bg-[#3BB77E]/90 transition-colors ${
                            loading ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                                Processing...
                            </div>
                        ) : (
                            'Reset Password'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword; 