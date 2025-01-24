import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        price: '',
        description: '',
        category: '',
        product_images: [],
        size: [],
        colour: [],
        stock: 'in stock',
        product_details: ''
    });

    // State for dynamic arrays
    const [newSize, setNewSize] = useState('');
    const [newColour, setNewColour] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    const handleSizeAdd = () => {
        if (newSize.trim()) {
            setFormData(prev => ({
                ...prev,
                size: [...prev.size, newSize.trim()]
            }));
            setNewSize('');
        }
    };

    const handleColourAdd = () => {
        if (newColour.trim()) {
            setFormData(prev => ({
                ...prev,
                colour: [...prev.colour, newColour.trim()]
            }));
            setNewColour('');
        }
    };

    const handleSizeRemove = (index) => {
        setFormData(prev => ({
            ...prev,
            size: prev.size.filter((_, i) => i !== index)
        }));
    };

    const handleColourRemove = (index) => {
        setFormData(prev => ({
            ...prev,
            colour: prev.colour.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            // Convert price to number
            const productData = {
                ...formData,
                price: Number(formData.price)
            };

            const response = await axios.post(
                'https://ecommerce-shop-qg3y.onrender.com/api/product/add',
                productData,
                {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.success) {
                setSuccess('Product added successfully!');
                // Reset form
                setFormData({
                    name: '',
                    brand: '',
                    price: '',
                    description: '',
                    category: '',
                    product_images: [],
                    size: [],
                    colour: [],
                    stock: 'in stock',
                    product_details: ''
                });
                // Redirect to products page after 2 seconds
                setTimeout(() => {
                    navigate('/products');
                }, 2000);
            }
        } catch (error) {
            console.error('Add product error:', error.response?.data);
            setError(error.response?.data?.message || 'Failed to add product. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-2xl font-semibold text-center mb-8">Add New Product</h1>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-500 rounded-md">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="mb-4 p-3 bg-green-50 text-green-500 rounded-md">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E]"
                                required
                                min="0"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Category ID</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E]"
                                required
                                placeholder="Enter category ID"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E] h-24"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Product Details</label>
                        <textarea
                            name="product_details"
                            value={formData.product_details}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E] h-32"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 mb-2">Sizes</label>
                            <div className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={newSize}
                                    onChange={(e) => setNewSize(e.target.value)}
                                    className="flex-1 p-3 border rounded focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E]"
                                    placeholder="Add size"
                                />
                                <button
                                    type="button"
                                    onClick={handleSizeAdd}
                                    className="px-4 py-2 bg-[#3BB77E] text-white rounded hover:bg-[#3BB77E]/90"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.size.map((size, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
                                    >
                                        {size}
                                        <button
                                            type="button"
                                            onClick={() => handleSizeRemove(index)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Colours</label>
                            <div className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={newColour}
                                    onChange={(e) => setNewColour(e.target.value)}
                                    className="flex-1 p-3 border rounded focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E]"
                                    placeholder="Add colour"
                                />
                                <button
                                    type="button"
                                    onClick={handleColourAdd}
                                    className="px-4 py-2 bg-[#3BB77E] text-white rounded hover:bg-[#3BB77E]/90"
                                >
                                    Add
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {formData.colour.map((colour, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
                                    >
                                        {colour}
                                        <button
                                            type="button"
                                            onClick={() => handleColourRemove(index)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Stock Status</label>
                        <select
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-[#3BB77E] focus:border-[#3BB77E]"
                            required
                        >
                            <option value="in stock">In Stock</option>
                            <option value="out of stock">Out of Stock</option>
                        </select>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-3 bg-[#3BB77E] text-white rounded-lg hover:bg-[#3BB77E]/90 ${
                                loading ? 'opacity-70 cursor-not-allowed' : ''
                            }`}
                        >
                            {loading ? 'Adding Product...' : 'Add Product'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct; 