import React, { useEffect, useState } from "react";
import img from "../../assets/gallery/galley1.png";
import title from "../../assets/gallery/udghatan.png";
import galleryTitle from "../../assets/gallery/viewGalleryTitle.svg"
import g1 from "../../assets/gallery/g1.png";
import g2 from "../../assets/gallery/g2.png";
import g3 from "../../assets/gallery/g3.png";
import { Link } from "react-router-dom";
import img3 from "../../assets/MVM3.png";
import logo from "../../assets/mvmBlueLogo.svg"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const galleryimg = [
  { src: g1, title: "उद्घाटन समारंभ" },
  { src: g2, title: "लक्ष सायन्स फेस्टिवल" },
  { src: g3, title: "गोल्ड फेस्टिवल" },
  { src: g1, title: "सोनेरी गट्टी" },
    { src: g1, title: "सोनेरी गट्टी" },
  // { src: g2, title: "mvm टीम ची कोलकात्य वारी" },
  // { src: g3, title: "मंगलमय महोत्सव" },
  // { src: g1, title: "खास दिवस वाढदिवस" },
  // { src: g2, title: "mvm चे नयन भरे" },
];

const ViewGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
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
    
    <div>
      <div className="bg-cover flex justify-center items-center bg-no-repeat bg-center w-full " style={{ backgroundImage: `url(${img})` }}>
        <div className="container max-auto">
          <nav className="bg-transparent py-8 px-0 mb-5">
            <div className=" flex justify-between items-center">
              <Link to="/">
                <img src={img3} alt="Logo" className="h-20 w-auto" />
              </Link>
            </div>
          </nav>

          <div className=" flex justify-center items-center flex-col pt-8 pb-48">
            <div className="flex gap-7 flex-col">
              <div>
                <img src={title} alt="" className="mb-1" />
              </div>
              <div className="text-[18px]  font-medium text-white w-full">
                <p>
                  आमच्या प्रवासातील खास क्षण, भव्य उद्घाटन सोहळे, विशेष कार्यक्रम आणि ग्राहकांसोबतच्या आठवणी यांचे सुंदर क्षणचित्र येथे पाहा. प्रत्येक
                  कार्यक्रम हा केवळ एक प्रसंग नसून, तो आमच्या प्रवासातील एक सोनेरी पान आहे. आमच्या उत्साहपूर्ण आणि दैदिप्यमान क्षणांना तुमच्यासोबत
                  शेअर करताना आम्हाला अभिमान वाटतो.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-20">
              <div className="md:col-span-1 overflow-hidden">
                <img
                  src={galleryimg[0].src}
                  alt={galleryimg[0].title}
                  className="w-full h-full border-design object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setIndex(0);
                    setOpen(true);
                  }}
                />
              </div>

              <div className="md:col-span-2 grid sm:grid-cols-2 md:px-3 px-0 grid-cols-1 gap-4">
                {galleryimg.slice(1, 5).map((gal, i) => (
                  <div key={i} className="overflow-hidden shadow-lg">
                    <img
                      src={gal.src}
                      alt={gal.title}
                      className="w-full h-full border-design object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => {
                        setIndex(i + 1);
                        setOpen(true);
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {galleryimg.slice(4, 9).map((gal, i) => (
                  <div key={i} className="overflow-hidden shadow-lg">
                    <img
                      src={gal.src}
                      alt={gal.title}
                      className="w-full h-full border-design object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => {
                        setIndex(i + 4);
                        setOpen(true);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <Lightbox
  open={open}
  close={() => setOpen(false)}
  slides={galleryimg.map((img) => ({
    src: img.src,
    width: 1000,
    height: 800,
  }))}
  index={index}
  setIndex={setIndex}
  plugins={[Fullscreen, Zoom]}
  zoom={{ maxZoomPixelRatio: 4 }}  
/>

          </div>
        </div>
      </div>
    </div>

    </>

):(
 <>

<div>
      <div className="bg-cover flex justify-center items-center bg-no-repeat bg-center w-full "
      //  style={{ backgroundImage: `url(${img})` }}
       >
        <div className="container max-auto">
          <nav className="bg-transparent py-8 px-10 mb-5">
            <div className="mx-auto flex justify-between items-center">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-24 w-auto" />
              </Link>
            </div>
          </nav>

          <div className=" flex justify-center items-center flex-col pt-8 pb-48">
            <div className="flex gap-7 flex-col">
              <div>
                <img src={galleryTitle} alt="" className="mb-1" />
              </div>
              <div className="text-[25px] leading-10 font-medium text-[#717171] w-full">
                <p>
                  आमच्या प्रवासातील खास क्षण, भव्य उद्घाटन सोहळे, विशेष कार्यक्रम आणि ग्राहकांसोबतच्या आठवणी यांचे सुंदर क्षणचित्र येथे पाहा. प्रत्येक
                  कार्यक्रम हा केवळ एक प्रसंग नसून, तो आमच्या प्रवासातील एक सोनेरी पान आहे. आमच्या उत्साहपूर्ण आणि दैदिप्यमान क्षणांना तुमच्यासोबत
                  शेअर करताना आम्हाला अभिमान वाटतो.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-20">
              <div className="md:col-span-1 overflow-hidden">
                <img
                  src={galleryimg[0].src}
                  alt={galleryimg[0].title}
                  className="w-full h-full border-design object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    setIndex(0);
                    setOpen(true);
                  }}
                />
              </div>

              <div className="md:col-span-2 grid sm:grid-cols-2 md:px-3 px-0 grid-cols-1 gap-4">
                {galleryimg.slice(1, 5).map((gal, i) => (
                  <div key={i} className="overflow-hidden shadow-lg">
                    <img
                      src={gal.src}
                      alt={gal.title}
                      className="w-full h-full border-design object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => {
                        setIndex(i + 1);
                        setOpen(true);
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {galleryimg.slice(4, 9).map((gal, i) => (
                  <div key={i} className="overflow-hidden shadow-lg">
                    <img
                      src={gal.src}
                      alt={gal.title}
                      className="w-full h-full border-design object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => {
                        setIndex(i + 4);
                        setOpen(true);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <Lightbox
  open={open}
  close={() => setOpen(false)}
  slides={galleryimg.map((img) => ({
    src: img.src,
    width: 1000,
    height: 800,
  }))}
  index={index}
  setIndex={setIndex}
  plugins={[Fullscreen, Zoom]}
  zoom={{ maxZoomPixelRatio: 4 }}  
/>

          </div>
        </div>
      </div>
    </div>

    </>
)}
</>

  );
};

export default ViewGallery;
