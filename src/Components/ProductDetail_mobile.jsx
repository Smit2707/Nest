import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Section from './Section';
import Footer_mobile from './Footer_mobile';

const ProductDetail_mobile = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const product = {
        id: parseInt(id),
        name: "Seeds of Change Organic Quinoa, Brown",
        brand: "NestFood",
        rating: 5,
        reviews: 32,
        currentPrice: 38,
        oldPrice: 52,
        discount: "26% Off",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.",
        images: [
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
    };

    return (
        <div className="lg:hidden mt-[80px]">
            {/* Main Product Image */}
            <div className="w-full h-[400px] bg-[#F4F6FA]">
                <img 
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 p-4 bg-white">
                {product.images.map((image, index) => (
                    <div 
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-[70px] h-[70px] bg-[#F4F6FA] rounded-lg cursor-pointer object-cover object-center ${
                            selectedImage === index ? 'border-2 border-[#3BB77E]' : ''
                        }`}
                    >
                        <img 
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-contain p-2"
                        />
                    </div>
                ))}
            </div>

            {/* Product Details */}
            <div className="p-4 bg-white">
                <span className="text-[#3BB77E] text-sm font-medium">Sale Off</span>
                
                <h1 className="text-[#253D4E] text-2xl font-semibold mt-2">
                    Seeds of Change<br />
                    Organic Quinoa,<br />
                    Brown
                </h1>

                <div className="flex items-center gap-2 mt-3">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} size={14} />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                    <span className="text-sm text-[#3BB77E]">By {product.brand}</span>
                </div>

                <div className="flex items-center gap-2 mt-3">
                    <span className="text-[#3BB77E] text-2xl font-semibold">${product.currentPrice}</span>
                    <span className="text-gray-400 text-lg line-through">${product.oldPrice}</span>
                    <span className="text-red-500 bg-red-50 px-2 py-1 rounded-full text-xs">
                        {product.discount}
                    </span>
                </div>

                <p className="text-gray-600 text-sm mt-4">
                    {product.description}
                </p>

                <div className="mt-4">
                    <p className="text-gray-700 text-sm mb-2">Size / Weight:</p>
                    <div className="flex gap-2">
                        {['25g', '50g', '100g', '150g'].map((size) => (
                            <button
                                key={size}
                                className={`px-4 py-1.5 rounded-full text-sm ${
                                    size === '25g' 
                                        ? 'bg-[#3BB77E] text-white' 
                                        : 'border border-gray-200 text-gray-600'
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-6">
                    <input 
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="w-20 border rounded-lg px-2 py-2 text-center text-sm"
                        min="1"
                    />
                    <button className="flex-1 bg-[#3BB77E] text-white py-2.5 px-4 rounded-lg text-sm font-medium">
                        Add to cart
                    </button>
                    <button className="border rounded-lg p-2.5">
                        <FiHeart className="w-5 h-5 text-gray-400" />
                    </button>
                </div>
            </div>

            {/* Product Information Tabs */}
            <div className="mt-6 px-4 bg-white">
                {/* Tab Headers */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                    <button className="text-[#3bb77e] px-3 py-2 border-[1px] font-medium text-center rounded-full text-sm whitespace-nowrap">
                        Description
                    </button>
                    <button className="text-gray-500 px-3 py-2 border-[1px] font-medium text-center rounded-full text-sm whitespace-nowrap">
                        Additional info
                    </button>
                    <button className="text-gray-500 px-3 py-2 border-[1px] font-medium text-center rounded-full text-sm whitespace-nowrap">
                        Vendor
                    </button>
                    <button className="text-gray-500 px-3 py-2 border-[1px] font-medium text-center rounded-full text-sm whitespace-nowrap">
                        Reviews (3)
                    </button>
                </div>

                {/* Tab Content */}
                <div className="py-4">
                    <div className="space-y-4">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly.
                        </p>

                        {/* Product Details Table */}
                        <div className="space-y-3">
                            <div className="flex items-center text-sm">
                                <span className="text-gray-500 w-36">Type Of Packing</span>
                                <span className="text-gray-700">Bottle</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="text-gray-500 w-36">Color</span>
                                <span className="text-gray-700">Green, Pink, Blue</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="text-gray-500 w-36">Quantity Per Case</span>
                                <span className="text-gray-700">100ml</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="text-gray-500 w-36">Ethyl Alcohol</span>
                                <span className="text-gray-700">70%</span>
                            </div>
                        </div>

                        {/* Additional Product Info */}
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-[15px] font-semibold text-[#253D4E] mb-2">
                                    Additional Info
                                </h3>
                                <div className="text-sm text-gray-600 space-y-2">
                                    <div className="flex items-center">
                                        <span className="text-gray-500 w-24">Weight:</span>
                                        <span>150g</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-500 w-24">Type:</span>
                                        <span>Organic</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-500 w-24">MFG:</span>
                                        <span>Jun 4, 2022</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-gray-500 w-24">LIFE:</span>
                                        <span>70 days</span>
                                    </div>
                                </div>
                            </div>

                            {/* Suggested Use */}
                            <div>
                                <h3 className="text-[15px] font-semibold text-[#253D4E] mb-2">
                                    Suggested Use
                                </h3>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                                    <li>Refrigeration not necessary.</li>
                                    <li>Stir before serving</li>
                                </ul>
                            </div>

                            {/* Other Ingredients */}
                            <div>
                                <h3 className="text-[15px] font-semibold text-[#253D4E] mb-2">
                                    Other Ingredients
                                </h3>
                                <ul className="space-y-1 text-sm text-gray-600">
                                    <li>Organic raw pecans, organic raw cashews.</li>
                                    <li>This butter was produced using an LTG process.</li>
                                    <li>Made in machinery that processes tree nuts.</li>
                                </ul>
                            </div>

                            {/* Warnings */}
                            <div>
                                <h3 className="text-[15px] font-semibold text-[#253D4E] mb-2">
                                    Warnings
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Oil separation occurs naturally. May contain pieces of shell.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Tags */}
            <div className="px-4 py-4 bg-white mt-2">
                <div className="flex items-center text-sm">
                    <span className="text-gray-500 w-16">Tags:</span>
                    <div className="flex gap-2">
                        <span className="text-[#3BB77E]">Snack</span>
                        <span className="text-gray-400">,</span>
                        <span className="text-[#3BB77E]">Organic</span>
                        <span className="text-gray-400">,</span>
                        <span className="text-[#3BB77E]">Brown</span>
                    </div>
                </div>
            </div>

            {/* Stock Info */}
            <div className="px-4 py-3 bg-white mt-2 mb-4">
                <div className="flex items-center text-sm">
                    <span className="text-gray-500 w-16">Stock:</span>
                    <span className="text-[#3BB77E]">8 Items In Stock</span>
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

export default ProductDetail_mobile; 