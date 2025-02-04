import React from 'react';
import { Link } from 'react-router-dom';

const Footer_mobile = () => {
    return (
        <div className="lg:hidden bg-white text-center">
            {/* Logo and Info */}
            <div className="p-4 border-b">
                <div className="flex justify-center items-center gap-2 mb-3">
                    <img src="/assets/logo.png" alt="Nest" className="h-8" />
                    <span className="text-lg font-semibold text-[#253D4E]">Nest</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                    Awesome grocery store website template
                </p>
                <div className="space-y-1.5 text-sm text-gray-600">
                    <p>5171 W Campbell Ave undefined Kent, Utah</p>
                    <p>53127 United States</p>
                    <p>10:00 - 18:00, Mon - Sat</p>
                    <p>(+91) - 540-025-124553</p>
                    <p>sale@Nest.com</p>
                </div>
            </div>

            {/* Two Column Layout for Corporate and Popular */}
            <div className="grid grid-cols-2 divide-x border-b">
                {/* Corporate Column */}
                <div className="p-4">
                    <h3 className="text-[15px] font-medium text-[#253D4E] mb-3">Corporate</h3>
                    <div className="space-y-2">
                        <Link to="/become-vendor" className="block text-[13px] text-gray-600">Become a Vendor</Link>
                        <Link to="/affiliate" className="block text-[13px] text-gray-600">Affiliate Program</Link>
                        <Link to="/farm" className="block text-[13px] text-gray-600">Farm Business</Link>
                        <Link to="/careers" className="block text-[13px] text-gray-600">Farm Careers</Link>
                        <Link to="/suppliers" className="block text-[13px] text-gray-600">Our Suppliers</Link>
                        <Link to="/accessibility" className="block text-[13px] text-gray-600">Accessibility</Link>
                        <Link to="/promotions" className="block text-[13px] text-gray-600">Promotions</Link>
                    </div>
                </div>

                {/* Popular Column */}
                <div className="p-4">
                    <h3 className="text-[15px] font-medium text-[#253D4E] mb-3">Popular</h3>
                    <div className="space-y-2">
                        <Link to="/milk" className="block text-[13px] text-gray-600">Milk & Flavoured Milk</Link>
                        <Link to="/butter" className="block text-[13px] text-gray-600">Butter and Margarine</Link>
                        <Link to="/eggs" className="block text-[13px] text-gray-600">Eggs Substitutes</Link>
                        <Link to="/marmalades" className="block text-[13px] text-gray-600">Marmalades</Link>
                        <Link to="/sour-cream" className="block text-[13px] text-gray-600">Sour Cream and Dips</Link>
                        <Link to="/tea" className="block text-[13px] text-gray-600">Tea & Kombucha</Link>
                        <Link to="/cheese" className="block text-[13px] text-gray-600">Cheese</Link>
                    </div>
                </div>
            </div>

            {/* Install App Section */}
            <div className="p-4 border-b text-center">
                <h3 className="text-[15px] font-medium text-[#253D4E] mb-3">Install App</h3>
                <p className="text-[13px] text-gray-600 mb-3">From App Store or Google Play</p>
                <div className="flex justify-center gap-2 mb-4">
                    <img src="/assets/appstore.jpeg" alt="App Store" className="h-8" />
                    <img src="/assets/playstore.jpeg" alt="Google Play" className="h-8" />
                </div>
                <p className="text-[13px] text-gray-600 mb-2">Secured Payment Gateways</p>
                <div className="flex justify-center">
                    <img src="/assets/payment.png" alt="Payment Methods" className="h-4" />
                </div>
            </div>

            {/* Copyright */}
            <div className="p-4 text-center text-[11px] text-gray-500">
                <p>© 2024, Nest - HTML Ecommerce Template</p>
                <p>All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer_mobile; 