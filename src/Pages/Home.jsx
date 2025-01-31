import React from 'react';
import CategorySidebar from '../Components/CategorySidebar';
import ProductCard from '../Components/ProductCard';
import DealCard from '../Components/DealCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Footer from '../Components/Footer';
import Section from '../Components/Section';

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
            image: "https://s3-alpha-sig.figma.com/img/21e4/4269/1440039ef19376cc9cd55fb67282b984?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MPKui7DRetvcKBxvFhO3giUhr0l3KAQca59jQkl4guWnLiMYDRVTBJ0RGDyBhe~Fxs1EZXgwNEL~XfN9fhGFjvegYkKde0kbpi~iAWzd2TTcaL0yd6ovydqXQsz4FVcITopxcDMO8GLKIoje01cEDTQOhvQ1oG0fbQDDJElyVVWjk4vM8PxXUC4mcOkOXUSQO0jnJxP0FDdm9EPX~88jx7XHMDOKyf-dMVH6aGm1gA06kYJ-DmX0Yki34XdJQJXPcUWJiRb~5C2u~sF-qB9dPeNNb5YJ2HFAIwGx85pIjmnFvZKsxD5EcFIhip8J0VQzWM6d3IbYhEmRmhsYSlQNfw__",
            title: "Nestle Original Coffee-Mate Coffee Creamer",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/2ca0/1f91/1e18a8b5efec3854e09469721767910e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKnINjAl3xpSHOQb51fa3vVCz2pNpFkx0bGxor9GaAABOsaicDLMJXQgHyfk4EQCf2DY~IWS6xxPXp1dwxfEBn0Q1LNfq1wB4p9yrz5IKMakBdFkaGKaMmwkkttOqjdMC69d56zQRldVQVLHc9SqGRRrVLvVr9ffkWevppQ3X5PEyxIdHSiypWw1s5TJQcVJwcNjd4xiUwGWbxxaXJDrBUU8C8MiNJSyajrpRZ4J4O6MhZ-16V6QCOIGRnh3d656Z8Gvv6TT609cQlgGZkFARjlsro3TkruGDcRUTaZ8M0xWcQ~LXXyB5AhKeiulzcNcPjt-n6UnLyJDqQe5NNZodw__",
            title: "Nestle Original Coffee-Mate Coffee Creamer",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/c6e0/0d2a/20467838df1c528af63bb228455b48f6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BqV~rmS6ELTH-KQ01ripPUo1gHfh3Y-OuQWwasPvcrzVdJ1lYGFyRLqltK27oDt41eI2stWHFwHlfaDWv~ZSXjYQOdJz09S6Ajs6flLuWRvWdJprjGABx4gBkTVfbR7m8S0g5sYSChTIDdF6FnhGmrTscJYyMQil22CMhzLHti4iorhMgvZjPdWfTiGLjFVD1sXRWQGHe-oYB0Rmo7WUnt49ybyTj53gtj0viB2aEzjSq0MwMIJeCYFQNj9zaCdqS0sGPwpJ75XI0ZK1FmDEGjlOh9lkofs1sTcuciOnRcF0vSUjKNzRlrW9Zv~V4eNNGDuvSfZQ17CNVBc1~TUvow__",
            title: "Nestle Original Coffee-Mate Coffee Creamer",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        }
    ],
    "Trending Products": [
        {
            image: "https://s3-alpha-sig.figma.com/img/0a45/78eb/a585fad4345109bba4bb7965b34bb93d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rz1Axkxk34BL8V1cL0k~2hFSkxmvs1KXMfuHFjKtjESDFzdWT-~6NItAOgV7X0KTgDIKsvMyFWWZZy4FlYCLaJx-OXaTrTHS0~uJPEP5jyeO9-2hDfUDOsTIk~z44S0rQn7R5YgVjYhJ0KnCJYMkqCb~D8uB7DANTn2uS8M1sOaIKlRbY2ODLQ0xBJyvvPC5n3YCMbLpWiTVTZ3g9WbLilz83fxr~-JhySNsD14pTGcaB9BBxyFDUJWJcT9KblnomrikWJDUTXTFHp4ORvyOWk5u2V-S6xNxYvVhz1M2WAQuDOysogWWEi995FrzeZVUHBHD3ws8-fQN4H1kITfhIQ__",
            title: "Organic Cage-Free Grade A Large Brown Eggs",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/db2e/e4d1/431152f37b8be8e26e7020df85c82e5b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MyT50V8dYZqeI7ebeyOezjHq-6JE82Agr68D4Pn51m8bFwVrvK4keC8TtqaWTOiCPkffBmmhmT5MSLx8loLe9WP7bi4pkVrbfQ2A6uvKy~9mHM7DpPZn9BledudM8jdHLuqZ4mVbEUfIQyFgL0Ld2lzWmVwOI1z0JdcXPo8U5bS1HkqAhZLA~Cg3EAZbv-a0zhl3sSSBip-yBXJ59t2-uMEkS7q9HP5vu0VEcAs-GU2MSOIjWAtNnlAkDiq4Um82wxMXck8QJpU07YOxth9S8yqBLWF0ZlDhTMS9zcu2fPrH-DHB4jQzh60ZzbBEYbcWAEtwwjzFyz~U68NXPkx9cg__",
            title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/08aa/84c6/43e52b6e90cb14a936e3dc2e4e4a6e9e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nVicDFlkHwq~MYOEUxw2eWxG8IrofSM9A~ncGpZz2k64BcW8LYkJOGlSIPZhGSxCdXULqljrnQDdIYA2aQ0m4~~3TmxEtEeiYTdPrn-VC3uF5eOlZR8Xk8rq~89fPCm8ROinvpgzguPqf7EexH5hHKy0bsQVbYNvDKT4lb6hinH~imzVEba8erZxpiM7yDuMhNPymhlGkfaLzAuwj~EK2IvtdS7Dv808DPhRJLsdvlfOsnDPllOUC8dDSQMuNXJSXv1hBLJMe3Io23QVMppDPN3Tp~JogT4k9gUU0kc04MI4RE-h~vGAr~vnxuHVcoQ~z2QOnw8Zmxp5sD~SztoMIg__",
            title: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        }
    ],
    "Recently added": [
        {
            image: "https://s3-alpha-sig.figma.com/img/586a/ac10/2e81764899be66fe52968af922b988f0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EAHXtJJs-OXmQvRRujkKoUGOdaxzsNyKkPGJW1L28nfCSFBA8va20dOW-cn7odn5okJUojyXd5ThGzeKSAY2hFTzFUwQSNLjpbNzlGevPQjZODx1Hptxc1zfZXpUNxc1HJkZw5c3Tm5AvC4nO3OC74aUlUmBd3AETfVVqSLNx3i7tPHtVfVidjUo2aHXZtI-jihud-jiZQCgEcEWRvRDQb2gHP3mhTFSh7NQGhVXcjDuZ5YIQ8THlChBpj~3np5bKNlIm4qg2OKpiKKYxtOCw6yMWCXjHL3iGDZ4U7nD6jxW7WzCxEC3uViHgmL~1tN3-pJ~e0LDc4Ctkyxjy4uUFA__",
            title: "Pepperidge Farm Farmhouse Hearty White Bread",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/0cae/8132/71992813bd4990330476a615e6a49f19?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bvTD8Yp61glY7oDkgjkk8-d1AG2TzxES1mxat--uXqoG2Wqt0Pe~8K9ZmUNkz50RRvGigX~liP6K0BwpynIMorSyEc-EX4oYAiucGdt6ySATjHgSPrF49vKzDNoKGr4N6bUrtrq6dAqZHVfnX0V0pBUZB98RSgrSRuQpOxn3j1mq9BU~dR5Gw9CNYBeRE0MZZySgTS3577MPlpFspveIeSFPrrVzn4QHDh2y20XuzMklVx8IGTiL2BhOH5zZ016TJRsFM7gu~IM-t2ToKxvThnVjImNW4kP5OHLbsQRLFWLVB8qfAzQ8SpfDzaEeNKtJDB1kt~Gai-A9~~zAGKo1bA__",
            title: "Organic Frozen Triple Berry Blend",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/8e92/9504/d07491400bda8ae10048b91c9818629a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eyIK~IeKLkk9UmCFDuILLNWz7mJdAO9khz1CesiDwsksdkrR4WyfCayNqVyqo504apWO9FGAbyCAwI5gKzKQ2ePyCn0lTlrA-ornxT-AwmeErMyOwXgPwl5k9iKlgYE2i5TEZwLP9w6HyNHfFPNJ7Wx8GGjOLeoD1YsFA5shq0w45W8tQIDrl8gEUY1uPV35F-WZLmyDPVVcG70MmdQuJvXLN5dsV54Wb6gjglTa0rWwtRNPHH23SqJH9cwyD1KGsDOqPjaxPE28WXtWf3msoNM6yLs9SdoQ1XIKwaWAhK60tf28IEhXor3QffsG4ughvFZplxTv1vsrnw9EsFQbyw__",
            title: "Oroweat Country Buttermilk Bread",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        }
    ],
    "Top Rated": [
        {
            image: "https://s3-alpha-sig.figma.com/img/c637/3eca/d6bf80c5b4a8c51d6635397f3af8e729?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OL9AKoDN~BzPeC3wFsb6yDExTmhL4vv3hvgdLZqIS~zGFY9KZHQnmzFnyjo8dM-SKZB3QBXHILKvULzxyLPO4-n8F30q0bEr7XqXvpwWF-y7E-~d4KrTwZBt0TB1t60nKQGHDeW2VmdcxWjfSw9saM7VMKiOGQ3rKLLHrvACoZ1Ma1iTJtp5xUPW~uDBVST--VNfB2NQqt10KOVlClkvhZKDCpUCPuHt7pvC2PCOkmMaWb389jr32aqVzdCQt0uzsySlKvbA1Cy80FXQ850OaBkWWvNtnZnDV8U9FcsGECY8ub6bVqxmxfXEv20nYxm6p5WtB-v~-IrkDOae0Dgljw__",
            title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/f15d/2115/2e333cdd0b6ec51a0b49b9b4dd3af3b9?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Owq0hWJakoPo3lmyCFczxVZgH9hPYDPO9XyYZw9odGWxK43rO2zHNhfgkviEgDI5ITpRuufm51vDY5Ur~rNI6-kQePKUpRUBrsQnQJRHTB1EDxNHqBr0j6k5C~uZO-hs9uOHJ6ooFhQs11ETHQjISWidzQtvNBpQJ8-cPecJW2ECKlM13bQ32KivoeY0~9l~pyG1FcIPctLk7euhWLPkU2Z0uYtTvfq-dAsyLZXe9JXZ7GU6aCMMmRoHUqsIoQXWP8TyTuuP8cw9CgxV7~LrJOsTJpvOZq4dlYIDiTiAi0xISfvmzrRe8UJ3R7asjb2nHWtskc5olMRQ7-gy58quaQ__",
            title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
            rating: "4.0",
            price: "32.85",
            originalPrice: "33.8"
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/c6ec/3db0/ef4c5f2196cc332692e6f6d16361e7f1?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEgPa8VFJf3vXAXOyFMMwYV2l~cjlqOurdgBu3H51YYh95Zjfq15yJnV9RIQYGACleoh0Gy4LF30kDLYESSNefZbj-HCdZofn8-xGYGN8GJQenuseM9-k-DinXPXqcCL1vPCk55xDE5SXhuXYs-IWZeoVWkrt7pVlOj7Lt~y0LNWVsvGV083dK-NXOJCbNmDS0xFh-rtbR2cGZ~876Ln2VIa3T0jHH4qps9vPrrsqdAkZTxcAK4gQfRnQbgZZldoxDmgGdyUvCGwQPU-Hm7A6~ls92avLKR~C1HY13ZcwFwilF~dq6jJyVIm0md-egvgCMN-79sEpCZ00zCiwrbwPg__",
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
                        <div className="bg-[url('https://s3-alpha-sig.figma.com/img/2e69/30ac/0a65b777d032b66cf2c7632ee9190511?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a1w0~yNNj-0omADQfB7FqPVCEgQa-v44cLeT~2YD~nbpfmLzUqVor4QugSeQkL-TlxEauDSJYuqO7MCJt2j52NHXFOytddD302lD2jutJMZZgepRoko8OlxefmtdjK2fPhqyJyuhuUHHgIzYuWtOF6mBetdbNQlwA4PtsfFQPYSv0VdGRyyvTOS-xr7Rgk78BkrBH9H-PYjeEPYXOZSoHVNLa3H7j4nmj3-OW0mqjO7MYtn7EzH7aGCbZb5Jd-VlAxPfrs6UmFbQJEihdVVF2X5jbZAs9bTh9dnA2bfb9A~ipkLuO9Z~vtcOyy8vGjun~SE6OZA-OW9IKhEVN1oafg__')] bg-cover bg-start bg-[55%] rounded-xl pt-12 px-8 h-[250px] md:h-[400px]">
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
                                <h2 className="text-xl lg:text-2xl font-bold text-[#253D4E] mb-4 lg:mb-0">Popular Products</h2>
                                <div className="flex flex-wrap gap-2 lg:gap-8 text-[13px] lg:text-[15px]">
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
                                src="https://s3-alpha-sig.figma.com/img/04f7/16d9/9245eacb0ea40bec876d1f6fef0f7a37?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U9u-mBdSuEz9x8PnBQhb5ItOT-1VDA3XHtmSxeSgH19kZyJLenWxfJ02nPzewEjzcQqjYvyeupU-3HiT2y6P4P~lDF5s1Qce1rfz1p-p3aEIKKAMaRkjnD~CsOJByKp0Dfc9ml-vBGK4xNJIO-6nKhgkR39fmMH1Glolt4ppv9xORmKXLRmYNHfWQHtCkLZULQTfbzUUDC8Ozvtp~Xz-ge9XpCpgKVORBqhNNVY6dcBH-eOD5caWCz-Nu-NcbpoLAxFwAqefWd3GfcLz~ZNxO-1WCxKtn2znm8pk7lkcCZ2vvvadr2tF~9WsTjod2HqATMlOo-zJdzdjiv-aNXwcmg__"
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
                                src="https://s3-alpha-sig.figma.com/img/81e2/d2da/b3a741ea7f4d7cecc6d5315cb77be123?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UFIsekokKwFX-IGDQd5YgP3U1~zNqq4WtjeQtZshV8o1bsFFMvzWQP0eJxSrWdaNqkfzxtnFdFwrSgGFPu11kQ03VF1~WWp1JF-1kwGqBPSjCb-W~Bjh777BexQYvPfV2FGxU5Iv28JtOtGzmdS~ybcm9trShsBj54G7G69N~xR~Z5fdQoMFFwTx53BnYKt7EURyzxQuZW09Q9~-peQ~vxys7qs7Xjj52QRFG7-2TUU4qBsrhfdE5jd0CO9fYgAvBESmElB9HGsTG86t2AncqMpJmTZt6N6Dwg-l9LUfflrs2m6VV5L3c167OlHCO-~Odh03I6GC5zzVQKB7idK0Rw__"
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
                                src="https://s3-alpha-sig.figma.com/img/61b4/9bd5/b7fa6aea055c1b1a720c6a697bd7298a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mzSwNblt9WcvA0hbmcADytfzSPQ4KdGu0ENyo5ciyXUMUsxcyzFsX0TYE0uIzHisb6jGo8faEiD6xm0K0G2~Vh-b2fHTrl9mBgfT8WI3mGmC7D~RJ7UOZX6eOw6R4n5W32sqGnm0raVOXRBNeWa34exvLftZE9U~g28rqya0RkP9sWD~yvAavd9I7DBBms8ySicN9R3L4BH5zzDFIJln-b1fDt-H4wJ6cli5q7jyrdBgEufjqONqnmbba-OVSNZMRxU~XsnK65Uo7yx5kWMESK6AEqHv0FA4AzPF60gS2HMsm3rH-1JBxCu5mKZQHmSR20eduTYkhBOSYF9ION9n9g__"
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

                    <div className="grid md:grid-cols-8 grid-cols-4 gap-4">
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
                                            src="https://s3-alpha-sig.figma.com/img/21e4/4269/1440039ef19376cc9cd55fb67282b984?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tDtlanhpu~e0f3HePSwCovz5ZCjNv5McNpx0VQscIYhK5Vo-kNvOD~IsKM-Q5uhRmAg6qYgxzmdk272g5J79VYIdGPq~FywJ2MtegNxPFL8XfUSZYV-j2HPo959-nLkd7f1oTsdInUBAizw9IZ~~iifuFfOC0bZRp~naZXE0Es12LpN52rMEG9jiIDQwoE96XOwCnUgRAyaGUFaSCvtLumCo4W73BrhvwKr9j0ApnzsTduHfBc-Tt89YU-5YpCGG6UpDhmZjX1A-aMMRhiVGlMPfCaxJjfMirOYYUc5I5bXO3ecpTJ2f06P8fVgczPwBL3IHxeUu1juIVs5yaUZ0WA__"
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
                                            src="https://s3-alpha-sig.figma.com/img/2ca0/1f91/1e18a8b5efec3854e09469721767910e?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ooz6~YFxay~m4b599mJASohFPhbk7xV8h7wl4HcC9FFlqYvh9nyYRs7VX9OOhDNrMj6GXcvqzbUppBPLA5D07twULbyuEnHoQT4jO-0WXq3eYitvvAHIwEdsWAflHRjaeUR5K4gdoA7UYfortsKFzUWA9Glpt5DDif5~Eoa59-PVN5xzV4CzCbS-80yxeNhzoU1KbMSLKDuE5hhwzaw~kYI448g6G0zoA1oTdtNzMXTVChty52i3P2bb~ZisZkClFv~ZBnOlJEUwj46vHBdRKCOxrPLtqotStmfUqqFjizS2XCqlnLzljGmCecySIRO4ukedL6~zTR7GB16g7Ln-BQ__"
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
                                            src="https://s3-alpha-sig.figma.com/img/c6e0/0d2a/20467838df1c528af63bb228455b48f6?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KHkdecTrQ4bhhZxPD5YBszt7GD7YtlnqFlQOew66LqeKEmX9rN-GiTTuI1EzRhEulnpPOazqmSkrQsEpjg~Si9w-1IZuHAjt4~MYEoUVeKjepH61PQT9DgWO9-ZXSQ1-~IF2d06cSfoZ5Ywm6F6hHHT0rawm-C-7DjGUz~d41go-JnMyxnOk0c62j6arX91qKcmp-ifTa0bhG5I1j8I3Pjce-~GckYGd0MKHOuahcueiiMskoiajkUwVjWiGxqusMOC-r5Rp3-XYAPR65LiasN-~nt0m4r4qbV5dW3FM3sFOMNE3MVb3W7gV17ygRIRUrXMiYf1FU0xW0SlRhnbHWw__"
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
                                            src="https://s3-alpha-sig.figma.com/img/2ca0/1f91/1e18a8b5efec3854e09469721767910e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKnINjAl3xpSHOQb51fa3vVCz2pNpFkx0bGxor9GaAABOsaicDLMJXQgHyfk4EQCf2DY~IWS6xxPXp1dwxfEBn0Q1LNfq1wB4p9yrz5IKMakBdFkaGKaMmwkkttOqjdMC69d56zQRldVQVLHc9SqGRRrVLvVr9ffkWevppQ3X5PEyxIdHSiypWw1s5TJQcVJwcNjd4xiUwGWbxxaXJDrBUU8C8MiNJSyajrpRZ4J4O6MhZ-16V6QCOIGRnh3d656Z8Gvv6TT609cQlgGZkFARjlsro3TkruGDcRUTaZ8M0xWcQ~LXXyB5AhKeiulzcNcPjt-n6UnLyJDqQe5NNZodw__"
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
                                            src="https://s3-alpha-sig.figma.com/img/2ca0/1f91/1e18a8b5efec3854e09469721767910e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKnINjAl3xpSHOQb51fa3vVCz2pNpFkx0bGxor9GaAABOsaicDLMJXQgHyfk4EQCf2DY~IWS6xxPXp1dwxfEBn0Q1LNfq1wB4p9yrz5IKMakBdFkaGKaMmwkkttOqjdMC69d56zQRldVQVLHc9SqGRRrVLvVr9ffkWevppQ3X5PEyxIdHSiypWw1s5TJQcVJwcNjd4xiUwGWbxxaXJDrBUU8C8MiNJSyajrpRZ4J4O6MhZ-16V6QCOIGRnh3d656Z8Gvv6TT609cQlgGZkFARjlsro3TkruGDcRUTaZ8M0xWcQ~LXXyB5AhKeiulzcNcPjt-n6UnLyJDqQe5NNZodw__"
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
                                            src="https://s3-alpha-sig.figma.com/img/2ca0/1f91/1e18a8b5efec3854e09469721767910e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKnINjAl3xpSHOQb51fa3vVCz2pNpFkx0bGxor9GaAABOsaicDLMJXQgHyfk4EQCf2DY~IWS6xxPXp1dwxfEBn0Q1LNfq1wB4p9yrz5IKMakBdFkaGKaMmwkkttOqjdMC69d56zQRldVQVLHc9SqGRRrVLvVr9ffkWevppQ3X5PEyxIdHSiypWw1s5TJQcVJwcNjd4xiUwGWbxxaXJDrBUU8C8MiNJSyajrpRZ4J4O6MhZ-16V6QCOIGRnh3d656Z8Gvv6TT609cQlgGZkFARjlsro3TkruGDcRUTaZ8M0xWcQ~LXXyB5AhKeiulzcNcPjt-n6UnLyJDqQe5NNZodw__"
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