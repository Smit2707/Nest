import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import Footer from '../Components/Footer';
import Section from '../Components/Section';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            category: "Side Dish",
            title: "The Intermediate Guide to Healthy Food",
            image: "https://s3-alpha-sig.figma.com/img/00a9/190d/dfa332514b43ba0822970ef1973003b7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnDHcxvA96InH3SfCuWQrhFfxYP3o~1zvVXgf5qwMOtmPCD6OlB~rfjBLI1K9awR9oWY7a49m~wB40y~98BmczzokKuPbX45eEi6fwyTbOg4QIK6rmAETg4B4QTb46vh5rqqobOAdmRM9tHU0hiek1wnAOF2XzK-0DO4hWt2IC6h-8MH52-RTV5xaAt86BcljSM9NNDeZgLEPKiW~wFSt5idBLUEASNwKUqDp4sMSj3ixvg5gtFZQsJnGr19rgWk36FnfcTSdFWXzJZz-ILsxs66l~8KXeGPJWPqyskO8rHBRfB-AlsXIGUak-NG5ZFMcuH1qUhIY0BVE3ECpZqX1Q__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 2,
            category: "Soups and Stews",
            title: "Summer Quinoa Salad Jars with Lemon Dill",
            image: "https://s3-alpha-sig.figma.com/img/e5da/07b0/9e59559c5805fc67657a7c0cf8fa25d9?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eJ6OhNL6dGcTHQhNL-icEMM~B1YhSxi42qGy7Q~uejmMSohyREfqfnIFHhrCBLYj9qD~c8cWNNhwchxiJqwiI25v7lcG28Y5WX-4Y375GNgaZ6otJl-T~DVdi9w6q77UQejen9nr8kAXGlAO-PXaH53Amks9babzfBjkV4diIly~JyaKf3QAKXTevPUTc1hUdrHnXOI6J8YMseDNGzdVuzkiudHKMk9Cb-cBm6Nx4QZ7lp0nuamumWH9sD4FLi8XI55QQoOWAIgaWQFQZ1RN7srpuSf7CG0ePJGAeB6FxO58fqLsneDjJ87F5-RNgUJGIfOMP3nAKarhyxv5d4seEQ__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 3,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/be99/2069/e68b06db95bfa627bc18c8202d45422d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jmrZ7D--R9e7yKUjFo6GfkpQ9bMFPwhc4wKqrYhQSXDP0JoCZKlGIolJaWM2CuWgiGaCpYZNisGmuKTMULGm7eL5W~hnCfUUCzXswowd23GGcDUmtIJnlnSdeKFHps6QFdf2t-4e42D7-06lkKhIt00rrghOzeaYUsORyemy~7~drRpBeyPQYlcuW6yz4XuN5ugpZCP4GevrGzWT5usRWs68Tz2zQ6hAvHnP0HlDQ1FkMPgcPhbG4pyo3sSzyh4Q9eaOZOPC0ditu5sXTMjC3MxbzOddKi0o7b0DXFsnLBET5sS6B26i~~aQ3jEl1xWLkABmdTzYvAwI3ylkHgyQMA__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 4,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/6071/5da3/f2863278a563e9f53cc3dc65d7b57a4a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qztb~BckUO7GYwoKNET39TFnv~nMAMV9l3JPMYwt6UzjR19pPifahTaNWCyFhknd9w4Lg7b25kI8z0BkeVOINGfor44xNrTKSaOkHHswE3zLxS2EiSqHeEpxgtxdWxcPme1mSi5u6RiIGUZ~DruDYGDbdnrwluBEwciexc1gw95EiCJUypYOQTwRsOO3wnLwj956q42HbOEcNEFi705F-~kq1iqPneHumFw~e8QLWd593oek8zIw2GjUGJzNFnohvQsifVdlocW~KyoIMSumoLeOM~jUSyURpUX-hpKpzwXlznvhouUg8d-9ea-7nMEIymSYYx-wFELY3jW2mAjFOw__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 5,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/31d3/8a09/86ecc64f1750a54603c27ef6ebd61c56?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MXEcts2IPubIW1d-OVElxa~ed6hY0HaN1AJAdCMT-qKCd8eqg2VCcue2jWGVO0IPc8P5y2TZOnqHncXyFNnPyYf0EXICjYPLu0nRqktM719VALX3f6jEh5tRXnYZ6lC0fOhvEQJZuUivAjh8x1BUoJyb9rn331PrgYiy3138scIt4ym~tE-vWEMMFKD0ACUWQjwCDd3gzB1M2Hq45z~M0cTaDh1y8QIKQwul5Ri9JaTn6-aIq3EqB~BTuw6TfT1puJf2nJBE1Gvx-zk4Vdvr9O0w8QiLVBFwLYU16xsWD5Mk0brUVX4UimwvUCrW36ANMtOR880bK5PPMpMQhaaTzA__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 6,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/0b06/d35f/9f0dc9b8b2a2a863096159d763f50baa?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhE6Cj-~pNkWB3CzfLFjtJ9nvD5mAfVQAYZoE74oyAqEk2GaAYCXd1dmuxw6DuIOl8xF4xdtOmdfNM9xwFYkcM5YOyrmSaMoNbfaKYaQfBAjJ9UBNPw1973Rpt5jPZI71Nca9cYwPXFMSl7jbbmD-k51pDTRolg7shT134OzS57cnzHhFqDCutoz1M6xvmp4qYd-sdReiE2es4~AMTXgmzGFKxZebVy-zEeZwlHf1s1MhcIwqrEd6c3sq1EAodkpfCuS2wO4ZHMKQv0dqBOqV9c68DJXgP-XjflEYqSAbFjk16BtCBY9e7pdFk02SMxx5rFC0eiui7F~sjcmuQsHsw__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 7,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/ae8b/a941/30923620aa4218146b28c898b0c8213d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oE8B3smhAk-x9SnlMHWCsJwFCF8SL~30tpnDtq08KvQtmqtVWmBfc8~FHcJWt8G36yVAx9pf5bKSf~BFTJKPq4WvNOkCj4l-UZAZWT9u2qzgqC6brkZkfb8VmCb99LDI8-ujQxKTscTUUJuLx8rP2ti2heF2YXk0G3zV8U51uZNoJ7dpH2dSIi9E4-IIBvOo4Qm4dq7pYYRrNoBBsDzDAFUTRZf2I-zZz0~hHUNpa0RF76xCSAjPx2FPL75Uu2Pno5GS87Xs66Mp8GKCpzLA-i~o000c-L6rOO9N0qAHDyqns9pWRau9vKc0Ntj1J52hyLwHySeyjphFIWzVx6XDwg__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 8,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/b540/2c5b/55a16d364ffdd9afcffd1a57e1e75b85?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GmdtVgGOQ~MCkSDCQHHCNTTc55h0JkiAqguSbBXydXJLZgFyK8KlntrOIzyQdUokqt3fLSlXyww0Kw0a5keoo12093aMEd3dP7y7zgHxyk6lcGI9i2m9jv5Dg0FUbIi8USl~q1l2QSe-Yrvsqe~RyfttQyKOcb1eaHtzIpi2lK1eg9AOXNuX~fYKRtHUQvgfx3bBKyI5Qn8Me~09RQNQeqgcx3cpx2IBBf~4VvY9QMFnxMW93c5eLLZVjijYgrF5mdw0J1BeL~X4mOm98I6F5iUWjIGN3Z9QMdahnbEePAT2WL~7wnpOJBSGfvw3RUNYK7qtgpTR8I-XU9dzlh4ioQ__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 9,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/5f46/0167/878920b8ae639325010cfcce869cd6dd?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kZDIVoJ~NtvbEtFHrpBZOT9uji6EhR1t1KbEAOkCMosS9TtIZ~a~Pn7I8tvYxsKlj6USew5pYlIKiZKV8Q~eyp3X3aBvDdLnilENZCHivTYqNum4BW0dzbNUBtp01OReaTUG3r0Z5z6W23edd4ldntHrZL1dLcd0zyA-pJbHpcoliI0y4fjCRGiYJ3MUMLBVHrT~XF7~~Jvdp6alVCoP7gcjkmTdF3wQwt1rbVnedV12ZavOF2UshC915KIqY-uIdwEsaEOWnXEFdSKinnVVLDFO1IxWDtBglFQg1Gra6crKdnvefnmC0LIJ9t6GJNuU203cgM2U-Tzdl5XsGp-nQw__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 10,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/b95d/1a82/cb7d39819229fcb1035f77dad15ce947?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pECxQjjLajSWIkEFn1WYPb52zX2yCyVcG-uMZsynm1TPfZF93rdhrzFejkRbPTd54GO4axoqr~SQrG2P7K2kWShvhvOLW7tyqQLn1uC9vO8-J92t4hXyb3qtpMKIvWfP48hOLfWrOvAue0BcamSAFBvsLxaM76~G8KZdYigvHXf1iF-TCaM1is~A1~ETn7Jl5BIlakJ7qmsHCMTmJk-~vH2x~hZ3y0iwNeivO11I4gknLX9MxtmmjL2lFWHnAOU6lk8jQ5PU9vytSMs2XsgoHrri5IYrR-0NySvDCVWLnPpxsVAtPhLxm0NByLEmw-ZiAcGWAbveDOJ2wTud27Ncrg__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 11,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/00a9/190d/dfa332514b43ba0822970ef1973003b7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnDHcxvA96InH3SfCuWQrhFfxYP3o~1zvVXgf5qwMOtmPCD6OlB~rfjBLI1K9awR9oWY7a49m~wB40y~98BmczzokKuPbX45eEi6fwyTbOg4QIK6rmAETg4B4QTb46vh5rqqobOAdmRM9tHU0hiek1wnAOF2XzK-0DO4hWt2IC6h-8MH52-RTV5xaAt86BcljSM9NNDeZgLEPKiW~wFSt5idBLUEASNwKUqDp4sMSj3ixvg5gtFZQsJnGr19rgWk36FnfcTSdFWXzJZz-ILsxs66l~8KXeGPJWPqyskO8rHBRfB-AlsXIGUak-NG5ZFMcuH1qUhIY0BVE3ECpZqX1Q__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        {
            id: 12,
            category: "Salad",
            title: "Caprese Chicken with Smashed Potatoes",
            image: "https://s3-alpha-sig.figma.com/img/3b19/62db/eb891a693699a5ac96fd9384860ba7ba?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N8VHLiOLKXm-w54F0mwTZGJY5d7slcADKU2MRjefGxRqELLz7xv~KfnJYeamXor~LvhA0ytyMRlcinYJSFjsyESOMF91NrSlH3J8Y69E9Br~XJyhf5Gd6xTgweXtHh5gJsdxjqU4iflv5Zq4MAoEcgPKXslNkC87FUZfFVbCgxJsd~4MYIIC3nf~CJScKnX-o5c4vkV1PfGjIEO07KPQqbKSacgCa2N~3tFtTh7uRYGAtmDkOsq80kj4DAJEcvFk4OTJwKWNS7i8GFbwdCmpUoh8M17NdVI09KElM9GLUygrzcxi7Hqx9KmuhmjDSZu1eIoc1Q7Etmn-Qg287DzQvg__",
            date: "25 April 2022",
            views: "126k Views",
            readTime: "4 mins read"
        },
        
    ];

    const categories = [
        { name: "Milk & Dairies", count: 5, image: "./src/assets/Figure (4).png" },
        { name: "Cooking", count: 8, image: "./src/assets/Figure.png" },
        { name: "Pet Foods", count: 3, image: "./src/assets/Figure (2).png" },
        { name: "Baking material", count: 5, image: "./src/assets/Figure2.png" },
        { name: "Fresh Fruit", count: 6, image: "./src/assets/Figure (5).png" }
    ];

    return (
        <div className="mt-[180px] container mx-auto px-4">
            {/* Blog Header Section */}
            <div className="bg-[url('https://s3-alpha-sig.figma.com/img/cc7c/6762/31a2809acc0f48bbfcff69c0705291d5?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RDmsOG2ISj1RBXQU1rINyqJ8EzX3errc0LM8J-E5UuRV7nKn0K4lAUhddXENJ-2~t0-Pn9ySOWqA6JC4ivwUJJZkOlC9UXVpiop2r6XTpQmywc33A1MLQEcDnU7GHviAI186MaRxl6EeDVB1Luq1yhdQpO43iK3EdQMipfIyN~Qj1WpNUcHKMi4raq04E0xpsV-XlzMtmdNEpmLJr6PsrDFz6IC8sImiHtVD98KTYjHSPnGFMJ3uKoKPtOtNI4qOAHmLqSTr~pQ-CroQ5rYr7bzLbDzzaS4A80Nzmk7PTf6rolV1CxJ8MmWU6rtszO9VJ2EGD-skfsPcuNOilzgV5Q__')] rounded-xl p-8 mb-8 bg-cover">
                {/* Top Row - Breadcrumb */}
                <div className="flex justify-between items-center">
                    <h1 className="text-[40px] font-bold text-[#253D4E]">Blog & News</h1>
                    
                    {/* Filter Buttons */}
                    <div className="flex gap-2">
                        <button className="flex items-center gap-1 bg-white px-4 py-1.5 rounded-full text-sm hover:text-green-700">
                            Shopping
                        </button>
                        <button className="flex items-center gap-1 bg-white px-4 py-1.5 rounded-full text-sm hover:text-green-700">
                            Recipe
                        </button>
                        <button className="flex items-center gap-1 bg-white px-4 py-1.5 rounded-full text-sm hover:text-green-700">
                            Kitchen
                        </button>
                        <button className="flex items-center gap-1 bg-white px-4 py-1.5 rounded-full text-sm hover:text-green-700">
                            News
                        </button>
                        <button className="flex items-center gap-1 bg-white px-4 py-1.5 rounded-full text-sm hover:text-green-700">
                            Food
                        </button>
                    </div>
                </div>

                {/* Bottom Row - Title and Filter Buttons */}
                <div className="flex items-center gap-2 text-sm mb-2">
                    <Link to="/" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Home</Link>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">Blog & News</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-4 gap-8">
                {/* Left Content */}
                <div className="col-span-3">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <img src="/assets/figure.png" alt="Recipe" className="w-10 h-10 object-cover" />
                            <h2 className="text-xl font-semibold text-[#253D4E]">Recips Articles</h2>
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
                    <div className="grid grid-cols-3 gap-6">
                        {/* {blogPosts.map(post => (
                                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <span className="text-[#3BB77E] text-sm">{post.category}</span>
                                        <h3 className="text-lg font-semibold text-[#253D4E] mt-2 hover:text-[#3BB77E]">
                                            {post.title}
                                        </h3>
                                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                                            <span>{post.date}</span>
                                            <span>{post.views}</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                        ))} */}
                        {blogPosts.map(post => (
                            <Link to={`/blog/${post.id}`} key={post.id}>
                                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <span className="text-[#3BB77E] text-sm">{post.category}</span>
                                        <h3 className="text-lg font-semibold text-[#253D4E] mt-2 hover:text-[#3BB77E]">
                                            {post.title}
                                        </h3>
                                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
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
                <div className="col-span-1">
                    {/* Search */}
                    <div className="relative mb-8">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                        />
                        <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Categories */}
                    <div className="bg-white rounded-xl p-6 mb-8">
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
                            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                Cabbage
                            </span>
                            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                Broccoli
                            </span>
                            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                Smoothie
                            </span>
                            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                Fruit
                            </span>
                            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                Salad
                            </span>
                            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-[#3BB77E] hover:text-white cursor-pointer">
                                Appetizer
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Section />
            <Footer />
            
        </div>
    );
};

export default Blog;