import React, { useEffect, useState } from 'react'
import img3 from "../../assets/about/about3.png"

const Imagesection = ({ innerImage }) => {

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
        <div className='flex justify-center items-center'>
            <div className=' min-h-[80px] w-[2800px] flex justify-center items-center'
                style={{
                    backgroundImage: `url(${img3})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }
                }
            >
                <div className='px-4'>
                    <div className='px-0 flex justify-center items-center'>
                        <img src={innerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>

        </>

):(
 <>
  <div className='flex justify-center items-center'>
            <div className=' min-h-[266px] w-[2800px] flex justify-center items-center'
                style={{
                    backgroundImage: `url(${img3})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }
                }
            >
                <div className='container'>
                    <div className='px-10 flex justify-center items-center'>
                        <img src={innerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
)}
</>


    )
}

export default Imagesection