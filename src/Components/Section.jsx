import React from 'react'

const Section = () => {
  return (
    <div className="mt-12">
      {/* Newsletter Section */}
      <div className="bg-[#E7F5ED] rounded-2xl overflow-hidden relative">
        {/* Mobile Version */}
        <div className="lg:hidden p-6">
          <div className="flex flex-col">
            <div className="mb-6">
              <h2 className="text-[#253D4E] text-2xl font-semibold leading-tight mb-2">
                Stay home &<br />
                get your daily<br />
                needs from our shop
              </h2>
              <p className="text-sm text-gray-600">
                Start Your Daily Shopping with <span className="text-[#3BB77E]">Nest Mart</span>
              </p>
            </div>
            <div>
              <div className="bg-white rounded-md p-1 mb-3">
                <input 
                  type="text" 
                  placeholder="Enter email address" 
                  className="w-full px-3 py-2 text-sm focus:outline-none"
                />
              </div>
              <button className="bg-[#3BB77E] text-white px-8 py-2 rounded-md text-sm">
                Subscribe
              </button>
            </div>
          </div>
          {/* Background Image for Mobile */}
          <div className="absolute hidden right-0 top-0 h-full w-1/2 bg-contain bg-right bg-no-repeat opacity-50"
               style={{
                 backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b06a/a76c/aea0aafc7295884eb673f8d492252f50?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-sSmmIUu1LZ3hK0GK3Kp-UhArbnClnN6BO~0bx~VaeIlCwNAXNrgDpm0yaEh2ZAgO5G~Sel-VakEoJGwTUBog7in~WfQ39LdPxm2K9YBOZ8J7vE2J7xsph1CMMv9F17spNYg3m2GLHPDNCVtucOkbgvLI0Oe-RgIYWqoM9qEZkXBRa1YamEuZyV51I0C0jIqbJ~wNJLOWSUyfvGrawUDWiQk4crk52VoVB-oigaKGzJvCSghaWIQz7FIfDQYfA8B-yD57yETbnxv67Cdi5nqwS0T-Mf6f-Ul-u0bnHAOIZi0~e8xY91TDUw7Bp413jUKjTOcdsKbjqK8ct7-XCJJw__')`
               }}
          />
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:block bg-[url('https://s3-alpha-sig.figma.com/img/873d/c368/ab905c42ffa13dd8cdae0c7a05e4deec?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGZgOiIWaE5uoJTom6xozNS7w6TrDAfNJK6BrUf9XQdQD5URtyJtb00jbnIctaxQFpwE~SbyF3DZza09w-D7VEu8bNaZXxf4fOv6ibFNJKcxxR0NySx3YGidLynQYwfHJKeSbEU8zqceXsgRZZJ4F9ARPpLLy9bvA1PsGrcpSfKflTz~FZIljt-bxxolBao5wkpE~TLv9o4jHlqoQTWKa4hlGNJ66l3nWHYK1OTEz~unXsvoTPU6ASanhggK3vWzFoELSMGFZ8Ebw0OSYlFBAxK52acJWn5N3bXeC887c6gNXRlTfc~SZRSjYQcg0kngQWtKMTWmYHyFDUCtrgZK4g__')] bg-cover p-8">
          <div className="flex justify-between items-center">
            <div className="max-w-lg">
              <h2 className="text-2xl font-bold text-[#253D4E] mb-2">
                Stay home & get your daily needs from our shop
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Start Your Daily Shopping with <span className="text-[#3BB77E]">Nest Mart</span>
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3BB77E] text-sm"
                />
                <button className="bg-[#3BB77E] text-white px-6 py-2.5 rounded-md hover:bg-[#3BB77E]/90 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/b06a/a76c/aea0aafc7295884eb673f8d492252f50?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-sSmmIUu1LZ3hK0GK3Kp-UhArbnClnN6BO~0bx~VaeIlCwNAXNrgDpm0yaEh2ZAgO5G~Sel-VakEoJGwTUBog7in~WfQ39LdPxm2K9YBOZ8J7vE2J7xsph1CMMv9F17spNYg3m2GLHPDNCVtucOkbgvLI0Oe-RgIYWqoM9qEZkXBRa1YamEuZyV51I0C0jIqbJ~wNJLOWSUyfvGrawUDWiQk4crk52VoVB-oigaKGzJvCSghaWIQz7FIfDQYfA8B-yD57yETbnxv67Cdi5nqwS0T-Mf6f-Ul-u0bnHAOIZi0~e8xY91TDUw7Bp413jUKjTOcdsKbjqK8ct7-XCJJw__"
                alt="Delivery Man"
                className="h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section