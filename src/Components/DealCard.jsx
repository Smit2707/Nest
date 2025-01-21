import React from 'react';
import { FaStar } from 'react-icons/fa';

const DealCard = ({ product }) => {
    const { 
        image, 
        days, 
        hours, 
        mins, 
        sec,
        title,
        rating,
        by,
        currentPrice,
        originalPrice 
    } = product;

    return (
        <div className="bg-white rounded-2xl overflow-hidden">
            <div className="relative h-48">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-1">
                    <div className="bg-white px-2 py-1 rounded flex flex-col items-center shadow-sm">
                        <span className="text-[#3BB77E] text-sm font-medium">{days}</span>
                        <span className="text-gray-400 text-[10px]">Days</span>
                    </div>
                    <div className="bg-white px-2 py-1 rounded flex flex-col items-center shadow-sm">
                        <span className="text-[#3BB77E] text-sm font-medium">{hours}</span>
                        <span className="text-gray-400 text-[10px]">Hours</span>
                    </div>
                    <div className="bg-white px-2 py-1 rounded flex flex-col items-center shadow-sm">
                        <span className="text-[#3BB77E] text-sm font-medium">{mins}</span>
                        <span className="text-gray-400 text-[10px]">Mins</span>
                    </div>
                    <div className="bg-white px-2 py-1 rounded flex flex-col items-center shadow-sm">
                        <span className="text-[#3BB77E] text-sm font-medium">{sec}</span>
                        <span className="text-gray-400 text-[10px]">Sec</span>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-sm text-gray-700 hover:text-[#3BB77E] cursor-pointer">
                    {title}
                </h3>
                <div className="flex items-center mt-1">
                    <FaStar className="text-yellow-400" size={12} />
                    <span className="text-gray-400 text-xs ml-1">({rating})</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">By <span className="text-[#3BB77E]">{by}</span></div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#3BB77E] font-semibold">${currentPrice}</span>
                    <span className="text-gray-400 line-through text-xs">${originalPrice}</span>
                    <button className="ml-auto text-[#3BB77E] bg-[#DEF9EC] px-4 py-1 rounded text-xs hover:bg-[#3BB77E] hover:text-white transition-colors">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DealCard; 