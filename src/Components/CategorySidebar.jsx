import React from 'react';


const CategorySidebar = () => {
    return (
        <div className='hidden sm:block'>
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                <h2 className="font-semibold text-[15px] mb-4">Category</h2>

                <div className="space-y-1">
                    <div className="flex items-center justify-between hover:text-[#3bb77e] cursor-pointer py-1">
                        <div className="flex items-center gap-2">
                            <img src="./src/assets/Figure.png" className='h-7 w-7 object-cover' alt="" />
                            <span className="text-[13px]">Milks & Dairies</span>
                        </div>
                        <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">4</span>
                    </div>

                    <div className="flex items-center justify-between hover:text-[#3bb77e] cursor-pointer py-1">
                        <div className="flex items-center gap-2">
                            <img src="./src/assets/Figure (1).png" className='h-7 w-7 object-cover' alt="" />
                            <span className="text-[13px]">Clothing</span>
                        </div>
                        <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">4</span>
                    </div>

                    <div className="flex items-center justify-between hover:text-[#3bb77e] cursor-pointer py-1">
                        <div className="flex items-center gap-2">
                            <img src="./src/assets/Figure (2).png" className='h-7 w-7 object-cover' alt="" />
                            <span className="text-[13px]">Pet Foods</span>
                        </div>
                        <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">5</span>
                    </div>

                    <div className="flex items-center justify-between hover:text-[#3bb77e] cursor-pointer py-1">
                        <div className="flex items-center gap-2">
                            <img src="./src/assets/Figure2.png" className='h-7 w-7 object-cover' alt="" />
                            <span className="text-[13px]">Baking material</span>
                        </div>
                        <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">6</span>
                    </div>

                    <div className="flex items-center justify-between hover:text-[#3bb77e] cursor-pointer py-1">
                        <div className="flex items-center gap-2">
                            <img src="./src/assets/Figure (5).png" className='h-7 w-7 object-cover' alt="" />
                            <span className="text-[13px]">Fresh Fruit</span>
                        </div>
                        <span className="text-xs bg-gray-100 px-1.5 py-0.5 rounded-full">10</span>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="font-semibold text-[15px] mb-3">Fill by price</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>From: $500</span>
                            <span>To: $1,000</span>
                        </div>
                        <input
                            type="range"
                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                        />
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="font-semibold text-[15px] mb-3">Color</h3>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="accent-red-500 w-3 h-3" />
                            <span className="text-xs text-gray-600">Red (56)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="accent-green-500 w-3 h-3" />
                            <span className="text-xs text-gray-600">Green (78)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="accent-blue-500 w-3 h-3" />
                            <span className="text-xs text-gray-600">Blue (54)</span>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="font-semibold text-[15px] mb-3">Item Condition</h3>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="accent-green-500 w-3 h-3" />
                            <span className="text-xs text-gray-600">New (1506)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="accent-green-500 w-3 h-3" />
                            <span className="text-xs text-gray-600">Refurbished (27)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="accent-green-500 w-3 h-3" />
                            <span className="text-xs text-gray-600">Used (45)</span>
                        </div>
                    </div>
                </div>

                <button className="mt-5 w-full bg-green-500 text-white py-1.5 rounded-md text-sm hover:bg-green-600">
                    Filter
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 mt-6">
                <h2 className="font-semibold text-[15px] mb-4">New products</h2>

                <div className="space-y-4">
                    <div className="flex items-start gap-2 group cursor-pointer">
                        <img src="https://s3-alpha-sig.figma.com/img/c6e0/0d2a/20467838df1c528af63bb228455b48f6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hb8i0bsq85kHu6dfECkgeN15rd7k426CGFkqfybRrcurggAxOaIJLlOz2Yx0IvT2rImf8zKwuNO~6AvL3wuDa6OnTfqYb-Fm7uuRN5alF0aEOTALX~1xt1Juut0utgZTKBOFp-YAwO7AvyIwf-PysCnH0zyrbz200hzd8ZHkSB7w2fC4wSa7OiaYY9MWDmoEYWE46GgPBbRrFN5pbxBwDr9h705JneoC5wfPX2xV4mRNmPtcgNh5LP01nyF8ygGzjuriqVKSMw~7C6TiVRTn6lqLO8iCkLLaqE7TGk60YXNBt0CfAtCeD5XYYnteDFHfhRUSFq0Y6zpVHYY-HqUzNw__" alt="Chen Cardigan" className="w-16 h-16 object-contain" />
                        <div>
                            <h3 className="text-sm text-gray-600 group-hover:text-[#3bb77e]">Chen Cardigan</h3>
                            <div className="flex items-center mt-1">
                                <div className="flex text-yellow-400">
                                    <span className="text-xs">★</span>
                                </div>
                            </div>
                            <span className="text-[#3bb77e] text-sm font-medium">$99.50</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 group cursor-pointer">
                        <img src="https://s3-alpha-sig.figma.com/img/0a45/78eb/a585fad4345109bba4bb7965b34bb93d?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LhU9omDzbbHAGoLO0eTA6Hij0SVVX3x-ywdk47JeF2eBto~Z2cI1MR62z3h6yaoD9qusfitgHHXsIy~0FGfRM~lkypWD7pSj8-S6zISv5zdozO4GWY0qnprw7TlX6oWvPbGrTBTvgoNk0uXafeSWg5sJeO3dTDB6gxh079UDih6MqmvlOe9DBAH-TMRxQnNRYKr7W9qTy-atgQHxeuQq3I6vIGMobZfs4RmXcWtEHGJUWLP2x-BAIgbpwIQGc5CAj4g8lEaCTrcEZlkBv8DZsVeS0Rgxji3es-4O1i1reVwFQrT9dSHTCkzK7WvXnDLQXkQZAOjXIqw-W1nmaarfjg__" alt="Chen Sweater" className="w-16 h-16 object-contain" />
                        <div>
                            <h3 className="text-sm text-gray-600 group-hover:text-[#3bb77e]">Chen Sweater</h3>
                            <div className="flex items-center mt-1">
                                <div className="flex text-yellow-400">
                                    <span className="text-xs">★</span>
                                </div>
                            </div>
                            <span className="text-[#3bb77e] text-sm font-medium">$89.50</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 group cursor-pointer">
                        <img src="https://s3-alpha-sig.figma.com/img/db2e/e4d1/431152f37b8be8e26e7020df85c82e5b?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BIUr3cJxhcWvG4R-~ws6i0XRFssd48FXxQRdT~018reE4DrpVYFZlEVAjT39zpe4cUIUdBi0Il3Rw-7fCXjI140LwLKHthDvJeYf-VlW14R8lwDJfnoHLOxkaEgadWqyURSdIwYErqwD3-moTsD0I-TAexKWbVk7JnepR~Wr9e5e1JQXd1f4nFiMsZzQJglwVCLYnL2L8C-q6~4OIjeWeMaiCYlNq1-7Ebq9xeWjQ62ySGJ4IpqoFdjwT8114m-33XBOYKa6WZlrAXf5A8LYDHfcxiPD3w8Xyc5QQyEQyNix8AwPZssEaQvSyOHJfrbmxzNpQ4A3gYnsNO2g~tQ2HA__" alt="Colorful Jacket" className="w-16 h-16 object-contain" />
                        <div>
                            <h3 className="text-sm text-gray-600 group-hover:text-[#3bb77e]">Colorful Jacket</h3>
                            <div className="flex items-center mt-1">
                                <div className="flex text-yellow-400">
                                    <span className="text-xs">★</span>
                                </div>
                            </div>
                            <span className="text-[#3bb77e] text-sm font-medium">$25</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySidebar; 