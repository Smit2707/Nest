import React from 'react';
import Footer from '../Components/Footer';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Section from '../Components/Section';
import Layout from '../Components/Layout';
import Contact_mobile from '../Components/Contact_mobile';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  return (
    <Layout>
        {/* Mobile Version */}
        <Contact_mobile />

        {/* Desktop Version */}
        <div className="hidden lg:block">
            <div className="container mx-auto px-4">
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
                                At Evara, we value your feedback and strive to provide the best possible experience for our customers. If you have any questions, concerns, or suggestions, please don't hesitate to reach out to us. Our dedicated team is always ready to assist you and ensure your satisfaction.
                            </p>
                            <p className="text-gray-500 mt-4">
                                If you have any questions or concerns, please don't hesitate to reach out to us. We're always here to help and look forward to hearing from you.
                            </p>
                        </div>

                        {/* Right Side - Contact Points */}
                        <div className="space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                {/* Visit Feedback */}
                                <div>
                                    <h3 className="text-[#3BB77E] font-semibold mb-3">01. Visit Feedback</h3>
                                    <p className="text-gray-500 text-sm">
                                        For visit feedback, please contact our dedicated team at feedback@evara.com or call us at (123) 456-7890. We are available to assist you Monday through Friday from 9am to 5pm EST.
                                    </p>
                                </div>

                                {/* Employer Services */}
                                <div>
                                    <h3 className="text-[#3BB77E] font-semibold mb-3">02. Employer Services</h3>
                                    <p className="text-gray-500 text-sm">
                                        For employer services inquiries, please contact our dedicated team at hr@evara.com or call us at (123) 456-7890. We are available to assist you Monday through Friday from 9am to 5pm EST.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                {/* Billing Inquiries */}
                                <div>
                                    <h3 className="text-[#3BB77E] font-semibold mb-3">03. Billing Inquiries</h3>
                                    <p className="text-gray-500 text-sm">
                                        For billing inquiries, please contact our dedicated team at billing@evara.com or call us at (123) 456-7890. We are available to assist you Monday through Friday from 9am to 5pm EST.
                                    </p>
                                </div>

                                {/* General Inquiries */}
                                <div>
                                    <h3 className="text-[#3BB77E] font-semibold mb-3">04. General Inquiries</h3>
                                    <p className="text-gray-500 text-sm">
                                        We are here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="w-full h-[400px] rounded-xl overflow-hidden mb-12">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.543763040803!2d72.62590417564311!3d23.11379151291736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84604595e899%3A0x3e7418c1b4e56140!2sWebEarl%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sus!4v1737614177966!5m2!1sen!2sus"
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
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.543763040803!2d72.62590417564311!3d23.11379151291736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84604595e899%3A0x3e7418c1b4e56140!2sWebEarl%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sus!4v1737614177966!5m2!1sen!2sus" 
                        width="600" 
                        height="450" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe> */}
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
                                src="https://s3-alpha-sig.figma.com/img/4027/36d2/6308ccf0f42597b84434ecec3cb4995f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WiRYA-G-Qo1oWTEFrL1d48q8bUTa6wegNStaR9DLaGdXmPwBbAesGrHpJBSlOkYz5O7P43ISJ8yyerL2pOnNS4o-Kuj~z7qoQfSEb1P1gg1L0NFzJUCityQWyNYeVJCqw7NVKoWRielOtWc~bNaxk56sEEZXzuIA~gZR7M71k7A4uairqbMUFzuv84sY9AReZ6vX7kq4YcDFf2l~H1Wt6qibobgX9gctro9owKrt7UZc98WbxthXVR2~PVFN-0TWF1BV7sz2rdAIvSEtl2Ysvy6QKRhQgEniSLsdpglNg4uei-Mfpttlqs2p8JseKaF7jFqt72HFdB9lBtqGNhxKeA__" 
                                alt="Contact Support" 
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                    <Section />
                </div>

                <Footer />
            </div>
        </div>
    </Layout>
  );
};

export default Contact;