import React from 'react';
import Footer from '../Components/Footer';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Section from '../Components/Section';

const Contact = () => {
  return (
        <div className="mt-[180px] container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Home</Link>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">Contact</span>
            </div>

            {/* Contact Section */}
            <div className="max-w-[1200px] mx-auto">
                {/* Header and Content Grid */}
                <div className="grid grid-cols-2 gap-12 mb-12">
                    {/* Left Side - Main Content */}
                    <div className="">
                        <span className="text-[#3BB77E] text-sm">How can help you ?</span>
                        <h1 className="text-[40px] font-bold text-[#253D4E] mt-2">
                            Let us know how <br />we can help you
                        </h1>
                        <p className="text-gray-500 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <p className="text-gray-500 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>

                    {/* Right Side - Contact Points */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-8">
                            {/* Visit Feedback */}
                            <div>
                                <h3 className="text-[#3BB77E] font-semibold mb-3">01. Visit Feedback</h3>
                                <p className="text-gray-500 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>

                            {/* Employer Services */}
                            <div>
                                <h3 className="text-[#3BB77E] font-semibold mb-3">02. Employer Services</h3>
                                <p className="text-gray-500 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            {/* Billing Inquiries */}
                            <div>
                                <h3 className="text-[#3BB77E] font-semibold mb-3">03. Billing Inquiries</h3>
                                <p className="text-gray-500 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>

                            {/* General Inquiries */}
                            <div>
                                <h3 className="text-[#3BB77E] font-semibold mb-3">04. General Inquiries</h3>
                                <p className="text-gray-500 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[400px] rounded-xl overflow-hidden mb-12">
                    <iframe 
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik" 
                        className="w-full h-full border-0"
                        title="Location Map"
                    />
                </div>

                {/* Office Locations */}
                <div className="grid grid-cols-3 gap-8 mb-16">
                    {/* Office */}
                    <div>
                        <h3 className="text-[#3BB77E] font-semibold text-lg mb-4">Office</h3>
                        <p className="text-gray-600 text-sm mb-2">205 North Michigan Avenue, Suite 810</p>
                        <p className="text-gray-600 text-sm mb-2">Chicago, 60601, USA</p>
                        <p className="text-gray-600 text-sm mb-2">Phone: (123) 456-7890</p>
                        <p className="text-gray-600 text-sm mb-4">Email: contact@Evara.com</p>
                        <button className="text-white bg-[#3BB77E] px-4 py-2 rounded-md text-sm hover:bg-[#3BB77E]/90 flex items-center gap-2">
                            <FaMapMarkerAlt /> View map
                        </button>
                    </div>

                    {/* Studio */}
                    <div>
                        <h3 className="text-[#3BB77E] font-semibold text-lg mb-4">Studio</h3>
                        <p className="text-gray-600 text-sm mb-2">205 North Michigan Avenue, Suite 810</p>
                        <p className="text-gray-600 text-sm mb-2">Chicago, 60601, USA</p>
                        <p className="text-gray-600 text-sm mb-2">Phone: (123) 456-7890</p>
                        <p className="text-gray-600 text-sm mb-4">Email: contact@Evara.com</p>
                        <button className="text-white bg-[#3BB77E] px-4 py-2 rounded-md text-sm hover:bg-[#3BB77E]/90 flex items-center gap-2">
                            <FaMapMarkerAlt /> View map
                        </button>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-[#3BB77E] font-semibold text-lg mb-4">Shop</h3>
                        <p className="text-gray-600 text-sm mb-2">205 North Michigan Avenue, Suite 810</p>
                        <p className="text-gray-600 text-sm mb-2">Chicago, 60601, USA</p>
                        <p className="text-gray-600 text-sm mb-2">Phone: (123) 456-7890</p>
                        <p className="text-gray-600 text-sm mb-4">Email: contact@Evara.com</p>
                        <button className="text-white bg-[#3BB77E] px-4 py-2 rounded-md text-sm hover:bg-[#3BB77E]/90 flex items-center gap-2">
                            <FaMapMarkerAlt /> View map
                        </button>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="grid grid-cols-2 gap-12 mb-16">
                    {/* Form Section */}
                    <div>
                        <h3 className="text-[#3BB77E] text-sm mb-2">Contact form</h3>
                        <h2 className="text-[32px] font-bold text-[#253D4E] mb-4">Drop Us a Line</h2>
                        <p className="text-gray-500 text-sm mb-8">Your email address will not be published. Required fields are marked *</p>
                        
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    placeholder="First Name" 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                />
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <input 
                                    type="tel" 
                                    placeholder="Your Phone" 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Subject" 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                />
                            </div>
                            <textarea 
                                rows="6" 
                                placeholder="Message" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                            ></textarea>
                            <button 
                                type="submit" 
                                className="bg-[#253D4E] text-white px-8 py-4 rounded-lg hover:bg-[#253D4E]/90 transition-colors"
                            >
                                Send message
                            </button>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div>
                        <img 
                            src="https://s3-alpha-sig.figma.com/img/4027/36d2/6308ccf0f42597b84434ecec3cb4995f?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKoT3BimVfdzoIxkc50cS9kujXZDx2qyvAdr1lqJeugwzznF1PZeqZh8H278P9JR4xoce49HntIL8xr-Tm9sydtk~pKThfKKRfO-3BcUm3OqXzB5hPfVoxs4Qax2K1yi7MO7xVzCtJzvE9ebvKL3Mj7hM1XrkyVKmyj4gOLsFVNTrCHHVnCWHsUSxeb1w9nlHo7L0FYfTKFcykPMuh8sPxnwLesU3Dp5I4cssjqrci7sKNr3woc5Sz~UoseWAuLj41CDVv7iagvXDKbAvr~7rrsTZ2PuOkaySEwVybD7qauOdfefqnlXE-uPiJxA7ni1KXvQ1dn~Z0EgHGdeZ7NH2A__" 
                            alt="Contact Support" 
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
                <Section />
            </div>

            <Footer />
        </div>
    );
};

export default Contact;