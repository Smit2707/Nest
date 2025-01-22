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
                    <img src="https://s3-alpha-sig.figma.com/img/dc4b/2ffc/a1101b9deff29af3a785dfba02788877?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J8gdg37hcTe6mjESAwgcpB31fZZcu2nNhE1O6qqjseWNDrd9qW2nG2EoRT2anf6MVh~CSzRSMlXuFAoCntM-ddtaLT3~vG-LHa-HijiQ-8STS1k189mp1zfghD0sAfkxeTxsWoLnF-EIliX4i0P8911gANYDEhm8koVbeVbxbQKkqeBnVUVyhzJNECoKq0WxqsXaaf12ZZTUMUqpUcX8wxiHfXrAsQaKeXlwpxZymimiGUw~b3TR8Xa--55pDX-20vBmZcYS3UinExKysvKUvMkC3hf~X9GcsZXBT3Pp3ZNDfhZp1oZkhfnTpKuJWP7hLmmSYcHGzvLpY88yOezYGg__" alt="App Store" className="h-8" />
                    <img src="https://s3-alpha-sig.figma.com/img/7844/144b/561e00edee01e736c431c7d8af4eb2f0?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T4i61TGO09VJMaATecBYlmMpfO5EH5FLVi9G5m9fhuOeiT2XAS~s-zWRhVqh6nDn-Ts12l5Yta1Jpl1SsdYi9~Qfk6IX2CE5b9JXjhdtpH8cSJUabPuqPd-bR4dXBNfzQVrWigBJ2wl7yhVRBRwSy3ZcCmgP5FxwQy91PBnlBrInsGvEhppRwv0~ATL~O-du9UDd-lsryhVww5NRu4ElaoWtcQblllEDKCr2lNLIms6LRr9j5oL6yhdZCv5wqcQRBwaJkX9HVLpa-d637PTaIMAGuo5uEEl4OfNmISV0alm9aLmk52Vb9aus0gKMI4VaGYd6lqsLyBbxm797ub00xw__" alt="Google Play" className="h-8" />
                </div>
                <p className="text-[13px] text-gray-600 mb-2">Secured Payment Gateways</p>
                <div className="flex justify-center">
                    <img src="https://s3-alpha-sig.figma.com/img/abfd/e206/9df20d065d424eb84b76f8b62e604c51?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e0420eK1FgzohVjGvv4jhGPgC8nmgGjLls1EyV6O-TJTofaHZ34teACI0vFklFS0Cj7CJMjhD0KB-NEyP~9ANnvb6q-LPfo2jFUD6MYQyK0Dg5NNmTEJ890gjtsLwFq77xjBbVLZQjmWWNE-OyKOKOW1zYdwz13Hmfq50~lgQn0upcrM7jtXUmXur8KlvcCub82VUXkXUB3NUXZrnXL59UpZ30zyj8OQ~ifdKVNqjvLaMKQtTr9HXqVQQB-YchOoj89JhHpOERVBGOgTcZG6LBhKjmcS5BJYzOUjygjNhIdwtHDFxyCESPEvqOaH44b2O5HwLPDDdcGer-nD7Wh3nA__" alt="Payment Methods" className="h-4" />
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