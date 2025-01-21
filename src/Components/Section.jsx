import React from 'react'

const Section = () => {
  return (
    <div className="w-full bg-[url('https://s3-alpha-sig.figma.com/img/873d/c368/ab905c42ffa13dd8cdae0c7a05e4deec?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGZgOiIWaE5uoJTom6xozNS7w6TrDAfNJK6BrUf9XQdQD5URtyJtb00jbnIctaxQFpwE~SbyF3DZza09w-D7VEu8bNaZXxf4fOv6ibFNJKcxxR0NySx3YGidLynQYwfHJKeSbEU8zqceXsgRZZJ4F9ARPpLLy9bvA1PsGrcpSfKflTz~FZIljt-bxxolBao5wkpE~TLv9o4jHlqoQTWKa4hlGNJ66l3nWHYK1OTEz~unXsvoTPU6ASanhggK3vWzFoELSMGFZ8Ebw0OSYlFBAxK52acJWn5N3bXeC887c6gNXRlTfc~SZRSjYQcg0kngQWtKMTWmYHyFDUCtrgZK4g__')] bg-cover mt-20 rounded-xl overflow-hidden">
        <div className="max-w-[1200px] mx-auto py-16 px-8 relative">
          {/* Content */}
          <div className="max-w-xl">
            <h2 className="text-[40px] font-bold text-[#253D4E] leading-tight mb-4">
              Stay home & get your daily needs from our shop
            </h2>
            <p className="text-gray-600 mb-6">
              Start You'r Daily Shopping with <span className="text-[#3BB77E]">Nest Mart</span>
            </p>
            
            {/* Subscribe Form */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3BB77E]"
                />
              </div>
              <button className="bg-[#3BB77E] text-white px-8 py-4 rounded-lg hover:bg-[#3BB77E]/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Decorative Image */}
          <img 
            src="https://s3-alpha-sig.figma.com/img/6ba8/fa57/52179b4457ea527eedcc94497b4d9cfd?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LG4KHpkJasoyCe55q4hBs2wt1EjM~S5CSV5LRwvS0FHjije6h~fM7BfBsyYe2mrSX5KmLpWh2~9PLmXlhMSJ5K9CA5hjXiYdqXcUwNumF2f5faBSMHPXTT~sXu0Amvxv0L9YCn2s5FM9E4dv~OlZI6rcneCszf6nH9viDPT4j4BU030GXht4iQKWjJO5pghCUNObSeSqUGM99mqiERpuD~RfHq2CtUUQE9CtvQJ27GWgq0F9UM7HjkKv4QpAWxCKuwn5k16vLGvkHa0kT7c6RZwdkvshbg8QvFlVz9IPewVkWlGGd8boLviNHHm~P2TgZcH-LzieWfar048mBNodCg__" 
            alt="Vegetable" 
            className="absolute right-0 bottom-0 w-[400px]"
          />
        </div>
      </div>
  )
}

export default Section