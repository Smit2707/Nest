import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [mobileError, setMobileError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'mobile') {
            // Only allow numbers
            const numbersOnly = value.replace(/[^0-9]/g, '');
            
            // Limit to 10 digits
            const truncated = numbersOnly.slice(0, 10);
            
            setFormData(prev => ({
                ...prev,
                [name]: truncated
            }));

            // Validate mobile number
            if (truncated.length > 0 && truncated.length !== 10) {
                setMobileError('Mobile number must be 10 digits');
            } else {
                setMobileError('');
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
        setError('');
    };

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate mobile number before submission
        if (formData.mobile.length !== 10) {
            setError("Please enter a valid 10-digit mobile number");
            setLoading(false);
            return;
        }

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
        <div className="h-screen lg:min-h-screen relative flex items-center justify-center bg-[#fff5e5]">
            <div className="absolute inset-0 bg-[url('https://s3-alpha-sig.figma.com/img/7f7d/5c4f/7cf727a1d919b3a2000dc17aa3892559?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3AEpjBKL46xV7cskNTtWe2qoT~FKj-XF8NxxaRUDTnMUHmjl3YsYMnPVx9E1yQzbUg5A-Z~poFHzMk8Kj0NOUBzlk1yYjhk6WDLug-QZtX45JTk8XA4ku0bQ4MG7WPlrVn83BKyRHZE5SlCvJlFYnpb1IYK7balgB4bsD1lKW8fmRdzLPZOA3Ttfmt28zUhWm35dAIzJYi94C83rSjWfytpK0-HMjeAc~t5VdnuhbHaymjq~U8qhULbWtsA6aww4ySUlz2NBDA0ekrnEgjPak~u54hEm69PSPkmY4UQc3FJMSabWODC0zKv4Dy6NxV4wq5xlYolgP5ZcBarYtjV5g__')] bg-cover bg-center backdrop-blur-md"></div>
            
            <div className="relative bg-white/80 backdrop-blur-lg p-4 rounded-lg shadow-sm w-full max-w-md h-fit">
                <h2 className="text-2xl font-semibold text-center mb-6">Create your account</h2>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-2 text-xs lg:text-base">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full text-xs lg:text-base px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] bg-white/50"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-2 text-xs lg:text-base">Email address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                            className="w-full px-4 py-3 rounded-lg text-xs lg:text-base border border-gray-200 focus:outline-none focus:border-[#3BB77E] bg-white/50"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-2 text-xs lg:text-base">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="10-digit mobile number"
                            className={`w-full px-4 py-3 rounded-lg text-xs lg:text-base border ${
                                mobileError ? 'border-red-500' : 'border-gray-200'
                            } focus:outline-none focus:border-[#3BB77E] bg-white/50`}
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            maxLength="10"
                        />
                        {mobileError && (
                            <p className="mt-1 text-red-500 text-xs">{mobileError}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-2 text-xs lg:text-base">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="********"
                                className="w-full px-4 py-3 rounded-lg text-xs lg:text-base border border-gray-200 focus:outline-none focus:border-[#3BB77E] bg-white/50"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength="6"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('password')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-2 text-xs lg:text-base">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="********"
                                className="w-full px-4 py-3 rounded-lg border text-xs lg:text-base border-gray-200 focus:outline-none focus:border-[#3BB77E] bg-white/50"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                minLength="6"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility('confirm')}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-600 mb-2 text-xs lg:text-base">Gender</label>
                        <div className="flex gap-2">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="text-xs lg:text-base">Male</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="text-xs lg:text-base">Female</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={formData.gender === 'other'}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="text-xs lg:text-base">Other</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`w-full text-xs lg:text-base bg-[#3BB77E] text-white py-3 rounded-lg font-medium hover:bg-[#3BB77E]/90 ${
                            loading ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                        disabled={loading || mobileError}
                    >
                        {loading ? 'Signing up...' : 'Sign up'}
                    </button>
                </form>

                <p className="text-center mt-4 text-gray-600 text-xs lg:text-base">
                    Already have an account? {' '}
                    <Link to="/login" className="text-[#3BB77E] hover:underline text-xs lg:text-base">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;