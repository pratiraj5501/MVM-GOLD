import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import p1 from "../../assets/sushobhita/sushobhita.png";
import p2 from "../../assets/purusharth/pu1.png";
import s1 from "../../assets/sushobhita/su1.png";
import s2 from "../../assets/sushobhita/su2.png";
import s3 from "../../assets/sushobhita/su3.png";
import s4 from "../../assets/sushobhita/su4.png";
import s11 from "../../assets/sushobhita/su11.png";
import s12 from "../../assets/sushobhita/su12.png";
import s13 from "../../assets/sushobhita/su13.png";
import s14 from "../../assets/sushobhita/su14.png";


import img1 from "../../assets/sushobhita/sushobit.png";
import img2 from "../../assets/navri/img2.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant";
import Ribben from "../Ribben";
import mobile from "../../assets/mobile/sushobhita.png"
import sushobhita from "../../assets/newImages/shushobhita.png"
import sushobhitaGirl from "../../assets/mobile/sushobhita/sushobitaGirl.svg"
import title from "../../assets/mobile/sushobhita/title.svg"
const products = [
    { img1: s11, image: s1 },
    { img1:s12, image: s2 },
    { img1:s13 , image: s3 },
    { img1:s14, image: s4 },
];

const Sushobhit = () => {
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
          style={{ backgroundImage: `url(${sushobhitaGirl})` }}
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

       ):(
        //   ***************************** following is for the Desktop view only****************************
        <>
        <div className="">
        <div
           
            className="relative w-full">     
        <img src={sushobhita} alt="backgroundImage" className="w-full object-contain h-auto" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">


            <div className="container pt-10">
                <div className="flex justify-end items-center  pb-10 flex-col w-full max-w-[750px]">
                    <div className="flex items-center gap-3 md:pb-10 pb-10 pr-0   md:pr-30 flex-col">
                        <img src={img1} alt="" className="h-28"/>
                        <img src={img2} alt="" />
                    </div>

                    
                    <div className="w-full max-w-[1200px]">

                        <Swiper
                            spaceBetween={0}
                            navigation={false}
                            pagination={{ clickable: false }}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                              320: { slidesPerView: 1 }, 
                              480: { slidesPerView: 2 }, 
                              640: { slidesPerView: 3 }, 
                              768: { slidesPerView: 4 }, 
                              1024: { slidesPerView: 4 }, 
                            }}
                        >
                                 {products.map((product, index) => (
                                                                 <SwiperSlide key={index} className="flex flex-col items-center justify-center">
                                                                 <Link to={ROUTES.COLLECTIONS} className="flex justify-center">
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

                    <div className="w-full pb-20 flex justify-start items-start">
                        <p className="text-white baloo text-[23px]">

                            आपल्या दागिन्यांमध्ये भारतीय परंपरेची मोहक छटा गुंफलेली आहे. MVM ज्वेलर्समध्ये <br />प्रत्येक दागिना हा
                            सांस्कृतिक वारशाचा संगम आणि कौशल्यपूर्ण कारागिरीचे प्रतीक आहे.
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

export default Sushobhit;
