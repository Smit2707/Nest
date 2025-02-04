import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import Footer from '../Components/Footer';
import Section from '../Components/Section';
import Layout from '../Components/Layout';
import BlogDetail_mobile from '../Components/BlogDetail_mobile';

const BlogDetail = () => {
    // Categories data (same as Blog page)
    const categories = [
        { name: "Milk & Dairies", count: 5, image: "/assets/Figure.png" },
        { name: "Cooking", count: 8, image: "/assets/Figure2.png" },
        { name: "Pet Foods", count: 3, image: "/assets/Figure (1).png" },
        { name: "Baking material", count: 5, image: "/assets/Figure (2).png" },
        { name: "Fresh Fruit", count: 6, image: "/assets/Figure (3).png" }
    ];

    return (
        <div>
            {/* Mobile Version */}
            <BlogDetail_mobile />

            {/* Desktop Version */}
            <div className="hidden lg:block mt-44">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm mb-8">
                        <Link to="/" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Home</Link>
                        <span className="text-gray-500">•</span>
                        <Link to="/blog" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Blog</Link>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-500">Recipes</span>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-4 gap-8">
                        {/* Left Content - Blog Detail */}
                        <div className="col-span-3">
                            <div className="bg-white rounded-xl overflow-hidden">
                                {/* Blog Header */} 
                                <div className="p-8">
                                    <span className="text-[#3BB77E] text-sm">Recipes</span>
                                    <h1 className="text-[30px] font-bold text-[#253D4E] mt-2 leading-tight">
                                        Best smartwatch 2022: the top wearables you can buy today
                                    </h1>
                                    <div className="flex items-center gap-4 mt-4">
                                        <div className="flex items-center gap-2">
                                            <img src="/assets/people2.png"
                                                alt="Author"
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <span className="text-gray-500 text-sm">By Sugar Route</span>
                                        </div>
                                        <span className="text-gray-500 text-xs">2 hours ago</span>
                                        <span className="text-gray-500 text-xs">8 mins read</span>
                                    </div>
                                </div>

                                {/* Blog Image */}
                                <img
                                    src="/assets/blog2.png"
                                    alt="Blog Cover"
                                    className="w-full h-[400px] object-cover rounded-xl"
                                />

                                {/* Blog Content */}
                                <div className="p-8">
                                    <p className="text-gray-600 mb-6">
                                        Helping everyone live happier, healthier lives at home through their kitchen. Kitchn
                                        is a daily food magazine on the Web celebrating life in the kitchen through home
                                        cooking and kitchen intelligence.
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        We've reviewed and ranked all of the best smartwatches on the market right now, and we've made a definitive list of the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        Those top-end wearables span from the Apple Watch to Fitbits, Garmin watches to Tizen-sporting Samsung watches. There's also Wear OS which is Google's own wearable operating system in the vein of Apple's watchOS - you'll see it show up in a lot of these devices.
                                    </p>
                                    <h2 className="text-2xl font-semibold text-[#253D4E] mb-4">Lorem ipsum dolor sit amet cons</h2>
                                    <p className="text-gray-600 mb-8">
                                        Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch, rank it against the competition and enter it into the list you'll find below.
                                    </p>

                                    {/* Two Column Images */}
                                    <div className="grid grid-cols-1 gap-8 mb-8">
                                        <img
                                            src="/assets/blog_de1.png"
                                            alt="Food Image 1"
                                            className="w-full h-[300px] object-cover rounded-xl"
                                        />
                                        {/* <img
                                            src="https://s3-alpha-sig.figma.com/img/0b06/d35f/9f0dc9b8b2a2a863096159d763f50baa?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhE6Cj-~pNkWB3CzfLFjtJ9nvD5mAfVQAYZoE74oyAqEk2GaAYCXd1dmuxw6DuIOl8xF4xdtOmdfNM9xwFYkcM5YOyrmSaMoNbfaKYaQfBAjJ9UBNPw1973Rpt5jPZI71Nca9cYwPXFMSl7jbbmD-k51pDTRolg7shT134OzS57cnzHhFqDCutoz1M6xvmp4qYd-sdReiE2es4~AMTXgmzGFKxZebVy-zEeZwlHf1s1MhcIwqrEd6c3sq1EAodkpfCuS2wO4ZHMKQv0dqBOqV9c68DJXgP-XjflEYqSAbFjk16BtCBY9e7pdFk02SMxx5rFC0eiui7F~sjcmuQsHsw__"
                                            alt="Food Image 2"
                                            className="w-full h-[300px] object-cover rounded-xl"
                                        /> */}
                                    </div>

                                    <p className="text-gray-600 mb-8">
                                        The culinary world is constantly evolving, and staying on top of the latest trends can be a challenge. From innovative cooking techniques to the latest ingredient discoveries, there's always something new to explore. In this article, we'll delve into the world of modern cuisine, highlighting the most exciting developments and must-try dishes of the season. Whether you're a seasoned chef or a curious foodie, you'll find inspiration in the pages that follow.
                                    </p>

                                    {/* Highlighted Text Box */}
                                    <div className="bg-[#F6F6F8] p-8 rounded-xl mb-8">
                                        <p className="text-gray-600">
                                            Unlocking the Secrets of Flavorful Cooking<sup>[5]</sup>. Explore the art of balancing flavors with our expert guide to culinary mastery. Discover how to elevate your dishes with harmonious pairings and bold seasoning.
                                        </p>
                                    </div>

                                    <p className="text-gray-600 mb-8">
                                        The culinary world is constantly evolving, and staying on top of the latest trends can be a challenge. From innovative cooking techniques to the latest ingredient discoveries, there's always something new to explore. In this article, we'll delve into the world of modern cuisine, highlighting the most exciting developments and must-try dishes of the season. Whether you're a seasoned chef or a curious foodie, you'll find inspiration in the pages that follow.
                                    </p>

                                    {/* Tags and Share Section */}
                                    <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-8">
                                        <div className="flex items-center gap-2">
                                            <span className="px-3 py-1 bg-[#3BB77E] text-white rounded-md text-sm">deer</span>
                                            <span className="px-3 py-1 bg-[#3BB77E] text-white rounded-md text-sm">nature</span>
                                            <span className="px-3 py-1 bg-[#3BB77E] text-white rounded-md text-sm">conserve</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-gray-500">
                                            <span className="text-sm">Share this:</span>
                                            <a href="#" className="hover:text-[#3BB77E]">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="hover:text-[#3BB77E]"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg></a>
                                            <a href="#" className="hover:text-[#3BB77E]"> <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                            </svg></a>
                                            <a href="#" className="hover:text-[#3BB77E]"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg></a>
                                        </div>
                                    </div>

                                    {/* Author Section */}
                                    <div className="flex items-start gap-4 mb-12">
                                        <img
                                            src="https://s3-alpha-sig.figma.com/img/16e4/df65/fbfcd886f866e8826cd7c9f435846f5a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P02OVMzBP-ZL5dqeSCSPUtNHzV~u93LWKNLNLeZEiTcT97DL1dzzHagbL-C6MkOyBhicT9tz6~gPpS3wT3lzwV9xqmWwP4hNgz8YC7qNSCqGBz4Qnlb2vioAcIxa5-tPxuwvTJgJz3M3bZdEN3SyMhcCRnUwK3Rehd8ws1w-XD5NSoVCvXic-Xhq3QU9X6oZlGQQhZwMH6m0jjmrWBXn-HmquEz9GEsfUVZyVBDjZGWVe54qKFFkfrAsi8e-9gL2RdzgLb5Mlo7Dqsdpv5aFRW62JZmlS-jyeQ8WhkuDEczr-HQemK7f2zQaYXacK4Lmogr6J7l05VJ4aOSqDtS~Mw__"
                                            alt="Barbara Cartland"
                                            className="w-16 h-16 rounded-full"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#253D4E] mb-2">Barbara Cartland</h3>
                                            <p className="text-sm text-gray-500 mb-2">3rd April 2022</p>
                                            <p className="text-gray-600">
                                                Hi there, I am a veteran food blogger sharing my daily all kinds of healthy and fresh recipes. I find inspiration in
                                                nature, on the streets and almost everywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet id
                                                enim, libero sit. Est donec lobortis cursus amet, cras elementum libero
                                            </p>
                                        </div>
                                    </div>

                                    {/* Comment Form */}
                                    <div className="bg-white rounded-xl p-8">
                                        <h3 className="text-2xl font-semibold text-[#253D4E] mb-2">Leave a Comment</h3>
                                        <p className="text-gray-500 text-sm mb-2">*</p>

                                        <form className="space-y-6">
                                            {/* Comment Textarea */}
                                            <textarea
                                                rows="6"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] mb-6"
                                                placeholder="Write your comment here..."
                                            ></textarea>

                                            <div className="grid grid-cols-2 gap-6">
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
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                            />
                                            <button
                                                type="submit"
                                                className="bg-[#3BB77E] text-white px-8 py-4 rounded-lg hover:bg-[#3BB77E]/90 transition-colors"
                                            >
                                                Post Comment
                                            </button>
                                        </form>
                                    </div>
                                    {/* Comments Section */}
                                    <div className="mb-2">
                                        <h3 className="text-2xl font-semibold text-[#253D4E] mb-6">Comments</h3>

                                        {/* Comment List */}
                                        <div className="space-y-8">
                                            {/* Comment 1 */}
                                            <div className="flex gap-4">
                                                <img
                                                    src="https://s3-alpha-sig.figma.com/img/16e4/df65/fbfcd886f866e8826cd7c9f435846f5a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P02OVMzBP-ZL5dqeSCSPUtNHzV~u93LWKNLNLeZEiTcT97DL1dzzHagbL-C6MkOyBhicT9tz6~gPpS3wT3lzwV9xqmWwP4hNgz8YC7qNSCqGBz4Qnlb2vioAcIxa5-tPxuwvTJgJz3M3bZdEN3SyMhcCRnUwK3Rehd8ws1w-XD5NSoVCvXic-Xhq3QU9X6oZlGQQhZwMH6m0jjmrWBXn-HmquEz9GEsfUVZyVBDjZGWVe54qKFFkfrAsi8e-9gL2RdzgLb5Mlo7Dqsdpv5aFRW62JZmlS-jyeQ8WhkuDEczr-HQemK7f2zQaYXacK4Lmogr6J7l05VJ4aOSqDtS~Mw__"
                                                    alt="Sienna"
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h4 className="text-[#3BB77E] font-medium">Sienna</h4>
                                                        <span className="text-gray-500 text-sm">December 4, 2022 at 3:12 pm</span>
                                                        <span className="text-yellow-400">★</span>
                                                    </div>
                                                    <p className="text-gray-600">
                                                        This blog post truly stood out to me. The author's distinctive approach to the subject matter struck a chord with me. The seamless integration of personal stories and expert knowledge crafted a captivating story that held my attention throughout. The writing was lucid, to the point, and devoid of technical terms, making it relatable to a broad audience. In summary, I found this post to be both enlightening and enjoyable, and I'm eager to explore more works from this gifted writer in the future.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Comment 2 */}
                                            <div className="flex gap-4">
                                                <img
                                                    src="https://s3-alpha-sig.figma.com/img/16e4/df65/fbfcd886f866e8826cd7c9f435846f5a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P02OVMzBP-ZL5dqeSCSPUtNHzV~u93LWKNLNLeZEiTcT97DL1dzzHagbL-C6MkOyBhicT9tz6~gPpS3wT3lzwV9xqmWwP4hNgz8YC7qNSCqGBz4Qnlb2vioAcIxa5-tPxuwvTJgJz3M3bZdEN3SyMhcCRnUwK3Rehd8ws1w-XD5NSoVCvXic-Xhq3QU9X6oZlGQQhZwMH6m0jjmrWBXn-HmquEz9GEsfUVZyVBDjZGWVe54qKFFkfrAsi8e-9gL2RdzgLb5Mlo7Dqsdpv5aFRW62JZmlS-jyeQ8WhkuDEczr-HQemK7f2zQaYXacK4Lmogr6J7l05VJ4aOSqDtS~Mw__"
                                                    alt="Brenna"
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h4 className="text-[#3BB77E] font-medium">Brenna</h4>
                                                        <span className="text-gray-500 text-sm">December 4, 2022 at 3:12 pm</span>
                                                        <span className="text-yellow-400">★</span>
                                                    </div>
                                                    <p className="text-gray-600">
                                                        I must say, I thoroughly enjoyed this blog post. The author's unique perspective on the topic really resonated with me. The way they wove together personal anecdotes and expert insights created a compelling narrative that kept me engaged from start to finish. The writing style was clear, concise, and free of jargon, making it accessible to a wide range of readers. Overall, I found this post to be both informative and entertaining, and I look forward to reading more from this talented writer in the future.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Comment 3 */}
                                            <div className="flex gap-4">
                                                <img
                                                    src="https://s3-alpha-sig.figma.com/img/16e4/df65/fbfcd886f866e8826cd7c9f435846f5a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P02OVMzBP-ZL5dqeSCSPUtNHzV~u93LWKNLNLeZEiTcT97DL1dzzHagbL-C6MkOyBhicT9tz6~gPpS3wT3lzwV9xqmWwP4hNgz8YC7qNSCqGBz4Qnlb2vioAcIxa5-tPxuwvTJgJz3M3bZdEN3SyMhcCRnUwK3Rehd8ws1w-XD5NSoVCvXic-Xhq3QU9X6oZlGQQhZwMH6m0jjmrWBXn-HmquEz9GEsfUVZyVBDjZGWVe54qKFFkfrAsi8e-9gL2RdzgLb5Mlo7Dqsdpv5aFRW62JZmlS-jyeQ8WhkuDEczr-HQemK7f2zQaYXacK4Lmogr6J7l05VJ4aOSqDtS~Mw__"
                                                    alt="Gemma"
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h4 className="text-[#3BB77E] font-medium">Gemma</h4>
                                                        <span className="text-gray-500 text-sm">December 4, 2022 at 3:12 pm</span>
                                                        <span className="text-yellow-400">★</span>
                                                    </div>
                                                    <p className="text-gray-600">
                                                        I found this blog post to be a refreshing take on the topic. The author's use of personal anecdotes and expert insights created a compelling narrative that kept me engaged from start to finish. The writing style was clear and concise, making it easy to follow along. I particularly appreciated the way the author broke down complex concepts into easily digestible pieces. Overall, I would highly recommend this post to anyone looking for a thought-provoking read.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right sidebar */}
                        <div className="hidden md:block col-span-1">
                            {/* Search */}
                            <div className="relative mb-8">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                />
                                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>

                            {/* Categories */}
                            <div className="bg-white rounded-xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Category</h3>
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

                            {/* Trending Now */}
                            <div className="bg-white rounded-xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Trending Now</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <img src="https://s3-alpha-sig.figma.com/img/c6e0/0d2a/20467838df1c528af63bb228455b48f6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqV~rmS6ELTH-KQ01ripPUo1gHfh3Y-OuQWwasPvcrzVdJ1lYGFyRLqltK27oDt41eI2stWHFwHlfaDWv~ZSXjYQOdJz09S6Ajs6flLuWRvWdJprjGABx4gBkTVfbR7m8S0g5sYSChTIDdF6FnhGmrTscJYyMQil22CMhzLHti4iorhMgvZjPdWfTiGLjFVD1sXRWQGHe-oYB0Rmo7WUnt49ybyTj53gtj0viB2aEzjSq0MwMIJeCYFQNj9zaCdqS0sGPwpJ75XI0ZK1FmDEGjlOh9lkofs1sTcuciOnRcF0vSUjKNzRlrW9Zv~V4eNNGDuvSfZQ17CNVBc1~TUvow__" alt="Chen Cardigan" className="w-12 h-12 rounded-lg object-cover" />
                                        <div>
                                            <h4 className="text-sm font-medium text-[#253D4E] hover:text-[#3BB77E] cursor-pointer">Chen Cardigan</h4>
                                            <span className="text-[#3BB77E] text-sm">$99.50</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="https://s3-alpha-sig.figma.com/img/0a45/78eb/a585fad4345109bba4bb7965b34bb93d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rz1Axkxk34BL8V1cL0k~2hFSkxmvs1KXMfuHFjKtjESDFzdWT-~6NItAOgV7X0KTgDIKsvMyFWWZZy4FlYCLaJx-OXaTrTHS0~uJPEP5jyeO9-2hDfUDOsTIk~z44S0rQn7R5YgVjYhJ0KnCJYMkqCb~D8uB7DANTn2uS8M1sOaIKlRbY2ODLQ0xBJyvvPC5n3YCMbLpWiTVTZ3g9WbLilz83fxr~-JhySNsD14pTGcaB9BBxyFDUJWJcT9KblnomrikWJDUTXTFHp4ORvyOWk5u2V-S6xNxYvVhz1M2WAQuDOysogWWEi995FrzeZVUHBHD3ws8-fQN4H1kITfhIQ__" alt="Chen Sweater" className="w-12 h-12 rounded-lg object-cover" />
                                        <div>
                                            <h4 className="text-sm font-medium text-[#253D4E] hover:text-[#3BB77E] cursor-pointer">Chen Sweater</h4>
                                            <span className="text-[#3BB77E] text-sm">$89.50</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="https://s3-alpha-sig.figma.com/img/db2e/e4d1/431152f37b8be8e26e7020df85c82e5b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MyT50V8dYZqeI7ebeyOezjHq-6JE82Agr68D4Pn51m8bFwVrvK4keC8TtqaWTOiCPkffBmmhmT5MSLx8loLe9WP7bi4pkVrbfQ2A6uvKy~9mHM7DpPZn9BledudM8jdHLuqZ4mVbEUfIQyFgL0Ld2lzWmVwOI1z0JdcXPo8U5bS1HkqAhZLA~Cg3EAZbv-a0zhl3sSSBip-yBXJ59t2-uMEkS7q9HP5vu0VEcAs-GU2MSOIjWAtNnlAkDiq4Um82wxMXck8QJpU07YOxth9S8yqBLWF0ZlDhTMS9zcu2fPrH-DHB4jQzh60ZzbBEYbcWAEtwwjzFyz~U68NXPkx9cg__" alt="Colorful Jacket" className="w-12 h-12 rounded-lg object-cover" />
                                        <div>
                                            <h4 className="text-sm font-medium text-[#253D4E] hover:text-[#3BB77E] cursor-pointer">Colorful Jacket</h4>
                                            <span className="text-[#3BB77E] text-sm">$25</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="https://s3-alpha-sig.figma.com/img/08aa/84c6/43e52b6e90cb14a936e3dc2e4e4a6e9e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVicDFlkHwq~MYOEUxw2eWxG8IrofSM9A~ncGpZz2k64BcW8LYkJOGlSIPZhGSxCdXULqljrnQDdIYA2aQ0m4~~3TmxEtEeiYTdPrn-VC3uF5eOlZR8Xk8rq~89fPCm8ROinvpgzguPqf7EexH5hHKy0bsQVbYNvDKT4lb6hinH~imzVEba8erZxpiM7yDuMhNPymhlGkfaLzAuwj~EK2IvtdS7Dv808DPhRJLsdvlfOsnDPllOUC8dDSQMuNXJSXv1hBLJMe3Io23QVMppDPN3Tp~JogT4k9gUU0kc04MI4RE-h~vGAr~vnxuHVcoQ~z2QOnw8Zmxp5sD~SztoMIg__" alt="Lorem Ipsum" className="w-12 h-12 rounded-lg object-cover" />
                                        <div>
                                            <h4 className="text-sm font-medium text-[#253D4E] hover:text-[#3BB77E] cursor-pointer">Lorem Ipsum</h4>
                                            <span className="text-[#3BB77E] text-sm">$25</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Gallery */}
                            <div className="bg-white rounded-xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Gallery</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    <img src="https://s3-alpha-sig.figma.com/img/21e4/4269/1440039ef19376cc9cd55fb67282b984?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MPKui7DRetvcKBxvFhO3giUhr0l3KAQca59jQkl4guWnLiMYDRVTBJ0RGDyBhe~Fxs1EZXgwNEL~XfN9fhGFjvegYkKde0kbpi~iAWzd2TTcaL0yd6ovydqXQsz4FVcITopxcDMO8GLKIoje01cEDTQOhvQ1oG0fbQDDJElyVVWjk4vM8PxXUC4mcOkOXUSQO0jnJxP0FDdm9EPX~88jx7XHMDOKyf-dMVH6aGm1gA06kYJ-DmX0Yki34XdJQJXPcUWJiRb~5C2u~sF-qB9dPeNNb5YJ2HFAIwGx85pIjmnFvZKsxD5EcFIhip8J0VQzWM6d3IbYhEmRmhsYSlQNfw__" alt="Gallery 1" className="w-full h-20 rounded-lg object-cover" />
                                    <img src="https://s3-alpha-sig.figma.com/img/2ca0/1f91/1e18a8b5efec3854e09469721767910e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKnINjAl3xpSHOQb51fa3vVCz2pNpFkx0bGxor9GaAABOsaicDLMJXQgHyfk4EQCf2DY~IWS6xxPXp1dwxfEBn0Q1LNfq1wB4p9yrz5IKMakBdFkaGKaMmwkkttOqjdMC69d56zQRldVQVLHc9SqGRRrVLvVr9ffkWevppQ3X5PEyxIdHSiypWw1s5TJQcVJwcNjd4xiUwGWbxxaXJDrBUU8C8MiNJSyajrpRZ4J4O6MhZ-16V6QCOIGRnh3d656Z8Gvv6TT609cQlgGZkFARjlsro3TkruGDcRUTaZ8M0xWcQ~LXXyB5AhKeiulzcNcPjt-n6UnLyJDqQe5NNZodw__" alt="Gallery 2" className="w-full h-20 rounded-lg object-cover" />
                                    <img src="https://s3-alpha-sig.figma.com/img/c6e0/0d2a/20467838df1c528af63bb228455b48f6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqV~rmS6ELTH-KQ01ripPUo1gHfh3Y-OuQWwasPvcrzVdJ1lYGFyRLqltK27oDt41eI2stWHFwHlfaDWv~ZSXjYQOdJz09S6Ajs6flLuWRvWdJprjGABx4gBkTVfbR7m8S0g5sYSChTIDdF6FnhGmrTscJYyMQil22CMhzLHti4iorhMgvZjPdWfTiGLjFVD1sXRWQGHe-oYB0Rmo7WUnt49ybyTj53gtj0viB2aEzjSq0MwMIJeCYFQNj9zaCdqS0sGPwpJ75XI0ZK1FmDEGjlOh9lkofs1sTcuciOnRcF0vSUjKNzRlrW9Zv~V4eNNGDuvSfZQ17CNVBc1~TUvow__" alt="Gallery 3" className="w-full h-20 rounded-lg object-cover" />
                                    <img src="https://s3-alpha-sig.figma.com/img/0a45/78eb/a585fad4345109bba4bb7965b34bb93d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rz1Axkxk34BL8V1cL0k~2hFSkxmvs1KXMfuHFjKtjESDFzdWT-~6NItAOgV7X0KTgDIKsvMyFWWZZy4FlYCLaJx-OXaTrTHS0~uJPEP5jyeO9-2hDfUDOsTIk~z44S0rQn7R5YgVjYhJ0KnCJYMkqCb~D8uB7DANTn2uS8M1sOaIKlRbY2ODLQ0xBJyvvPC5n3YCMbLpWiTVTZ3g9WbLilz83fxr~-JhySNsD14pTGcaB9BBxyFDUJWJcT9KblnomrikWJDUTXTFHp4ORvyOWk5u2V-S6xNxYvVhz1M2WAQuDOysogWWEi995FrzeZVUHBHD3ws8-fQN4H1kITfhIQ__" alt="Gallery 4" className="w-full h-20 rounded-lg object-cover" />
                                    <img src="https://s3-alpha-sig.figma.com/img/db2e/e4d1/431152f37b8be8e26e7020df85c82e5b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MyT50V8dYZqeI7ebeyOezjHq-6JE82Agr68D4Pn51m8bFwVrvK4keC8TtqaWTOiCPkffBmmhmT5MSLx8loLe9WP7bi4pkVrbfQ2A6uvKy~9mHM7DpPZn9BledudM8jdHLuqZ4mVbEUfIQyFgL0Ld2lzWmVwOI1z0JdcXPo8U5bS1HkqAhZLA~Cg3EAZbv-a0zhl3sSSBip-yBXJ59t2-uMEkS7q9HP5vu0VEcAs-GU2MSOIjWAtNnlAkDiq4Um82wxMXck8QJpU07YOxth9S8yqBLWF0ZlDhTMS9zcu2fPrH-DHB4jQzh60ZzbBEYbcWAEtwwjzFyz~U68NXPkx9cg__" alt="Gallery 5" className="w-full h-20 rounded-lg object-cover" />
                                    <img src="https://s3-alpha-sig.figma.com/img/08aa/84c6/43e52b6e90cb14a936e3dc2e4e4a6e9e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVicDFlkHwq~MYOEUxw2eWxG8IrofSM9A~ncGpZz2k64BcW8LYkJOGlSIPZhGSxCdXULqljrnQDdIYA2aQ0m4~~3TmxEtEeiYTdPrn-VC3uF5eOlZR8Xk8rq~89fPCm8ROinvpgzguPqf7EexH5hHKy0bsQVbYNvDKT4lb6hinH~imzVEba8erZxpiM7yDuMhNPymhlGkfaLzAuwj~EK2IvtdS7Dv808DPhRJLsdvlfOsnDPllOUC8dDSQMuNXJSXv1hBLJMe3Io23QVMppDPN3Tp~JogT4k9gUU0kc04MI4RE-h~vGAr~vnxuHVcoQ~z2QOnw8Zmxp5sD~SztoMIg__" alt="Gallery 6" className="w-full h-20 rounded-lg object-cover" />
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="bg-white rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                        Cabbage
                                    </span>
                                    <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                        Broccoli
                                    </span>
                                    <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                        Smoothie
                                    </span>
                                    <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                        Fruit
                                    </span>
                                    <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                        Salad
                                    </span>
                                    <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                        Appetizer
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section - Visible on all screens */}
            <Section />

            {/* Footer - Visible on all screens */}
            <Footer />
        </div>
    );
};

export default BlogDetail; 