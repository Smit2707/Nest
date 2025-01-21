import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import CategorySidebar from './CategorySidebar';
import { FaShoppingCart } from "react-icons/fa";
import Section from './Section';
import Footer from './Footer';

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState('25g');
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="mt-[180px] container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
                <Link to="/" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Home</Link>
                <span className="text-gray-500">•</span>
                <Link to="/shop" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Shop</Link>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">Seeds of Change Organic Quinoa</span>
            </div>

            {/* Main Content with Sidebar Layout */}
            <div className="grid grid-cols-4 gap-8">
                {/* Main Product Content - Takes 3 columns */}
                <div className="col-span-3">
                    {/* Product Info Section */}
                    <div className="grid grid-cols-2 gap-12 mb-16">
                        {/* Left - Product Images */}
                        <div>
                            <div className="bg-[#F4F6FA] rounded-xl p-0 overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1525904097878-94fb15835963?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Product"
                                    className="w-full h-[400px] object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="bg-[#F4F6FA] rounded-xl p-4 cursor-pointer hover:border-[#3BB77E] border-2">
                                    <img src="https://s3-alpha-sig.figma.com/img/0a45/78eb/a585fad4345109bba4bb7965b34bb93d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rz1Axkxk34BL8V1cL0k~2hFSkxmvs1KXMfuHFjKtjESDFzdWT-~6NItAOgV7X0KTgDIKsvMyFWWZZy4FlYCLaJx-OXaTrTHS0~uJPEP5jyeO9-2hDfUDOsTIk~z44S0rQn7R5YgVjYhJ0KnCJYMkqCb~D8uB7DANTn2uS8M1sOaIKlRbY2ODLQ0xBJyvvPC5n3YCMbLpWiTVTZ3g9WbLilz83fxr~-JhySNsD14pTGcaB9BBxyFDUJWJcT9KblnomrikWJDUTXTFHp4ORvyOWk5u2V-S6xNxYvVhz1M2WAQuDOysogWWEi995FrzeZVUHBHD3ws8-fQN4H1kITfhIQ__" alt="Thumbnail" className="w-full h-20 object-contain" />
                                </div>
                                <div className="bg-[#F4F6FA] rounded-xl p-4 cursor-pointer hover:border-[#3BB77E] border-2">
                                    <img src="https://s3-alpha-sig.figma.com/img/c6e0/0d2a/20467838df1c528af63bb228455b48f6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqV~rmS6ELTH-KQ01ripPUo1gHfh3Y-OuQWwasPvcrzVdJ1lYGFyRLqltK27oDt41eI2stWHFwHlfaDWv~ZSXjYQOdJz09S6Ajs6flLuWRvWdJprjGABx4gBkTVfbR7m8S0g5sYSChTIDdF6FnhGmrTscJYyMQil22CMhzLHti4iorhMgvZjPdWfTiGLjFVD1sXRWQGHe-oYB0Rmo7WUnt49ybyTj53gtj0viB2aEzjSq0MwMIJeCYFQNj9zaCdqS0sGPwpJ75XI0ZK1FmDEGjlOh9lkofs1sTcuciOnRcF0vSUjKNzRlrW9Zv~V4eNNGDuvSfZQ17CNVBc1~TUvow__" alt="Thumbnail" className="w-full h-20 object-contain" />
                                </div>
                                <div className="bg-[#F4F6FA] rounded-xl p-4 cursor-pointer hover:border-[#3BB77E] border-2">
                                    <img src="https://s3-alpha-sig.figma.com/img/db2e/e4d1/431152f37b8be8e26e7020df85c82e5b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MyT50V8dYZqeI7ebeyOezjHq-6JE82Agr68D4Pn51m8bFwVrvK4keC8TtqaWTOiCPkffBmmhmT5MSLx8loLe9WP7bi4pkVrbfQ2A6uvKy~9mHM7DpPZn9BledudM8jdHLuqZ4mVbEUfIQyFgL0Ld2lzWmVwOI1z0JdcXPo8U5bS1HkqAhZLA~Cg3EAZbv-a0zhl3sSSBip-yBXJ59t2-uMEkS7q9HP5vu0VEcAs-GU2MSOIjWAtNnlAkDiq4Um82wxMXck8QJpU07YOxth9S8yqBLWF0ZlDhTMS9zcu2fPrH-DHB4jQzh60ZzbBEYbcWAEtwwjzFyz~U68NXPkx9cg__" alt="Thumbnail" className="w-full h-20 object-contain" />
                                </div>
                                <div className="bg-[#F4F6FA] rounded-xl p-4 cursor-pointer hover:border-[#3BB77E] border-2">
                                    <img src="https://s3-alpha-sig.figma.com/img/08aa/84c6/43e52b6e90cb14a936e3dc2e4e4a6e9e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVicDFlkHwq~MYOEUxw2eWxG8IrofSM9A~ncGpZz2k64BcW8LYkJOGlSIPZhGSxCdXULqljrnQDdIYA2aQ0m4~~3TmxEtEeiYTdPrn-VC3uF5eOlZR8Xk8rq~89fPCm8ROinvpgzguPqf7EexH5hHKy0bsQVbYNvDKT4lb6hinH~imzVEba8erZxpiM7yDuMhNPymhlGkfaLzAuwj~EK2IvtdS7Dv808DPhRJLsdvlfOsnDPllOUC8dDSQMuNXJSXv1hBLJMe3Io23QVMppDPN3Tp~JogT4k9gUU0kc04MI4RE-h~vGAr~vnxuHVcoQ~z2QOnw8Zmxp5sD~SztoMIg__" alt="Thumbnail" className="w-full h-20 object-contain" />
                                </div>
                            </div>
                        </div>

                        {/* Right - Product Details */}
                        <div>
                            <span className="text-[#3BB77E] text-sm">Sale Off</span>
                            <h1 className="text-2xl font-bold text-[#253D4E] mt-2">Seeds of Change Organic Quinoa, Brown</h1>

                            {/* Rating Section */}
                            <div className="flex items-center gap-4 mt-4">
                                <div className="flex items-center">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} size={14} />
                                        ))}
                                    </div>
                                    <span className="text-gray-400 text-sm ml-2">(32 reviews)</span>
                                </div>
                                <span className="text-[#3BB77E] text-xs">By NestFood</span>
                            </div>

                            {/* Price Section */}
                            <div className="flex items-center gap-4 mt-6">
                                <span className="text-[#3BB77E] text-xl font-semibold">$38</span>
                                <span className="text-gray-400 line-through text-lg">$52</span>
                                <span className="bg-[#FFE5E5] text-[#FA5246] px-2 py-1 rounded text-sm">26% Off</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mt-6 text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
                            </p>

                            {/* Size Selection */}
                            <div className="mt-6">
                                <span className="text-[#253D4E] font-medium mb-2 block text-sm">Size / Weight:</span>
                                <div className="flex gap-2">
                                    {['25g', '50g', '100g', '150g', '300g'].map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-1 rounded-full text-xs ${selectedSize === size
                                                ? 'bg-[#3BB77E] text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-[#3BB77E] hover:text-white'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="flex items-center gap-8 mt-10">
                                <div className="flex items-center border rounded">
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        className="w-12 text-center py-2 border-0 focus:ring-0"
                                    />
                                </div>
                                <button className="bg-[#3BB77E] text-white px-4 py-2 rounded text-xl hover:bg-[#3BB77E]/90">
                                    <span></span>
                                    Add to cart
                                </button>
                                <button className="text-gray-400 hover:text-[#3BB77E]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </button>
                                <button className="text-gray-400 hover:text-[#3BB77E]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                    </svg>
                                </button>

                            </div>
                            {/* Product Details List */}
                            <div className=" mt-14 mb-6 flex justify-between items-center">
                                <div className=''>
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-24">Type:</span>
                                        <span className="text-[#3BB77E]">Organic</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-24">SKU:</span>
                                        <span>FWM15VK1</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-24">MFG:</span>
                                        <span>Jun 4, 2022</span>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-24">Tags:</span>
                                        <div className="flex gap-2">
                                            <span className="text-[#3BB77E]">Snack</span>
                                            <span className="text-gray-400">,</span>
                                            <span className="text-[#3BB77E]">Organic</span>
                                            <span className="text-gray-400">,</span>
                                            <span className="text-[#3BB77E]">Brown</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-24">Stock:</span>
                                        <span className="text-[#3BB77E]">8 Items In Stock</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-24">LIFE:</span>
                                        <span>70 days</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mt-16">
                        {/* Tab Headers */}
                        <div className="flex gap-4">
                            <button className="text-[#3bb77e] px-3 py-2  border-[1px] font-medium text-center rounded-full text-sm">
                                Description
                            </button>
                            <button className="text-gray-500 hover:text-[#253D4E] px-3 py-2 border-[1px] font-medium text-center rounded-full  text-sm">
                                Additional info
                            </button>
                            <button className="text-gray-500 hover:text-[#253D4E] px-3 py-2 border-[1px] font-medium text-center rounded-full  text-sm">
                                Vendor
                            </button>
                            <button className="text-gray-500 hover:text-[#253D4E] px-3 py-2 border-[1px] font-medium text-center rounded-full  text-sm">
                                Reviews (3)
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="py-8">
                            {/* Description Content */}
                            <div className="space-y-6">
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.
                                </p>

                                {/* Product Details Table */}
                                <div className="space-y-4">
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-36">Type Of Packing</span>
                                        <span className="text-gray-700">Bottle</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-36">Color</span>
                                        <span className="text-gray-700">Green, Pink, Powder Blue, Purple</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-36">Quantity Per Case</span>
                                        <span className="text-gray-700">100ml</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-36">Ethyl Alcohol</span>
                                        <span className="text-gray-700">70%</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-gray-500 w-36">Piece In One</span>
                                        <span className="text-gray-700">Carton</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Lacinia nec vestibulum eget vulputate sodales. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nulla at volutpat diam ut venenatis tellus in metus vulputate eu. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo.
                                </p>
                            </div>

                            {/* Packaging & Delivery Section */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Packaging & Delivery</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                                    Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.
                                </p>
                            </div>

                            {/* Suggested Use Section */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Suggested Use</h3>
                                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                                    <li>Refrigeration not necessary.</li>
                                    <li>Stir before serving</li>
                                </ul>
                            </div>

                            {/* Other Ingredients Section */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Other Ingredients</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>Organic raw pecans, organic raw cashews</li>
                                    <li>This butter was produced using a LTG (Low Temperature Grinding) process</li>
                                    <li>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li>
                                </ul>
                            </div>

                            {/* Warnings Section */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Warnings</h3>
                                <p className="text-sm text-gray-600">
                                    Oil separation occurs naturally. May contain pieces of shell.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right Sidebar */}
                <div>
                    <CategorySidebar />
                </div>

            </div>

            {/* Product Information Tabs */}


            <Section />
            <Footer />
        </div>
    );
};

export default ProductDetail; 