import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    setError('');

    try {
      console.log('Attempting login with:', {
        email: formData.email,
        password: '[HIDDEN]'
      });

      const response = await axios.post(
        'https://ecommerce-shop-qg3y.onrender.com/api/user/login',
        {
          email: formData.email.trim(),
          password: formData.password
        }
      );

      console.log('Login response:', {
        success: response.data.success,
        message: response.data.message,
        token: response.data.data ? 'Present' : 'Missing'
      });

      if (response.data.success && response.data.data) {
        // Store token exactly as received from the server
        const token = response.data.data;
        localStorage.setItem('token', token);
        console.log('Token stored:', token);
        // Verify token is stored
        const storedToken = localStorage.getItem('token');
        console.log('Verified stored token:', storedToken);
        navigate('/');
      } else {
        setError(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data);
      console.log('Error status:', error.response?.status);
      
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.response?.status === 400) {
        setError('Invalid email or password. Please try again.');
      } else if (error.response?.status === 401) {
        setError('Invalid credentials. Please check your email and password.');
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://s3-alpha-sig.figma.com/img/7f7d/5c4f/7cf727a1d919b3a2000dc17aa3892559?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3AEpjBKL46xV7cskNTtWe2qoT~FKj-XF8NxxaRUDTnMUHmjl3YsYMnPVx9E1yQzbUg5A-Z~poFHzMk8Kj0NOUBzlk1yYjhk6WDLug-QZtX45JTk8XA4ku0bQ4MG7WPlrVn83BKyRHZE5SlCvJlFYnpb1IYK7balgB4bsD1lKW8fmRdzLPZOA3Ttfmt28zUhWm35dAIzJYi94C83rSjWfytpK0-HMjeAc~t5VdnuhbHaymjq~U8qhULbWtsA6aww4ySUlz2NBDA0ekrnEgjPak~u54hEm69PSPkmY4UQc3FJMSabWODC0zKv4Dy6NxV4wq5xlYolgP5ZcBarYtjV5g__')] bg-cover bg-right">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign in to your account</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Email address Or Mobile Number</label>
            <input
              type="text"
              placeholder="Enter email address Or Mobile Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
              value={formData.password}
              onChange={handleChange}
              name="password"
              required
              disabled={loading}
              minLength="6"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <Link
              to="/forgot-password"
              className="text-sm text-[#3BB77E] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className={`w-full bg-[#3BB77E] text-white py-3 rounded-lg font-medium hover:bg-[#3BB77E]/90 ${loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account? {' '}
          <Link to="/signup" className="text-[#3BB77E] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;