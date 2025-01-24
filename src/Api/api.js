import axios from 'axios';

// This is the actual API endpoint
const BASE_URL = 'https://interview-task-bmcl.onrender.com/api/user';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Add CORS headers
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    }
});

export const apiService = {
    register: async (userData) => {
        try {
            // Remove confirmPassword before sending
            const { confirmPassword, ...dataToSend } = userData;
            const response = await api.post('/add_user', dataToSend);
            return response.data;
        } catch (error) {
            console.error('Registration error:', error);
            throw error.response?.data || { message: 'Registration failed' };
        }
    },

    login: async (credentials) => {
        try {
            const response = await api.post('/user_login', credentials);
            return response.data;
        } catch (error) {
            console.error('Login error:', error);
            throw error.response?.data || { message: 'Login failed' };
        }
    },

    forgotPassword: async (email) => {
        try {
            const response = await api.post('/forgot-password', { email });
            return response.data;
        } catch (error) {
            console.error('Forgot password error:', error);
            throw error.response?.data || { message: 'Failed to process request' };
        }
    },

    resetPassword: async (resetData) => {
        try {
            const response = await api.post('/reset-password', resetData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    getUserProfile: async (token) => {
        try {
            const response = await api.get('/user_profile', {
                headers: {
                    Authorization: `${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Get profile error:', error);
            throw error.response?.data || { message: 'Failed to get profile' };
        }
    }
}; 