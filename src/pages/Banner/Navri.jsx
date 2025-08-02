// export default Navri;
import React, { useEffect, useState } from 'react';
import img1 from '../../assets/navri/img1.png';
import img2 from '../../assets/navri/img2.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant';
import img11 from '../../assets/navri/1.png';
import newNavrai from "../../assets/newImages/newNavrai.png"
import mobileNavrai from "../../assets/mobile/homepage/finalNavrai.svg"



import Ribben from '../Ribben';
import mobile from "../../assets/mobile/navrai.png"
const Navri = () => {
  return (
    <>
      <div className="relative w-full ">
        {/* Web View */}
        <div
          style={{ backgroundImage: `url(${newNavrai})` }}
          className="bg-cover bg-no-repeat bg-center hidden sm:flex w-full min-h-screen"
        >
          <img src={newNavrai} alt="backgroundImage" className='w-full object-contain h-auto' />
          <div className='absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center'>

          <div className="container pt-20">
            <div className="flex justify-start items-start pb-10 flex-col w-full">
              <div className="flex items-center gap-3 md:pb-10 pb-10 pr-0 md:pr-40 flex-col">
                <img src={img1} alt="" className="" />
                <img src={img2} alt="" />
                <div className="">
                  <Link to={ROUTES.COLLECTIONS}>
                    <button className="shop-now">SHOP NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>

        {/* Mobile View - Show below 500px */}
        <div
          style={{ backgroundImage: `url(${mobileNavrai})` }}
          className="bg-cover  bg-no-repeat bg-center flex sm:hidden w-full h-[580px]  "
        >
          <div className="container pt-10 px-6">
            <div className="flex flex-col h-[100%] justify-end items-center w-full pb-8">
              {/* Mobile Image */}
              <img src={img1} alt="Navri" className="w-auto h-16 mb-4" />
              <img src={img2} alt="Design" className=" w-48 h-8 mb-4" />
              {/* Mobile Button */}
              <div className="mt-1">
                <Link to={ROUTES.COLLECTIONS}>
                  <button className="shop-now">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ribbon Component */}
      <Ribben />
    </>
  );
};

export default Navri;
