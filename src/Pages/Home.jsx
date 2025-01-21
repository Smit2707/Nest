import React from 'react';
import CategorySidebar from '../Components/CategorySidebar';
import ProductCard from '../Components/ProductCard';
import DealCard from '../Components/DealCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Footer from '../Components/Footer';

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
        icon: "/assets/figure.png",
        title: "Milks and Dairies"
    },
    {
        icon: "/assets/figure2.png",
        title: "Wines & Alcohol"
    },
    {
        icon: "/assets/figure (1).png",
        title: "Clothing & Beauty"
    },
    {
        icon: "/assets/figure (2).png",
        title: "Pet Foods & Toy"
    },
    {
        icon: "/assets/figure (3).png",
        title: "Packaged fast food"
    },
    {
        icon: "/assets/figure (4).png",
        title: "Baking material"
    },
    {
        icon: "/assets/figure (5).png",
        title: "Vegetables & tubers"
    },
    {
        icon: "/assets/figure (6).png",
        title: "Fresh Seafood"
    }
];

const Home = () => {
    return (
        <div className="relative min-h-screen">
            <div className="container mx-auto px-8">
                <div className=" flex gap-8">
                    <div className="w-[200px] hidden md:block flex-shrink-0">
                        <div className="top-[180px]">
                            <CategorySidebar />
                        </div>
                    </div>
                    <div className="flex-col w-full">
                        <div className="bg-[url('https://s3-alpha-sig.figma.com/img/2e69/30ac/0a65b777d032b66cf2c7632ee9190511?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XRUbJqLWiAgNVa2kH~9OBglw8~JD8C0T9FDa50Y9vxzEs22nni0cuezgRSVggu-u5m-Hd0n6kequGohs9jFKcmI5~1-U3S1ZE5bZIONWDzkcdwgXkc4ZQt93NPPCTt44zGHwPeO2YToCoixFvTj9906RW7BOjKtL4Lejy12kqfqiCxUBQkS1aW-F0TPQgEVtNK8qXMhRevr9-NYixbSHlWIvF50PioXAeqbo6CMbUrHHmyaRThRVKzO2yYG8Ka2CkqfyiqzokyuLk7Izdt8eYwfK4WH3R~4poaw5Abcgwb5CFAz~Ju5-PcD3Yg3CZ0oRCT-X1IEwme0Nlg0PGGFZvQ__')] bg-cover bg-center rounded-xl p-12 h-[400px]">
                            <h1 className="text-xl md:text-[42px] font-bold text-[#253D4E] leading-tight">
                                Don't miss amazing<br />grocery deals.
                            </h1>
                            <p className="text-gray-600 mt-4 text-sm md:text-lg">Sign up for the daily newsletter</p>
                            <div className="flex gap-2 max-w-xl mt-6">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-1 px-6 py-3 rounded-md border border-gray-200 focus:outline-none"
                                />
                                <button className="bg-[#3bb77e] text-white px-8 py-3 rounded-md hover:bg-green-600 font-medium">
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

                    <div className="grid grid-cols-3 gap-6 mt-8">
                        <div className="bg-[#F5F5F7] rounded-3xl p-8 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-[#253D4E] text-xl font-bold leading-tight max-w-[160px]">
                                    Everyday Fresh & Clean with Our Products
                                </h3>
                                <button className="mt-4 bg-[#3BB77E] text-white px-4 py-2 rounded-md text-sm hover:bg-[#3BB77E]/90">
                                    Shop Now
                                </button>
                            </div>
                            <img
                                src="https://s3-alpha-sig.figma.com/img/04f7/16d9/9245eacb0ea40bec876d1f6fef0f7a37?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cknoqB9ViiEGmyZy2fFP8xpkoaLV-jX4pI49txUrcLSpZrw1lcoknx9SVfozNanGsQkwDwzj1~2u9Qx9Ch2g-uMi7Vb1bCuJV0QA4To6cCnThSvfJudm-A95DBgaWUUR-4s8gwOcSod7k3GMDyGG1nx2YjCu0dHXeIPxBy5ld~TPsN8cYc6p~IiXnRTkUS3uHgM6e6cUxhDgmtusSPTzoHKfeCnpXUR7hQ~vDJg9KWr2HhPtPxtP95Z3jWSyDn28bbK0aBJMOfezKeEqT46IDAIp2WNUMpvsnPy55~-DCUXP~YDlbHyaF903ZMLfcF9RRImx5SP3et2RUkdOfvXqAQ__"
                                alt="Fresh Products"
                                className="absolute right-0 bottom-0 w-full object-cover h-full"
                            />
                        </div>

                        <div className="bg-[#FFF3F1] rounded-3xl p-8 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-[#253D4E] text-xl font-bold leading-tight max-w-[160px]">
                                    Make your Breakfast Healthy and Easy
                                </h3>
                                <button className="mt-4 bg-[#3BB77E] text-white px-4 py-2 rounded-md text-sm hover:bg-[#3BB77E]/90">
                                    Shop Now
                                </button>
                            </div>
                            <img
                                src="https://s3-alpha-sig.figma.com/img/81e2/d2da/b3a741ea7f4d7cecc6d5315cb77be123?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S8hcM2xBN2iPuwcZFUf0JCNdQnEunNV8CavrfauYkEkR13sM4DCg3wCURZYTqtS8QiQxXBEQb3pzYe~Ygp6YD7nW2odtjuw2myVdRWo0JsCABhU1Z8f3c8-7ZVvfQY3YsUaOp3rPG-tc-G9TZDrws-yM2boenYQqIl~KgSCdshAkcy6CP5QgLzJSWEPU6wb5MsoI6670GNGwmXzSgls0cQHs5o5vpo8kb3PGOzCSOdEZf0ASVOnOSSmODj8KGPkEXGLQj8lOskKbNWKQjJPWz7GTS3~2adkqW8YaWQaw0CMUpb2VP3R4QnsytQJr7K4jmIzLYbSEEmVAYaoVeRHoUA__"
                                alt="Breakfast Products"
                                className="absolute right-0 bottom-0 w-full object-cover h-full"
                            />
                        </div>

                        <div className="bg-[#F2FCE4] rounded-3xl p-8 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-[#253D4E] text-xl font-bold leading-tight max-w-[160px]">
                                    The best Organic Products Online
                                </h3>
                                <button className="mt-4 bg-[#3BB77E] text-white px-4 py-2 rounded-md text-sm hover:bg-[#3BB77E]/90">
                                    Shop Now
                                </button>
                            </div>
                            <img
                                src="https://s3-alpha-sig.figma.com/img/61b4/9bd5/b7fa6aea055c1b1a720c6a697bd7298a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdtTJCtyHk3~TSNvc6zle5Pf98tDNAPABCuGxXBDmXXnk7v~3FF38uyda38I8uVD6bGCes~MRCH3WPHoKQP50dyTULO4V~fm7mDJ5fUqOFvddGvcSrU9i7ooWyiipkAoibTZ7sQUIosk-UA3ZEOzMA1yGstwA1n7NqoF0q39tZ11U-DCQKnmW8Tn5YcjjrB~ulKOY47bHsLwekyj-yAdHNEyZ-JLD8U54WSoCnpT7aNOblcvam8NCSoyC41AqKhVOc0pLKNEjMIrblvtxF1BTHbq6ALjshSqC-Y4wX1YnZJHNf0DQ41Ki0czWHYsDrhDb0PmZCGFIAPMSBJq8ZBk4g__"
                                alt="Organic Products"
                                className="absolute right-0 bottom-0 w-full object-cover h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Shop by Categories Section */}
                <div className="mt-12">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-bold text-[#253D4E]">Shop by Categories</h2>
                            <span className="text-gray-500 text-sm hover:text-[#3BB77E] cursor-pointer">
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

                    <div className="grid grid-cols-8 gap-4">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-[#F4F6FA] rounded-xl p-6 hover:shadow-md cursor-pointer group">
                                <div className="flex flex-col items-center text-center gap-3">
                                    <img
                                        src={category.icon}
                                        alt={category.title}
                                        className="w-12 h-12 text-[#3BB77E]"
                                    />
                                    <span className="text-sm text-[#253D4E] group-hover:text-[#3BB77E] transition-colors">
                                        {category.title}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tabbed Products Section */}
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

                {/* Newsletter Subscription Section */}
                <div className="mt-12 bg-[url('https://s3-alpha-sig.figma.com/img/873d/c368/ab905c42ffa13dd8cdae0c7a05e4deec?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGZgOiIWaE5uoJTom6xozNS7w6TrDAfNJK6BrUf9XQdQD5URtyJtb00jbnIctaxQFpwE~SbyF3DZza09w-D7VEu8bNaZXxf4fOv6ibFNJKcxxR0NySx3YGidLynQYwfHJKeSbEU8zqceXsgRZZJ4F9ARPpLLy9bvA1PsGrcpSfKflTz~FZIljt-bxxolBao5wkpE~TLv9o4jHlqoQTWKa4hlGNJ66l3nWHYK1OTEz~unXsvoTPU6ASanhggK3vWzFoELSMGFZ8Ebw0OSYlFBAxK52acJWn5N3bXeC887c6gNXRlTfc~SZRSjYQcg0kngQWtKMTWmYHyFDUCtrgZK4g__')] bg-cover rounded-2xl p-8 relative overflow-hidden">
                    <div className="flex justify-between items-center">
                        <div className="max-w-lg">
                            <h2 className="text-2xl font-bold text-[#253D4E] mb-2">
                                Stay home & get your daily needs from our shop
                            </h2>
                            <p className="text-gray-600 text-sm mb-4">
                                Start Your Daily Shopping with <span className="text-[#3BB77E]">Nest Mart</span>
                            </p>
                            <div className="flex gap-2">
                                <div className="flex-1 relative">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-4 py-2.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3BB77E] text-sm"
                                    />
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                    </span>
                                </div>
                                <button className="bg-[#3BB77E] text-white px-6 py-2.5 rounded-md hover:bg-[#3BB77E]/90 transition-colors text-sm">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="relative bottom-0">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/b06a/a76c/aea0aafc7295884eb673f8d492252f50?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-sSmmIUu1LZ3hK0GK3Kp-UhArbnClnN6BO~0bx~VaeIlCwNAXNrgDpm0yaEh2ZAgO5G~Sel-VakEoJGwTUBog7in~WfQ39LdPxm2K9YBOZ8J7vE2J7xsph1CMMv9F17spNYg3m2GLHPDNCVtucOkbgvLI0Oe-RgIYWqoM9qEZkXBRa1YamEuZyV51I0C0jIqbJ~wNJLOWSUyfvGrawUDWiQk4crk52VoVB-oigaKGzJvCSghaWIQz7FIfDQYfA8B-yD57yETbnxv67Cdi5nqwS0T-Mf6f-Ul-u0bnHAOIZi0~e8xY91TDUw7Bp413jUKjTOcdsKbjqK8ct7-XCJJw__"
                                alt="Delivery Man"
                                className="h-[200px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}

                {/* Footer */}
                <Footer />

            </div>
        </div>
    );
};

export default Home;