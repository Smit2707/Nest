import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import Section from './Section';
import Footer_mobile from './Footer_mobile';

const Contact_mobile = () => {
    const contactInfo = [
        {
            icon: <FiMapPin className="text-xl text-[#3BB77E]" />,
            title: "Address",
            details: [
                "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
                "(+91) - 540-025-124553"
            ]
        },
        {
            icon: <FiClock className="text-xl text-[#3BB77E]" />,
            title: "Hours of Operation",
            details: [
                "10:00 - 18:00, Mon - Sat",
                "Closed on Sundays"
            ]
        },
        {
            icon: <FiMail className="text-xl text-[#3BB77E]" />,
            title: "Email",
            details: [
                "sale@Nest.com",
                "technical@Nest.com"
            ]
        },
        {
            icon: <FiPhone className="text-xl text-[#3BB77E]" />,
            title: "Phone",
            details: [
                "(+91) - 540-025-124553",
                "(+91) - 540-025-124553"
            ]
        }
    ];

    return (
        <div className="lg:hidden pb-2">
            {/* Breadcrumb */}
            <div className="px-4 py-2 bg-white">
                <div className="flex items-center gap-2 text-xs">
                    <Link to="/" className="text-gray-500 hover:text-[#3BB77E]">Home</Link>
                    <span className="text-gray-500">•</span>
                    <span className="text-[#3BB77E]">Contact</span>
                </div>
            </div>

            {/* Title Section */}
            <div className="px-4 py-3">
                <h1 className="text-2xl font-bold text-[#253D4E] mb-2">Contact</h1>
                <p className="text-sm text-gray-500">Get in touch with us</p>
            </div>

            {/* Contact Info Cards */}
            <div className="px-4 py-4">
                <div className="grid grid-cols-1 gap-4">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-[#DEF9EC] rounded-lg">
                                    {info.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-[#253D4E] mb-2">{info.title}</h3>
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-sm text-gray-600">{detail}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="px-4 py-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h2 className="text-xl font-bold text-[#253D4E] mb-6">Drop Us a Line</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Name *" 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Email *" 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                />
                            </div>
                            <div>
                                <input 
                                    type="tel" 
                                    placeholder="Phone *" 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                />
                            </div>
                            <div>
                                <textarea 
                                    placeholder="Message *" 
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                ></textarea>
                            </div>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-[#3BB77E] text-white py-3 rounded-lg font-medium hover:bg-[#3BB77E]/90"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Map Section */}
            <div className="px-4 py-4">
                <div className="w-full h-[300px] rounded-xl overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7126976327277!2d-122.41941708468212!3d37.77492897975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sus!4v1565838081665!5m2!1sen!2sus"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                        className="w-full h-full"
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
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

export default Contact_mobile; 