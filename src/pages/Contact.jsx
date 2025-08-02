import React from "react";
import { FaFacebook, FaFacebookF, FaInstagram, FaPhone, FaPhoneSlash, FaPhoneVolume, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn, MdPhoneInTalk } from "react-icons/md";
import { motion } from "framer-motion";
import img from "../assets/logo2.png"
import img1 from "../assets/logo.png"
import { Link } from "react-router-dom";



const Contact = () => {
  return (
    <>


    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex items-center">
        <Link to="/">
        <img
          src={img1}
          alt="Logo"
          className="h-12 w-auto"
        />
        </Link>
      </div>
    </nav>
    <div className="min-h-screen flex justify-center items-center">

    <div className="container">

    <div className=" flex flex-col md:flex-row p-0 md:p-2 rounded-lg shadow-lg w-full max-w-5xl mx-auto">
    <div className=" overflow-hidden bg-[#660033] text-white poppins md:pl-10 pl-3 pt-10 pb-10 md:pr-5
pr-3       rounded-bl-lg rounded-tl-lg md:w-[430px] gap-24 flex flex-col justify-center relative">

        <div>
          <h2 className="text-2xl  poppins font-semibold">Contact Information</h2>
          <p className="mt-3 poppins font-normal text-md">Say something to start a live chat!</p>

        </div>
          <div className="mt-4 space-y-3 flex justify-center items-start gap-5 flex-col">
            <p className="poppins text-sm flex items-center gap-4"><MdPhoneInTalk className="cursor-pointer text-2xl" />+1012 3456 789</p>
            <p className="poppins text-sm flex items-center gap-4"><IoMdMail  className="cursor-pointer text-2xl" />demo@gmail.com</p>
            <p className="poppins text-sm flex items-center gap-4"><MdLocationOn className="cursor-pointer text-2xl" /> 132 Dartmouth Street Boston,
            <br/>Massachusetts 02156 United States</p>
          </div>


<div className="flex justify-between">

        <div className="flex space-x-4 z-10 mt-6 text-2xl">
              <FaTwitter className="cursor-pointer rounded-full hover:bg-[#660033] hover:text-white hover:border-[white] border border-white text-[#660033] p-1 bg-white" />
              <FaInstagram className="cursor-pointer rounded-full  hover:bg-[#660033] hover:text-white hover:border-[white] border border-white text-[#660033] p-1 bg-white" />
              <FaFacebookF className="cursor-pointer rounded-full  hover:bg-[#660033] hover:text-white hover:border-[white] border border-white text-[#660033] p-1 bg-white" />
            </div>
            <div className="">
              <img src={img} alt="" className="relative z-10" />
            </div>
</div>
      <motion.div
      initial={{scale:0, opacity:0 }}
      animate={{scale:1, opacity:1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}

      
      className="bg-[#490025] -bottom-24 -right-24 absolute rounded-full w-[250px] h-[250px]">

</motion.div>

<motion.div 

initial={{scale:0, opacity:0 }}
animate={{scale:1, opacity:1 }}
transition={{ duration: 0.9, ease: "easeOut" }}

className="absolute bg-[#600130] bottom-20 shadow-lg right-16  rounded-full w-[105px] h-[105px]">

</motion.div>

      </div>
      
      <div className="bg-white p-6 md:p-8 rounded-br-lg rounded-tr-lg  md:max-w-[650px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 poppins">
          <div>
            <label className="text-[13px] font-semibold poppins ">First Name</label>
            <input type="text" className="w-full text-[13px] border-b-2 border-gray-300 focus:outline-none py-1" placeholder="John" />
          </div>
          <div>
            <label className="text-[13px] font-semibold poppins">Last Name</label>
            <input type="text" className="w-full border-b-2 text-[13px] border-gray-300 focus:outline-none py-1" placeholder="Doe" />
          </div>
          <div>
            <label className="text-[13px] font-semibold poppins">Email</label>
            <input type="email" className="w-full text-[13px] border-b-2 border-gray-300 focus:outline-none py-1" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-[13px] font-semibold poppins">Phone Number</label>
            <input type="text" className="w-full text-[13px] border-b-2 border-gray-300 focus:outline-none py-1" placeholder="+1012 3456 789" />
          </div>
        </div>

        <div className="mt-8">
          <label className="text-[13px] font-semibold poppins">Select Subject?</label>
          <div className="flex flex-wrap text-sm gap-8 mt-4">
            {["General Inquiry", "Support", "Billing", "Feedback"].map((subject, index) => (
              <label key={index} className="flex items-center text-[13px] gap-1">
                <input type="checkbox" name="subject"     className="appearance-none w-4 h-4 border-2 border-white bg-gray-300 rounded-full checked:bg-white checked:border-white focus:ring-0 
             relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
             before:content-['✔'] before:text-black before:opacity-0 checked:before:opacity-100 checked:before:text-black"
                />
                {subject}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <label className="text-[13px] font-semibold poppins">Message</label>
          <textarea className="w-full text-[13px] poppins border-b-2 border-gray-300 focus:outline-none py-1" rows="1" placeholder="Write your message..."></textarea>
        </div>

        <div className="flex justify-end">

        <button className="mt-6 bg-[#660033]  text-[13px] font-medium text-white px-10 py-3 rounded-md">Send Message</button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
