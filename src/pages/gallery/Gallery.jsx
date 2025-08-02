import React, { useEffect, useState } from 'react'
import img from "../../assets/gallery/galley2.png"
import strip from "../../assets/gallery/strip.png"
import strip2 from "../../assets/gallery/strip2.png"
// import title from "../../assets/gallery/title.png"
import title from "../../assets/gallery/title0.svg"
import g1 from "../../assets/gallery/g1.png"
import galleryLine from "../../assets/gallery/galleryLine.svg"
import g2 from "../../assets/gallery/g2.png"
import g3 from "../../assets/gallery/g3.png"
import g4 from "../../assets/gallery/g4.png"
import g5 from "../../assets/gallery/g5.png"
import g6 from "../../assets/gallery/g6.png"
import g7 from "../../assets/gallery/g7.png"
import strip3 from "../../assets/soundary/strip.png";

import { GrGallery } from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constant'
import { motion } from 'framer-motion'
import img3 from "../../assets/MVM3.png"
import logo from "../../assets/mvmBlueLogo.svg"
import { nav } from 'framer-motion/client'

const galleryimg = {
  images: [
    { src: g1, title: "उद्घाटन समारंभ" },
    { src: g2, title: "लक्ष सायन्स फेस्टिवल" },
    { src: g3, title: "गोल्ड फेस्टिवल" },
    { src: g4, title: "सोनेरी गट्टी" },
    { src: g5, title: "mvm टीम ची कोलकात्य वारी" },
    { src: g6, title: "मंगलमय महोत्सव" },
    // { src: g1, title: "खास दिवस वाढदिवस" },
    // { src: g2, title: "mvm चे नयन भरे" },
    // { src: g1, title: "उद्घाटन समारंभ" },
    // { src: g2, title: "लक्ष सायन्स फेस्टिवल" },
    // { src: g3, title: "गोल्ड फेस्टिवल" },
    // { src: g4, title: "सोनेरी गट्टी" },
    // { src: g5, title: "mvm टीम ची कोलकात्य वारी" },
    // { src: g6, title: "मंगलमय महोत्सव" },
    // { src: g1, title: "खास दिवस वाढदिवस" },
    // { src: g7, title: "mvm चे नयन भरे" },
  ],
};
const Gallery = () => {
  const navigate=useNavigate()


  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 550);
      
  const navigateGalleryView=()=>{
    navigate(ROUTES.GALLERYVIEW)
    
  }
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
  <div>
      <div className=''>
        <div
          className="bg-cover bg-no-repeat bg-center w-full min-h-screen flex flex-col"
          style={{ backgroundImage: `url(${img})`, minHeight: "100vh" }}
        >
          <div className='container max-auto '>
            <nav className="bg-transparent py-8 px-0 mb-5">
              <div className=" mx-auto flex justify-between ">

                <Link to="/">
                  <img
                    src={img3}
                    alt="Logo"
                    className="h-20 w-auto"
                  />
                </Link>
              </div>
            </nav>
            <div className='flex justify-center items-center flex-col pt-4 pb-20 '>

              <div className='flex  gap-7 flex-col md:flex-row'>
                <div className='w-full max-w-[230px]'>

                  <img src={title} alt="" className='w-full max-w-[200px] mb-1' />
                  <img src={strip2} alt="w-full " />
                  <h3 className='text-white text-[18px] font-medium py-2'>MVM Jewellers च्या 
