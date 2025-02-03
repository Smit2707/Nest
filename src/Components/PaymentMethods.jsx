import React, { useState } from 'react';
import { FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import { SiGooglepay, SiPhonepe } from 'react-icons/si';
import { toast } from 'react-toastify';

const PaymentMethods = ({ onPlaceOrder }) => {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [error, setError] = useState('');

    const paymentMethods = [
        {
            id: 'card',
            title: 'Credit/Debit Card',
            description: 'Pay securely with your credit or debit card',
            icon: <FaCreditCard className="text-[#3BB77E] text-xl" />
        },
        {
            id: 'upi',
            title: 'UPI',
            description: 'Pay using UPI apps like Google Pay, PhonePe, etc.',
            icon: <div className="flex gap-1">
                <SiGooglepay className="text-[#3BB77E] text-xl" />
                <SiPhonepe className="text-[#3BB77E] text-xl" />
            </div>
        },
        {
            id: 'cod',
            title: 'Cash on Delivery',
            description: 'Pay when you receive your order',
            icon: <FaMoneyBillWave className="text-[#3BB77E] text-xl" />
        }
    ];

    const handleMethodSelect = (methodId) => {
        setSelectedMethod(methodId);
        setError(''); // Clear any previous error
    };

    const handlePlaceOrder = () => {
        if (!selectedMethod) {
            setError('Please select a payment method');
            toast.error('Please select a payment method');
            return;
        }
        onPlaceOrder(selectedMethod);
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* <h2 className="text-xl font-semibold text-[#253D4E] mb-6">Select Payment Method</h2> */}
            
            <div className="space-y-4 mb-6">
                {paymentMethods.map((method) => (
                    <div
                        key={method.id}
                        className={`relative border rounded-lg p-4 cursor-pointer transition-all
                            ${selectedMethod === method.id 
                                ? 'border-[#3BB77E] bg-[#3BB77E]/5' 
                                : 'border-gray-200 hover:border-[#3BB77E]/50'
                            }`}
                        onClick={() => handleMethodSelect(method.id)}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {method.icon}
                                <div>
                                    <h3 className="font-medium text-[#253D4E]">{method.title}</h3>
                                    <p className="text-sm text-gray-500">{method.description}</p>
                                </div>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                                ${selectedMethod === method.id 
                                    ? 'border-[#3BB77E]' 
                                    : 'border-gray-300'
                                }`}
                            >
                                {selectedMethod === method.id && (
                                    <div className="w-3 h-3 rounded-full bg-[#3BB77E]" />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
            )}
        </div>
    );
};

export default PaymentMethods; 