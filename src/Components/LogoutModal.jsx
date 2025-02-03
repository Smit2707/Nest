import React from 'react';
import { FiLogOut } from 'react-icons/fi';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center">
            <div 
                className="relative bg-white w-[90%] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with Icon */}
                <div className="bg-[#3BB77E]/10 px-6 py-8 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#3BB77E]/20 flex items-center justify-center mb-4">
                        <FiLogOut className="text-[#3BB77E] text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-[#253D4E]">
                        Confirm Logout
                    </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-gray-600 text-center text-sm mb-8">
                        Are you sure you want to log out of your account?
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row-reverse">
                        <button
                            onClick={onConfirm}
                            className="w-full sm:w-1/2 px-4 py-3 bg-[#3BB77E] text-white rounded-full font-medium hover:bg-[#2a9c66] transition-colors text-sm"
                        >
                            Yes, Logout
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full sm:w-1/2 px-4 py-3 border border-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm"
                        >
                            No, Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
