import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import Footer_mobile from './Footer_mobile';
import { FiSearch } from 'react-icons/fi';

const Blog_mobile = () => {
    const blogPosts = [
        {
            id: 1,
            image: "https://s3-alpha-sig.figma.com/img/00a9/190d/dfa332514b43ba0822970ef1973003b7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXErtR3KU-tA1S-hmsY2m8BIlaOFjGmPzVunlE77YQT0g8CwSjVSehcKraojRP4cXNVw9RcpWGNWc4Lcggtha3TlBkxagBbdlbLpfWmvnl4nyEuuLH-OAhkSNXKNA8rRl4Bgkd-MevtATN6XgVCt~rsdRZ9owsKO974mt5lAzjeg3H4wRzSMPHYN22nsgWhNPv7oVisDBPbxjC0u~2Vr7UwJ2Xm7Y5DdIukqbdvlGmDQukUKRQHjBGmVMSDO0mIUsRUF9yocUvAI3ouANc18W4~pHpb-6LMJYD3J41rxO5Pmha1LIk3hdK0G2rwAmZ7z2Z7Vsg0fSaVcXXvxCOozgg__",
            category: "Shopping",
            date: "25 April 2023",
            views: "126k Views",
            readTime: "8 mins read",
            title: "The Benefits of Organic Food: Why Choose Natural?"
        },
        {
            id: 2,
            image: "https://s3-alpha-sig.figma.com/img/e5da/07b0/9e59559c5805fc67657a7c0cf8fa25d9?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2DSD9FImGxA6v~rVBs48Lg1JNPVp3XkFP3CYuJZKUiYnHVhylNlf6DZ6~30lZZ9~7yGBJDXvmrX6p1xcDjXR1V9VHZCZAxVsCSriz7ttnqBn0oO3B1mqB8~IfO6k3nFTHT1IH17t50r5W2MrivEM3goV~p5bPoloDmlzQBjET6BzSMq~qIM56zT1pyRK1M38-t0DCuf3zQ~h9IZYSU1YE8cmcuQdXVsXB8rqjaH3G4495kh9CvzW20GpGu6xDAR-CKuX5m4JNTnDqkPC-Tda9HrcPszAB26RVDgByMtlrMQGHAgx2Tk4IjNfvhLirb667rkcEw6aiqYB0WkTF9sug__",
            category: "Recipes",
            date: "24 April 2023",
            views: "88k Views",
            readTime: "5 mins read",
            title: "10 Quick and Healthy Breakfast Ideas for Busy Mornings"
        },
        {
            id: 3,
            image: "https://s3-alpha-sig.figma.com/img/6071/5da3/f2863278a563e9f53cc3dc65d7b57a4a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jPm82Xi3qc0oFDfu~k14ksl~0QF4I0YeHjwW05v9g6u~GBP54H-vIGa3OUXQZzkVUVWFakIMHlb-epiMEThOsukDfLOa03lVeBbouSyxaOLYr9L16jK6Qbhz7msyR2CQweNdQnwycDAUiHQWlM48STn1jj42xR699fJAAfg9kF2SEGyaIsbnEUFOTp9z6JvZAWqec~TMvy65nTDsa~YMprqldX5GsKnNSYErMcIVkNnvqMrMewnODO9vRwgGOUf0rRLdKBcyANDCyJ9QCaC83Az8VGPZOGVVjqIA7ncgQ13s0dxG5cKov04oWBHtqa8lVjm1MqQOSY33DcVE5Z5jOw__",
            category: "Kitchen",
            date: "25 April 2023",
            views: "100k Views",
            readTime: "10 mins read",
            title: "Kitchen Organization Tips for a More Efficient Cooking Space"
        },
        {
            id: 4,
            image: "https://s3-alpha-sig.figma.com/img/31d3/8a09/86ecc64f1750a54603c27ef6ebd61c56?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNhvSJn-89rg8uheTOo0--itMU8bccaYlHRjSPsOxf15P6NstG0Ni~EalsrSULBN~9ofaMhkHkMZg0r4Isqq5gvNXfBpaB3fJ0sroohwYuMl6qZ50INpUTolBnBMP3CzuXjREQRqKxrfu8IPotwwcgVaRU180H3eG8806pHkja4VefNrZE9domqVDp0D-Bav0tCzXbxyN9nBMkYGWo08mPivvU4ZclOLJX7W8R1-xWlJRhararrRyUmooc2iuYL1qTQTu3xA34mwbhji~JCz-rwC7u~4S-wxuOaiIiv7~BwDe7AJDKx5PJMtWYbcQOcJ6p9qUBMp7LuRdZO-EGCwsw__",
            category: "Food",
            date: "25 April 2023",
            views: "150k Views",
            readTime: "7 mins read",
            title: "Seasonal Produce Guide: What to Buy and When"
        },
        {
            id: 5,
            image: "https://s3-alpha-sig.figma.com/img/0b06/d35f/9f0dc9b8b2a2a863096159d763f50baa?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFYg-P5V6WgT36xFAcRUzVwoeHskBMBuuLnffeElpKIfucEMynmHcYdgRRwjF-cD0SbXVbfmPo8rwHf7t-el9HDFvtLgHj2VcF6XW49CHAroglkQnZgYZ39LfdhVhiuG~EvCA~g0zao96D~ePo9nmtzzFJYYqzGBDJfBsDZHBH~oTr~w2jKwPkIUGLI1a00lsH8jzgmTzCfKbFTW0kpni2WlpW6bvKqyRjRKkkbN0Ols-Xh8VFKqrGl4NHFs3Lw1tV72NneF3zH0VjXaz~ThMXtf66SfDIj167PF5ZQW~F3u6-gl8E07m7NQJfz9o2kbokn4MhFCdfZFdMqeu0VEdw__",
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