import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/special/d.png";
import img2 from "../../assets/special/d1.png";
import img3 from "../../assets/special/s.png";
import img4 from "../../assets/special/special.png";
import img5 from "../../assets/special/shobha.png";
import s1 from "../../assets/special/sp1.png";
import s2 from "../../assets/special/sp2.png";
import s3 from "../../assets/special/sp3.png";
import s4 from "../../assets/special/sp4.png";
import s11 from "../../assets/special/sp11.png";
import s12 from "../../assets/special/sp12.png";
import s13 from "../../assets/special/sp13.png";
import s14 from "../../assets/special/sp14.png";
import s014 from "../../assets/special/sp0014.png"
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant";
import Ribben from "../Ribben";
const products = [
  { img1:s1 , image: s11 },
  { img1:s2, image: s12 },
  { img1: s3, image: s13 },
  { img1:s4, image: s014},
];

const Special = () => {
  
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
   {isMobileView ? (
        <>
        <Ribben/>
    <div className="w-full">
      <div className="flex justify-center items-center flex-col gap-2 pt-8 pb-16">
        <img src={img4} alt="" className=" w-52"/>
        <img src={img5} alt="" className="w-64"/>
        <img src={img3} alt="" className="w-64"/>
      </div>

      <div
        style={{ backgroundImage: `url(${img1})` }}
        className="bg-cover bg-center bg-[#660033] bg-no-repeat w-full h-[300px] md:min-h-[450px] relative flex flex-col items-center"
      >
        <img
          src={img2}
          alt="Maharashtra Theme"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full min-h-10 md:w-4/5"
        />
  <div className="relative w-full flex justify-center">
      <div className="max-w-[1000px] w-full relative z-10 -my-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10} 
          slidesPerView={1} 
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }, // Ensures 4 slides in the 800px width
          }}
          loop={true}
          autoplay={{ delay: 2500 }}
          navigation={false}
          pagination={false}
          className="w-full text-center"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center justify-center ">
              <Link to={ROUTES.COLLECTIONS} className="flex justify-center ">
                <img
                  src={product.img1}
                  alt="Product"
                  className="mb-5 h-60 object-contain mx-auto rounded-lg"
                />
              </Link>
              <img src={product.image} alt=""  className="w-[100px] h-[32px]  object-contain mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
      </div>
    </div>
</>
   ):(
    <>
    {/* **********************  following is for the desktop site ************** */}
    <div className="w-full ">
    <div className="flex justify-center items-center flex-col gap-2 pt-8 pb-16">
      <img src={img4} alt="" className="h-6"/>
      <img src={img5} alt="" className="h-16"/>
      <img src={img3} alt="" className="w-96"/>
    </div>

    <div
      style={{ backgroundImage: `url(${img1})` }}
      className="bg-cover bg-center bg-[#660033] bg-no-repeat w-full h-[450px] md:min-h-[450px] relative flex flex-col items-center"
    >
      <img
        src={img2}
        alt="Maharashtra Theme"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full min-h-10 md:w-4/5"
      />
<div className="relative w-full flex justify-center">
    <div className="max-w-[1000px] w-full relative z-10 -my-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10} 
        slidesPerView={1} 
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }, // Ensures 4 slides in the 800px width
        }}
        loop={true}
        autoplay={{ delay: 2500 }}
        navigation={false}
        pagination={false}
        className="w-full text-center"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-center">
            <Link to={ROUTES.COLLECTIONS} className="flex justify-center">
              <img
                src={product.img1}
                alt="Product"
                className="mb-5 h-72 object-contain mx-auto"
              />
            </Link>
            <img src={product.image} alt="" className="h-8  object-contain mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </div>
  </div>
   <Ribben/>
   </>
  )}
</>
  );
};

export default Special;
