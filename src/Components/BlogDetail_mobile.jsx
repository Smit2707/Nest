import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const BlogDetail_mobile = () => {
    const categories = [
        { name: "Milk & Dairies", count: 5, image: "/assets/Figure.png" },
        { name: "Cooking", count: 8, image: "/assets/Figure2.png" },
        { name: "Pet Foods", count: 3, image: "/assets/Figure (1).png" },
        { name: "Baking material", count: 5, image: "/assets/Figure (2).png" },
        { name: "Fresh Fruit", count: 6, image: "/assets/Figure (3).png" }
    ];

    const comments = [
        {
            author: "Angela Doe",
            date: "25 April 2023",
            content: "Excellent features! I love it. Highly recommend to everyone.",
            avatar: "/assets/pfp2.png"
        },
        {
            author: "John Smith",
            date: "24 April 2023",
            content: "Great article! Very informative and well-written.",
            avatar: "/assets/pfp.png"
        }
    ];

    return (
        <div className="lg:hidden pb-2 mt-20">
            {/* Breadcrumb */}
            <div className="px-4 py-2 bg-white">
                <div className="flex items-center gap-2 text-xs">
                    <Link to="/" className="text-gray-500 hover:text-[#3BB77E]">Home</Link>
                    <span className="text-gray-500">•</span>
                    <Link to="/blog" className="text-gray-500 hover:text-[#3BB77E]">Blog</Link>
                    <span className="text-gray-500">•</span>
                    <span className="text-[#3BB77E]">Recipes</span>
                </div>
            </div>

            {/* Blog Content */}
            <div className="px-4 py-4">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                    {/* Featured Image */}
                    <img 
                        src="/assets/blog2.png" 
                        alt="Blog Post"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <span className="text-[#3BB77E] text-sm">Recipes</span>
                        <h1 className="text-xl font-bold text-[#253D4E] mt-2 mb-4">
                            Best smartwatch 2022: the top wearables you can buy today
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-2">
                                <img 
                                    src="/assets/pfp3.png" 
                                    alt="Sugar Route" 
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className='text-sm'>By Sugar Route</span>
                            </div>
                            <span className='text-xs'>2 hours ago</span>
                            <span className='text-xs'>8 mins read</span>
                        </div>

                        {/* Blog Content */}
                        <div className="prose max-w-none text-gray-600 text-sm">
                            <p className="mb-6">
                                Helping everyone live happier, healthier lives at home through their kitchen. Kitchn
                                is a daily food magazine on the Web celebrating life in the kitchen through home
                                cooking and kitchen intelligence.
                            </p>
                            <p className="mb-6">
                                We've reviewed and ranked all of the best smartwatches on the market right now, and we've made a definitive list of the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.
                            </p>
                            <p className="mb-6">
                                Those top-end wearables span from the Apple Watch to Fitbits, Garmin watches to Tizen-sporting Samsung watches. There's also Wear OS which is Google's own wearable operating system in the vein of Apple's watchOS - you'll see it show up in a lot of these devices.
                            </p>

                            <h2 className="text-xl font-semibold text-[#253D4E] my-4">Lorem ipsum dolor sit amet cons</h2>
                            <p className="mb-6">
                                Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch, rank it against the competition and enter it into the list you'll find below.
                            </p>

                            {/* Two Column Images */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <img
                                    src="/assets/blog4.png"
                                    alt="Blog Image 1"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="/assets/blog5.png"
                                    alt="Blog Image 2"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4">
                <div className="bg-white rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Categories</h3>
                    <div className="space-y-4">
                        {categories.map((category, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={category.image} alt="Category" className="w-8 h-8 object-cover" />
                                    <span className="text-gray-600 text-sm hover:text-[#3BB77E] cursor-pointer">
                                        {category.name}
                                    </span>
                                </div>
                                <span className="text-[#3BB77E] bg-[#DEF9EC] px-2 py-1 rounded-full text-xs">
                                    {category.count}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Popular Tags */}
            <div className="px-4 py-4">
                <div className="bg-white rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Cabbage', 'Broccoli', 'Smoothie', 'Fruit', 'Salad', 'Appetizer'].map((tag) => (
                            <span 
                                key={tag}
                                className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Comments List */}
            <div className="px-4 py-4">
                <div className="bg-white rounded-xl p-4">
                    <h3 className="text-xl font-semibold text-[#253D4E] mb-6">Comments ({comments.length})</h3>
                    <div className="space-y-6">
                        {comments.map((comment, index) => (
                            <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                                <div className="flex items-start gap-4">
                                    <img 
                                        src={comment.avatar} 
                                        alt={comment.author} 
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h4 className="font-semibold text-[#253D4E]">{comment.author}</h4>
                                            <span className="text-xs text-gray-500">{comment.date}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm">{comment.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Comment Form */}
            <div className="px-4 py-4">
                <div className="bg-white rounded-xl p-4">
                    <h3 className="text-xl font-semibold text-[#253D4E] mb-6">Leave a Comment</h3>
                    <form>
                        <textarea
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] mb-4"
                            placeholder="Write your comment here..."
                        ></textarea>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Website"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] mb-4"
                        />
                        <button
                            type="submit"
                            className="bg-[#3BB77E] text-white px-6 py-3 rounded-lg hover:bg-[#3BB77E]/90 transition-colors"
                        >
                            Post Comment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail_mobile; 