अविस्मरणीय क्षणांची झलक!</h3>
                  <img src={strip2} alt="w-full " />
                </div>
                <div className=''>

                  <img src={strip3} alt="" />
                </div>
                <div className='text-[18px] font-medium text-[#1B1F5E] w-full max-w-2xl'>

                  <p className='text-[#1B1F5E]'>आमच्या प्रवासातील खास क्षण, भव्य उद्घाटन सोहळे, विशेष कार्यक्रम आणि ग्राहकांसोबतच्या आठवणी यांचे सुंदर क्षणचित्र येथे पाहा.
                    प्रत्येक कार्यक्रम हा केवळ एक प्रसंग नसून,तो आमच्या प्रवासातील एक सोनेरी पान आहे. आमच्या उत्साहपूर्ण आणि दैदिप्यमान क्षणांना तुमच्यासोबत
                    शेअर करताना आम्हाला अभिमान वाटतो.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
                {galleryimg.images.map((gal, index) => (
                  <div
                    key={index}
                    className="relative group effect effect-six overflow-hidden   shadow-lg"
                  >
                    <img
                      src={gal.src}
                      alt={gal.title}
                      className="w-full md:h-[180px] h-full
         object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <p className="absolute max-w-[130px] p-2 m-[30px] text-right text-sm leading-tight opacity-0 transition-all duration-300 bottom-0 right-0 border-r-4 border-white text-white">
                      {gal.title}
                    </p>

                    <div className="absolute bottom-1 flex justify-between z-10 left-0 right-0 bg-gradient-to-r to-[#43333D] from-[#BE6C46] text-white px-4 py-2 text-sm text-left">
                      {gal.title}
                      <Link to={ROUTES.GALLERYVIEW}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2  text-white rounded-md transition-transform duration-300"
                        >
                          <div
                          >
                            <GrGallery />
                          </div>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </>

):(
 <>
<div>
      <div className='w-full border-2 border-pink-700'>
        <div
          className="bg-cover bg-no-repeat bg-center w-full min-h-screen flex flex-col"
          // style={{ backgroundImage: `url(${img})`, minHeight: "100vh" }}
        >
          <div className='container max-auto '>
            <nav className="bg-transparent py-8 px-10 mb-5">
              <div className=" mx-auto flex justify-between ">

                <Link to="/">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-24 w-auto"
                  />
                </Link>
              </div>
            </nav>
            <div className='flex justify-center border-2 items-center flex-col pt-4 pb-20 '>

              <div className='flex  max-w-[980px] gap-7 flex-col md:flex-row  '>
                <div className='w-full max-w-[230px]'>

                  <img src={title} alt="" className='w-full max-w-[249px] mb-1' />
                  <img src={strip2} alt="w-full " />
                  <h3 className='text-[#747474] text-xl font-medium py-2'>MVM Jewellers च्या
                    अविस्मरणीय क्षणांची झलक!</h3>
                  <img src={strip2} alt="w-full " />
                </div>
               {/* this is for the imgae  */}
              <div className=''>
                <img src={galleryLine} alt="" />

              </div>
                <div className='text-[25px] leading-10 font-medium text-white w-full max-w-2xl'>

                  <p className='text-[#1B1F5E]'>आमच्या प्रवासातील खास क्षण, भव्य उद्घाटन सोहळे, विशेष कार्यक्रम आणि ग्राहकांसोबतच्या आठवणी यांचे सुंदर क्षणचित्र येथे पाहा.
                    प्रत्येक कार्यक्रम हा केवळ एक प्रसंग नसून,तो आमच्या प्रवासातील एक सोनेरी पान आहे. आमच्या उत्साहपूर्ण आणि दैदिप्यमान क्षणांना तुमच्यासोबत
                    शेअर करताना आम्हाला अभिमान वाटतो.</p>
                </div>
              </div>
              
              <div className=" w-[980px] grid grid-cols-1 md:grid-cols-3 gap-8 mt-20   ">
                {galleryimg.images.map((gal, index) => (
                  <div
                    key={index}
                    className=" relative group effect effect-six overflow-hidden cursor-pointer   shadow-lg"
                    onClick={navigateGalleryView}
                  >
                    <img
                      src={gal.src}
                      alt={gal.title}
                      className="w-full md:h-[180px] h-full
         object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <p className="absolute max-w-[130px] p-2 m-[30px] text-right text-sm leading-tight opacity-0 transition-all duration-300 bottom-0 right-0 border-r-4 border-white text-white">
                      {gal.title}
                    </p>

                    <div className="absolute bottom-1 flex justify-between z-10 left-0 right-0 bg-gradient-to-r to-[#43333D] from-[#BE6C46] text-white px-4 py-2 text-sm text-left">
                      {gal.title}
                      <Link to={ROUTES.GALLERYVIEW}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2  text-white rounded-md transition-transform duration-300"
                        >
                          <div
                          >
                            <GrGallery />
                          </div>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  
  
    </>
)}
</>

  


  )
}

export default Gallery
