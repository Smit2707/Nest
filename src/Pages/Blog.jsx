import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import Footer from '../Components/Footer';
import Section from '../Components/Section';
import Layout from '../Components/Layout';
import Blog_mobile from '../Components/Blog_mobile';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            category: "Side Dish",
            title: "The Intermediate Guide to Healthy Food",
            image: "https://s3-alpha-sig.figma.com/img/00a9/190d/dfa332514b43ba0822970ef1973003b7?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=INTUH2qgDPBNlXwfFvanHlNkPlckZX~XPhCjSzdet-lm1bynjdYpHWIa1DvXWqWCkpNZDNSMHm2yTyAf84MMimXSK~3jH3Ar1rL0FqIGwUpnUdriO970b1~ElmxpWruRC2KGhCCZjwDnVa-UxuilcETHWzlmtpPT4rHXF4SxWAIvV9rvborh2Vg3FFl5O2ZR6evB9PKgF1nhNURtqFfUtREgOksBWfvlZQr-W1VoWdrlzr5HpkJj6DhYEq35RUZVdVs~551A0V5mQQ5ztHd7H4Ze2nFvZtplNf7tLL4dRs-6SJ25BZ5Jt1WX3anKbk1-lXT57W468M9WseEcZsjiIg__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 2,
            category: "Soups and Stews",
            title: "Summer Quinoa Salad Jars with Lemon Dill",
            image: "https://s3-alpha-sig.figma.com/img/e5da/07b0/9e59559c5805fc67657a7c0cf8fa25d9?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=srARc~16J2ArwtSlCnk5Tw~6FrzOECd175f4sDXAKlFMxlrSK0Sr5RMi5ztZM-O81Vm2d3y1ArZC39a-2JafZG91wDYWmUDXUVhNW-XiZDx524IObtVJ7dNLII79FzPpxSGJWw-oddaGLZaaiBJ4JnzF8t3uoYi9teyuUYEABwK1yoG6crq22QsAk~2H35Df6eWqiOhLmu36E-ibx7xpG-8dKmtLeqMt3lUC7DjBTNWsiFC-4rpl1NhjOVSXRAAgAwUU182IJpDaX1KmFi4-j-eaX8Lsh7lXqPsBw751DP6IUtehirxI5lbq1RbtGbUbM~i7uvZmshBrz1ewbyMupQ__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 3,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/be99/2069/e68b06db95bfa627bc18c8202d45422d?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kD1mW61-H~IWZTD5jwZPzl2FnbHG8owpa9oTi11l0qieXtP4RASbKLw0r4JDHXFHovRC6ctmTAP-mff5oUrBw0dTSXHd-zGRPQq7gJ-MufdwYa5VNmeVtdXs0Clu3s~PFkpKHdJwTFhGMeu-7hYFiKROfJbBJX2oKNlFuE5G5FviQhPQ3C~gfvR1FYo8TnE5Irxm8k2p53eTC3grYUvw4NnK6-F6nY2tcOUERiU8E-4SFTeAP5VfGmeyAn8AVqLG9zO2AvzDZ0CXIZFM~ore7xT1TGwosP-CdsC789B5yZf-Hi9pf74PrSYRNNZV~6obZk0zTRXuzzeWxPfp8-MR6w__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 4,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/6071/5da3/f2863278a563e9f53cc3dc65d7b57a4a?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ipeOhlu3pN-1pXo8MPxg9zXnijzIleItrXwBg3dEo1LITZYbe4lFQGSSwBZ0lJXdlb0rRhycl~s1-Fx8sEg~tgQyn-vfSRwIw0XGtjWVQb482V~tICnmCPoMUMWiFgxmC8PTFW90Vna7rN8qhiJFVTTVmeKX~l3RgXkPeM1kFWqrVfIz2PbUBjx2K57~T4N0-wste8q-weFHICU3hfle-Rlsb0-cp6HEwwpTpn7scsT4mG76ip61a2b8ZeOn4fmRlqW8OkU-YeAND5OLDMJhHwoabgrkvOY4sXAXW5jzVgXMUZGf6qd-CWndMDgw4WGHK~oDkCbMLcKKE2uxcAJCGA__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 5,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/31d3/8a09/86ecc64f1750a54603c27ef6ebd61c56?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iIoPaZhGvi4p6Ns0epow7x3No7hn2DNbgwg82nGmdTKPrR74cPUyq6s0XOgzCZgh7R8zTdz7IIIp4gJWYdqOm1xItYYd3ItadOXs9I~vCV92zM0xT-TTMx6dHcUjUN7GRvoF-liz-RmHaozTQfiNE3Z--eftaWdDvPPI3GLdkkFhFJZNCg4vgRErqhYEv~YMT9soWx30-~66XNDcnN2xBX76WB-cXFZccBF~j85jQJvsQ2GO3A-D0akwCKQSWipIRy~eZdWtLBEICiw~h2IHNmY7NNphA1d82tsptOotUVL8GoRD69Fig84W3oO9NZRoxKeGSMdJU5NWcI0GXP7WOg__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 6,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/0b06/d35f/9f0dc9b8b2a2a863096159d763f50baa?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VeZNkHgmcaR8tUWzvUcipvsJsid5liWsAPZgyofuGj3z~f2HzVzuWdfRDPH3x7pqVsjpU3XQhyhtwS3iC~KHvQHVNmSbrvxn3m2h6UBw1DqhyqdlXNroCTvtXfspTq8vx2dU7Dx2D744UOB0vlzjkJ7BCOU5cfk3uyBqp5Jnh0AcqVmlUpumX8aG9Wo7TdGv6YnlLCMBeUdEB8v~g6duzwDfLQBmHqB6j-i-opJGJuWgya3XRkDRLhiEbmXUoXBPEVW1~33vLv5dUZe0RX9M4fWJMR6o3zv0uwqOJUMerEq~Vrqij~CyqC4jPzSGgxrQ1O~GXs8dSCTv2bWYHTbSJA__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 7,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/ae8b/a941/30923620aa4218146b28c898b0c8213d?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JzSv-m56YPeaIKVnCH~RsGRDT3MDCon9tp0pEuOcvCRCi3JMn-LBHMh7X5kMk9cCxgXWUpmjwO~kViWwu2S1zIk0I43A9mjpsfIhuxvLlmcUWD~Wzd04WSSf2deHG4k0UCmPpt-MkABEdGefb4v6lmTKq7Gh7sWxJQiFt5ZF3d6De8v-nPNoHxZIWA4s7hZAuIWeztUjy~nVtlkkggifaI4KomDOmUyRWEvkjTfCnfYnZiZ~9WNHQ4EjYFibRbdgDjoaYGgKX6a6MmWztgDwDRqfTOu9SNerllHF0otleQZYaGNzgDB4TJbwLHDCS3p-xOzEqKm5lwHx7lj4B1dbXg__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 8,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/b540/2c5b/55a16d364ffdd9afcffd1a57e1e75b85?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CVBhrzNL~i0vUn~1Hf-19vlG10X2LruM9-degG9-S5XBmmzG7xf050f14yeAkZ99nLYHuiO9Z0UNpwnDy0YJFnB8yoL3Yzpmp3f2k2Se1OagldKYZvlT0LhYF3PzIFW9fWdkogcYsEoGERsEoDoktx9CNwKXbnpQWbDMnOvgnqtR09Bt7sg3mz4Cz1MmRjuQn7F8wTKtIDJt4RAbtlQ7~tRVO-rF5cj0Ji2ga-Kn9d~u0Paux20HAnKvd~GNgycgtyAHC0Bo2A9yfprrK9N7bjIXsqo3wmwaIZ8Gdsn36glD005yv8c8Ev-02hkxGHXGDf~5OIavl2jk05RVa5ndPQ__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 9,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/5f46/0167/878920b8ae639325010cfcce869cd6dd?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YCjA~XoyNyRqOixKRkCsHyjBGonTmWRjT0CEACMpAq9DM~684HikZCVtcBcHu71vnhPTwoQJ4FQRCX0dzoUc7Xavwcvtw73LwsxYwd3TQnb~p-Vzv4VdjfesNmX94PQBj4tjnv5oXisN1RBbnaTyCi2btZF3Gsi3Mrk3EayGrvWbb-1SqrH-HD6~BtoGlMVt0oX1wLYMd8utP5lWZDRepk2RIvwLVzeHgstW~JwJv-v5ZX0bYYfIxICaPDn~Cby~MH93I7TkRI7VXRWCwjVec97Y3teHNWLT0zMIs8IBAuQq2D~wb2-Kf3xoFWiCJvq2T25xx9sdOe71PPi3vOQsbQ__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 10,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/b95d/1a82/cb7d39819229fcb1035f77dad15ce947?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FV2w3GPn3OzW-ZXi71JOREuLG-CD~ydu2zwKPKoRTAM3R~2vod9FgyYli~IHNcuan3-edp6I10s9THigi2h9ZXLUi3WOtd~VHwDCMKp7FlVEeloys7PSG0vBd3FtMqizCyG9d6h2-etfVqfN7B1Cl4GVh0buiRTzxxR2SiTXl-LMHVzELJ9Gq5WoOCpMzwM1LnH8r8nhlop26aUC-kBsfwmJhrdYor0xxZ2B0azij5baqQVIFRvOOnodUA7Hbl~vP0UjQr1B7XiKxPMOfUKTe2lStyFQsWf7c1xdCTCDoqiQK1~Yqx9rc3DTF5DCmwfj3U892rBKMrQnTOj6GJDWEg__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 11,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/00a9/190d/dfa332514b43ba0822970ef1973003b7?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=INTUH2qgDPBNlXwfFvanHlNkPlckZX~XPhCjSzdet-lm1bynjdYpHWIa1DvXWqWCkpNZDNSMHm2yTyAf84MMimXSK~3jH3Ar1rL0FqIGwUpnUdriO970b1~ElmxpWruRC2KGhCCZjwDnVa-UxuilcETHWzlmtpPT4rHXF4SxWAIvV9rvborh2Vg3FFl5O2ZR6evB9PKgF1nhNURtqFfUtREgOksBWfvlZQr-W1VoWdrlzr5HpkJj6DhYEq35RUZVdVs~551A0V5mQQ5ztHd7H4Ze2nFvZtplNf7tLL4dRs-6SJ25BZ5Jt1WX3anKbk1-lXT57W468M9WseEcZsjiIg__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 12,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/3b19/62db/eb891a693699a5ac96fd9384860ba7ba?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kNoQhSTnsf7gVNA~amZO9YpstUa0DTx3ydENvcnDWuWnVR1cVBeBgn-fodpzMALvdQg2FoVrOy~yDGTy39gVPxNbS3qNUbDsKcDEdxCdmEPFMSvR3G2aTcmz8b-k~O88ug96~yclxp2msklVV7buo6aP4BJz7DasPI-KRvJRuJ8~HEBR00PpG6EVmLRAWdxOmkCC55~Cet42-dWOS4bOscD0yJuQCF~7m0BPRdgETLhxEakT1gzrm~3wxkOVjEw97aU7aXSRzlltnhY6NNDE1XQbdnEndy9243o-Om~olNKfrLomnBXMlYxoynBsVkZYfDPVjgNDgA4AQFhZdqU5mA__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        
    ];

    const categories = [
        { name: "Milk & Dairies", count: 5, image: "/assets/Figure (4).png" },
        { name: "Cooking", count: 8, image: "/assets/Figure.png" },
        { name: "Pet Foods", count: 3, image: "/assets/Figure (2).png" },
        { name: "Baking material", count: 5, image: "/assets/Figure2.png" },
        { name: "Fresh Fruit", count: 6, image: "/assets/Figure (5).png" }
    ];

    return (
        <Layout>
            {/* Mobile Version */}
            <div className="lg:hidden">
                <Blog_mobile />
            </div>

            {/* Desktop Version */}
            <div className="hidden lg:block">
                <div className="container mx-auto px-4 xl:px-8">
                    {/* Blog Header Section */}
                    <div className="bg-[url('https://s3-alpha-sig.figma.com/img/7f7d/5c4f/7cf727a1d919b3a2000dc17aa3892559?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3AEpjBKL46xV7cskNTtWe2qoT~FKj-XF8NxxaRUDTnMUHmjl3YsYMnPVx9E1yQzbUg5A-Z~poFHzMk8Kj0NOUBzlk1yYjhk6WDLug-QZtX45JTk8XA4ku0bQ4MG7WPlrVn83BKyRHZE5SlCvJlFYnpb1IYK7balgB4bsD1lKW8fmRdzLPZOA3Ttfmt28zUhWm35dAIzJYi94C83rSjWfytpK0-HMjeAc~t5VdnuhbHaymjq~U8qhULbWtsA6aww4ySUlz2NBDA0ekrnEgjPak~u54hEm69PSPkmY4UQc3FJMSabWODC0zKv4Dy6NxV4wq5xlYolgP5ZcBarYtjV5g__')] bg-cover bg-bottom rounded-xl p-4 lg:p-6 xl:p-8 mb-8">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                            <h1 className="text-3xl lg:text-[40px] font-bold text-[#253D4E]">Blog & News</h1>
                            {/* Filter Buttons */}
                            <div className="flex flex-wrap gap-2">
                                {['Shopping', 'Recipe', 'Kitchen', 'News', 'Food'].map((filter) => (
                                    <button 
                                        key={filter}
                                        className="flex items-center gap-1 bg-white px-4 py-1.5 rounded-full text-sm hover:text-green-700"
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Row - Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm mt-4">
                            <Link to="/" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Home</Link>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-500">Blog & News</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Left Content */}
                        <div className="lg:col-span-9">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
                                <div className="flex items-center gap-2">
                                    <img src="/assets/Figure.png" alt="Recipe" className="w-8 lg:w-10 h-8 lg:h-10 object-cover" />
                                    <h2 className="text-lg lg:text-xl font-semibold text-[#253D4E]">Recips Articles</h2>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500">Show:</span>
                                        <select className="border rounded px-2 py-1 text-sm">
                                            <option>50</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-gray-500">Sort:</span>
                                        <select className="border rounded px-2 py-1 text-sm">
                                            <option>Featured</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Blog Posts Grid */}
                            <div className="grid lg:grid-cols-3 gap-6">
                                {blogPosts.map(post => (
                                    <Link to={`/blog/${post.id}`} key={post.id}>
                                        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                                <span className="text-[#3BB77E] text-sm">{post.category}</span>
                                                <h3 className="text-base lg:text-lg font-semibold text-[#253D4E] mt-2 hover:text-[#3BB77E] line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 lg:gap-4 mt-4 text-xs lg:text-sm text-gray-500">
                                                    <span>{post.date}</span>
                                                    <span>{post.views}</span>
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-3 space-y-6">
                            {/* Search */}
                            <div className="relative">
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                                />
                                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>

                            {/* Categories */}
                            <div className="bg-white rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Category</h3>
                                <div className="space-y-4">
                                    {categories.map((category, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <img src={category.image} alt="Category" className="w-8 h-8 object-cover" />
                                                <span className="text-gray-600 text-sm hover:text-[#3BB77E] cursor-pointer">
                                                    {category.name}
                                                </span>
                                            </div>
                                            <span className="text-[#3BB77E] bg-[#DEF9EC] px-2 py-1 rounded-full text-xs">
                                                {category.count}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trending Now */}
                            <div className="bg-white rounded-xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Trending Now</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <img src="https://s3-alpha-sig.figma.com/img/c6e0/0d2a/20467838df1c528af63bb228455b48f6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqV~rmS6ELTH-KQ01ripPUo1gHfh3Y-OuQWwasPvcrzVdJ1lYGFyRLqltK27oDt41eI2stWHFwHlfaDWv~ZSXjYQOdJz09S6Ajs6flLuWRvWdJprjGABx4gBkTVfbR7m8S0g5sYSChTIDdF6FnhGmrTscJYyMQil22CMhzLHti4iorhMgvZjPdWfTiGLjFVD1sXRWQGHe-oYB0Rmo7WUnt49ybyTj53gtj0viB2aEzjSq0MwMIJeCYFQNj9zaCdqS0sGPwpJ75XI0ZK1FmDEGjlOh9lkofs1sTcuciOnRcF0vSUjKNzRlrW9Zv~V4eNNGDuvSfZQ17CNVBc1~TUvow__" alt="Chen Cardigan" className="w-12 h-12 rounded-lg object-cover" />
                                        <div>
                                            <h4 className="text-sm font-medium text-[#253D4E] hover:text-[#3BB77E] cursor-pointer">Chen Cardigan</h4>
                                            <span className="text-[#3BB77E] text-sm">$99.50</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="https://s3-alpha-sig.figma.com/img/0a45/78eb/a585fad4345109bba4bb7965b34bb93d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rz1Axkxk34BL8V1cL0k~2hFSkxmvs1KXMfuHFjKtjESDFzdWT-~6NItAOgV7X0KTgDIKsvMyFWWZZy4FlYCLaJx-OXaTrTHS0~uJPEP5jyeO9-2hDfUDOsTIk~z44S0rQn7R5YgVjYhJ0KnCJYMkqCb~D8uB7DANTn2uS8M1sOaIKlRbY2ODLQ0xBJyvvPC5n3YCMbLpWiTVTZ3g9WbLilz83fxr~-JhySNsD14pTGcaB9BBxyFDUJWJcT9KblnomrikWJDUTXTFHp4ORvyOWk5u2V-S6xNxYvVhz1M2WAQuDOysogWWEi995FrzeZVUHBHD3ws8-fQN4H1kITfhIQ__" alt="Chen Sweater" className="w-12 h-12 rounded-lg object-cover" />
                                        <div>
                                            <h4 className="text-sm font-medium text-[#253D4E] hover:text-[#3BB77E] cursor-pointer">Chen Sweater</h4>
                                            <span className="text-[#3BB77E] text-sm">$89.50</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="https://s3-alpha-sig.figma.com/img/db2e/e4d1/431152f37b8be8e26e7020df85c82e5b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MyT50V8dYZqeI7ebeyOezjHq-6JE82Agr68D4Pn51m8bFwVrvK4keC8TtqaWTOiCPkffBmmhmT5MSLx8loLe9WP7bi4pkVrbfQ2A6uvKy~9mHM7DpPZn9BledudM8jdHLuqZ4mVbEUfIQyFgL0Ld2lzWmVwOI1z0JdcXPo8U5bS1HkqAhZLA~Cg3EAZbv-a0zhl3sSSBip-yBXJ59t2-uMEkS7q9HP5vu0VEcAs-GU2MSOIjWAtNnlAkDiq4Um82wxMXck8QJpU07YOxth9S8yqBLWF0ZlDhTMS9zcu2fPrH-DHB4jQzh60ZzbBEYbcWAEtwwjzFyz~U68NXPkx9cg__" alt="Colorful Jacket" className="w-12 h-12 rounded-lg object-cover" />
                                        <div>
                                            <h4 className="text-sm font-medium text-[#253D4E] hover:text-[#3BB77E] cursor-pointer">Colorful Jacket</h4>
                                            <span className="text-[#3BB77E] text-sm">$25</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <img src="https://s3-alpha-sig.figma.com/img/08aa/84c6/43e52b6e90cb14a936e3dc2e4e4a6e9e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVicDFlkHwq~MYOEUxw2eWxG8IrofSM9A~ncGpZz2k64BcW8LYkJOGlSIPZhGSxCdXULqljrnQDdIYA2aQ0m4~~3TmxEtEeiYTdPrn-VC3uF5eOlZR8Xk8rq~89fPCm8ROinvpgzguPqf7EexH5hHKy0bsQVbYNvDKT4lb6hinH~imzVEba8erZxpiM7yDuMhNPymhlGkfaLzAuwj~EK2IvtdS7Dv808DPhRJLsdvlfOsnDPllOUC8dDSQMuNXJSXv1hBLJMe3Io23QVMppDPN3Tp~JogT4k9gUU0kc04MI4RE-h~vGAr~vnxuHVcoQ~z2QOnw8Zmxp5sD~SztoMIg__" alt="Lorem Ipsum" className="w-12 h-12 rounded-lg object-cover" />
                                        <div>
                                            <h4 className="text-sm font-medium text-[#253D4E] hover:text-[#3BB77E] cursor-pointer">Lorem Ipsum</h4>
                                            <span className="text-[#3BB77E] text-sm">$25</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Gallery */}
                            <div className="bg-white rounded-xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Gallery</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    <img src="https://s3-alpha-sig.figma.com/img/21e4/4269/1440039ef19376cc9cd55fb67282b984?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MPKui7DRetvcKBxvFhO3giUhr0l3KAQca59jQkl4guWnLiMYDRVTBJ0RGDyBhe~Fxs1EZXgwNEL~XfN9fhGFjvegYkKde0kbpi~iAWzd2TTcaL0yd6ovydqXQsz4FVcITopxcDMO8GLKIoje01cEDTQOhvQ1oG0fbQDDJElyVVWjk4vM8PxXUC4mcOkOXUSQO0jnJxP0FDdm9EPX~88jx7XHMDOKyf-dMVH6aGm1gA06kYJ-DmX0Yki34XdJQJXPcUWJiRb~5C2u~sF-qB9dPeNNb5YJ2HFAIwGx85pIjmnFvZKsxD5EcFIhip8J0VQzWM6d3IbYhEmRmhsYSlQNfw__" alt="Gallery 1" className="w-full h-20 rounded-lg object-cover" />
                                    <img src="https://s3-alpha-sig.figma.com/img/2ca0/1f91/1e18a8b5efec3854e09469721767910e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKnINjAl3xpSHOQb51fa3vVCz2pNpFkx0bGxor9GaAABOsaicDLMJXQgHyfk4EQCf2DY~IWS6xxPXp1dwxfEBn0Q1LNfq1wB4p9yrz5IKMakBdFkaGKaMmwkkttOqjdMC69d56zQRldVQVLHc9SqGRRrVLvVr9ffkWevppQ3X5PEyxIdHSiypWw1s5TJQcVJwcNjd4xiUwGWbxxaXJDrBUU8C8MiNJSyajrpRZ4J4O6MhZ-16V6QCOIGRnh3d656Z8Gvv6TT609cQlgGZkFARjlsro3TkruGDcRUTaZ8M0xWcQ~LXXyB5AhKeiulzcNcPjt-n6UnLyJDqQe5NNZodw__" alt="Gallery 2" className="w-full h-20 rounded-lg object-cover" />
                                    <img src="https://s3-alpha-sig.figma.com/img/c6e0/0d2a/20467838df1c528af63bb228455b48f6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqV~rmS6ELTH-KQ01ripPUo1gHfh3Y-OuQWwasPvcrzVdJ1lYGFyRLqltK27oDt41eI2stWHFwHlfaDWv~ZSXjYQOdJz09S6Ajs6flLuWRvWdJprjGABx4gBkTVfbR7m8S0g5sYSChTIDdF6FnhGmrTscJYyMQil22CMhzLHti4iorhMgvZjPdWfTiGLjFVD1sXRWQGHe-oYB0Rmo7WUnt49ybyTj53gtj0viB2aEzjSq0MwMIJeCYFQNj9zaCdqS0sGPwpJ75XI0ZK1FmDEGjlOh9lkofs1sTcuciOnRcF0vSUjKNzRlrW9Zv~V4eNNGDuvSfZQ17CNVBc1~TUvow__" alt="Gallery 3" className="w-full h-20 rounded-lg object-cover" />
                                    <img src="https://s3-alpha-sig.figma.com/img/0a45/78eb/a585fad4345109bba4bb7965b34bb93d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rz1Axkxk34BL8V1cL0k~2hFSkxmvs1KXMfuHFjKtjESDFzdWT-~6NItAOgV7X0KTgDIKsvMyFWWZZy4FlYCLaJx-OXaTrTHS0~uJPEP5jyeO9-2hDfUDOsTIk~z44S0rQn7R5YgVjYhJ0KnCJYMkqCb~D8uB7DANTn2uS8M1sOaIKlRbY2ODLQ0xBJyvvPC5n3YCMbLpWiTVTZ3g9WbLilz83fxr~-JhySNsD14pTGcaB9BBxyFDUJWJcT9KblnomrikWJDUTXTFHp4ORvyOWk5u2V-S6xNxYvVhz1M2WAQuDOysogWWEi995FrzeZVUHBHD3ws8-fQN4H1kITfhIQ__" alt="Gallery 4" className="w-full h-20 rounded-lg object-cover" />
                                    <img src="https://s3-alpha-sig.figma.com/img/db2e/e4d1/431152f37b8be8e26e7020df85c82e5b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MyT50V8dYZqeI7ebeyOezjHq-6JE82Agr68D4Pn51m8bFwVrvK4keC8TtqaWTOiCPkffBmmhmT5MSLx8loLe9WP7bi4pkVrbfQ2A6uvKy~9mHM7DpPZn9BledudM8jdHLuqZ4mVbEUfIQyFgL0Ld2lzWmVwOI1z0JdcXPo8U5bS1HkqAhZLA~Cg3EAZbv-a0zhl3sSSBip-yBXJ59t2-uMEkS7q9HP5vu0VEcAs-GU2MSOIjWAtNnlAkDiq4Um82wxMXck8QJpU07YOxth9S8yqBLWF0ZlDhTMS9zcu2fPrH-DHB4jQzh60ZzbBEYbcWAEtwwjzFyz~U68NXPkx9cg__" alt="Gallery 5" className="w-full h-20 rounded-lg object-cover" />
                                    <img src="https://s3-alpha-sig.figma.com/img/08aa/84c6/43e52b6e90cb14a936e3dc2e4e4a6e9e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVicDFlkHwq~MYOEUxw2eWxG8IrofSM9A~ncGpZz2k64BcW8LYkJOGlSIPZhGSxCdXULqljrnQDdIYA2aQ0m4~~3TmxEtEeiYTdPrn-VC3uF5eOlZR8Xk8rq~89fPCm8ROinvpgzguPqf7EexH5hHKy0bsQVbYNvDKT4lb6hinH~imzVEba8erZxpiM7yDuMhNPymhlGkfaLzAuwj~EK2IvtdS7Dv808DPhRJLsdvlfOsnDPllOUC8dDSQMuNXJSXv1hBLJMe3Io23QVMppDPN3Tp~JogT4k9gUU0kc04MI4RE-h~vGAr~vnxuHVcoQ~z2QOnw8Zmxp5sD~SztoMIg__" alt="Gallery 6" className="w-full h-20 rounded-lg object-cover" />
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="bg-white rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Popular Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Cabbage', 'Broccoli', 'Smoothie', 'Fruit', 'Salad', 'Appetizer'].map((tag) => (
                                        <span 
                                            key={tag}
                                            className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter and Footer */}
                    <div className="mt-12">
                        <Section />
                    </div>
                    <Footer />
                </div>
            </div>
        </Layout>
    );
};

export default Blog;