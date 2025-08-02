import React, { useEffect, useState } from 'react'
import img from "../../assets/about/main-parampara.png"
import img1 from "../../assets/about/amchiparampara.png"
import img2 from "../../assets/about/paranmpara.png"

import img4 from "../../assets/about/about4.png"
import img5 from "../../assets/about/about5.png"
import img6 from "../../assets/about/about6.png"

import Imagesection from './Imagesection'
import AboutPeople from './AboutPeople'
import AboutPeople2 from './AboutPeople2'
import AboutPeople3 from './AboutPeople3'
import mobile from '../../assets/mobile/p.png'

const Prampara = () => {
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
      
      <div className=''>
      <div className="relative w-full">
        <div className='min-h-[600px] flex justify-center'
          style={{ backgroundImage: `url(${mobile})` }}    >
  <div className="absolute inset-0 bg-[#482318] opacity-80"></div>
          <div className='container relative z-10 flex justify-center items-center'>
            <div className='flex justify-start items-center'>
              <div className=''>

                <img src={img1} alt="" className='pb-0 w-[476px]' />
                <img src={img2} alt="" />
              </div>
            </div>
            <div className=''>

            </div>

          </div>

        </div>
        </div>




        <div className='container bg-white py-10'>
          <div className='w-full flex justify-items-center items-start flex-col'>
            <div className='pb-2'>

              <p className=''>
                MVM ज्वेलर्स ही केवळ दागिन्यांची दुकान नाही, तर तीन पिढ्यांचा समृद्ध वारसा आहे. आमच्या पूर्वजांनी घडवलेल्या विश्वासाच्या आणि
                गुणवत्तेच्या पायावर उभा असलेला हा व्यवसाय आजही त्याच निष्ठेने आणि उत्कटतेने पुढे जात आहे.
              </p>
            </div>
            <div className='pb-2'>
              <p className=''>
                प्रत्येक दागिना हा केवळ सौंदर्याचा एक तुकडा नसतो, तर तो परंपरेची आठवण, कुशल कारागिरीचे प्रतीक आणि तुमच्या आठवणींना जपणारा
                अमूल्य ठेवा असतो. आधुनिक तंत्रज्ञान आणि पारंपरिक कलांचे संमिश्रण साधत, आम्ही तुमच्यासाठी दागिन्यांची निर्मिती करत राहू.
              </p>
            </div>
            <div className=''>
              <p className=''>
                आमच्यासोबत या आणि एका शाश्वत परंपरेचा भाग बना – जिथे प्रत्येक दागिन्यात इतिहास, कलात्मकता आणि प्रेम गुंफलेले आहे!
              </p>
            </div>
          </div>
        </div>

        <div className=''>
          <Imagesection innerImage={img4} />
        </div>


        <AboutPeople />

        <div className=''>
          <Imagesection innerImage={img5} />
        </div>

        <AboutPeople3 />
        <div className=''>
          <Imagesection innerImage={img6} />
        </div>
        <AboutPeople2 />

      </div>
      </>

):(
 <>
<div className=''>

<div className='min-h-[600px] flex justify-center'
  style={{ backgroundImage: `url(${img})` }}    >

  <div className='container grid grid-cols-2'>
    <div className='flex justify-start items-center'>
      <div className=''>

        <img src={img1} alt="" className='pb-10 w-[476px]' />
        <img src={img2} alt="" />
      </div>
    </div>
    <div className=''>

    </div>

  </div>

</div>




<div className='container bg-white py-20'>
  <div className='w-full flex justify-items-center items-start flex-col'>
    <div className='pb-8'>

      <p className='about-text'>
        MVM ज्वेलर्स ही केवळ दागिन्यांची दुकान नाही, तर तीन पिढ्यांचा समृद्ध वारसा आहे. आमच्या पूर्वजांनी घडवलेल्या विश्वासाच्या आणि
        गुणवत्तेच्या पायावर उभा असलेला हा व्यवसाय आजही त्याच निष्ठेने आणि उत्कटतेने पुढे जात आहे.
      </p>
    </div>
    <div className='pb-8'>
      <p className='about-text'>
        प्रत्येक दागिना हा केवळ सौंदर्याचा एक तुकडा नसतो, तर तो परंपरेची आठवण, कुशल कारागिरीचे प्रतीक आणि तुमच्या आठवणींना जपणारा
        अमूल्य ठेवा असतो. आधुनिक तंत्रज्ञान आणि पारंपरिक कलांचे संमिश्रण साधत, आम्ही तुमच्यासाठी दागिन्यांची निर्मिती करत राहू.
      </p>
    </div>
    <div className=''>
      <p className='about-text'>
        आमच्यासोबत या आणि एका शाश्वत परंपरेचा भाग बना – जिथे प्रत्येक दागिन्यात इतिहास, कलात्मकता आणि प्रेम गुंफलेले आहे!
      </p>
    </div>
  </div>
</div>

<div className=''>
  <Imagesection innerImage={img4} />
</div>


<AboutPeople />

<div className=''>
  <Imagesection innerImage={img5} />
</div>

<AboutPeople3 />
<div className=''>
  <Imagesection innerImage={img6} />
</div>
<AboutPeople2 />

</div>
</>
    )}
    </>
  )
}

export default Prampara