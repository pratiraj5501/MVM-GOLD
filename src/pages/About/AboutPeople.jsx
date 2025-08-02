import React, { useEffect, useState } from 'react'
import img1 from "../../assets/about/Image-box.png"
import img2 from "../../assets/about/Image-box-2.png"
import b from "../../assets/about/about-b.png";

const AboutPeople = () => {

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
        
    <div className='flex justify-center flex-col py-10'
        style={{backgroundImage:`url(${b})`}}

    
    >
        <div className='container '>

<div className=' flex justify-center items-center py-2'>
    <h2 className='about-title1'>
    संस्थापक 
    </h2>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 '>
<div className='flex justify-center items-center gap-6 flex-col '>

<img src={img1} className='image-card-left' alt="" />
<p className='baloo text-xl font-normal text-primary '>मल्लाप्पा विराप्पा मजती </p>
</div>
<div className='flex justify-center gap-6 items-center flex-col'>

<img src={img2} className='image-card-right' alt="" />
<p className='baloo text-xl font-normal text-primary'>मल्लाप्पा विराप्पा मजती  </p>

</div>
</div>
<div className="py-10 flex justify-center flex-col items-center gap-7">
  <div className="w-full max-w-[870px] ">
    <p className="text-left poppins font-light text-xl text-[#000000]">
      MVM ज्वेलर्सचा पाया टाकणारे मल्लाप्पा विराप्पा मजती 
      यांनी त्यांच्या कष्टाने आणि निष्ठेने व्यवसायाची मुहूर्तमेढ रोवली. 
      दागिन्यांचे कौशल्य, पारख आणि ग्राहकांप्रती असलेली निष्ठा ही
      त्यांच्या व्यवसायाची मुख्य तत्त्वे होती.
    </p>
  </div>
  <div className="w-full max-w-[870px] ">
    <p className="text-left poppins font-light text-xl text-[#000000]">
      लहानशा कार्यशाळेतून सुरू झालेली ही यात्रा आज एक प्रतिष्ठित नाव बनली आहे. 
      त्यांच्या मेहनतीमुळे केवळ एक व्यवसाय नव्हे, तर एक परंपरा जन्मास आली – 
      जिथे प्रत्येक दागिना हा विश्वास, निसर्गरम्यता आणि गुणवत्तेचे प्रतीक असतो.
    </p>
  </div>
</div>


        </div>

    </div>

    </>

):(
 <>


    <div className='flex justify-center flex-col py-10'
        style={{backgroundImage:`url(${b})`}}

    
    >
        <div className='container '>

<div className=' flex justify-center items-center py-2'>
    <h2 className='about-title1'>
    संस्थापक 
    </h2>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 '>
<div className='flex justify-center items-center gap-6 flex-col '>

<img src={img1} className='image-card-left' alt="" />
<p className='baloo text-2xl font-normal text-primary '>मल्लाप्पा विराप्पा मजती </p>
</div>
<div className='flex justify-center gap-6 items-center flex-col'>

<img src={img2} className='image-card-right' alt="" />
<p className='baloo text-2xl font-normal text-primary'>मल्लाप्पा विराप्पा मजती  </p>

</div>
</div>
<div className="py-20 flex justify-center flex-col items-center gap-7">
  <div className="w-full max-w-[870px] px-8">
    <p className="text-center poppins font-light text-3xl text-[#000000]">
      MVM ज्वेलर्सचा पाया टाकणारे मल्लाप्पा विराप्पा मजती 
      यांनी त्यांच्या कष्टाने आणि निष्ठेने व्यवसायाची मुहूर्तमेढ रोवली. 
      दागिन्यांचे कौशल्य, पारख आणि ग्राहकांप्रती असलेली निष्ठा ही
      त्यांच्या व्यवसायाची मुख्य तत्त्वे होती.
    </p>
  </div>
  <div className="w-full max-w-[870px] px-8">
    <p className="text-center poppins font-light text-3xl text-[#000000]">
      लहानशा कार्यशाळेतून सुरू झालेली ही यात्रा आज एक प्रतिष्ठित नाव बनली आहे. 
      त्यांच्या मेहनतीमुळे केवळ एक व्यवसाय नव्हे, तर एक परंपरा जन्मास आली – 
      जिथे प्रत्येक दागिना हा विश्वास, निसर्गरम्यता आणि गुणवत्तेचे प्रतीक असतो.
    </p>
  </div>
</div>


        </div>

    </div>


    </>
    )}
    </>
  )
}

export default AboutPeople