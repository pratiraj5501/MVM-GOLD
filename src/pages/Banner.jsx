import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";
import carousal from "../assets/newImages/carousal.png"
import carousal2 from "../assets/newImages/carousal2.svg"
import sajavat from "../assets/carosal/sajavat.svg"
import updatedRakshabandhan from "../assets/carosal/updatedRakshabandhan.svg"
import smallRakshabandhan from "../assets/carosal/smallRakshabandhan.svg"
import ganesh from "../assets/carosal/ganesh.svg"
import Ribben from "./Ribben";
import {ROUTES} from '../constant'
import mobileNavrai from "../assets/mobile/homepage/mobileNavrai.svg"
// import bannerOne from "../assets/mobile/homepage/Frame 187.svg"
import mobileRakshabandhan from "../assets/mobile/homepage/mobileRakshabandhan.svg"
import mobileGaneshChaturthi  from "../assets/mobile/homepage/mobileGaneshChaturthi.svg"
import MobileBanner from "./MobileBanner";
const images = [updatedRakshabandhan, ganesh];
const mobileCarousal=[mobileRakshabandhan,mobileGaneshChaturthi];


export default function ImageSlider() {
  const swiperRef = useRef(null);
const [currentIndex,setCurrentIndex]=useState(0);

const goPrevious = () => {
  swiperRef.current?.slidePrev(); // Tell Swiper to move
};

const goNext = () => {
  swiperRef.current?.slideNext(); // Tell Swiper to move
};

const gotoImg = (index) => {
  swiperRef.current?.slideToLoop(index, 500);
};

  return (
    <>
    {/*  *****************  following carousal if for mobile view only ********************************************* */}
    
<MobileBanner/>

    {/* ****************************** following carousal is for desktop view only***************** */}
      <div className="hidden sm:relative sm:w-full sm:h-screen sm:flex sm:justify-center sm:items-center sm:overflow-hidden ">
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

          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.img
                src={img}
                className="w-full h-auto object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
       {/* <div className="absolute right- xl:right-1/4 border-2   top-2/3 -translate-y-1/2  text-[#717171] items-center justify-center z-10"> */}
       <div className="absolute xl:right-[13rem]   top-2/3 -translate-y-1/2 text-[#717171] items-center justify-center z-10">

  <Link to={ROUTES.COLLECTIONS}>
    <button className="shop-now ">SHOP NOW</button>
  </Link>
</div>


        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute xl:left-1/5 left-10 top-2/3 -translate-y-1/2 bg-[#D9D9D9] text-[#717171] p-3 md:p-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-10"
        >
          ❮
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-10 xl:right-1/5 top-2/3 -translate-y-1/2 bg-[#D9D9D9] text-[#717171] p-3 md:p-4 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center z-10"
        >
          ❯
        </button>
      </div>
      {/* <Ribben /> */}
    </>
  );
}