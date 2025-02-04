import React from 'react';
import CategorySidebar from '../Components/CategorySidebar';
import ProductCard from '../Components/ProductCard';
import DealCard from '../Components/DealCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Footer from '../Components/Footer';
import Section from '../Components/Section';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router';

const productsData = [
    {
        id: 1,
        badge: "Hot",
        badgeColor: "bg-red-500",
        image: "/assets/Product Images/1.png",
        brand: "NestFood",
        title: "Seeds of Change Organic Quinoa",
        rating: 4,
        reviews: "4.0",
        currentPrice: "28.85",
        originalPrice: "32.0"
    },
    {
        id: 2,
        badge: "Sale",
        badgeColor: "bg-blue-500",
        image: "/assets/Product Images/2.png",
        brand: "Stouffer",
        title: "All Natural Italian-Style Chicken Meatballs",
        rating: 5,
        reviews: "4.0",
        currentPrice: "52.85",
        originalPrice: "55.8"
    },
    {
        id: 3,
        badge: "Hot",
        badgeColor: "bg-red-500",
        image: "/assets/Product Images/3.png",
        brand: "Stouffer",
        title: "All Natural Italian-Style Chicken Meatballs",
        rating: 5,
        reviews: "4.0",
        currentPrice: "52.85",
        originalPrice: "55.8"
    },
    {
        id: 4,
        badge: "New",
        badgeColor: "bg-green-500",
        image: "/assets/Product Images/1.png",
        brand: "Stouffer",
        title: "All Natural Italian-Style Chicken Meatballs",
        rating: 5,
        reviews: "4.0",
        currentPrice: "52.85",
        originalPrice: "55.8"
    },
    {
        id: 5,
        badge: "-14%",
        badgeColor: "bg-orange-500",
        image: "/assets/Product Images/2.png",
        brand: "Stouffer",
        title: "All Natural Italian-Style Chicken Meatballs",
        rating: 5,
        reviews: "4.0",
        currentPrice: "52.85",
        originalPrice: "55.8"
    },
    {
        id: 6,
        badge: "Sale",
        badgeColor: "bg-blue-500",
        image: "/assets/Product Images/3.png",
        brand: "Stouffer",
        title: "All Natural Italian-Style Chicken Meatballs",
        rating: 5,
        reviews: "4.0",
        currentPrice: "52.85",
        originalPrice: "55.8"
    },
    {
        id: 7,
        badge: "Sale",
        badgeColor: "bg-blue-500",
        image: "/assets/Product Images/1.png",
        brand: "Stouffer",
        title: "All Natural Italian-Style Chicken Meatballs",
        rating: 5,
        reviews: "4.0",
        currentPrice: "52.85",
        originalPrice: "55.8"
    },
    {
        id: 8,
        badge: "Sale",
        badgeColor: "bg-blue-500",
        image: "/assets/Product Images/2.png",
        brand: "Stouffer",
        title: "All Natural Italian-Style Chicken Meatballs",
        rating: 5,
        reviews: "4.0",
        currentPrice: "52.85",
        originalPrice: "55.8"
    },


];

const dealsData = [
    {
        image: "/assets/bg2.png",
        days: "426",
        hours: "08",
        mins: "17",
        sec: "58",
        title: "Seeds of Change Organic Quinoa, Brown",
        rating: "4.0",
        by: "NestFood",
        currentPrice: "32.85",
        originalPrice: "33.8"
    },
    {
        image: "/assets/bg.png",
        days: "822",
        hours: "08",
        mins: "17",
        sec: "59",
        title: "Perdue Simply Smart Organics Gluten",
        rating: "4.0",
        by: "Old El Paso",
        currentPrice: "24.85",
        originalPrice: "26.8"
    },
    {
        image: "/assets/bg3.png",
        days: "1156",
        hours: "08",
        mins: "17",
        sec: "59",
        title: "Signature Wood-Fired Mushroom",
        rating: "3.0",
        by: "Progresso",
        currentPrice: "12.85",
        originalPrice: "13.8"
    },
    {
        image: "/assets/bg4.png",
        days: "398",
        hours: "08",
        mins: "17",
        sec: "59",
        title: "Simply Lemonade with Raspberry Juice",
        rating: "3.0",
        by: "Yoplait",
        currentPrice: "15.85",
        originalPrice: "16.8"
    }
];

