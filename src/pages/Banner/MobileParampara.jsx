import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constant';
// import paramparaImg from "../../assets/mobile/parampara/Parampara mobile view 1.svg"
import paramparaTitle from "../../assets/mobile/parampara/ParamparaTitle.svg"
// import paramparaImg from "../../assets/mobile/parampara/Parampara mobile view 1.svg"
import t from "../../assets/mobile/parampara/ParamparaImg.svg"
import img2 from "../../assets/navri/img2.png"

const MobileParampara = () => {
  return (
    <div className='w-full relative'>
     <div
          style={{ backgroundImage: `url(${t})` }}
          className="bg-cover  bg-no-repeat bg-center flex sm:hidden w-full h-[580px]  "
        >
          <div className="container pt-10 px-6">
            <div className="flex flex-col h-[100%] justify-end items-center w-full pb-8">
              {/* Mobile Image */}
              <img src={paramparaTitle} alt="Design" className="w-auto h-16 mb-4" />
              <img src={img2}alt="design"className='w-48 h-8 mb-4'/>
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
  )
}

export default MobileParampara
