import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { getBannerImage } from '../../apiServices/bannerImageService';
import { FILE_URL } from '../../config/config';
import card from "../../assets/product/main-card.png"
import { IoMdHeart } from 'react-icons/io'
import { getDropdownList } from '../../apiServices/categoryService';
import { h2 } from 'framer-motion/client';
import Navbar from '../Navbar';
import CircularStatus from '../Banner/CircularStatus';
import MobileDropdown from '../MobileDropdown';
import MobileProductCard from '../../assets/product/MobileProductCard';
import { getAllProductsFilterByTitleIdAndProudctI, getAllProductsFilterByTitleIdAndProudctId, getAllProductswithTitleId } from '../../apiServices/product';
const ViewNewProductPage = () => {
    const location=useLocation();
     const { titleId, categoryId, productId } = location.state || {};
     const [bannerImgs,setBannerImgs]=useState([])
       const [selectedCategories, setSelectedCategories] = useState([]);
       const [selectedMobileCategories,setSelectedMobileCategories]=useState([])
       const [categories,setCategories]=useState([])
       const [productList,setProductList]=useState([])
console.log("TitleId",titleId);
console.log("categoryId",categoryId);
console.log("productId",productId);
 // State to track window width
      const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 550);
    const products = [
  { id: 1, name: "Gold Necklace", category: "Necklace", image: card },
  { id: 2, name: "Gold Necklace", category: "Necklace", image: card },
  { id: 3, name: "Silver Bracelet", category: "Bracelet", image: card },
  { id: 4, name: "Ruby Ring", category: "Ring", image: card },
  { id: 5, name: "Pearl Necklace", category: "Necklace", image: card },
  { id: 6, name: "Pearl Necklace", category: "Necklace", image: card },
  { id: 7, name: "Pearl Necklace", category: "Necklace", image: card },
  { id: 8, name: "Pearl Necklace", category: "Necklace", image: card },
  { id: 9, name: "Pearl Necklace", category: "Necklace", image: card },
  { id: 10, name: "Pearl Necklace", category: "Necklace", image: card },
  { id: 11, name: "Pearl Necklace", category: "Necklace", image: card },


];
const sampleProducts = [
  {
    title: "Regal Diamond Encrusted",
    price: 45900,
    originalPrice: 55900,
    image: "http://192.168.1.54:7000/uploads/others/fit.jpg",
  },
  {
    title: "Royal Gold Bangles",
    price: 35900,
    originalPrice: 45900,
    image: "http://192.168.1.54:7000/uploads/others/fit.jpg",
  },
  {
    title: "Elegant Gold Kada",
    price: 29900,
    originalPrice: 39900,
    image: "http://192.168.1.54:7000/uploads/others/fit.jpg",
  },
  {
    title: "Traditional Bracelet",
    price: 19900,
    originalPrice: 29900,
    image: "http://192.168.1.54:7000/uploads/others/fit.jpg",
  },
];

const fetchBannerImg=async ()=> {
    try {
        const response=await getBannerImage(titleId);
        setBannerImgs(response?.data?.data)
    } catch (error) {
        
    }
}
const fetchDropdownList=async ()=> {
  try {
    const response=await getDropdownList(titleId);
        setCategories(response?.data?.data)
  } catch (error) {
  }
}
const fetchAllProductByTitltIdwise=async()=>{
const response=await getAllProductswithTitleId(titleId)
        console.log("fetched bro all products with titleId wise   here ... ewwwwww",response);
        setProductList(response?.data?.data)

}
const fetchProductByCategoriesAndProductIdWise=async()=>{
  try {
    console.log("Running............")
    const response=await getAllProductsFilterByTitleIdAndProudctId(titleId,selectedCategories)
console.log("resopnse bro after fiterl.......",response?.data?.products)
setProductList(response?.data?.products)
    
    
  } catch (error) {
    
  }
}