const tabProductsData = {
    "Top Selling": [
        {
            image: "/assets/Product Images/carrot.jpeg",
            title: "Nestle Original Coffee-Mate Coffee Creamer",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "/assets/Product Images/capsicum.jpeg",
            title: "Nestle Original Coffee-Mate Coffee Creamer",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "/assets/Product Images/orangeju.jpeg",
            title: "Nestle Original Coffee-Mate Coffee Creamer",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        }
    ],
    "Trending Products": [
        {
            image: "/assets/Product Images/banana.jpeg",
            title: "Organic Cage-Free Grade A Large Brown Eggs",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "/assets/Product Images/watermelon.jpeg",
            title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "/assets/Product Images/mystrey.jpeg",
            title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        }
    ],
    "Recently added": [
        {
            image: "/assets/Product Images/mango.jpeg",
            title: "Pepperidge Farm Farmhouse Hearty White Bread",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "/assets/Product Images/mango2.jpeg",
            title: "Organic Frozen Triple Berry Blend",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "/assets/Product Images/corn.jpeg",
            title: "Oroweat Country Buttermilk Bread",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        }
    ],
    "Top Rated": [
        {
            image: "/assets/Product Images/pomegranate.jpeg",
            title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "/assets/Product Images/aavocado.jpeg",
            title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "/assets/Product Images/orange.jpeg",
            title: "All Natural Italian-Style Chicken Meatballs",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        }
    ]
};

const categories = [
    {
        icon: "/assets/Figure.png",
        title: "Milks and Dairies"
    },
    {
        icon: "/assets/Figure2.png",
        title: "Wines & Alcohol"
    },
    {
        icon: "/assets/Figure (1).png",
        title: "Clothing & Beauty"
    },
    {
        icon: "/assets/Figure (2).png",
        title: "Pet Foods & Toy"
    },
    {
        icon: "/assets/Figure (3).png",
        title: "Packaged fast food"
    },
    {
        icon: "/assets/Figure (4).png",
        title: "Baking material"
    },
    {
        icon: "/assets/Figure (5).png",
        title: "Vegetables & tubers"
    },
    {
        icon: "/assets/Figure (6).png",
        title: "Fresh Seafood"
    }
];

const Home = () => {
    return (
        <div className="relative min-h-screen mt-24 md:mt-32 lg:mt-24 xl:mt-48">
            <div className="container mx-auto px-8">
                <div className=" flex gap-8">
                    <div className="w-[200px] hidden md:block flex-shrink-0">
                        <div className="top-[180px]">
                            <CategorySidebar />
                        </div>
                    </div>
                    <div className="flex-col w-full">
                        <div className="bg-[url('/assets/mainbg.png')] bg-cover bg-start bg-[55%] rounded-xl pt-12 px-8 h-[250px] md:h-[400px]">
                            <h1 className="text-xl md:text-[42px] font-bold text-[#253D4E] leading-tight">
                                Don't miss amazing<br />grocery deals.
                            </h1>
                            <p className="text-gray-800 mt-4 text-sm md:text-lg">Sign up for the daily newsletter</p>
                            <div className="flex flex-col md:flex justify-center items-start gap-2 max-w-xl mt-6">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 md:px-6 md:w-[25vw] md:py-3 px-6 py-1 text-sm rounded-md border border-gray-200 focus:outline-none"
                                />
                                <button className="bg-[#3bb77e] text-white md:px-8 px-4 md:py-3 py-2 rounded-md hover:bg-green-600 font-medium text-xs md:text-sm">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 lg:mb-8">
                                <h2 className="text-xl lg:text-2xl font-bold text-[#253D4E] mb- lg:mb-0">Popular Products</h2>
                                <div className='flex justify-between items-center w-[70%] h-fit'>
                                    <input
                                        type="text"
                                        placeholder="Search for items..."
                                        className="w-[70%] mt-4 px-4 py-2 text-sm border lg:hidden mb-4 border-gray-200 focus:outline-none"
                                    />
                                    <Link to="" className="text-slate-600 relative lg:hidden xl:hidden">
                                        <FaSearch size={24} />
                                    </Link>
                                </div>
                                <div className="flex flex-wrap gap-2 lg:gap-8 text-[13px] lg:text-[15px] w-full">
                                    <button className="text-[#3bb77e] font-medium">All</button>
                                    <button className="text-gray-600 hover:text-[#3bb77e]">Milks & Dairies</button>
                                    <button className="text-gray-600 hover:text-[#3bb77e]">Coffee & Teas</button>
                                    <button className="text-gray-600 hover:text-[#3bb77e]">Pet Foods</button>
                                    <button className="text-gray-600 hover:text-[#3bb77e]">Meats</button>
                                    <button className="text-gray-600 hover:text-[#3bb77e]">Vegetables</button>
                                    <button className="text-gray-600 hover:text-[#3bb77e]">Fruits</button>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 lg:gap-6">
                                {productsData.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="mt-12">
                    <div className="mt-8 lg:mt-12">
                        <div className="flex justify-between items-center mb-4 lg:mb-6">
                            <h2 className="text-xl lg:text-2xl font-bold text-[#253D4E]">Deals Of The Day</h2>
                            <button className="text-gray-500 hover:text-[#3BB77E] text-sm flex items-center gap-1">
                                All Deals <span>→</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                            {dealsData.map((deal, index) => (
                                <DealCard key={index} product={deal} />
                            ))}
                        </div>
                    </div>

                    {/* Banner Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        {/* First Banner */}
                        <div className="bg-[#F0F1F7] rounded-lg p-4 md:p-6 relative overflow-hidden h-[200px] md:h-[220px]">
                            <div className="relative z-10 max-w-[160px]">
                                <h3 className="text-[16px] md:text-[18px] font-bold text-[#253D4E] mb-4 leading-tight">
                                    Everyday Fresh & Clean with Our Products
                                </h3>
                                <button className="mt-3 bg-[#3BB77E] text-white px-4 py-2 rounded-md text-[12px] md:text-sm hover:bg-[#3BB77E]/90">
                                    Shop Now
                                </button>
                            </div>
                            <img
                                src="/assets/ban1.png"
                                alt="Fresh Products"
                                className="absolute right-0 bottom-0 h-full w-full object-cover"
                            />
                        </div>

                        {/* Second Banner */}
                        <div className="bg-[#FFF3F1] rounded-lg p-4 md:p-6 relative overflow-hidden h-[200px] md:h-[220px]">
                            <div className="relative z-10 max-w-[160px]">
                                <h3 className="text-[16px] md:text-[18px] font-bold mb-4 text-[#253D4E] leading-tight">
                                    Make your Breakfast Healthy and Easy
                                </h3>
                                <button className="mt-3 bg-[#3BB77E] text-white px-4 py-2 rounded-md text-[12px] md:text-sm hover:bg-[#3BB77E]/90">
                                    Shop Now
                                </button>
                            </div>
                            <img
                                src="/assets/ban2.png"
                                alt="Breakfast Products"
                                className="absolute right-0 bottom-0 h-full w-full object-cover"
                            />
                        </div>

                        {/* Third Banner */}
                        <div className="bg-[#F2FCE4] rounded-lg p-4 md:p-6 relative overflow-hidden h-[200px] md:h-[220px]">
                            <div className="relative z-10 max-w-[160px]">
                                <h3 className="text-[16px] md:text-[18px] font-bold mb-4 text-[#253D4E] leading-tight">
                                    The best Organic Products Online
                                </h3>
                                <button className="mt-3 bg-[#3BB77E] text-white px-4 py-2 rounded-md text-[12px] md:text-sm hover:bg-[#3BB77E]/90">
                                    Shop Now
                                </button>
                            </div>
                            <img
                                src="/assets/ban3.png"
                                alt="Organic Products"
                                className="absolute right-0 bottom-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Shop by Categories Section */}
                <div className="mt-12">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <h2 className="text-sm md:text-xl font-bold text-[#253D4E]">Shop by Categories</h2>
                            <span className="text-gray-500 hidden md:block text-sm hover:text-[#3BB77E] cursor-pointer">
                                All Categories →
                            </span>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3BB77E] hover:text-white hover:border-[#3BB77E] transition-colors">
                                <IoIosArrowBack size={16} />
                            </button>
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3BB77E] hover:text-white hover:border-[#3BB77E] transition-colors">
                                <IoIosArrowForward size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-5 lg:grid-cols-8 grid-cols-4 gap-4">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-[#F4F6FA] rounded-xl md:p-6 p-2 hover:shadow-md cursor-pointer group">
                                <div className="flex flex-col items-center text-center gap-3">
                                    <img
                                        src={category.icon}
                                        alt={category.title}
                                        className="md:w-12 md:h-12 w-8 h-8 text-[#3BB77E] object-cover"
                                    />
                                    <span className="text-[10px] md:text-sm text-[#253D4E] group-hover:text-[#3BB77E] transition-colors">
                                        {category.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Tabbed Products Section - Mobile Only */}
                <div className="lg:hidden mt-8">
                    {/* Two Column Layout */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Left Column - Top Selling */}
                        <div>
                            <h3 className="text-[15px] font-medium text-[#253D4E] border-b border-[#3BB77E] pb-2 mb-4">
                                Top Selling
                            </h3>
                            <div className="space-y-4">
                                {/* Product Item */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <img
                                            src="/assets/Product Images/carrot.jpeg"
                                            alt="Product"
                                            className="w-12 h-12 object-cover"
                                        />
                                        <h4 className="text-[11px] text-[#253D4E]">
                                            Nestle Original Coffee-Mate Coffee Creamer
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-1 ml-14">
                                        <span className="text-yellow-400 text-[10px]">★</span>
                                        <span className="text-gray-400 text-[10px]">(4.0)</span>
                                    </div>
                                    <div className="flex items-center gap-2 ml-14">
                                        <span className="text-[#3BB77E] text-[13px]">$32.85</span>
                                        <span className="text-gray-400 line-through text-[11px]">$33.8</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <img
                                            src="/assets/Product Images/capsicum.jpeg"
                                            alt="Product"
                                            className="w-12 h-12 object-cover"
                                        />
                                        <h4 className="text-[11px] text-[#253D4E]">
                                            Nestle Original Coffee-Mate Coffee Creamer
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-1 ml-14">
                                        <span className="text-yellow-400 text-[10px]">★</span>
                                        <span className="text-gray-400 text-[10px]">(4.0)</span>
                                    </div>
                                    <div className="flex items-center gap-2 ml-14">
                                        <span className="text-[#3BB77E] text-[13px]">$32.85</span>
                                        <span className="text-gray-400 line-through text-[11px]">$33.8</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <img
                                            src="/assets/Product Images/orange.jpeg"
                                            alt="Product"
                                            className="w-12 h-12 object-cover"
                                        />
                                        <h4 className="text-[11px] text-[#253D4E]">
                                            Nestle Original Coffee-Mate Coffee Creamer
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-1 ml-14">
                                        <span className="text-yellow-400 text-[10px]">★</span>
                                        <span className="text-gray-400 text-[10px]">(4.0)</span>
                                    </div>
                                    <div className="flex items-center gap-2 ml-14">
                                        <span className="text-[#3BB77E] text-[13px]">$32.85</span>
                                        <span className="text-gray-400 line-through text-[11px]">$33.8</span>
                                    </div>
                                </div>

                                {/* Repeat for other products in Top Selling */}
                            </div>
                        </div>

                        {/* Right Column - Trending Products */}
                        <div>
                            <h3 className="text-[15px] font-medium text-[#253D4E] border-b pb-2 mb-4">
                                Trending Products
                            </h3>
                            <div className="space-y-4">
                                {/* Product Item */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <img
                                            src="/assets/Product Images/banana.jpeg"
                                            alt="Product"
                                            className="w-12 h-12 object-cover"
                                        />
                                        <h4 className="text-[11px] text-[#253D4E]">
                                            Organic Cage-Free Grade A Large Brown Eggs
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-1 ml-14">
                                        <span className="text-yellow-400 text-[10px]">★</span>
                                        <span className="text-gray-400 text-[10px]">(4.0)</span>
                                    </div>
                                    <div className="flex items-center gap-2 ml-14">
                                        <span className="text-[#3BB77E] text-[13px]">$32.85</span>
                                        <span className="text-gray-400 line-through text-[11px]">$33.8</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <img
                                            src="/assets/Product Images/mango.jpeg"
                                            alt="Product"
                                            className="w-12 h-12 object-cover"
                                        />
                                        <h4 className="text-[11px] text-[#253D4E]">
                                            Organic Cage-Free Grade A Large Brown Eggs
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-1 ml-14">
                                        <span className="text-yellow-400 text-[10px]">★</span>
                                        <span className="text-gray-400 text-[10px]">(4.0)</span>
                                    </div>
                                    <div className="flex items-center gap-2 ml-14">
                                        <span className="text-[#3BB77E] text-[13px]">$32.85</span>
                                        <span className="text-gray-400 line-through text-[11px]">$33.8</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <img
                                            src="/assets/Product Images/orangeju.jpeg"
                                            alt="Product"
                                            className="w-12 h-12 object-cover"
                                        />
                                        <h4 className="text-[11px] text-[#253D4E]">
                                            Organic Cage-Free Grade A Large Brown Eggs
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-1 ml-14">
                                        <span className="text-yellow-400 text-[10px]">★</span>
                                        <span className="text-gray-400 text-[10px]">(4.0)</span>
                                    </div>
                                    <div className="flex items-center gap-2 ml-14">
                                        <span className="text-[#3BB77E] text-[13px]">$32.85</span>
                                        <span className="text-gray-400 line-through text-[11px]">$33.8</span>
                                    </div>
                                </div>

                                {/* Repeat for other products in Trending Products */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Version - Hidden on mobile */}
                <div className="hidden lg:block">
                    {/* Original desktop layout code */}
                </div>
                {/* Tabbed Products Section */}
                <div className='hidden sm:block'>
                    <div className="grid grid-cols-4 gap-6 mt-12">
                        {Object.entries(tabProductsData).map(([title, products]) => (
                            <div key={title} className="bg-white rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-[#253D4E] pb-4 border-b">
                                    {title}
                                </h3>
                                <div className="space-y-4 mt-4">
                                    {products.map((product, idx) => (
                                        <div key={idx} className="flex gap-3 group">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-[75px] h-[75px] object-cover rounded-lg"
                                            />
                                            <div>
                                                <h4 className="text-sm text-gray-600 group-hover:text-[#3BB77E] cursor-pointer line-clamp-2">
                                                    {product.title}
                                                </h4>
                                                <div className="flex items-center mt-1">
                                                    <span className="text-yellow-400 text-xs">★</span>
                                                    <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
                                                </div>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[#3BB77E] font-medium">${product.price}</span>
                                                    <span className="text-gray-400 line-through text-xs">${product.originalPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <Section />

                {/* Newsletter Section */}

                {/* Footer */}
                <Footer />

            </div>
        </div>
    );
};

export default Home;