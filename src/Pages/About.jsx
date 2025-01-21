import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Section from '../Components/Section';

const About = () => {
  return (
    <div className="mt-[180px] container mx-auto px-4">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <Link to="/" className="text-[#3BB77E] hover:text-[#3BB77E]/80">Home</Link>
        <span className="text-gray-500">•</span>
        <span className="text-gray-500">Pages</span>
        <span className="text-gray-500">•</span>
        <span className="text-gray-600">About Us</span>
      </div>

      <div className="flex gap-12">
        {/* Left Side - Main Image */}
        <div className="w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/5fb3/a611/e7fddfa36d124cb4c39db6b371966089?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgmDhsy7wJEkO0aEM~N48r10od2BSrpl1G13RoLj93A4Od7qKDS2VXQFrKl-gJG3m0TBK0l0jDxBTZ0ER9vcLJEguX7qFjjxcqtCs0No25W0weN--r~M8PVETaN8y-LhaY~FEZeuHNr6qk5V1kAlA-obaVeqCl4vO6sN7cNYJ2-PuV3eksBIlixILJ2wSipzn~O4RuO5yVfwokZhpeDyhj3lKT2fvHYhG876KVvNiro0CzXfv4eMV-MDb7BY898FEs2hpqT~Z9E10OLM04YpwPxnMkNE43iodaW0W5kWn0Dup0SrvMPArpmOLAditwpFCN9QooRt2c8pTVCzg2rDFw__"
            alt="Chef preparing food"
            className="w-full h-[600px] rounded-3xl object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2">
          <h1 className="text-[40px] font-bold text-[#253D4E] mb-6">
            Welcome to Nest
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
          </p>
          <p className="text-gray-600 mb-8">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.
          </p>


          <div className="flex gap-4">
            <div className="relative w-1/3">
              <button className="absolute left-2 top-1/2 -translate-y-1/2 text-[#3BB77E]">
                ←
              </button>
              <img
                src="https://s3-alpha-sig.figma.com/img/b26b/b39d/2b9070f4e580b14c5b98b794e753d7f4?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cpJ0DgK~wA-uK~kzaHnquvjFmfT09bIKlkXp4dTKeSET~zpfJcBNYAw35wqSoyr9pT1PdRqdPGoDqs3N~nqdEPd9S1gnWh269qfttkKWVxLyYijtO6-I3pfxISokg7P5ua3ZZZFZ4s8HLob1pPoAzFH12g4CvHujZJLFxRWgLHuzLkbMwyR2fqHngDSPJamIeVHVaOyDfLFtraqkJvjFIjHE6C06XWWCng6D59jEygf4OV6xMdUoNnJ0eJqH7vTwzONqe76qZtvpNOEzYw7pEtokST86tWr67BLGCnHQaOWKKIRYcr1jOfyv~TkVdsWR4fMUMYPcLA2F4K1oZFImmg__"
                alt="Food preparation"
                className="w-full h-[240px] rounded-xl object-cover"
              />
            </div>
            <div className="w-1/3">
              <img
                src="https://s3-alpha-sig.figma.com/img/f8b0/5517/49f0ed77ef6cc51a37e9e03515434576?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iaQ3fHsh3jjI5wr6y1j16D64W2MWisyeH6lbN7~Wd1fOwsmzjf055q-D4~brHi9gK4t74ZuVl5EYUjLPj9V1d~k03AoYzDS7E0cyEJweiZw8XVhp5QUH8vykWIlje79pHGClvjOnfvb0f0znTVdsULIs~B-V-mjhiSJPhMdU~kmuhEzyAlzZHyuL~gkBvHlmCNqvyXgh41j7dJsqDVfzxQfdxO~Uzpih3rPomGnPLD5NRRx~ME~9P0Qg3fPGfUFA7DCIaQVriEN7aqKa9uVd3ivuw1yecYUAF1KuZfPnrBzzGJk9FY4SUiaqR9zWJCS~VZRRfwm4bKwaEqxtYeJylQ__"
                alt="Fresh vegetables"
                className="w-full h-[240px] rounded-xl object-cover"
              />
            </div>
            <div className="relative w-1/3">
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3BB77E]">
                →
              </button>
              <img
                src="https://s3-alpha-sig.figma.com/img/c360/e0d2/61dddc7b7beff7d493aa47bac5b77484?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n321svyT~qB243Ffi07oJtm21x~m7~dnrHZ5w5bzWg44PFHg-Eodti~HeFE0FpZpwYfqPS2St-S1315ICFsMwh4iWgAfgkO75Vvu3htjqMP9uthQ7xGxJKtEYJREkfRmkHLirVHpdr0INMPQg0Kr9SHkCcBPTRbrwbvJ~oK2RWEJEfBD-WV3MANm4JtQB8eXq-9XiKeTnTCeXoifJnJ~y6sQt0zGpvsIw~WBj8qsHM1-~hlqttduDpHqRUgqjxbSYigWEoF3AWcQTupHUhqXQZNByXomK-tZ8YzxjyIpgP6sr0VYIBEm6Bhz6dX-rIxxXdvbT1ZaI7T~5mIiwgr5Hg__"
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
              src="https://s3-alpha-sig.figma.com/img/7cd4/2ebe/20782f45534d14bb7e5723c4483086f5?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfKpD-YDUlTWGeiintg3-VycvpIKZSIkCfnxWT-FCkEKJyE9cOjr9Fg4CHaiFUazXNTri~96LAnIN~s99U2vT64uJfbGGMIa09cHXur3Ce2fJbtdLHHtCM~eAQfyHWH4JiHM9lZjAwRg0X3d9-B7ExvG3NrRztyb98Yo4jcutVfWup9oQHAUw61Fozjd2PFa42XR10Fa2dD~~shFDIId~6a8aecX42qgvkdW2xfxuysrjbKsPx5v-77zDksAunplE42Lp1-6j2T7PWKQOsfrExZRLSbv2zUmAqjtAUrvHRnbAf0oA5Jf08PyMdXpOtVa1J3SkDGsFSz~NFWOxX~T2A__"
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
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
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
              src="https://s3-alpha-sig.figma.com/img/b2c3/79bf/92038f828a2bf2ae708075d5f51de946?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QR4RmuIyLTuOjys6ebLqwVYyLzEM~mzSMqYHBTB22sEpxD9Bg58MUkS6Yw0Qbexsn2LBGGRwLWcj7hK-2yAmHRCH7QRtBUfeFIKOdt9bKo2Wv7HmzmZo3m~1tR95EDURb58loiRGoTEhOMtX4Ez16IS5Tzw9DKcVJVCuj6OWjamJYoZVj4PncvSP8kr5J4NsFAkvkAw1NXigntwA2TUzwynbBWKHAa0F5pWcFgGquS3IP5aIRFky2HS-5voHnDtZLliJT0~tnO6QLfBGbwZW538l-pLzrAcc7VlMEkfUTEByNBziXjQRgvdpvn818nMnpDbpk-TEayK7gXDnHEPgVA__"
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
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            </p>
            <p className="text-gray-500">
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </p>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-8 mt-16">
          <div>
            <h3 className="text-xl font-semibold text-[#253D4E] mb-4">
              Who we are
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in, ellus eros donec ac odio orci ultrices in.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#253D4E] mb-4">
              Our history
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in, ellus eros donec ac odio orci ultrices in.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#253D4E] mb-4">
              Our mission
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in, ellus eros donec ac odio orci ultrices in.
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
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
            </p>
            <p className="text-gray-500 mb-8">
              Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
            </p>
            <button className="bg-[#3BB77E] text-white px-6 py-3 rounded-md hover:bg-[#3BB77E]/90">
              View All Members
            </button>
          </div>


          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/affd/58bf/571556910fe6ef9c4f85379e59ba267e?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MFxFN77UlfyOo0viIaVzfCVDsWiA0KLdmrcgb35mCaYbaI5waPqlA6hyqtbGuEiGLAVV70d22aZ2w3nYJ4AIJ5VgzpqibuPUSTYr2WLgrfwVUu~OP-IpuyHlNsm0PFGc~cEFsDlkICmBVE-I0M~5iuyziuqeBBhmJ3im9R0wWN2SnXzZ-6Pub7ooQHBlkgCOUaWkVkx0eTgg68NGO~a-v4EGU9bsByUlHjR8kIvb6Wkqfrx~T7~IOP4EdMzSTG6YW85H9aLZCkABjIULYsHhlk~Y0eswvzRoW6aqZF05OgeUCgVatqAPnl~HClNhbmxvFBbfyjiW4M1AOgoHjMgPow__"
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
                src="https://s3-alpha-sig.figma.com/img/4ed7/432b/829fdf9e093f0e99b4ae2277883a9017?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aU8t93~w2MhT3RyYfd-HkjyV0f88S65v82-bNWMaenmttDCYmDIUbwdT1kO~kzkxNvPgt1sX1NemU5D22hJLIHpKofbc8W5K2TXrDmM15E-G1v9Xc3S1yjUFAwNLCRsLApZPeYBitQrvuuM4waH8Y1EGTkh1fLGycQIXWrd95kbKL4v25vezUfE6qEKWbbVDzt7RLhWzYcuY6tmx3aoAQXmEzCmxScTzL8q0A6tDXwMz0nNkKI325Pyqr5IbfAYDUqcDkLBOulzQv4149jUOOwzKzcoMirxsXXqDkCbPtUozTHnV5PL0R9XevZnCAKg3joNVoiLPH8HKLJ5BhPl10g__"
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

      <Section />
      <Footer />
    </div>
  );
};

export default About;