import React from 'react'

const Section = () => {
  return (
    <div className="mt-10 mb-10">
      {/* Newsletter Section */}
      <div className="bg-[url('https://s3-alpha-sig.figma.com/img/873d/c368/ab905c42ffa13dd8cdae0c7a05e4deec?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGZgOiIWaE5uoJTom6xozNS7w6TrDAfNJK6BrUf9XQdQD5URtyJtb00jbnIctaxQFpwE~SbyF3DZza09w-D7VEu8bNaZXxf4fOv6ibFNJKcxxR0NySx3YGidLynQYwfHJKeSbEU8zqceXsgRZZJ4F9ARPpLLy9bvA1PsGrcpSfKflTz~FZIljt-bxxolBao5wkpE~TLv9o4jHlqoQTWKa4hlGNJ66l3nWHYK1OTEz~unXsvoTPU6ASanhggK3vWzFoELSMGFZ8Ebw0OSYlFBAxK52acJWn5N3bXeC887c6gNXRlTfc~SZRSjYQcg0kngQWtKMTWmYHyFDUCtrgZK4g__')] 
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
              src="https://s3-alpha-sig.figma.com/img/b06a/a76c/aea0aafc7295884eb673f8d492252f50?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-sSmmIUu1LZ3hK0GK3Kp-UhArbnClnN6BO~0bx~VaeIlCwNAXNrgDpm0yaEh2ZAgO5G~Sel-VakEoJGwTUBog7in~WfQ39LdPxm2K9YBOZ8J7vE2J7xsph1CMMv9F17spNYg3m2GLHPDNCVtucOkbgvLI0Oe-RgIYWqoM9qEZkXBRa1YamEuZyV51I0C0jIqbJ~wNJLOWSUyfvGrawUDWiQk4crk52VoVB-oigaKGzJvCSghaWIQz7FIfDQYfA8B-yD57yETbnxv67Cdi5nqwS0T-Mf6f-Ul-u0bnHAOIZi0~e8xY91TDUw7Bp413jUKjTOcdsKbjqK8ct7-XCJJw__"
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