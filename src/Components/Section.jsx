import React from 'react'

const Section = () => {
  return (
    <div className="mt-10 mb-10">
      {/* Newsletter Section */}
      <div className="bg-[url('/assets/bgM.png')] 
        bg-cover rounded-2xl p-6 pb-0 md:p-8 md:pb-0 relative overflow-hidden h-fit md:h-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-[#253D4E] mb-2">
              Don't miss amazing grocery deals
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Sign up for the daily newsletter
            </p>
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3BB77E] text-sm"
                />
              </div>
              <button className="bg-[#3BB77E] text-white px-2 md:px-6 py-2.5 rounded-md mb-6 hover:bg-[#3BB77E]/90 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/assets/salesman.png"
              alt="Delivery Man"
              className="h-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section