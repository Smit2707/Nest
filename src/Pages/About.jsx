import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Section from '../Components/Section';
import Layout from '../Components/Layout';
import About_mobile from '../Components/About_mobile';

const About = () => {
  return (
    <Layout>
      {/* Mobile & Tablet Version */}
      <About_mobile />

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div className=" container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-gray-500 hover:text-[#3BB77E]">Home</Link>
            <span className="text-gray-500">•</span>
            <Link to="/pages" className="text-gray-500 hover:text-[#3BB77E]">Pages</Link>
            <span className="text-gray-500">•</span>
            <span className="text-[#3BB77E]">About Us</span>
          </div>

          <div className="flex gap-12">
            {/* Left Side - Main Image */}
            <div className="w-1/2">
              <img
                src="https://s3-alpha-sig.figma.com/img/5fb3/a611/e7fddfa36d124cb4c39db6b371966089?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a01JrPhMGy3ZdlN~I4iCWp0ocMonNwCjcpnYWhHSyn9J65OFr~9pfDhO-VqZGSoxAycvPi1Mr9uxmOCN3c2oVCzcrFUeS1tXNFYer6hs79vZMOjHxmfw2HOGHBNsXB-2he2vDoOL3MEhNZmXxgCWjhIgDL2w-INjglMTT5LGVMy4UmpEVJvB3OgcUf4LBui8I6saR1Aw86tAxtNQICTr48iWs~q4zUDc0p4JLT9LO9IlkDemY7yz9h8DqO13QtuVp0I3kyMzpS~AKGlV~vqxzOgZVNIQRIGAqiTpzHtUHzMg7MyaQFt-IOZarR74NSUAI7RaHqAQkltdYaVn4zZEgw__"
                alt="Chef preparing food"
                className="w-full h-[72.7vh] rounded-3xl object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-1/2">
              <h1 className="text-[40px] font-bold text-[#253D4E] mb-6">
                Welcome to Nest
              </h1>
              <p className="text-gray-600 mb-6">
                At Nest, we believe that food is more than just sustenance - it's a way to bring people together. Our mission is to provide high-quality, locally sourced ingredients to help you create unforgettable dining experiences. Whether you're a seasoned chef or a culinary newbie, we're dedicated to helping you cook with confidence and share your love of food with others.
              </p>
              <p className="text-gray-600 mb-8">
                Our team is passionate about building a community that celebrates the joy of cooking and the importance of sharing meals with others. We're committed to supporting local farmers, reducing our environmental footprint, and making healthy, delicious food accessible to everyone. Join us in our mission to make the world a more flavorful and connected place, one meal at a time.
              </p>


              <div className="flex gap-4">
                <div className="relative w-1/3">
                  <button className="absolute left-2 top-1/2 -translate-y-1/2 text-[#3BB77E]">
                    ←
                  </button>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/b26b/b39d/2b9070f4e580b14c5b98b794e753d7f4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tI2eUpEdDqs0YDybue0aVQrv3OgyQKskz2bBDAesTAuOo3kdcQ21Gi8dMMZjmkZXqaYSEwaT6iymSfgf0AaMxFCvAZGH63kWYeFvp6fJ92fh3G5n29l5v0l1Q~m7GdDSb2zJ8nIVEnFJQ7wfDenqM6PqeL39D60~aay6vt0l3FBGTUbKFkNubZ6jk~UufkAuXT5VO3M9EBonAmpPY5G-XGf3iVGTs1ysDJBW~XCZM~z0TI9-upQGIo~lZAYW8EM-7zHTMXJ4xxTdN8Ln3opzm-o43P4XvXDMOJ~PFtFSZ3-lct2KRmMLZZzd5iqyT-qdTNPf8bRr24IUZ6jpnQ3C~g__"
                    alt="Food preparation"
                    className="w-full h-[240px] rounded-xl object-cover"
                  />
                </div>
                <div className="w-1/3">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/f8b0/5517/49f0ed77ef6cc51a37e9e03515434576?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fubA2BzaVBaS22bXH~33fx-DnmxFlsFx6bNYFbDTqqqJYg7bauJ8PsznQ99WqEYJmgIe1NWCx6H4qNn8jupyCShuM-GNSODn0Pne1TW1q1yk5xraOnP0kSQ5tr6XKt~QKAIxj6rt00GU4SN2P2VTNgDxC9mMYYSjUP1nH6PiEDNHcrTmHugYIKqyzV5UyBlSholMMxym8BMTWROB4PdS2VBk72QrA-RjofzINxs7rBtmGAtW4eioSw9XhW57~kKs30oI~nBM1QHiUXhVl6eLCH0ZOYF9l6fGa30GVGOrfPaVDAjTkm081gu2XXII5Be5lVyhwZVeWmyn68hBTktVBw__"
                    alt="Fresh vegetables"
                    className="w-full h-[240px] rounded-xl object-cover"
                  />
                </div>
                <div className="relative w-1/3">
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3BB77E]">
                    →
                  </button>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/c360/e0d2/61dddc7b7beff7d493aa47bac5b77484?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iMnscZxMgTBkaDpglz6MAWFOLAMEK4w8LtqzfQVf6xbDWsirc4yWbk4hJdrTWgUnbrTTFv5GFdkNjQ~OAvmAqWlNJJbYsKnXzW99gIhu~gAa3vOpSccegKIi05VvWrvtHcr8t93rmRzyFFgTnycMS8StKU2A1W-WWGQWxhgKkkQ7AevoaAsfovD~XabFw9ZqaWuQbtRL34DjWaowy05Yj46mMQCRGRrFLhLbb-p6Hmugf5WEoNRo8dArnEzbzg~rDlRkvrcEu7pOEGKkVpsv9NIe4mw07w4fI2vscBigLHBNk~YvdVOgqushK1hYxsWUVbp7PZv2SUWWUWK3XO0uBA__"
                    alt="Plated dish"
                    className="w-full h-[240px] rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-white mt-20">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center">
                <h2 className="text-[32px] font-bold text-[#253D4E]">
                  What We Provide?
                </h2>
                <img
                  src="https://s3-alpha-sig.figma.com/img/7cd4/2ebe/20782f45534d14bb7e5723c4483086f5?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lg21ucCIMlg2d9heXw1OoJTmkft6xNPvcYWG4EyoztAvi7QgsQGBi0G96Vv8eMQLEzcP7-DE8OP5js-qDTBYQQ6r13IImmGibINvgOCl0jI07iyC0RnmsUf66Ihy3H~IrGcro-6BlK2rDxDNJDn7uKjeb4e-5sDuxk8N58mnQh-V1uBPLBJhc3fUA9LM-reGqdKlECvpTBFOip88tS18e69A1g4PCp-krKcWmbFFQA6EpkvL4xPaa8os0YhR3IlmsNCF4Hv-wn6maLMVSVqhD8TGyqxZB5bDJZRNaCP0JPa-bBeZY9yIqY0kKTHkTzmv-ksR48wK6ePHvn7qug0Uvw__"
                  alt="wave"
                  className="mx-auto mt-2"
                />
              </div>

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div className="bg-white p-8 rounded-lg border border-gray-100">
                  <img
                    src="/assets/icon-2.png"
                    alt="Price Tag"
                    className="w-14 h-14 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#253D4E] mb-4 text-center">
                    Best Prices & Offers
                  </h3>
                  <p className="text-gray-500 text-center mb-4 text-sm leading-relaxed">
                    We offer the best prices and deals on a wide range of products. Our offers are constantly updated to provide you with the best value for your money.
                  </p>
                  <a href="#" className="text-[#3BB77E] text-sm block text-center">
                    Read more
                  </a>
                </div>


                <div className="bg-white p-8 rounded-lg border border-gray-100">
                  <img
                    src="/assets/icon-3.png"
                    alt="Handshake"
                    className="w-14 h-14 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#253D4E] mb-4 text-center">
                    Wide Assortment
                  </h3>
                  <p className="text-gray-500 text-center mb-4 text-sm leading-relaxed">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                  </p>
                  <a href="#" className="text-[#3BB77E] text-sm block text-center">
                    Read more
                  </a>
                </div>


                <div className="bg-white p-8 rounded-lg border border-gray-100">
                  <img
                    src="/assets/icon-4.png"
                    alt="Document"
                    className="w-14 h-14 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#253D4E] mb-4 text-center">
                    Free Delivery
                  </h3>
                  <p className="text-gray-500 text-center mb-4 text-sm leading-relaxed">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                  </p>
                  <a href="#" className="text-[#3BB77E] text-sm block text-center">
                    Read more
                  </a>
                </div>


                <div className="bg-white p-8 rounded-lg border border-gray-100">
                  <img
                    src="/assets/icon-5.png"
                    alt="Return"
                    className="w-14 h-14 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#253D4E] mb-4 text-center">
                    Easy Returns
                  </h3>
                  <p className="text-gray-500 text-center mb-4 text-sm leading-relaxed">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                  </p>
                  <a href="#" className="text-[#3BB77E] text-sm block text-center">
                    Read more
                  </a>
                </div>


                <div className="bg-white p-8 rounded-lg border border-gray-100">
                  <img
                    src="/assets/icon-6.png"
                    alt="Satisfaction"
                    className="w-14 h-14 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#253D4E] mb-4 text-center">
                    100% Satisfaction
                  </h3>
                  <p className="text-gray-500 text-center mb-4 text-sm leading-relaxed">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                  </p>
                  <a href="#" className="text-[#3BB77E] text-sm block text-center">
                    Read more
                  </a>
                </div>


                <div className="bg-white p-8 rounded-lg border border-gray-100">
                  <img
                    src="/assets/icon-1.png"
                    alt="Daily Deal"
                    className="w-14 h-14 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#253D4E] mb-4 text-center">
                    Great Daily Deal
                  </h3>
                  <p className="text-gray-500 text-center mb-4 text-sm leading-relaxed">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                  </p>
                  <a href="#" className="text-[#3BB77E] text-sm block text-center">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-2 gap-12">

              <div className="w-full h-[400px] flex justify-center items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/b2c3/79bf/92038f828a2bf2ae708075d5f51de946?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lUEvSrghMlnd9upuwBREAlnI2vT960q1YvmXvqD34qc5nyLFZSHXRaQEOJ34O4xkVYBkZw5bRkREgYQ~QrY3BVho9ne5FZ3fIn2Uf1YV~4oTfWT4CfPawx7eYrasi98ogtcvkutznwHrt3o3rhCrA4q-ySQ0oRV93LV6fpsYuBd~QBeSOKafzeW7WMT9F4JMjYe5o2d2PSnPyyQQqPaJ-twGpjnnybDcBUdBF0maEWUY6k9d45HCftq2tantr~oVb3EDyW3SGfkAbFClf4sVCjxtZIFb-BK3ZME~v~5Q0Km~AF9Yzhmei6iLXkQTbe3-AzkiEqjhhNvGka-frpa7eA__"
                  alt="Business Meeting"
                  className="rounded-2xl w-fit h-[400px] object-cover"
                />
              </div>


              <div>
                <span className="text-gray-400 text-sm mb-2 block">
                  Our performance
                </span>
                <h2 className="text-[40px] font-bold text-[#253D4E] leading-tight mb-6">
                  Your Partner for <br />e-commerce grocery solution
                </h2>
                <p className="text-gray-500 mb-6">
                  At our company, we understand the importance of providing a seamless e-commerce grocery experience. Our team is dedicated to ensuring that every aspect of our service, from product selection to delivery, is tailored to meet the unique needs of our customers.
                </p>
                <p className="text-gray-500">
                  At our company, we believe in fostering a culture of innovation and collaboration. Our team is dedicated to delivering exceptional e-commerce grocery experiences, ensuring every interaction with our platform is seamless and enjoyable.
                </p>
              </div>
            </div>


            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <h3 className="text-xl font-semibold text-[#253D4E] mb-4">
                  Who we are
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Our company is built on a foundation of innovation, collaboration, and a passion for delivering exceptional e-commerce grocery experiences. We strive to make every interaction with our platform seamless, enjoyable, and tailored to meet the unique needs of our customers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#253D4E] mb-4">
                  Our history
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Our company was founded with a vision to revolutionize the way people shop for groceries. We started as a small online grocery store, but quickly grew to become a leading provider of e-commerce grocery solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#253D4E] mb-4">
                  Our mission
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Our company was founded with a vision to revolutionize the way people shop for groceries. We started as a small online grocery store, but quickly grew to become a leading provider of e-commerce grocery solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full bg-[url('https://s3-alpha-sig.figma.com/img/e59a/199e/23536c2f64ee5ae463cbc1238b164fda?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q1Vk7MMLb72~XDY4NWTAQGYJhAZmoV0bZPNsMrH1nfAbgv-XLzOXPhZnkGNYl0FJ3z61pdMm3IwoHJQgBSvL~B5eIZm5gsh5yk4sIgSe8-KtTUR8yT6CmIxDs3kQsmptRjbhZSyQVox0gQs0kyLDpRs017jlWQGehwa7muXBUJfu9H1zF2loNVjkCzi-9MHHPWfppxKdoUGnPedhqdog~1~QdzAOMtW09oN2zO2WcuJEcAWcgI12wDX4RjniaCGx0RnwqSvHD7fB32EKFbYMRelWQDRMsVmI0nBkbppP3y-YeiACIo1b~C4odPo0IepqWqg73kndFHDuoylqFmPlGw__')] bg-cover mt-20 py-0 h-[20vh] rounded-xl overflow-hidden">
            <div className=" mx-auto p-10 h-full bg-[#5a7166] opacity-50 w-full relative">
              <div className=' w-full h-full absolute'></div>
              <div className="grid grid-cols-5 gap-8">

                <div className="text-center">
                  <h3 className="text-[40px] font-bold text-[#fff] mb-2">
                    0+
                  </h3>
                  <p className="text-[#fff]">
                    Glorious years
                  </p>
                </div>


                <div className="text-center">
                  <h3 className="text-[40px] font-bold text-[#fff] mb-2">
                    0+
                  </h3>
                  <p className="text-[#fff]">
                    Happy clients
                  </p>
                </div>


                <div className="text-center">
                  <h3 className="text-[40px] font-bold text-[#fff] mb-2">
                    0+
                  </h3>
                  <p className="text-[#fff]">
                    Projects complete
                  </p>
                </div>


                <div className="text-center">
                  <h3 className="text-[40px] font-bold text-[#fff] mb-2">
                    0+
                  </h3>
                  <p className="text-[#fff]">
                    Team advisor
                  </p>
                </div>


                <div className="text-center">
                  <h3 className="text-[40px] font-bold text-[#fff] mb-2">
                    0+
                  </h3>
                  <p className="text-[#fff]">
                    Products Sale
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-8">
              <h2 className="text-[32px] font-bold text-[#111]">
                Our Team
              </h2>
              <img
                src="https://s3-alpha-sig.figma.com/img/7cd4/2ebe/20782f45534d14bb7e5723c4483086f5?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfKpD-YDUlTWGeiintg3-VycvpIKZSIkCfnxWT-FCkEKJyE9cOjr9Fg4CHaiFUazXNTri~96LAnIN~s99U2vT64uJfbGGMIa09cHXur3Ce2fJbtdLHHtCM~eAQfyHWH4JiHM9lZjAwRg0X3d9-B7ExvG3NrRztyb98Yo4jcutVfWup9oQHAUw61Fozjd2PFa42XR10Fa2dD~~shFDIId~6a8aecX42qgvkdW2xfxuysrjbKsPx5v-77zDksAunplE42Lp1-6j2T7PWKQOsfrExZRLSbv2zUmAqjtAUrvHRnbAf0oA5Jf08PyMdXpOtVa1J3SkDGsFSz~NFWOxX~T2A__"
                alt="wave"
                className="mx-auto mt-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-12">

    <div>
              <span className="text-[#3BB77E] text-sm mb-4 block">
                Our Team
              </span>
              <h2 className="text-[40px] font-bold text-[#253D4E] mb-6">
                Meet Our Expert Team
              </h2>
              <p className="text-gray-500 mb-6">
                Our team is made up of passionate individuals who are dedicated to providing the best possible e-commerce grocery experience. We work together to ensure that every aspect of our service is tailored to meet the unique needs of our customers.
              </p>
              <p className="text-gray-500 mb-8">
                Our team is made up of passionate individuals who are dedicated to providing the best possible e-commerce grocery experience. We work together to ensure that every aspect of our service is tailored to meet the unique needs of our customers.
              </p>
              <button className="bg-[#3BB77E] text-white px-6 py-3 rounded-md hover:bg-[#3BB77E]/90">
                View All Members
              </button>
            </div>


              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/affd/58bf/571556910fe6ef9c4f85379e59ba267e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MABO4hoqCU5rAMg-nlN1CqmMOD6GYZc2UC92vmMHxxRkUNMvBYVsKpTMrgfsse3EsPM24u29kumwLmckA6I1BcM1smKKA2J3ivP4rndLneQhB2VJoBeMZxVVvEZRQtj~K2qXe9RCyZkcyjGRBBy1dYpf27nsVrkaMR4XiNoNmuxAHTRUfhdPz6QV5v3ZrlIFRbv20HKgeoVS13conYdgNriiEjxh75p~CfP8zuxID4CZgmHLtMW1whPXrV~qnke-Es2hTJvjJpNlh0wdWBKr-OsRSPPiG-uwdY7DyxV~xMfDBeLCEa2mr-elGxBpnx~1KoKFrogWUbn6xBg2F2HdAQ__"
                    alt="H. Merinda"
                    className="w-full h-[300px] object-cover object-top"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-[#253D4E] mb-1">
                      H. Merinda
                    </h3>
                    <p className="text-gray-500 text-sm">CEO & Co-Founder</p>
                    <div className="flex justify-center gap-4 mt-4">
                      <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                      </a>
                      <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>


                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/4ed7/432b/829fdf9e093f0e99b4ae2277883a9017?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B5SDrOtsc6zgqrLeeRmHa-tYWJ2PVWQtPbbNmbfL6Qb0usG3xmNGs3hFGpEO2dYqOz4AJaf8FjvWnDSMhhlkxRf4yLKi8XnI6h~iJyZfotTkoYpz335cTqAoQcTLF84rKKDOwZma6DO8SrA8lrsfghkxQtHslj-6UAwv9EuiP1VY-5a~6HKIYIwZSSDAhFf~pX7~v9e1m7tu-M7vKUH8KX~F-xmmMLb5~46x0Z3xaSrdj0eCzJdT1Mq7LfS-FH0bXBlYKmLhFo6B9dQNTtod~lsu6rfj4rqKxBpwFq6G9fRFdI6i4r0KNPR4N09C3JdKyATIxpWkybVoxzQLFm~~lg__"
                    alt="Dilan Specter"
                    className="w-full h-[300px] object-cover object-top"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-[#253D4E] mb-1">
                      Dilan Specter
                    </h3>
                    <p className="text-gray-500 text-sm">Head Engineer</p>
                    <div className="flex justify-center gap-4 mt-4">
                      <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                      </a>
                      <a href="#" className="text-[#3BB77E] hover:text-[#3BB77E]/80">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Section />
    </div>
          
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default About;