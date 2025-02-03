import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';
import Footer_mobile from './Footer_mobile';

const About_mobile = () => {
    return (
        <div className="lg:hidden text-center">
            {/* Breadcrumb */}
            <div className="px-4 py-2">
                <div className="flex items-center justify-center gap-2 text-xs">
                    <Link to="/" className="text-gray-500 hover:text-[#3BB77E]">Home</Link>
                    <span className="text-gray-500">•</span>
                    <Link to="/pages" className="text-gray-500 hover:text-[#3BB77E]">Pages</Link>
                    <span className="text-gray-500">•</span>
                    <span className="text-[#3BB77E]">About Us</span>
                </div>
            </div>

            {/* Hero Section */}
            <div className="px-4 mb-2">
                <div className="relative">
                    <img 
                        src="/assets/main_about.png"
                        alt="About Hero"
                        className="w-full h-[300px] md:h-[400px] rounded-2xl object-cover"
                    />
                </div>
            </div>

            {/* Welcome Section */}
            <div className="px-4 py-6">
                <h1 className="text-2xl md:text-3xl font-bold text-[#253D4E] mb-4">
                    Welcome to Nest
                </h1>
                <div className="space-y-4 text-sm text-gray-600 max-w-2xl mx-auto">
                    <p>
                        At Nest, we believe that food is more than just sustenance - it's a way to bring people together. Our mission is to provide high-quality, locally sourced ingredients to help you create unforgettable dining experiences.
                    </p>
                    <p>
                        Our team is passionate about building a community that celebrates the joy of cooking and the importance of sharing meals with others. We're committed to supporting local farmers, reducing our environmental footprint, and making healthy, delicious food accessible to everyone.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="px-4 py-6">
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                    <div className="bg-white p-3 md:p-6 rounded-lg border border-gray-100 flex flex-col items-center">
                        <img src="/assets/icon-2.png" alt="Price Tag" className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
                        <h3 className="text-xs md:text-lg font-semibold text-[#253D4E] mb-1 md:mb-2">Best Prices & Offers</h3>
                        <p className="text-[10px] md:text-sm text-gray-500 mb-2 md:mb-3 line-clamp-3">
                            There are many variations of passages of Lorem Ipsum available
                        </p>
                        <a href="#" className="text-[10px] md:text-sm text-[#3BB77E]">Read more</a>
                    </div>

                    <div className="bg-white p-3 md:p-6 rounded-lg border border-gray-100 flex flex-col items-center">
                        <img src="/assets/icon-3.png" alt="Handshake" className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
                        <h3 className="text-xs md:text-lg font-semibold text-[#253D4E] mb-1 md:mb-2">Wide Assortment</h3>
                        <p className="text-[10px] md:text-sm text-gray-500 mb-2 md:mb-3 line-clamp-3">
                            There are many variations of passages of Lorem Ipsum available
                        </p>
                        <a href="#" className="text-[10px] md:text-sm text-[#3BB77E]">Read more</a>
                    </div>

                    <div className="bg-white p-3 md:p-6 rounded-lg border border-gray-100 flex flex-col items-center">
                        <img src="/assets/icon-4.png" alt="Document" className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
                        <h3 className="text-xs md:text-lg font-semibold text-[#253D4E] mb-1 md:mb-2">Free Delivery</h3>
                        <p className="text-[10px] md:text-sm text-gray-500 mb-2 md:mb-3 line-clamp-3">
                            There are many variations of passages of Lorem Ipsum available
                        </p>
                        <a href="#" className="text-[10px] md:text-sm text-[#3BB77E]">Read more</a>
                    </div>

                    <div className="bg-white p-3 md:p-6 rounded-lg border border-gray-100 flex flex-col items-center">
                        <img src="/assets/icon-5.png" alt="Return" className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
                        <h3 className="text-xs md:text-lg font-semibold text-[#253D4E] mb-1 md:mb-2">Easy Returns</h3>
                        <p className="text-[10px] md:text-sm text-gray-500 mb-2 md:mb-3 line-clamp-3">
                            There are many variations of passages of Lorem Ipsum available
                        </p>
                        <a href="#" className="text-[10px] md:text-sm text-[#3BB77E]">Read more</a>
                    </div>

                    <div className="bg-white p-3 md:p-6 rounded-lg border border-gray-100 flex flex-col items-center">
                        <img src="/assets/icon-6.png" alt="Satisfaction" className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
                        <h3 className="text-xs md:text-lg font-semibold text-[#253D4E] mb-1 md:mb-2">100% Satisfaction</h3>
                        <p className="text-[10px] md:text-sm text-gray-500 mb-2 md:mb-3 line-clamp-3">
                            There are many variations of passages of Lorem Ipsum available
                        </p>
                        <a href="#" className="text-[10px] md:text-sm text-[#3BB77E]">Read more</a>
                    </div>

                    <div className="bg-white p-3 md:p-6 rounded-lg border border-gray-100 flex flex-col items-center">
                        <img src="/assets/icon-1.png" alt="Daily Deal" className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4" />
                        <h3 className="text-xs md:text-lg font-semibold text-[#253D4E] mb-1 md:mb-2">Great Daily Deal</h3>
                        <p className="text-[10px] md:text-sm text-gray-500 mb-2 md:mb-3 line-clamp-3">
                            There are many variations of passages of Lorem Ipsum available
                        </p>
                        <a href="#" className="text-[10px] md:text-sm text-[#3BB77E]">Read more</a>
                    </div>
                </div>
            </div>

            {/* Performance Metrics */}
            <div className="px-4 py-6 bg-[#E7F5ED]">
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-[#3BB77E]">10K+</div>
                        <div className="text-xs text-gray-600">Products</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-[#3BB77E]">8K+</div>
                        <div className="text-xs text-gray-600">Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-[#3BB77E]">100+</div>
                        <div className="text-xs text-gray-600">Suppliers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-[#3BB77E]">50+</div>
                        <div className="text-xs text-gray-600">Cities</div>
                    </div>
                </div>
            </div>

            {/* Our Team Section */}
            <div className="px-4 py-8">
                <h2 className="text-2xl font-bold text-[#253D4E] mb-6">Our Team</h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-4 max-w-[500px]">
                        <div className="text-center">
                            <img 
                                src="/assets/people2.png" 
                                alt="Team Member"
                                className="w-full h-auto rounded-lg mb-3"
                            />
                            <h3 className="text-base font-semibold text-[#253D4E]">H. Merinda</h3>
                            <p className="text-sm text-gray-500">CEO & Co-Founder</p>
                        </div>

                        <div className="text-center">
                            <img 
                                src="/assets/people1.png" 
                                alt="Team Member"
                                className="w-full h-auto rounded-lg mb-3"
                            />
                            <h3 className="text-base font-semibold text-[#253D4E]">Dilan Specter</h3>
                            <p className="text-sm text-gray-500">Head Engineer</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* E-commerce Partner Section */}
            <div className="px-4 py-8 bg-gray-50">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#253D4E] mb-4">
                        Your Partner for e-commerce grocery solution
                    </h2>
                    <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                        We provide comprehensive e-commerce solutions for our partners
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#3BB77E] mb-1">$350.6M</div>
                        <p className="text-sm text-gray-600">Annual Partner Revenue</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#3BB77E] mb-1">100+</div>
                        <p className="text-sm text-gray-600">Cities</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#3BB77E] mb-1">150+</div>
                        <p className="text-sm text-gray-600">Monthly Visitors</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#3BB77E] mb-1">90%</div>
                        <p className="text-sm text-gray-600">Happy Customers</p>
                    </div>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="px-4 py-6">
                <div className="flex justify-center gap-4">
                    <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Newsletter Section */}
            <Section />

            {/* Footer */}
            <Footer_mobile />
        </div>
    );
};

export default About_mobile; 