const mobileFetchProductByCategoriesAndProductIdWise=async()=>{
  try {
  const selectedCategories = Object.values(selectedMobileCategories);

  console.log("EEEEEEEEEEE",selectedCategories)

    const response=await getAllProductsFilterByTitleIdAndProudctId(titleId,selectedCategories);
    setProductList(response?.data?.products)
    
  } catch (error) {
    
  }
}
 const toggleCategory = (categoryId) => {
  console.log("Toggled Category ID:", categoryId); // ✅ Console here

  setSelectedCategories((prev) =>
    prev.includes(categoryId)
      ? prev.filter((c) => c !== categoryId)
      : [...prev, categoryId]
  );
};

  const filteredProducts = selectedCategories.length
    ? products.filter((p) => selectedCategories.includes(p.category))
    : products;

  // Handle window resize to update view
      useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth <= 550);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


useEffect(()=>{
    fetchBannerImg()
    fetchDropdownList()
    fetchAllProductByTitltIdwise();
    
},[titleId,categoryId])

useEffect(()=>{
  console.log("Fetching.....")
  fetchProductByCategoriesAndProductIdWise()

},[selectedCategories])

// belwo is for mobile only**********************
useEffect(()=>{
  console.log("fetching for mobile bro...")
mobileFetchProductByCategoriesAndProductIdWise()
},[selectedMobileCategories])
console.log("selectedcateoies",selectedCategories)
 

  return (
<div className=" relative w-full">
  {
    isMobileView? (
      <>
      <Navbar/>
      <CircularStatus/>
      {/* banner image will be here  */}
       <div className="flex justify-center items-center shadow-2xl  object-cover">
    <img 
      src={`${FILE_URL}${bannerImgs[1]?.images}`} 
      alt="Banner"
      className="w-full h-auto object-cover"
    />
  </div>
  <div>
    <MobileDropdown selectedMobileCategories={selectedMobileCategories} setSelectedMobileCategories={setSelectedMobileCategories} categories={categories} />
  </div>
  <div className="grid grid-cols-2 gap-4 p-4">
      {productList?.map((item, index) => (
        <MobileProductCard key={index} item={item} />
      ))}
    </div>
      
      </>

    ):(

      //  ************************************* PC View Starts from here ***********************
      <>
      
      
       <div className="flex justify-center items-center shadow-2xl w-full">
    <img 
      src={`${FILE_URL}${bannerImgs[0]?.images}`} 
      alt="Banner"
      className="w-full h-auto object-cover"
    />
  </div>
   {/*  ******************************** banner img display *********************************** */}
    <div className='container'>
      <div className='flex justify-end pt-6'>
            <p className='font-light text-sm'>2005 Results</p>
          </div>
           <div className="flex min-h-screen px-1 flex-col sm:flex-row  py-15">
            <div className="w-[284px]  p-4">
              <div className='border-b  '>

                <h2 className="text-3xl font-normal mb-4">Categories</h2>
                {categories?.map((item, index) => (
  <div key={index} className="flex items-center mb-3">
    <input
      type="checkbox"
      id={item.category}
      className="mr-8 p-3 w-5 h-5"
      checked={selectedCategories.includes(item._id)} // use _id here too!
      onChange={() => toggleCategory(item._id)}
    />
    <label htmlFor={item.category} className="font-normal text-[18px]">
      {item.category}
    </label>
  </div>
))}

              </div>
            </div>
             <div className="w-full h-full  p-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">

          


              {productList.map((item,index) => (
                <div key={index} className="card">
                  <div className="relative group border-2  h-full">
                 
                      <img src={`${FILE_URL}${item.images[0]}`}   className="   card-img mb-3 w-full" />
                   

                    <div className="absolute bottom-7 left-0 right-0 h-10 flex justify-center items-center">
                      <button className="w-56 h-9 bg-black/100 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>


 

                  <div className='flex flex-col pt-2 gap-1 bg-[#cac9c9]'>


                    <h3 className="card-title">{item?.shortTitle}</h3>
                    <p className="card-subtitle">{item?.categoryId?.category}</p>
                    <p className='price'>₹{item.price}   <span className='price-wrong'>₹{item.oldPrice}</span></p>
                  </div>
                  <button className="absolute top-6 right-6 text-gray-500 hover:text-red-500">
                    <IoMdHeart size={30} />
                  </button>
                </div>
              ))}
            </div>
            </div>
    </div>
      
      </>

    )
  }
  {/*  ******************************** banner img display *********************************** */}
 
</div>




  )
}

export default ViewNewProductPage
