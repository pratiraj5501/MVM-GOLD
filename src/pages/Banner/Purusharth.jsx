import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import p1 from "../../assets/purusharth/purushrth.png";
import p2 from "../../assets/purusharth/pu1.png";
import img1 from "../../assets/purusharth/pu2.png";
import img2 from "../../assets/navri/img2.png";
import brooch from "../../assets/purusharth/ss1.png";
import pin from "../../assets/purusharth/pin.png";
import ring from "../../assets/purusharth/ss4.png";
import mala from "../../assets/purusharth/ss2.png";
import brecleate from "../../assets/purusharth/ss3.png";
import pp1 from "../../assets/purusharth/brooch.png";
import pp2 from "../../assets/purusharth/mala.png";
import pp3 from "../../assets/purusharth/brecleate.png";
import pp4 from "../../assets/purusharth/ring.png";
import pp5 from "../../assets/purusharth/pin.png";
import mobile from "../../assets/mobile/pursharth.png"
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant";
import Ribben from "../Ribben";
import purusharthImg from "../../assets/mobile/homepage/mobilePurusharth.svg"
import title from "../../assets/mobile/purushart/title.svg"
// Product Array
const products = [
  { img1: pp1, image: p2 },
  { img1: pp2, image: brooch },
  { img1: pp3, image: mala },
  { img1: pp4, image: brecleate },
  { img1: pp5, image: ring },
];

const Purusharth = () => {
  // State to track window width
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
         <div className='w-full relative'>
     <div
          style={{ backgroundImage: `url(${purusharthImg})` }}
          className="bg-cover  bg-no-repeat bg-center flex sm:hidden w-full h-[580px]  "
        >
          <div className="container pt-10 px-6">
            <div className="flex flex-col h-[100%] justify-end items-center w-full pb-8">
              {/* Mobile Image */}
              <img src={title} alt="Design" className="w-auto h-16 mb-4" />
              <img src={img2}alt="design"className='w-48 h-8 mb-4'/>
              {/* Mobile Button */}
              <div className="mt-1">
                <Link to={ROUTES.COLLECTIONS}>
                  <button className="shop-now">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      
    </div>
 
              </>
      ) : (
        // ✅ Desktop View
        <>
          <div className="">
            <div className="relative w-full"> 
            <img src={p1} alt="backgroundImage" className="w-full object-contain h-auto" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"> 

              <div className="container pt-10">
                <div className="flex justify-end items-center pb-10 flex-col w-full max-w-[850px]">
                  <div className="flex items-center gap-3 md:pb-10 pb-10 pr-0 md:pr-30 flex-col">
                    <img src={title} alt="" className="h-28" />
                    <img src={img2} alt="" />
                  </div>

                  <div className="w-full max-w-[1200px]">
                    <Swiper
                      spaceBetween={1}
                      navigation={false}
                      pagination={{ clickable: true }}
                      modules={[Navigation, Pagination]}
                      className="mySwiper"
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                      }}
                    >
                      {products.map((product, index) => (
                        <SwiperSlide
                          key={index}
                          className="flex flex-col items-center justify-center"
                        >
                          <Link
                            to={ROUTES.COLLECTIONS}
                            className="flex justify-center"
                          >
                            <img
                              src={product.image}
                              alt="Placeholder"
                              className="mb-5 h-48 object-contain mx-auto"
                            />
                          </Link>
                          <img
                            src={product.img1}
                            alt=""
                            className="h-8 object-contain mx-auto"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                <div className="w-full flex justify-start items-start">
                  <p className="text-white baloo text-[23px]">
                    आपल्या दागिन्यांमध्ये भारतीय परंपरेची मोहक छटा गुंफलेली
                    आहे. MVM ज्वेलर्समध्ये प्रत्येक<br /> दागिना हा सांस्कृतिक
                    वारशाचा संगम आणि कौशल्यपूर्ण कारागिरीचे प्रतीक आहे.
                  </p>
                </div>
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

export default Purusharth;
