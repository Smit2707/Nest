import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const BlogDetail_mobile = () => {
    const categories = [
        { name: "Milk & Dairies", count: 5, image: "/assets/Figure.png" },
        { name: "Cooking", count: 8, image: "/assets/Figure2.png" },
        { name: "Pet Foods", count: 3, image: "/assets/Figure (1).png" },
        { name: "Baking material", count: 5, image: "/assets/Figure (2).png" },
        { name: "Fresh Fruit", count: 6, image: "/assets/Figure (3).png" }
    ];

    const comments = [
        {
            author: "Angela Doe",
            date: "25 April 2023",
            content: "Excellent features! I love it. Highly recommend to everyone.",
            avatar: "https://s3-alpha-sig.figma.com/img/b37f/7dc9/b1dfac7e13b19e79d12eda30784f7ab6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cdgpkXzQQ8asOxvz08r8l-ssXWg-EvIrUt48jRNfsUPuMy1TIdhweB34u1V8DWwmKyVR0vl3rMnyzOc7XJiJWTAEmtRRuu~3msXNP3JJcDd9dslFN9~Xh-PoYpewxEKOB1MFjz7W~JD4LJl8f3xS3XJ~5D7tGUkiGPc-BiMoRQlv2DK~Mcauwzmsadake4z8KaB4wHm7sE4O-7efMPNJGv5er4886OY1KgY5TGQ9MypqhDd1X1rSBFKzSaXOt1LBD4IxlgDD2c4DBMzcG9IdO0nDRLBAP4ORcMX2R6b5Inb8NVgIxYCoVZBcrgR6Vx7UyZypSlUmgRIemfXk7famaA__"
        },
        {
            author: "John Smith",
            date: "24 April 2023",
            content: "Great article! Very informative and well-written.",
            avatar: "https://s3-alpha-sig.figma.com/img/3f9c/5138/5e21edc55024308448b973ce51ea409a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MBGqRebszXRCLdSDsiXhx9coO243DVTnDVLCvpOQBcfvmyMku9Ap7CQbDOm14BCDUGCYLFdokytqbvr2hUFvWsnHJP4EqB~w1zo7AWyEYsSrC-jiXOzWE6u4fuN1M7X~vhiiPiksbECUPHEMjH9PYHDGYVXBxqJQ0ixKi-aE1oGWOMwoG-xHpqEXkLzNb2ibtBvgdKO9PCwck-M9wzusqXKBEG0Stx3Bqi557T9pbExRhnhE~22S5KFfxBjG4BHEyqWB3slony4Qg2QcWgZ4gJkZAoBNO3YW2SMNY4Tc3iEdWSQQxDnXJF4QneQQ-Pzkk5o9uLbtoZVDkWOWwx~ciw__"
        }
    ];

    return (
        <div className="lg:hidden pb-2 mt-20">
            {/* Breadcrumb */}
            <div className="px-4 py-2 bg-white">
                <div className="flex items-center gap-2 text-xs">
                    <Link to="/" className="text-gray-500 hover:text-[#3BB77E]">Home</Link>
                    <span className="text-gray-500">•</span>
                    <Link to="/blog" className="text-gray-500 hover:text-[#3BB77E]">Blog</Link>
                    <span className="text-gray-500">•</span>
                    <span className="text-[#3BB77E]">Recipes</span>
                </div>
            </div>

            {/* Blog Content */}
            <div className="px-4 py-4">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                    {/* Featured Image */}
                    <img 
                        src="https://s3-alpha-sig.figma.com/img/00a9/190d/dfa332514b43ba0822970ef1973003b7?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eXErtR3KU-tA1S-hmsY2m8BIlaOFjGmPzVunlE77YQT0g8CwSjVSehcKraojRP4cXNVw9RcpWGNWc4Lcggtha3TlBkxagBbdlbLpfWmvnl4nyEuuLH-OAhkSNXKNA8rRl4Bgkd-MevtATN6XgVCt~rsdRZ9owsKO974mt5lAzjeg3H4wRzSMPHYN22nsgWhNPv7oVisDBPbxjC0u~2Vr7UwJ2Xm7Y5DdIukqbdvlGmDQukUKRQHjBGmVMSDO0mIUsRUF9yocUvAI3ouANc18W4~pHpb-6LMJYD3J41rxO5Pmha1LIk3hdK0G2rwAmZ7z2Z7Vsg0fSaVcXXvxCOozgg__" 
                        alt="Blog Post"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <span className="text-[#3BB77E] text-sm">Recipes</span>
                        <h1 className="text-xl font-bold text-[#253D4E] mt-2 mb-4">
                            Best smartwatch 2022: the top wearables you can buy today
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-2">
                                <img 
                                    src="https://s3-alpha-sig.figma.com/img/9f79/eb35/790bf748bb2ed29e628fc867299685b9?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVPujp8PGaWLOKuU89dsR0a4BL9LhWJ0WnADk6FehjykzA2zkybPezP0JC088MCs6NM3OA2FZdXn-QTkaJVxyaiqGuY7SS4Zf~bW9M8G1XsDcaymsu2tcog-VS4qtogurrlucmSh-4AD6aePqB2THZSRDJcyyTu8C9x5gpYDSiLDFfIbKzLDDJv2JJfiDEBAMTwxH0s2KQQptGFVbR89cfyzNTy-7PIaH1pOvgg8vruxNImYOZkjJcUC7S4xL2QCEkmpNwoM3gylTZwtXGnJcR60obEsPY5tuNT1R8X5XblaHO7qY40Ot5h7~Z9J8H3JE8guejzMV4KPoZAmmIP6sw__" 
                                    alt="Sugar Route" 
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className='text-sm'>By Sugar Route</span>
                            </div>
                            <span className='text-xs'>2 hours ago</span>
                            <span className='text-xs'>8 mins read</span>
                        </div>

                        {/* Blog Content */}
                        <div className="prose max-w-none text-gray-600 text-sm">
                            <p className="mb-6">
                                Helping everyone live happier, healthier lives at home through their kitchen. Kitchn
                                is a daily food magazine on the Web celebrating life in the kitchen through home
                                cooking and kitchen intelligence.
                            </p>
                            <p className="mb-6">
                                We've reviewed and ranked all of the best smartwatches on the market right now, and we've made a definitive list of the top 10 devices you can buy today. One of the 10 picks below may just be your perfect next smartwatch.
                            </p>
                            <p className="mb-6">
                                Those top-end wearables span from the Apple Watch to Fitbits, Garmin watches to Tizen-sporting Samsung watches. There's also Wear OS which is Google's own wearable operating system in the vein of Apple's watchOS - you'll see it show up in a lot of these devices.
                            </p>

                            <h2 className="text-xl font-semibold text-[#253D4E] my-4">Lorem ipsum dolor sit amet cons</h2>
                            <p className="mb-6">
                                Throughout our review process, we look at the design, features, battery life, spec, price and more for each smartwatch, rank it against the competition and enter it into the list you'll find below.
                            </p>

                            {/* Two Column Images */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/e5da/07b0/9e59559c5805fc67657a7c0cf8fa25d9?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e2DSD9FImGxA6v~rVBs48Lg1JNPVp3XkFP3CYuJZKUiYnHVhylNlf6DZ6~30lZZ9~7yGBJDXvmrX6p1xcDjXR1V9VHZCZAxVsCSriz7ttnqBn0oO3B1mqB8~IfO6k3nFTHT1IH17t50r5W2MrivEM3goV~p5bPoloDmlzQBjET6BzSMq~qIM56zT1pyRK1M38-t0DCuf3zQ~h9IZYSU1YE8cmcuQdXVsXB8rqjaH3G4495kh9CvzW20GpGu6xDAR-CKuX5m4JNTnDqkPC-Tda9HrcPszAB26RVDgByMtlrMQGHAgx2Tk4IjNfvhLirb667rkcEw6aiqYB0WkTF9sug__"
                                    alt="Blog Image 1"
                                    className="w-full rounded-lg"
                                />
                                <img
                                    src="https://s3-alpha-sig.figma.com/img/6071/5da3/f2863278a563e9f53cc3dc65d7b57a4a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jPm82Xi3qc0oFDfu~k14ksl~0QF4I0YeHjwW05v9g6u~GBP54H-vIGa3OUXQZzkVUVWFakIMHlb-epiMEThOsukDfLOa03lVeBbouSyxaOLYr9L16jK6Qbhz7msyR2CQweNdQnwycDAUiHQWlM48STn1jj42xR699fJAAfg9kF2SEGyaIsbnEUFOTp9z6JvZAWqec~TMvy65nTDsa~YMprqldX5GsKnNSYErMcIVkNnvqMrMewnODO9vRwgGOUf0rRLdKBcyANDCyJ9QCaC83Az8VGPZOGVVjqIA7ncgQ13s0dxG5cKov04oWBHtqa8lVjm1MqQOSY33DcVE5Z5jOw__"
                                    alt="Blog Image 2"
                                    className="w-full rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4">
                <div className="bg-white rounded-xl p-4">
                    <h3 className="text-lg font-semibold text-[#253D4E] mb-4">Categories</h3>
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
            </div>

            {/* Popular Tags */}
            <div className="px-4 py-4">
                <div className="bg-white rounded-xl p-4">
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

            {/* Comments List */}
            <div className="px-4 py-4">
                <div className="bg-white rounded-xl p-4">
                    <h3 className="text-xl font-semibold text-[#253D4E] mb-6">Comments ({comments.length})</h3>
                    <div className="space-y-6">
                        {comments.map((comment, index) => (
                            <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                                <div className="flex items-start gap-4">
                                    <img 
                                        src={comment.avatar} 
                                        alt={comment.author} 
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h4 className="font-semibold text-[#253D4E]">{comment.author}</h4>
                                            <span className="text-xs text-gray-500">{comment.date}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm">{comment.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Comment Form */}
            <div className="px-4 py-4">
                <div className="bg-white rounded-xl p-4">
                    <h3 className="text-xl font-semibold text-[#253D4E] mb-6">Leave a Comment</h3>
                    <form>
                        <textarea
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] mb-4"
                            placeholder="Write your comment here..."
                        ></textarea>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Website"
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E] mb-4"
                        />
                        <button
                            type="submit"
                            className="bg-[#3BB77E] text-white px-6 py-3 rounded-lg hover:bg-[#3BB77E]/90 transition-colors"
                        >
                            Post Comment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail_mobile; 