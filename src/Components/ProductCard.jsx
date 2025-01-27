import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onClick }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    const {
        badge,
        badgeColor,
        image,
        brand,
        title,
        rating,
        reviews,
        currentPrice,
        originalPrice
    } = product;

    return (
        <div onClick={handleClick} className="cursor-pointer border-[1px] border-grey-100 rounded-xl p-2 hover:shadow-lg transition-shadow">
            <div className="relative">
                {badge && (
                    <span 
                        className={`absolute top-2 left-2 ${badgeColor} text-white text-[10px] px-2 py-0.5 rounded`}
                    >
                        {badge}
                    </span>
                )}
                <img src={image} alt={title} className="w-full h-32 object-contain" />
            </div>
            <div className="mt-2">
                <span className="text-[10px] text-gray-500">By {brand}</span>
                <h3 className="font-medium text-gray-700 mt-0.5 text-xs line-clamp-1">{title}</h3>
                <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, index) => (
                            <FaStar 
                                key={index}
                                className={index < rating ? 'text-yellow-400' : 'text-gray-200'}
                                size={8}
                            />
                        ))}
                    </div>
                    <span className="text-[10px] text-gray-400 ml-1">({reviews})</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                        <span className="text-[#3bb77e] font-medium text-xs">${currentPrice}</span>
                        {originalPrice && (
                            <span className="text-gray-400 line-through text-[10px]">${originalPrice}</span>
                        )}
                    </div>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering parent's onClick
                            // Add to cart logic here
                        }}
                        className="text-[#3bb77e] border border-[#3bb77e] px-2 py-0.5 rounded text-[10px] hover:bg-[#3bb77e] hover:text-white transition-colors"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard; 