import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import Footer_mobile from './Footer_mobile';
import { FiSearch } from 'react-icons/fi';

const Blog_mobile = () => {
    const blogPosts = [
        {
            id: 1,
            image: "/assets/blog1.png",
            category: "Shopping",
            date: "25 April 2023",
            views: "126k Views",
            readTime: "8 mins read",
            title: "The Benefits of Organic Food: Why Choose Natural?"
        },
        {
            id: 2,
            image: "/assets/blog2.png",
            category: "Recipes",
            date: "24 April 2023",
            views: "88k Views",
            readTime: "5 mins read",
            title: "10 Quick and Healthy Breakfast Ideas for Busy Mornings"
        },
        {
            id: 3,
            image: "/assets/blog3.png",
            category: "Kitchen",
            date: "25 April 2023",
            views: "100k Views",
            readTime: "10 mins read",
            title: "Kitchen Organization Tips for a More Efficient Cooking Space"
        },
        {
            id: 4,
            image: "/assets/blog4.png",
            category: "Food",
            date: "25 April 2023",
            views: "150k Views",
            readTime: "7 mins read",
            title: "Seasonal Produce Guide: What to Buy and When"
        },
        {
            id: 5,
            image: "/assets/blog5.png",
            category: "Food",
            date: "25 April 2023",
            views: "150k Views",
            readTime: "7 mins read",
            title: "Seasonal Produce Guide: What to Buy and When"
        }
    ];

    const categories = [
        {
            name: "Recipes",
            count: "12",
            image: "/assets/Figure.png"
        },
        {
            name: "Shopping",
            count: "8",
            image: "/assets/Figure.png"
        },
        {
            name: "Kitchen Tips",
            count: "15",
            image: "/assets/Figure.png"
        },
        {
            name: "News",
            count: "6",
            image: "/assets/Figure.png"
        }
    ];

    return (
        <div className="lg:hidden pb-2">
            {/* Breadcrumb */}
            <div className="px-4 py-2 bg-white">
                <div className="flex items-center gap-2 text-xs">
                    <Link to="/" className="text-gray-500 hover:text-[#3BB77E]">Home</Link>
                    <span className="text-gray-500">•</span>
                    <span className="text-[#3BB77E]">Blog & News</span>
                </div>
            </div>

            {/* Title Section */}
            <div className="px-4 py-3">
                <h1 className="text-2xl font-bold text-[#253D4E] mb-4">Blog & News</h1>
                
                {/* Filter Tags */}
                <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
                    {['Shopping', 'Recipe', 'Kitchen', 'News', 'Food'].map((tag) => (
                        <button 
                            key={tag}
                            className="flex-shrink-0 bg-white px-4 py-1.5 rounded-full text-sm hover:text-[#3BB77E]"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Search Bar */}
            <div className="px-4 py-2">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                    />
                    <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* Recipe Articles Header */}
            <div className="px-4 py-4 flex items-center gap-3">
                <img src="/assets/Figure.png" alt="Recipe" className="w-8 h-8 object-cover" />
                <h2 className="text-lg font-semibold text-[#253D4E]">Recipe Articles</h2>
            </div>

            {/* Blog Posts Grid */}
            <div className="px-4 py-2">
                <div className="space-y-4">
                    {blogPosts.map((post) => (
                        <Link to={`/blog/${post.id}`} key={post.id}>
                            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                                <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <span className="text-[#3BB77E] text-sm">{post.category}</span>
                                    <h3 className="text-lg font-semibold text-[#253D4E] mt-2 hover:text-[#3BB77E]">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                                        <span>{post.date}</span>
                                        <span>{post.views}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Load More Button */}
            <div className="px-4 py-4">
                <button className="w-full py-2.5 border border-[#3BB77E] text-[#3BB77E] rounded-md text-sm font-medium">
                    Load More
                </button>
            </div>

            {/* Categories Section */}
            <div className="px-4 py-6 bg-gray-50">
                <h2 className="text-lg font-bold text-[#253D4E] mb-4">Categories</h2>
                <div className="space-y-3">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white px-4 py-3 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={category.image} alt={category.name} className="w-8 h-8 object-cover" />
                                <span className="text-gray-600 text-sm">{category.name}</span>
                            </div>
                            <span className="text-[#3BB77E] bg-[#DEF9EC] px-2 py-1 rounded-full text-xs">
                                {category.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popular Tags */}
            <div className="px-4 py-6">
                <h2 className="text-lg font-bold text-[#253D4E] mb-4">Popular Tags</h2>
                <div className="flex flex-wrap gap-2">
                    {['Cabbage', 'Broccoli', 'Smoothie', 'Fruit', 'Salad', 'Appetizer'].map((tag) => (
                        <button 
                            key={tag}
                            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="mt-8">
                <Section />
            </div>

            {/* Footer */}
            <Footer_mobile />
        </div>
    );
};

export default Blog_mobile; 