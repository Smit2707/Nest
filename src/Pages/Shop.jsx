import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategorySidebar from '../Components/CategorySidebar';
import ProductCard from '../Components/ProductCard';
import Footer from '../Components/Footer';
import Section from '../Components/Section';
import DealCard from '../Components/DealCard';

const Shop = () => {
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const products = [
        {
            id: 1,
            badge: "Hot",
            badgeColor: "bg-red-500",
            image: "https://s3-alpha-sig.figma.com/img/7751/b59a/8fec42e66bf8a6c085832fa029693dbb?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mf8DG-9F4rGhj2EWo4qeyAGld5R7hMbElVg26gBdOC6CXguWSXdy27pHU2ry6rT5CCpF66GLfmPmk47D8yEqWLf7vYeSl09VBbhtoRGaC9d1hwhuqZYaoAJXGqT5OxRcMS0BCfSdzkSnI-D7HQ~kBoJ-uZ430V0W77Uc5krGQHGN~LrT1Fo4w04bu9wYExMo4XKdT-Osm7XcDeDhTiNJ8A-5h8~FzyqhOt~TFvAVVrHy0B~761lUzRMPxO1zbNazaE8Y5N034Vy0Ggkyq2yn~4orlHK6~6N1x-smh-Mdf-WNZYL3f3TQ5k3GpIsF9-pe~-MY7dgvkI7DmrXuLP7GFg__",
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
            image: "https://s3-alpha-sig.figma.com/img/acec/553f/d1f4f60d850639bbd40b34daa0f2b22b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YhQxT0gQklFvX9GEcIgqEs9hhNvvFezgiKlElN1EFw~TXi1E5kRzzhfNL61X4~i-3EJzEgoQLeRUaIMsdTUvGsjajPJpqWCXKQP47xJM8NtSDFO638My20CEvee4HnjE3uVBhZ5gczTRLLstqFGQl3eeESSSZ7wF~Lrop2WpUCGQLNa4zkfo7ReVNYy71TggiCmH8md-O5oMuLqdtP9MQblitjZECkfyArhZQZORNJs9XatE8~duPuS28o5sHyRCm1xGraUwK7eEjQxJbAjpHAbf4wHvUzhuR1YBzlGmcPZZsWWwGHwlHPY49aZl12ryhhpu3iGdjdj93HklFUZf8w__",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 3,
            badge: "New",
            badgeColor: "bg-green-500",
            image: "https://s3-alpha-sig.figma.com/img/d668/a514/668090fd83bc70a4b89901e418f2668d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DgNBd-kpxFSxD1uhwkdBj5jOTdBgCQVEa4pdYD~oeHGsu7acj3p0~GtIkhOGLy84Q3a46fMzQktxVDMGP9NyFLGgyvrcr2s0T0H~xrVBmqceFkssvEIIBiOTa1bmufyoIGwz5eQA8rYy8vQg5fi4sA5~q-XQZQUtU9RbQROW4tvZykQOfxGX3K9CEyzrbksXDTDUkRrGbKc9oTcKtbC8e5-Sr1yoF0nLuqedncIpjlGTqrJHCVmngpGiz6auk6fo29DYKeu1i0-~d42F4rAbFBo9vdewxPms2x03R81y7BFimghuDhtMKh0lpF2yioIpflOarb~Lz~OELPzYY4gRSQ__",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 4,
            badge: "Hot",
            badgeColor: "bg-red-500",
            image: "https://s3-alpha-sig.figma.com/img/5700/b331/47f231860ac4a80cb5e875f0a4c9dd61?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vc7k~cKqXlfjMg3wk8IyoO67MI4gq1eYTClHib1kalhqKJqLCJX7uaMGgjm2V-LzsYlDJtzoCiWa7g85WPxo4R-UcCB4eJQy31NG0DdQWCewc3YkEzaV-m~4n9EqVv4VS2ufhdNjqMKbp3fL10D4eB~jbsZU5m5lW9iM844lCKUMDK6yVLq9~JGqaZsyykVHfyf2vcLY2B1Tr~sEtOKOk4AAN182k3xybrd4JB4rFawYQqCJGDLRPujZiwc67Yj~M-lx6OHZ9yJYTajLlw7e-5RnD8zzqY4WScbWXtLWQOwpac0rMissWKnYNMwktgMxKj953yTy2FOHf98ePw3yPQ__",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 5,
            badge: "-14%",
            badgeColor: "bg-orange-500",
            image: "https://s3-alpha-sig.figma.com/img/5e54/ca86/f58be985a7ea1082b7da9261aef20407?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMOFuR2~HjJsi8FZ6lD4rSZeUcMSlY0Nl9fsnVm678f1ydv9TzSvSD3ggoXaGS213R2C7BoelNya7aWMkuYZzmRkacF4Phg9GXoVMYMctSjffRcP2A9TNDwvOgejUIu0Agnf9dmCQyhAU5lEtOEyoOWKfOWM2Vv7g5FfVfXZ5naRBPSa2yKGBpVHJZBuGWxW4DulhURM59vtl0uznHzgspI1t7g-Pv7XGNa7g6a4BbQGxqSb2qpf2d9YGGC95T0rzFQ6I5a4YNhESx4RrQGo8-AUiOXT74~pRWfAsFc4~R68NTwLmaYbzaELLwK6lHzrBI0t1xcK7t7wBfLvo1Y~DQ__",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 6,
            badge: "Hot",
            badgeColor: "bg-red-500",
            image: "https://s3-alpha-sig.figma.com/img/3211/afa8/d825ab6f2393cbee26cbfa9704be33e0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrtvcrEsGSq9~aN8slY9Jh7OGXU72F-azA3oHpsy5mAl74d8zqH0iuDvvTj~GX0XyKPxa7NT3z3hgk9jgK17waSxBPKuP47XRpnvmW-O1IDxCXLuMRkeojckPs9Fwm5I4n6GP58ysVNBHrtOcyfIcsH4eMaGTUOrYly8xshetETem5PT1ZRkkC~7b75bOtv89OPzVEYyeGYc8SutpEe~IqBV-iWtbOkga-xAjSoHtwYiI8UM-Dyr1H6Jdu83ZXtH5fbCv3g3lUU6oZSDkEiu4GLv9P9ZTUuWy3vFRbS9hfEpG25meuzX1d1NQ4ixUZVPBhPJN14g1jxcUFEzhjjK9w__",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 6,
            badge: "Hot",
            badgeColor: "bg-red-500",
            image: "https://s3-alpha-sig.figma.com/img/3211/afa8/d825ab6f2393cbee26cbfa9704be33e0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrtvcrEsGSq9~aN8slY9Jh7OGXU72F-azA3oHpsy5mAl74d8zqH0iuDvvTj~GX0XyKPxa7NT3z3hgk9jgK17waSxBPKuP47XRpnvmW-O1IDxCXLuMRkeojckPs9Fwm5I4n6GP58ysVNBHrtOcyfIcsH4eMaGTUOrYly8xshetETem5PT1ZRkkC~7b75bOtv89OPzVEYyeGYc8SutpEe~IqBV-iWtbOkga-xAjSoHtwYiI8UM-Dyr1H6Jdu83ZXtH5fbCv3g3lUU6oZSDkEiu4GLv9P9ZTUuWy3vFRbS9hfEpG25meuzX1d1NQ4ixUZVPBhPJN14g1jxcUFEzhjjK9w__",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 6,
            badge: "Hot",
            badgeColor: "bg-red-500",
            image: "https://s3-alpha-sig.figma.com/img/3211/afa8/d825ab6f2393cbee26cbfa9704be33e0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrtvcrEsGSq9~aN8slY9Jh7OGXU72F-azA3oHpsy5mAl74d8zqH0iuDvvTj~GX0XyKPxa7NT3z3hgk9jgK17waSxBPKuP47XRpnvmW-O1IDxCXLuMRkeojckPs9Fwm5I4n6GP58ysVNBHrtOcyfIcsH4eMaGTUOrYly8xshetETem5PT1ZRkkC~7b75bOtv89OPzVEYyeGYc8SutpEe~IqBV-iWtbOkga-xAjSoHtwYiI8UM-Dyr1H6Jdu83ZXtH5fbCv3g3lUU6oZSDkEiu4GLv9P9ZTUuWy3vFRbS9hfEpG25meuzX1d1NQ4ixUZVPBhPJN14g1jxcUFEzhjjK9w__",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 6,
            badge: "Hot",
            badgeColor: "bg-red-500",
            image: "https://s3-alpha-sig.figma.com/img/3211/afa8/d825ab6f2393cbee26cbfa9704be33e0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrtvcrEsGSq9~aN8slY9Jh7OGXU72F-azA3oHpsy5mAl74d8zqH0iuDvvTj~GX0XyKPxa7NT3z3hgk9jgK17waSxBPKuP47XRpnvmW-O1IDxCXLuMRkeojckPs9Fwm5I4n6GP58ysVNBHrtOcyfIcsH4eMaGTUOrYly8xshetETem5PT1ZRkkC~7b75bOtv89OPzVEYyeGYc8SutpEe~IqBV-iWtbOkga-xAjSoHtwYiI8UM-Dyr1H6Jdu83ZXtH5fbCv3g3lUU6oZSDkEiu4GLv9P9ZTUuWy3vFRbS9hfEpG25meuzX1d1NQ4ixUZVPBhPJN14g1jxcUFEzhjjK9w__",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 6,
            badge: "Hot",
            badgeColor: "bg-red-500",
            image: "https://s3-alpha-sig.figma.com/img/3211/afa8/d825ab6f2393cbee26cbfa9704be33e0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrtvcrEsGSq9~aN8slY9Jh7OGXU72F-azA3oHpsy5mAl74d8zqH0iuDvvTj~GX0XyKPxa7NT3z3hgk9jgK17waSxBPKuP47XRpnvmW-O1IDxCXLuMRkeojckPs9Fwm5I4n6GP58ysVNBHrtOcyfIcsH4eMaGTUOrYly8xshetETem5PT1ZRkkC~7b75bOtv89OPzVEYyeGYc8SutpEe~IqBV-iWtbOkga-xAjSoHtwYiI8UM-Dyr1H6Jdu83ZXtH5fbCv3g3lUU6oZSDkEiu4GLv9P9ZTUuWy3vFRbS9hfEpG25meuzX1d1NQ4ixUZVPBhPJN14g1jxcUFEzhjjK9w__",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
        {
            id: 6,
            badge: "Hot",
            badgeColor: "bg-red-500",
            image: "https://s3-alpha-sig.figma.com/img/3211/afa8/d825ab6f2393cbee26cbfa9704be33e0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrtvcrEsGSq9~aN8slY9Jh7OGXU72F-azA3oHpsy5mAl74d8zqH0iuDvvTj~GX0XyKPxa7NT3z3hgk9jgK17waSxBPKuP47XRpnvmW-O1IDxCXLuMRkeojckPs9Fwm5I4n6GP58ysVNBHrtOcyfIcsH4eMaGTUOrYly8xshetETem5PT1ZRkkC~7b75bOtv89OPzVEYyeGYc8SutpEe~IqBV-iWtbOkga-xAjSoHtwYiI8UM-Dyr1H6Jdu83ZXtH5fbCv3g3lUU6oZSDkEiu4GLv9P9ZTUuWy3vFRbS9hfEpG25meuzX1d1NQ4ixUZVPBhPJN14g1jxcUFEzhjjK9w__",
            brand: "NestFood",
            title: "Seeds of Change Organic Quinoa",
            rating: 4,
            reviews: "4.0",
            currentPrice: "28.85",
            originalPrice: "32.0"
        },
    ];

    const dealsData = [
        {
            image: "/src/assets/bg2.png",
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
            image: "/src/assets/bg.png",
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
            image: "/src/assets/bg3.png",
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
            image: "/src/assets/bg4.png",
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

    return (
        <div className="mt-[180px] container mx-auto px-4">
            {/* Header Section */}
            <div className="bg-[url('https://s3-alpha-sig.figma.com/img/cc7c/6762/31a2809acc0f48bbfcff69c0705291d5?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RDmsOG2ISj1RBXQU1rINyqJ8EzX3errc0LM8J-E5UuRV7nKn0K4lAUhddXENJ-2~t0-Pn9ySOWqA6JC4ivwUJJZkOlC9UXVpiop2r6XTpQmywc33A1MLQEcDnU7GHviAI186MaRxl6EeDVB1Luq1yhdQpO43iK3EdQMipfIyN~Qj1WpNUcHKMi4raq04E0xpsV-XlzMtmdNEpmLJr6PsrDFz6IC8sImiHtVD98KTYjHSPnGFMJ3uKoKPtOtNI4qOAHmLqSTr~pQ-CroQ5rYr7bzLbDzzaS4A80Nzmk7PTf6rolV1CxJ8MmWU6rtszO9VJ2EGD-skfsPcuNOilzgV5Q__')] bg-cover rounded-xl p-8 mb-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-2">
                    <Link to="/" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Home</Link>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500">Snack</span>
                </div>

                {/* Title and Filter Tags */}
                <div className="flex justify-between items-center">
                    <h1 className="text-[40px] font-bold text-[#253D4E]">Snack</h1>
                    <div className="flex gap-2">
                        <button className="bg-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
                            <span className="text-[#3BB77E]">•</span>
                            Cabbage
                        </button>
                        <button className="bg-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
                            <span className="text-[#3BB77E]">•</span>
                            Broccoli
                        </button>
                        <button className="bg-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
                            <span className="text-[#3BB77E]">•</span>
                            Artichoke
                        </button>
                        <button className="bg-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
                            <span className="text-[#3BB77E]">•</span>
                            Celery
                        </button>
                        <button className="bg-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1">
                            <span className="text-[#3BB77E]">•</span>
                            Spinach
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-4 gap-8">
                {/* Left Sidebar */}
                <div className="col-span-1">
                    <CategorySidebar />
                </div>

                {/* Right Content */}
                <div className="col-span-3">
                    {/* Products Header */}
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-gray-500 text-sm">We found <span className="text-[#3BB77E] font-medium">29</span> items for you!</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Show:</span>
                                <select className="border rounded px-2 py-1 text-sm">
                                    <option>50</option>
                                    <option>100</option>
                                    <option>150</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Sort by:</span>
                                <select className="border rounded px-2 py-1 text-sm">
                                    <option>Featured</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-5 gap-4">
                        {products.map(product => (
                            <div 
                                key={product.id} 
                                onClick={() => handleProductClick(product.id)}
                                className="cursor-pointer"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-[#253D4E]">Deals Of The Day</h2>
                                <button className="text-gray-500 hover:text-[#3BB77E] text-sm flex items-center gap-1">
                                    All Deals <span>→</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-4 gap-6">
                                {dealsData.map((deal, index) => (
                                    <DealCard key={index} product={deal} />
                                ))}
                            </div>
                        </div>

            <Section />
            <Footer />
        </div>
    );
};

export default Shop; 