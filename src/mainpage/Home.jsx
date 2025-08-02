import React from "react";
import Banner from "../pages/Banner";
import About from "../pages/About/About";
import Layout from "../pages/layout/Layout";
import Navri from "../pages/Banner/Navri";
import Navbar from "../pages/Navbar";
import Purusharth from "../pages/Banner/Purusharth";
import Ribben from "../pages/Ribben";
import Parampara from "../pages/Banner/Parampara";
import Shrungar from "../pages/Banner/Shrungar";
import Sushobhit from "../pages/Banner/Sushobhit";
import Soundarya from "../pages/Banner/Soundarya";
import Special from "../pages/Banner/Special";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTES } from "../constant";
import CircularStatus from "../pages/Banner/CircularStatus";
import MvmInfo from "../pages/MvmInfo";

const Home = () => {
  return (
    <div className="relative">
      <Navbar/>
      <CircularStatus/>
      
      
        <Banner /> 

        <Navri />     { /*changed */}
         <Parampara/>         {/* //changed */}

        <Purusharth />   

         
      <Shrungar/>      
        <Sushobhit/>   
  <Special/>

<Soundarya/>
<About/>
<MvmInfo/>
<div className='w-full flex justify-center items-center bg-white p-10'>

  <Link to={ROUTES.ABOUT}>
  
<button className="px-2 py-2 hover:text-white hover:bg-[#600130] text-[#600130] flex justify-center gap-3
 items-center bg-white border hover:border-white border-[#600130] 
rounded-md   transition-all duration-500 ease-in-out">Read more <span className="hover:bg-white hover:text-[#600130]  bg-[#600130] text-white p-1
 rounded-full transition-all duration-500 ease-in-out"><FaArrowRight/></span></button>
  </Link>
    </div>
    </div>
  );
};

export default Home;
