import React, { useEffect, useState } from 'react'
import img1 from "../../assets/about/about1.png"
import img2 from "../../assets/about/about2.png"
import img3 from "../../assets/about/strip.png"
import Prampara from './Prampara'
import { Link } from 'react-router-dom'
import img from "../../assets/logo.png"
import Navbar from "../Navbar"
const About = () => {

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
        

    <div className='' >
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <div className=' h-full bg-cover'>
              <img src={img1} alt="" className='w-full h-full  bg-cover '/>
            </div>
            <div className="h-full bg-cover" style={{ backgroundImage: `url(${img2})`, backgroundRepeat: "no-repeat" }}>
              <div className=" h-full flex md:px-16 px-5 py-6 text-white flex-col justify-center items-start">
                <h2 className='font-bold text-2xl  py-2 rounded-md'>
                  मल्लाप्पा विराप्पा मजती (MVM) <br/>
                  1918 पासून विश्‍वास आणि परंपरेचा वारसा
                </h2>
                <p className='font-light text-xl mt-2'>
                  मल्लाप्पा विराप्पा मजती (MVM) ही केवळ ज्वेलरी ब्रँड नाही,
                  तर 1918 पासून चालत आलेली विश्‍वासाची, गुणवत्तेची आणि
                  परंपरेची अमूल्य परंपरा आहे. आम्ही दर पिढीतून ग्राहकांच्या मनात
                  घर केले आहे, कारण आमची ज्वेलरी केवळ सौंदर्याचा प्रतीक नाही,
                  तर एक विश्वासार्ह नातही आहे.
                </p>
                <ul className='mt-2 space-y-3 '>
                  <li className='flex font-bold items-center text-2xl'><span className='text-white text-6xl mr-2'>•</span>आमची खास वैशिष्ट्ये</li>
                  <li className='flex font-semibold items-center text-2xl'>परंपरा आणि आधुनिकतेचा मिलाफ</li>
                  <li className='flex font-light items-center text-xl'>आम्ही पारंपरिक डिझाईन्सना आधुनिकतेची साज चढवून ग्राहकांसाठी
                  अनोखी आणि आकर्षक ज्वेलरी तयार करतो.</li>
                  <li className='flex font-semibold items-center text-2xl pt-1'>उच्च दर्जाची शुद्धता</li>
                 <li className='flex font-light items-center text-xl'>प्रत्येक दागिना शुद्ध सोने, चांदी आणि दर्जेदार रत्नांनी बनवलेला असतो. 
                 आमच्या गुणवत्तेची खात्री ही आमची ओळख आहे.</li>
                  <li className='flex font-semibold items-center text-2xl'>नवरदेव-नवराई कलेक्शन</li>
               <li className='flex font-light items-center text-xl'>खास विवाह समारंभासाठी नवरदेव व नवरीसाठी आकर्षक आणि 
               वैविध्यपूर्ण कलेक्शन्स – रुबाब, नवराई इत्यादी.</li>
                </ul>
              </div>
            </div>
        </div>
    </div>

    <div className='w-full flex justify-center items-center bg-white pt-10'>
<img src={img3} alt="" />
    </div>

    </>

):(
 <>

<div className='' >
        <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <div className=' h-full bg-cover'>
              <img src={img1} alt="" className='w-full h-full  bg-cover '/>
            </div>
            <div className="h-full bg-cover" style={{ backgroundImage: `url(${img2})`, backgroundRepeat: "no-repeat" }}>
              <div className=" h-full flex md:px-16 px-2 py-6 text-white flex-col justify-center items-start">
                <h2 className='font-bold text-3xl  py-2 rounded-md'>
                  मल्लाप्पा विराप्पा मजती (MVM) <br/>
                  1918 पासून विश्‍वास आणि परंपरेचा वारसा
                </h2>
                <p className='font-light text-xl mt-4'>
                  मल्लाप्पा विराप्पा मजती (MVM) ही केवळ ज्वेलरी ब्रँड नाही,
                  तर 1918 पासून चालत आलेली विश्‍वासाची, गुणवत्तेची आणि
                  परंपरेची अमूल्य परंपरा आहे. आम्ही दर पिढीतून ग्राहकांच्या मनात
                  घर केले आहे, कारण आमची ज्वेलरी केवळ सौंदर्याचा प्रतीक नाही,
                  तर एक विश्वासार्ह नातही आहे.
                </p>
                <ul className='mt-6 space-y-3 '>
                  <li className='flex font-bold items-center text-3xl'><span className='text-white text-6xl mr-2'>•</span>आमची खास वैशिष्ट्ये</li>
                  <li className='flex font-semibold items-center text-2xl'>परंपरा आणि आधुनिकतेचा मिलाफ</li>
                  <li className='flex font-light items-center text-xl'>आम्ही पारंपरिक डिझाईन्सना आधुनिकतेची साज चढवून ग्राहकांसाठी
                  अनोखी आणि आकर्षक ज्वेलरी तयार करतो.</li>
                  <li className='flex font-semibold items-center text-2xl pt-3'>उच्च दर्जाची शुद्धता</li>
                 <li className='flex font-light items-center text-xl'>प्रत्येक दागिना शुद्ध सोने, चांदी आणि दर्जेदार रत्नांनी बनवलेला असतो. 
                 आमच्या गुणवत्तेची खात्री ही आमची ओळख आहे.</li>
                  <li className='flex font-semibold items-center text-2xl'>नवरदेव-नवराई कलेक्शन</li>
               <li className='flex font-light items-center text-xl'>खास विवाह समारंभासाठी नवरदेव व नवरीसाठी आकर्षक आणि 
               वैविध्यपूर्ण कलेक्शन्स – रुबाब, नवराई इत्यादी.</li>
                </ul>
              </div>
            </div>
        </div>
    </div>

    <div className='w-full flex justify-center items-center bg-white pt-10'>
<img src={img3} alt="" />
    </div>


   
    </>
    )}
    </>
  )
}

export default About;