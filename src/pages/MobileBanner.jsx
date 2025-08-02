import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { Link } from 'react-router-dom';
import {ROUTES} from '../constant'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import mobileRakshabandhan from "../assets/mobile/homepage/mobileRakshabandhan.svg"
import mobileGaneshChaturthi  from "../assets/mobile/homepage/mobileGaneshChaturthi.svg"
const mobileCarousal=[mobileRakshabandhan,mobileGaneshChaturthi];
const MobileBanner = () => {
     const swiperRef = useRef(null);
     const [currentIndex,setCurrentIndex]=useState(0);
     const gotoImg = (index) => {
  swiperRef.current?.slideToLoop(index, 500);
  console.log(swiperRef.current.activeIndex
)
};

     
  return (
     <>
      <div className="ml-4 mr-4 mt-3 relative sm:hidden rounded-lg  sm:w-full sm:h-screen sm:flex md:justify-center md:items-center md:overflow-hidden ">
      <Swiper
       modules={[Navigation, EffectFade]}
       effect="fade"
       loop={true}
       loopedSlides={mobileCarousal.length}
       loopAdditionalSlides={mobileCarousal.length}
       fadeEffect={{ crossFade: true }}
       speed={500}
       onSwiper={(swiper) => (swiperRef.current = swiper)}
       onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
       className="w-full h-full relative"
     >
     
       {mobileCarousal.map((img, index) => (
         <SwiperSlide key={index}>
           <motion.img
             src={img}
             className="w-full  h-full flex object-contain"
             whileHover={{ scale: 1.1 }}
             transition={{ duration: 0.8, ease: "easeInOut" }}
           />
         </SwiperSlide>
       ))}
     </Swiper>
     
            {/* <div className="absolute right- xl:right-1/4 border-2   top-2/3 -translate-y-1/2  text-[#717171] items-center justify-center z-10"> */}
             <div className="absolute left-1/2 bottom-8 -translate-x-1/2 -translate-y-1/2 z-10">
    <Link to={ROUTES.COLLECTIONS}>
      <button className="shop-now">SHOP NOW</button>
    </Link>
  </div>
     
     
             <button
               onClick={() => swiperRef.current?.slidePrev()}
               className="absolute left-5  -translate-y-[14rem] bg-[#D9D9D9] text-[#717171] p-3 md:p-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-10"
             >
               ❮
             </button>
             <button
               onClick={() => swiperRef.current?.slideNext()}
               className="absolute  right-5 -translate-y-[14rem]  bg-[#D9D9D9] text-[#717171] p-3 md:p-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-10"
             >
               ❯
             </button>
             {/*  ********************following are the dots  bro  **************************** */}
            <div className="flex flex-row items-center justify-center">
       {mobileCarousal.map((_, index) => (
         <button
           key={index}
           onClick={()=>gotoImg(index)}
           className={`rounded-full transition-all duration-300 focus:outline-none mt-2 mb-2 ml-2 w-3 h-3 ${
             currentIndex === index
               ? "w-2 h-2 bg-[#535766] border-base-500 cursor-pointer"
               : "w-2 h-2 bg-[#d4d4d4]"
           }`}
         ></button>
       ))}
     </div>
     
           </div>
     </>
  )
}

export default MobileBanner
