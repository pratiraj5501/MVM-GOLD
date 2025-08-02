import React, { useEffect, useState } from 'react'
import heroImg from "../assets/mobile/mvmInfo/HeroImg.svg"
import title from "../assets/mobile/mvmInfo/title.svg"
import mvmInfo from "../assets/mobile/mvmInfo/Desc.svg"
import { Link } from "react-router-dom";
import { ROUTES } from '../constant';
import Ribben from './Ribben';
import img1 from "../assets/about/about1.png"
import img2 from "../assets/about/about2.png"
import img3 from "../assets/about/strip.png"
import Prampara from "../pages/About/Prampara"

const MvmInfo = () => {
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
             <div className='w-full relative border-2 flex flex-col justify-center items-center'>
     <div>
        <img src={heroImg} alt="" className='w-[350px] h-auto ' />
        </div>
          <div className="container pt-10 px-6">
            <div className="flex flex-col h-[100%] justify-end items-center w-full pb-8">
              {/* Mobile Image */}
              <img src={title} alt="Design" className="w-full h-26 mb-4" />
              <p  className='font-light text-xl mt-2' >
                MVM ज्वेलर्स ही केवळ दागिन्यांची दुकान नाही, तर तीन पिढ्यांचा समृद्ध वारसा आहे. आमच्या पूर्वजांनी घडवलेल्या विश्वासाच्या आणि गुणवत्तेच्या पायावर उभा असलेला हा व्यवसाय आजही त्याच निष्ठेने आणि उत्कटतेने पुढे जात आहे. MVM ज्वेलर्स ही केवळ दागिन्यांची दुकान नाही, तर तीन पिढ्यांचा समृद्ध वारसा आहे. आमच्या पूर्वजांनी घडवलेल्या विश्वासाच्या आणि गुणवत्तेच्या पायावर उभा असलेला हा व्यवसाय आजही त्याच निष्ठेने आणि उत्कटतेने पुढे जात आहे. 
              </p>
              {/* Mobile Button */}
              
            </div>
          </div>
      
    </div>

     
    </div>
        
     
   
       
</>

       ):(
        //   ***************************** following is for the Desktop view only****************************
        
        <>
        <Prampara/>
       
</>
    )}
  </>


    );
}

export default MvmInfo
