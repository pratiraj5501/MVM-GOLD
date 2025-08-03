import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";
import footerLogo from "../assets/mobile/footer/footerLogo.svg"
const Footer = () => {
   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 550);
   // Handle window resize to update view
     useEffect(() => {
       const handleResize = () => {
         setIsMobileView(window.innerWidth <= 550);
       };
   
       window.addEventListener("resize", handleResize);
       return () => window.removeEventListener("resize", handleResize);
     }, []);
  return (
    <>
     {isMobileView ? (<> 
     <footer class="bg-[#423F90] text-white px-6 py-8 rounded-t-2xl">
  {/* <!-- Logo --> q */}
  <div class="flex justify-start mb-6">
    <img src={footerLogo} alt="MVM Logo" class="h-10" />
  </div>

  {/* <!-- Links Grid --> */}
  <div class="grid grid-cols-2 gap-6 mb-6">
    {/* <!-- Useful Links --> */}
    <div>
      <h3 class="font-semibold text-2xl mb-3">useful Links</h3>
      <ul class="space-y-2 text-md text-white/90">
        <li>Delivery Information</li>
        <li>International Shipping</li>
        <li>Payment Options</li>
        <li>Return</li>
        <li>Product five</li>
      </ul>
    </div>

    {/* <!-- Product Links --> */}
    <div>
      <h3 class="font-semibold text-2xl mb-3">Product</h3>
      <ul class="space-y-2 text-md text-white/90">
        <li>Blog</li>
        <li>Offers & Contest</li>
        <li>Help & FAQS</li>
        <li>About MVM</li>
      </ul>
    </div>
  </div>

  <hr class="border-white/30 mb-4" />

  {/* <!-- Contact + Social --> */}
  <div class="text-sm">
    <p class="font-semibold mb-1">Contact Us</p>
    <p class="mb-4">1800-266-0023</p>

    <p class="font-semibold mb-1 text-md">Social</p>
    <div class="flex gap-3 mt-2">
      {/* <!-- Social icons (replace src with actual icons if needed) --> */}
      <FaFacebookF className=" w-7 h-7 p-1 bg-white text-gray-700 rounded-xl"/>
      <FaInstagram className=" w-7 h-7 p-1 bg-white text-gray-700 rounded-xl " />
      
    </div>
  </div>
</footer>

     
     
     
     
     
     
     
     </>)
     
     
     
     
     
     
     
     
     
     
     
     
     
     :(<>
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


</>
     )}
   
    </>

  );
};

export default Footer;
