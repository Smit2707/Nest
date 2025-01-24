import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            setLoading(false);
            return;
        }

        const dataToSend = {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            password: formData.password,
            gender: formData.gender
        };

        try {
            const response = await axios({
                method: 'post',
                url: 'https://ecommerce-shop-qg3y.onrender.com/api/user/register',
                data: dataToSend,
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.success) {
                alert('Registration successful!');
                navigate('/login');
            } else {
                setError(response.data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            if (error.response) {
                setError(error.response.data.message || 'Registration failed');
            } else if (error.request) {
                setError('No response from server. Please try again.');
            } else {
                setError('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center bg-[#fff5e5]">
            <div className="absolute inset-0 bg-[url('https://s3-alpha-sig.figma.com/img/7f7d/5c4f/7cf727a1d919b3a2000dc17aa3892559?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3AEpjBKL46xV7cskNTtWe2qoT~FKj-XF8NxxaRUDTnMUHmjl3YsYMnPVx9E1yQzbUg5A-Z~poFHzMk8Kj0NOUBzlk1yYjhk6WDLug-QZtX45JTk8XA4ku0bQ4MG7WPlrVn83BKyRHZE5SlCvJlFYnpb1IYK7balgB4bsD1lKW8fmRdzLPZOA3Ttfmt28zUhWm35dAIzJYi94C83rSjWfytpK0-HMjeAc~t5VdnuhbHaymjq~U8qhULbWtsA6aww4ySUlz2NBDA0ekrnEgjPak~u54hEm69PSPkmY4UQc3FJMSabWODC0zKv4Dy6NxV4wq5xlYolgP5ZcBarYtjV5g__')] bg-cover bg-center backdrop-blur-md"></div>
            
            <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-lg shadow-sm w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Create your account</h2>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] bg-white/50"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-2">Email address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] bg-white/50"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-2">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="10-digit mobile number"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] bg-white/50"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            pattern="[0-9]{10}"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="********"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] bg-white/50"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength="6"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="********"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] bg-white/50"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            minLength="6"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-2">Gender</label>
                        <select
                            name="gender"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] bg-white/50"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className={`w-full bg-[#3BB77E] text-white py-3 rounded-lg font-medium hover:bg-[#3BB77E]/90 ${
                            loading ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                        disabled={loading}
                    >
                        {loading ? 'Signing up...' : 'Sign up'}
                    </button>
                </form>

                <p className="text-center mt-4 text-gray-600">
                    Already have an account? {' '}
                    <Link to="/login" className="text-[#3BB77E] hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;