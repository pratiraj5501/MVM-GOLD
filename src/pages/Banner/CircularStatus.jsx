import React from 'react'
import { motion } from "framer-motion";

const CircularStatus = () => {
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
// const statusVariants = {
//   hidden: { opacity: 0, filter: "blur(5px)" },
//   visible: (i) => ({
//     opacity: 1,
//     filter: "blur(0px)",
//     transition: {
//       delay: i * 0.2,
//       duration: 1,
//       ease: "easeOut",
//     },
//   }),
// };
 
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
        <div className='flex flex-col items-center gap-2'>
            <div className='w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-red-500 to bg-yellow-500'>
            <div className='w-full h-full rounded-full bg-white p-[2px] '>
                <img src="https://i.pravatar.cc/150?img=1" alt=""  className='w-full h-full rounded-full object-cover' />
            </div>
            
            </div>
            <p className='text-sm text-gray-700'>label</p>

        </div>
        {/* this is second  */}
         <div className='flex flex-col items-center gap-2'>
            <div className='w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-red-500 to bg-yellow-500'>
            <div className='w-full h-full rounded-full bg-white p-[2px] '>
                <img src="https://i.pravatar.cc/150?img=1" alt=""  className='w-full h-full rounded-full object-cover' />
            </div>
            
            </div>
            <p className='text-sm text-gray-700'>label</p>

        </div>

           {/* this is third  */}
         <div className='flex flex-col items-center gap-2'>
            <div className='w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-red-500 to bg-yellow-500'>
            <div className='w-full h-full rounded-full bg-white p-[2px] '>
                <img src="https://i.pravatar.cc/150?img=1" alt=""  className='w-full h-full rounded-full object-cover' />
            </div>
            
            </div>
            <p className='text-sm text-gray-700'>label</p>

        </div>
            {/* this is forth */}
         <div className='flex flex-col items-center gap-2'>
            <div className='w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-red-500 to bg-yellow-500'>
            <div className='w-full h-full rounded-full bg-white p-[2px] '>
                <img src="https://i.pravatar.cc/150?img=1" alt=""  className='w-full h-full rounded-full object-cover' />
            </div>
            
            </div>
            <p className='text-sm text-gray-700'>label</p>

        </div>
          {/* this is forth */}
         <div className='flex flex-col items-center gap-2'>
            <div className='w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 via-red-500 to bg-yellow-500'>
            <div className='w-full h-full rounded-full bg-white p-[2px] '>
                <img src="https://i.pravatar.cc/150?img=1" alt=""  className='w-full h-full rounded-full object-cover' />
            </div>
            
            </div>
            <p className='text-sm text-gray-700'>label</p>

        </div>

      
    </div>  
        </div>
        </motion.div>

  )
}

export default CircularStatus
