import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import p11 from "../../assets/parampara/parampara.png";
import p1 from "../../assets/parampara/p1.png";
import p2 from "../../assets/parampara/p2.png";
import p3 from "../../assets/parampara/p3.png";
import p4 from "../../assets/parampara/p4.png";
import p5 from "../../assets/parampara/p5.png";
import pp1 from "../../assets/parampara/pp1.png";
import pp2 from "../../assets/parampara/pp2.png";
import pp3 from "../../assets/parampara/pp3.png";
import pp4 from "../../assets/parampara/pp4.png";
import pp5 from "../../assets/parampara/pp5.png";
import img1 from "../../assets/parampara/para.png"
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant";
import img2 from "../../assets/navri/img2.png";
import Ribben from "../Ribben";
import mobile from "../../assets/mobile/parampara.png"
import parampara from "../../assets/newImages/parampara.png"
import MobileParampara from "./MobileParampara";
const products = [
  { img1: pp1, image: p1 },
  { img1: pp2, image: p2 },
  { img1: pp3, image: p3 },
  { img1: pp4, image: p4 },
  { img1: pp5, image:p5  },
];



const Parampara = () => {
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
 <MobileParampara/>
          </>
   ):(
    <>
    {/*   ****************** below is for the desktop site ********************* */}
    <div className="">
              <div
                  className=" relative w-full"
              >
                <img src={parampara} alt="backgroundImage" className="w-full object-contain h-auto" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">

                   
                  <div className="container pt-10">
                      <div className="flex justify-end items-center  pb-10 flex-col w-full max-w-[850px]">
                          <div className="flex items-center gap-3 md:pb-10 pb-10 pr-0   md:pr-30 flex-col">
                              <img src={img1} alt="" className="h-28"/>
                              <img src={img2} alt="" />
                          </div>

                          <div className="w-full max-w-[1200px]">
                              <Swiper
                                  spaceBetween={1}
                                  navigation={false}
                                  pagination={{ clickable: true }}
                                  modules={[Navigation]}
                                  className="mySwiper"
                                  breakpoints={{

                                    320: { slidesPerView: 1 },
                                    480: { slidesPerView: 2 },
                                    640: { slidesPerView: 3 },
                                    768: { slidesPerView: 4 },
                                    1024: { slidesPerView: 5 }
                                  }}
                              >
                                  {products.map((product, index) => (
                                     <SwiperSlide key={index} className="flex flex-col items-center justify-center">
                                     <Link to={ROUTES.COLLECTIONS} className="flex  justify-center">
                                       <img
                                         src={product.image}
                                         alt="Placeholder"
                                         className="mb-5 h-48  object-contain mx-auto"
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
                          <div className="w-full  flex justify-start items-start">
                              <p className="text-white baloo text-[23px]">

                                  आपल्या दागिन्यांमध्ये भारतीय परंपरेची मोहक छटा गुंफलेली आहे. MVM ज्वेलर्समध्ये प्रत्येक<br /> दागिना हा
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

export default Parampara;

//   import React, { useEffect, useState } from "react";
//  import { Swiper, SwiperSlide } from "swiper/react";
//  import "swiper/css";
//  import "swiper/css/navigation";
//  import "swiper/css/pagination";
//  import { Navigation, Pagination } from "swiper/modules";
//  import p11 from "../../assets/parampara/parampara.png";
//  import p1 from "../../assets/parampara/p1.png";
//  import p2 from "../../assets/parampara/p2.png";
//  import p3 from "../../assets/parampara/p3.png";
//  import p4 from "../../assets/parampara/p4.png";
//  import p5 from "../../assets/parampara/p5.png";
//  import pp1 from "../../assets/parampara/pp1.png";
//  import pp2 from "../../assets/parampara/pp2.png";
//  import pp3 from "../../assets/parampara/pp3.png";
//  import pp4 from "../../assets/parampara/pp4.png";
//  import pp5 from "../../assets/parampara/pp5.png";
//  import img1 from "../../assets/parampara/para.png"
//  import { Link } from "react-router-dom";
//  import { ROUTES } from "../../constant";
//  import img2 from "../../assets/navri/img2.png";
//  import Ribben from "../Ribben";

// import mobile from "../../assets/mobile/parampara.png"
//  const products = [
//    { img1: pp1, image: p1 },
//    { img1: pp2, image: p2 },
//    { img1: pp3, image: p3 },
//    { img1: pp4, image: p4 },
//    { img1: pp5, image:p5  },
//  ];



// const Parampara = () => {
//   // State to track window width
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 550);

//   // Handle window resize to update view
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth <= 550);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       {isMobileView ? (
//         <>
//        <div className="">
//   <div className="relative w-full">
//     {/* Background Section with Overlay */}
//     <div
//       style={{ backgroundImage: `url(${mobile})` }}
//       className="bg-cover bg-no-repeat flex w-full relative"
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#482318] opacity-80"></div>

//       {/* Content Section */}
//       <div className="container pt-10 relative z-10">
//         <div className="flex justify-end items-center pb-10 flex-col w-full max-w-[850px]">
//           <div className="flex items-center gap-3 md:pb-10 pb-10 pr-0 md:pr-30 flex-col">
//             <img src={img1} alt="" className="w-40 h-20" />
//             <img src={img2} alt="" className="w-48" />
//           </div>

//           <div className="w-full max-w-[1200px]">
//             <Swiper
//               spaceBetween={1}
//               navigation={false}
//               pagination={{ clickable: false }}
//               modules={[Pagination]}
//               className="mySwiper"
//               breakpoints={{
//                 320: { slidesPerView: 1 },
//                 480: { slidesPerView: 2 },
//                 640: { slidesPerView: 3 },
//                 768: { slidesPerView: 4 },
//                 1024: { slidesPerView: 5 },
//               }}
//             >
//               {products.map((product, index) => (
//                 <SwiperSlide
//                   key={index}
//                   className="flex flex-col items-center justify-center"
//                 >
//                   <Link
//                     to={ROUTES.COLLECTIONS}
//                     className="flex justify-center"
//                   >
//                     <img
//                       src={product.image}
//                       alt="Placeholder"
//                       className="mb-5 h-48 object-contain mx-auto"
//                     />
//                   </Link>
//                   <img
//                     src={product.img1}
//                     alt=""
//                     className="h-8 object-contain mx-auto"
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* Ribben Component */}
//   <Ribben />

//   <div className="w-full flex justify-start items-start">
//     <p className="text-[#482318] baloo text-[13px] p-4">
//       पुर्षार्थ म्हणजे केवळ दागदागिने नाही, ती आहे नवरदेवाच्या आत्मविश्वासाची आणि
//       त्याच्या शानदारी व्यक्तिमत्वाची ओळख!{" "}
//       <span className="font-bold">MVM</span> चं रुबाब कलेक्शन नवरदेवांच्या खास
//       दिवसाला शोभणाऱ्या परंपरेचा आणि आधुनिकतेचा संगम आहे.
//     </p>
//   </div>
// </div>

//               </>
//       ) : (
//         // ✅ Desktop View
//         <>
//           <div className="">
//             <div
//               style={{ backgroundImage: `url(${p1})` }}
//               className="bg-cover bg-no-repeat bg-center flex w-full custom-height-1"
//             >
//               <div className="container pt-10">
//                 <div className="flex justify-end items-center pb-10 flex-col w-full max-w-[850px]">
//                   <div className="flex items-center gap-3 md:pb-10 pb-10 pr-0 md:pr-30 flex-col">
//                     <img src={img1} alt="" className="h-28" />
//                     <img src={img2} alt="" />
//                   </div>

//                   <div className="w-full max-w-[1200px]">
//                     <Swiper
//                       spaceBetween={1}
//                       navigation={false}
//                       pagination={{ clickable: true }}
//                       modules={[Navigation, Pagination]}
//                       className="mySwiper"
//                       breakpoints={{
//                         320: { slidesPerView: 1 },
//                         480: { slidesPerView: 2 },
//                         640: { slidesPerView: 3 },
//                         768: { slidesPerView: 4 },
//                         1024: { slidesPerView: 5 },
//                       }}
//                     >
//                       {products.map((product, index) => (
//                         <SwiperSlide
//                           key={index}
//                           className="flex flex-col items-center justify-center"
//                         >
//                           <Link
//                             to={ROUTES.COLLECTIONS}
//                             className="flex justify-center"
//                           >
//                             <img
//                               src={product.image}
//                               alt="Placeholder"
//                               className="mb-5 h-48 object-contain mx-auto"
//                             />
//                           </Link>
//                           <img
//                             src={product.img1}
//                             alt=""
//                             className="h-8 object-contain mx-auto"
//                           />
//                         </SwiperSlide>
//                       ))}
//                     </Swiper>
//                   </div>
//                 </div>

//                 <div className="w-full flex justify-start items-start">
//                   <p className="text-white baloo text-[23px]">
//                     आपल्या दागिन्यांमध्ये भारतीय परंपरेची मोहक छटा गुंफलेली
//                     आहे. MVM ज्वेलर्समध्ये प्रत्येक<br /> दागिना हा सांस्कृतिक
//                     वारशाचा संगम आणि कौशल्यपूर्ण कारागिरीचे प्रतीक आहे.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>


//           <Ribben/>
//         </>
//       )}
//     </>
//   );
// };

// export default Parampara;
