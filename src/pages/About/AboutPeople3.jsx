import React, { useEffect, useState } from 'react';
import img1 from "../../assets/about/Image-box-6.png";
import b from "../../assets/about/about-b.png";

const AboutPeople3 = () => {

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
      <div className=''
          style={{backgroundImage:`url(${b})`}}

      >

    <div className="container py-20"
    
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full   px-0">
          <h2 className="text-2xl font-semibold text-primary">वारसा पुढे नेणारे</h2>
          <p className="text-xl baloo text-black mt-4">
          [दुसऱ्या पिढीचे नाव] यांनी आपल्या वडिलांचा वारसा पुढे नेत, आधुनिकतेची जोड देत व्यवसायाचा विस्तार केला. 
          जुन्या परंपरांना टिकवून ठेवत त्यांनी नव्या तंत्रज्ञानाचा आणि आधुनिक डिझाइनचा अवलंब केला.</p>
          <p className="text-xl baloo text-black mt-6">
          त्यांच्या दूरदृष्टीमुळे MVM ज्वेलर्सने स्थानिक व्यवसायापासून राष्ट्रीय ओळख मिळवली. दर्जा आणि विश्वास
           कायम ठेवण्याचा त्यांचा प्रयत्न आजही आमच्या प्रत्येक दागिन्यात प्रतिबिंबित होतो.</p>
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <img src={img1} className="image-card-right w-full" alt="Founder" />
          <p className="baloo text-xl font-normal text-primary mt-4">
            मल्लाप्पा विराप्पा मजती
          </p>
        </div>
      </div>
    </div>
      </div>
    </div>

    </>

):(
 <>
 <div className=''>
 <div className=''
     style={{backgroundImage:`url(${b})`}}

 >

<div className="container py-20"

>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
   <div className="w-full   px-6">
     <h2 className="text-4xl font-semibold text-primary">वारसा पुढे नेणारे</h2>
     <p className="text-2xl baloo text-black mt-4">
     [दुसऱ्या पिढीचे नाव] यांनी आपल्या वडिलांचा वारसा पुढे नेत, आधुनिकतेची जोड देत व्यवसायाचा विस्तार केला. 
     जुन्या परंपरांना टिकवून ठेवत त्यांनी नव्या तंत्रज्ञानाचा आणि आधुनिक डिझाइनचा अवलंब केला.</p>
     <p className="text-2xl baloo text-black mt-10">
     त्यांच्या दूरदृष्टीमुळे MVM ज्वेलर्सने स्थानिक व्यवसायापासून राष्ट्रीय ओळख मिळवली. दर्जा आणि विश्वास
      कायम ठेवण्याचा त्यांचा प्रयत्न आजही आमच्या प्रत्येक दागिन्यात प्रतिबिंबित होतो.</p>
   </div>

   <div className="w-full flex flex-col justify-center items-center">
     <img src={img1} className="image-card-right w-full" alt="Founder" />
     <p className="baloo text-2xl font-normal text-primary mt-4">
       मल्लाप्पा विराप्पा मजती
     </p>
   </div>
 </div>
</div>
 </div>
</div>
 
</>
)}
</>


  );
};

export default AboutPeople3;
