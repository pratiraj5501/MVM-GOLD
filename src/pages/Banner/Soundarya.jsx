import React, { useEffect, useState } from "react";
import s1 from "../../assets/soundary/s1.png";
import s2 from "../../assets/soundary/s2.png";
import s02 from "../../assets/soundary/newChandi.svg"
import s3 from "../../assets/soundary/s3.png";
import strip from "../../assets/soundary/s-strip.png";
import silver from "../../assets/soundary/silver.png";
import set from "../../assets/soundary/set.png";
import design from "../../assets/soundary/design.png";
import strip1 from "../../assets/soundary/strip.png";
import s from "../../assets/soundary/s.png";
import Ribben from "../Ribben";

const Soundarya = () => {
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
<div className="w-full    ">
    <div className="pb-5 pt-10 flex justify-center items-center flex-col px-4">
<img src={s} alt="" className="pb-3 md:h-20 h-18" />
<img src={strip1} alt="" className=" h-10" />
    </div>
   <div className="w-full px-4 flex gap-6 overflow-x-auto pb-10  scroll-smooth snap-x snap-mandatory">
      {/* ****************************these are the 3 cards ******************** */}
     <div className="relative flex-shrink-0 w-[240px] h-[350px] rounded-xl overflow-hidden shadow-lg snap-start hover:scale-[1.02] transition-all duration-300 ease-in-out">
    <img src={s1} alt="Modern Design" className="w-full h-full object-cover" />
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white px-4 py-6 flex flex-col items-center">
      <img src={design} alt="" className="h-6 mb-2" />
      <img src={strip} alt="" className="mb-2" />
      <p className="text-sm text-center">स्टाईलची नवी परिभाषा, आधुनिकतेच्या स्पर्शाने</p>
    </div>
  </div>
     <div className="relative flex-shrink-0 w-[240px] h-[350px] rounded-xl overflow-hidden shadow-lg snap-start hover:scale-[1.02] transition-all duration-300 ease-in-out">
    <img src={s02} alt="Silver Set" className="w-full h-full object-cover" />
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white px-4 py-6 flex flex-col items-center">
      <img src={silver} alt="" className="h-6 mb-2" />
      <img src={strip} alt="" className="mb-2" />
      <p className="text-sm text-center">चांदीची झळाळी, तुमच्या घराचं वैभव</p>
    </div>
  </div>

      <div className="relative flex-shrink-0 w-[240px] h-[350px] rounded-xl overflow-hidden shadow-lg snap-start hover:scale-[1.02] transition-all duration-300 ease-in-out">
    <img src={s3} alt="Necklace Set" className="w-full h-full object-cover" />
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white px-4 py-6 flex flex-col items-center">
      <img src={set} alt="" className="h-6 mb-2" />
      <img src={strip} alt="" className="mb-2" />
      <p className="text-sm text-center">सौंदर्याला गाठणारा प्रत्येक मनमोहक दागिना</p>
    </div>
  </div>
    </div>
</div>
{/* <Ribben/> */}
</>


):(

<>

<div className="container">
    <div className="pb-5 pt-10 flex justify-center items-center flex-col">
<img src={s} alt="" className="pb-3 h-20" />
<img src={strip1} alt="" className=" h-10" />
    </div>
    <div className="grid gap-3 md:grid-cols-3 pb-10">
      <div className="relative gallery-img-1 h-[500px] rounded-lg
       text-center overflow-hidden">
        <img src={s1} alt="Modern Design" className="w-full  h-[500px] object-cover" />
        <div className="absolute bottom-0 w-full bg-gradient-to-t gap-3 from-black/70 to-transparent 
        flex justify-center items-center flex-col text-white px-12 py-8">
<img src={design} alt="" className="h-16" />
 <img src={strip} alt="" />
          <p className="text-md">स्टाईलची नवी परिभाषा, आधुनिकतेच्या स्पर्शाने</p>
        </div>
      </div>

      <div className="relative gallery-img-1  h-[500px] rounded-lg
       text-center overflow-hidden">
        <img src={s02} alt="Silver Set" className="w-full  h-[500px] object-cover" />
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent gap-3 flex justify-center items-center flex-col text-white px-12 py-8">
<img src={silver} alt=""  className="h-16" />
      <img src={strip} alt="" />

          <p className="text-md">चांदीची झळाळी, तुमच्या घराचं वैभव</p>
        </div>
      </div>

      <div className="relative gallery-img-1  h-[500px]
       text-center overflow-hidden rounded-lg">
        <img src={s3} alt="Necklace Set" className="w-full  h-[500px] object-cover " />
        <div className="absolute bottom-0 w-full bg-gradient-to-tnb gap-3 from-black/70 to-transparent flex justify-center items-center flex-col text-white px-12 py-8">
<img src={set} alt=""  className="h-16" /> 
         <img src={strip} alt="" />

          <p className="text-md">तुमच्या सौंदर्याला गाठणारा प्रत्येक मनमोहक दागिना</p>
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

export default Soundarya;