import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3E4095] text-white py-10 px-6 roboto">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-white/20">
          <div>
            <h3 className="font-bold text-lg pb-2">Product</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li>Product one</li>
              <li>Product two</li>
              <li>Product three</li>
              <li>Product four</li>
              <li>Product five</li>
            </ul>
          </div>

          {/* Product Column 2 */}
          <div>
            <h3 className="font-bold text-lg pb-2">Product</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li>Navrai Nath</li>
              <li>Navrai Haar</li>
              <li>Navrai Bracelet</li>
              <li>Navrai Ear Rings</li>
            </ul>
          </div>

          {/* Product Column 3 */}
          <div>
            <h3 className="font-bold text-lg pb-2">Product</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li>Product six</li>
              <li>Product seven</li>
              <li>Product eight</li>
              <li>Product nine</li>
              <li>Product ten</li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-bold text-lg pb-2">Product</h3>
            <ul className="space-y-1 text-sm text-white/80">
              <li>About Us</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Teams</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
<div className="flex justify-between items-center md:flex-row flex-col ">
    <div className="">

          <h3 className="font-bold text-lg pb-2">Subscribe</h3>
    </div>


        <div className="flex flex-col items-center py-6 w-full max-w-96 ">
          <div className="relative flex items-center border border-white/30 rounded-full shadow overflow-hidden w-full ">
            <input
              type="email"
              placeholder="Enter your email Address"
              className="w-full px-4 py-2 bg-white text-gray-400 outline-none"
            />
            <button className="absolute right-0 bg-[#5B331A] text-white px-5 py-2 rounded-full text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 py-4">
          <FaFacebookF className="text-[#6B2929] text-2xl bg-white p-1 cursor-pointer rounded-md hover:opacity-80" />
          <FaInstagram className="text-[#6B2929] text-2xl cursor-pointer bg-white p-1  rounded-md hover:opacity-80" />
          <FaTwitter className="text-[#6B2929] text-2xl cursor-pointer bg-white rounded-md p-1 hover:opacity-80" />
          <FaTelegram className="text-[#6B2929] text-2xl cursor-pointer bg-white  rounded-md p-1 hover:opacity-80" />
        </div>
</div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-white/60">
          <div className="flex flex-wrap justify-center gap-4 pb-2">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Sales and Refunds</span>
            <span>Legal</span>
            <span>Site Map</span>
          </div>
          <p>© 2021 All Rights Reserved to TRIBE APPSOFT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
