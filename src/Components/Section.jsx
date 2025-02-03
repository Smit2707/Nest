import React from 'react'

const Section = () => {
  return (
    <div className="mt-10 mb-10">
      {/* Newsletter Section */}
      <div className="bg-[url('https://s3-alpha-sig.figma.com/img/873d/c368/ab905c42ffa13dd8cdae0c7a05e4deec?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EfN3xn0XD38jOroj3s1PARzs1uDk-0UNg4LMjXNYJVfGsIXpbQ8sQbQqAbm8S9jUzDGbMMqhQ5JGKyuLuxc5OMb5pmbryWgA75nGuhcd-U9kewTtf1cXiTtFWaW7rlO~3bFJGwlbjpiPWGm5YvLltehReN5sE1d5SHM5VngGJlJDEWWTMv8wvMIF3C4viPNauTxzcvi-xbxvc1gTCkfozwvKawQErX~Q1iADZmlUnqtFEdFJ~DAtsZQ5lxBpcr3DEzZs0rkuy8Zo7a-aHg1Ix96aBVKPWj1YjxCCthSgj0w58fowJGt1FtE8GztaWcHa~~YGZ7fZHE7Q89EcTVwxuQ__')] 
        bg-cover rounded-2xl p-6 md:p-8 relative overflow-hidden h-fit md:h-auto">
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
              <button className="bg-[#3BB77E] text-white px-2 md:px-6 py-2.5 rounded-md hover:bg-[#3BB77E]/90 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://s3-alpha-sig.figma.com/img/b06a/a76c/aea0aafc7295884eb673f8d492252f50?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CtU8Wf3Q6gVcmt8SX1MNSDGe9PPePyBxn778j~Up56Y78Snug7uDS4biLhejA~kLUeWqKbwBMK-iYFejfBqgUe7XuuvX810nzY2JDRaTy6hcuo8NumG4oAvVAu6dzRwc3XMyqCDk3MUzanaCMPm8Xr2PKhmdxtLq2jVWLu3YsJpcG3nvthnHNQftBwRUdjpFI7GMCPNtGr9KMWOnr3kIDyVhyfCV9f~crMDjrtqU3IrlVyPcvcYKquN~HP4iQDonglzM0SER6nuf5clg3c7kmYkJfD6aCdY4sLPh-d~jAemVNpYhXmDA4boY1rAI6II5SVl2PBuxeyBMwHqe0SxSeg__"
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