import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white py-2 border-none mt-12">
            <div className="max-w-full mx-auto mt-2">
                <div className="grid grid-cols-5 gap-4">
                    {/* Company Info */}
                    <div>
                        <img src="/src/assets/logo.png" alt="Nest" className="h-16 mb-3" />
                        <p className="text-xs text-gray-600 mb-2">
                            Awesome grocery store website template
                        </p>
                        <div className="">
                            <p className="text-xs text-gray-600">
                                Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States
                            </p>
                            <p className="text-xs text-gray-600">
                                Call Us:(+91) - 540-025-124553
                            </p>
                            <p className="text-xs text-gray-600">
                                Email:sale@Nest.com
                            </p>
                            <p className="text-xs text-gray-600">
                                Hours:10:00 - 18:00, Mon - Sat
                            </p>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-base font-semibold mb-3">Company</h3>
                        <ul className="">
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">About Us</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Delivery Information</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Privacy Policy</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Terms & Conditions</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Contact Us</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Support Center</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Careers</a></li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="text-base font-semibold mb-3">Account</h3>
                        <ul className="">
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Sign In</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">View Cart</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">My Wishlist</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Track My Order</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Help Ticket</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Shipping Details</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Compare products</a></li>
                        </ul>
                    </div>

                    {/* Corporate */}
                    <div>
                        <h3 className="text-base font-semibold mb-3">Corporate</h3>
                        <ul className="">
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Become a Vendor</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Affiliate Program</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Farm Business</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Farm Careers</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Our Suppliers</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Accessibility</a></li>
                            <li><a href="#" className="text-xs text-gray-600 hover:text-[#3BB77E]">Promotions</a></li>
                        </ul>
                    </div>

                    {/* Install App */}
                    <div>
                        <h3 className="text-base font-semibold mb-3">Install App</h3>
                        <p className="text-xs text-gray-600 mb-2">
                            From App Store or Google Play
                        </p>
                        <div className="flex gap-2 mb-3">
                            <img src="https://s3-alpha-sig.figma.com/img/dc4b/2ffc/a1101b9deff29af3a785dfba02788877?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MxK2vWgoqBdQR-lqkRM4MG9xoUuvLRxZHHdR3gAbSsAimJQVhoJ9ZIXqG8df7s4cRQY4RWpLqsJ2aOx-7U62bxU4v9~H3jJJ0PNsCEWX26UB9jZzlLEXcF5YYgwYUnMUCSpURPOUZ4OBIq5q3suKfi3JPEwGYt1AdgV3v09q3oedwQnMCK8dg0jagcMJpoJrgdIKL2iF1fHIpIbhQF91cJrHle26pDk8FbUEqcxXLOtIjjTeNIwG2ibx5Tik06XgshuDiPJXmpNB0JjDhVe3ozshO5gdXBM~-niazkWm0gbHlcMDB-t63JVRjHz9engzt4CuQsmSh~U2u2GGb85r3Q__" alt="App Store" className="h-7 cursor-pointer" />
                            <img src="https://s3-alpha-sig.figma.com/img/7844/144b/561e00edee01e736c431c7d8af4eb2f0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UY8TbvXHUX4rOMTDsdh1Xopw2N0uwYOywkDwqbtwSQzKtHkWx9Uo2q03U2cEvua8tddt0IFAbhPdJQ3oqG~QpAW05LyQ0614TUhgOeqPnRnQjXmiu9dLPFNEnsMBKi3SQKhJteVIRAKN4DIdf2PeeoZ800EBkWUcUFzT0iFcibOiXIr~YvGKbven3X1wAOhbJl9m9fyiWtP-Wfci2y1mj6jUOKg6ZKLXCRAiwTzlUx~2eL0uIv~SokFo0szOi2ZV0enTLAkp6--1a7TdlS6qbMYKAWgmIQHkmX6Npg7YRXjcvcR2LkQx8Oy1jT-YWeyS0M-jhkmjFcUeg1MmzTxJ4g__" alt="Google Play" className="h-7 cursor-pointer" />
                        </div>
                        <p className="text-xs text-gray-600 mb-2">
                            Secured Payment Gateways
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 pt-4 border-t flex justify-between items-center">
                    <div className="text-xs text-gray-600">
                        © 2022, <span className="text-[#3BB77E]">Nest</span> - HTML Ecommerce Template
                        <span className="ml-1">All rights reserved</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div>
                                <p className="text-[#3BB77E] text-xs font-medium">1900 - 6666</p>
                                <p className="text-[10px] text-gray-500">Working 8:00 - 22:00</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div>
                                <p className="text-[#3BB77E] text-xs font-medium">1900 - 8888</p>
                                <p className="text-[10px] text-gray-500">24/7 Support Center</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-600">Follow Us</span>
                                <div className="flex gap-2">
                                    <a href="#" className="text-xs text-[#3BB77E] hover:text-[#3BB77E]/80">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-xs text-[#3BB77E] hover:text-[#3BB77E]/80">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-xs text-[#3BB77E] hover:text-[#3BB77E]/80">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-xs text-[#3BB77E] hover:text-[#3BB77E]/80">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <p className="text-[10px] text-gray-500">Up to 15% discount on your first subscribe</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer