import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { getAllCircularBannerImages } from '../../apiServices/circularBannerService';
import { FILE_URL } from '../../config/config';


const CircularStatus = () => {
  const [circularBannerList,setCircularBannerList]=useState([])
    const statusVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 1,
      ease: "easeOut",
    },
  }),
}
const fetchAllCircularBanners=async()=>{
  try {
    const response=await getAllCircularBannerImages(); 
    console.log("all response for circular banner bro--->",response.data.data)
    setCircularBannerList(response.data.data)
  } catch (error) {
    
  }

}
useEffect(()=>{
  fetchAllCircularBanners()

},[])
 
  return (
        <motion.div
      className="flex flex-col items-center gap-2 min-w-[5rem]"
      initial="hidden"
      whileInView="visible"
       viewport={{ once: false, amount: 0.3 }}
      variants={statusVariants}
    >   
    <div className='w-full overflow-x-auto pt-24 md:hidden'>
    <div className='flex flex-row gap-4 px-4'>
      {
        circularBannerList?.map((banner)=>(
          
          <div className='flex flex-col items-center gap-2'>
            <div className='w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-red-500 to bg-yellow-500'>
            <div className='w-full h-full rounded-full bg-white p-[2px] '>
                <img src={`${FILE_URL}${banner?.image}`} alt=""  className='w-full h-full rounded-full object-cover' />
            </div>
            
            </div>
            <p className='text-sm text-gray-700'>{banner.title}</p>

        </div>

        ))
      }
        
       

          
          
        

      
    </div>  
        </div>
        </motion.div>

  )
}

export default CircularStatus
