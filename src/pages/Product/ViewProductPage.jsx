


import React, { useContext, useEffect } from 'react'
import img1 from "../../assets/product/product-banner.png"
import { ROUTES } from '../../constant'
import img2 from "../../assets/MVM3.png"
import img3 from "../../assets/product/mangalsutra.png"
import img4 from "../../assets/product/premacha-dhaga.png"
import { Link, useLocation } from 'react-router-dom'
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import promain from "../../assets/product/mainpro.jpg"

import pro1 from "../../assets/product/pro1.png"
import pro2 from "../../assets/product/pro2.png"
import pro3 from "../../assets/product/pro3.png"
import { CiHeart, CiSaveUp2 } from 'react-icons/ci'
import { ProductContext } from '../context/ProductContext'

const product = {
    title: "Symbol of Love & Tradition",
    name: "MVM MANGALSUTRA",
    originalPrice: 40000,
    discountedPrice: 28000,
    sold: 1238,
    rating: 4.5,
    description:
        "Celebrate the sacred bond of love with our exquisitely crafted Gold & Black Beaded Mangalsutra. Designed to blend tradition with contemporary elegance, this piece is a perfect symbol of marital bliss and lifelong commitment.",
    features1: "Premium Craftsmanship – Made with high-quality gold and intricately designed black beads.",
    features2: "Traditional yet Stylish – A perfect mix of cultural heritage and modern aesthetics.",
    sizes: [6, 8, 10, 14, 18, 20],
    images: [
        promain,
        pro1,
        pro2,
        pro3
    ]
};

const ViewProductPage = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const { selectedProduct, setSelectedProduct, collectionTitle, collectionBanner } = useContext(ProductContext);
    const location = useLocation();
      // State to track window width
      const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 550);
    
      // Handle window resize to update view
      useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth <= 550);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
    useEffect(() => {
        if (location.state?.product) {
            setSelectedProduct(location.state.product); // Update context if product is passed via location
        }
    }, [location, setSelectedProduct]);
    
  console.log("Products", location, selectedProduct);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const prevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };

    return (

<>
{isMobileView ? (
        <>
        <div>
            <div
                style={{ backgroundImage: `url(${collectionBanner})` }}
                className="bg-cover flex justify-center shadow-2xl items-center bg-no-repeat bg-center b-height w-full"
            >
                <div className='container '>
                    <div className='mb-6'>
                        <Link to={ROUTES.HOME}>

                            <img src={img2} alt="" className='h-32' />
                        </Link>
                    </div>
                    <div className=' grid md:grid-cols-2 items-end'>
                        <div className=''>
                            <Link to={ROUTES.PRODUCTS}>

                                <img src={collectionTitle} alt="" />
                            </Link>
                        </div>
                    
                    </div>
                </div>
            </div>

                <div className="container mx-auto py-24 flex flex-col md:flex-row   gap-12">
                    <div className=" w-full md:w-1/2 px-4">
                        <div className="relative flex flex-col justify-start gap-5">
                        <img
    src={selectedProduct?.img ? selectedProduct.img : ""}
    alt="Product"
    className=" w-full relative  max-w-[500px] object-cover rounded-lg"
/>

                            <div className='absolute w-full p-2 bottom-2 flex flex-row-reverse justify-between'>
                                <div className='flex gap-2'>
                                    <button className='px-3 py-3 bg-gray-200 rounded-md'>
                                        <CiSaveUp2 size={20} />
                                    </button>
                                    <button className='px-3 py-3 bg-gray-200 rounded-md'>

                                        <CiHeart size={20} />
                                    </button>
                                </div>
                                <div className='flex gap-2 '>

                                    <button onClick={prevImage} className="px-3 py-1 text-2xl bg-gray-200 rounded-md">&#8249;</button>
                                    <button onClick={nextImage} className=" px-3 py-1 text-2xl bg-gray-200 rounded-md">&#8250;</button>
                                </div>

                            </div>
                        </div>
                        <div className="flex mt-4 gap-2 ">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={selectedProduct?.img ? selectedProduct.img : ""}
                                    alt="Thumbnail"
                                    className={`w-14 h-20 object-cover cursor-pointer rounded-lg ${currentImage === index ? "border-2 border-black" : ""
                                        }`}
                                    onClick={() => setCurrentImage(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className=" w-full md:w-1/2 flex flex-col gap-2 md:pr-0 pr-0   ">
                        <h2 className="text-lg font-medium pb-5 text-[#8F8F8F]">{product.title}</h2>
                        <h2 className="text-4xl font-semibold">{selectedProduct?.name}</h2>
                        <div className='flex items-center py-5 border-b border-dashed justify-between'>
                            <div className='flex items-center gap-5'>

                                <p className="text-lg font-medium text-[#8F8F8F] line-through">Rs.{product.originalPrice}</p>
                                <p className="text-black text-2xl font-bold">Rs.{selectedProduct?.price}</p>
                            </div>
                            <div className=''>

                                <p className="text-lg font-medium text-[#8F8F8F]">{product.sold} Sold • ⭐ {product.rating}</p>
                            </div>
                        </div>

                       <div className='py-3 flex gap-3 flex-col'>

                            <h5 className='text-lg font-bold'>
                                Description</h5>
                            <p className="text-lg font-medium text-[#8F8F8F]">{selectedProduct?.desc}</p>
                        </div>
                        <div className=' flex flex-col gap-3 pt-2'>
                            <h5 className='text-lg font-bold'>
                                Key feature</h5>
                            <p className="text-lg font-medium text-[#8F8F8F]">{product.features1}</p>
                            <p className="text-lg font-medium text-[#8F8F8F]">{product.features2}</p>

                        </div>

                        <div className='py-6'>
                            <div className='flex justify-between '>

                                <p className="text-lg  font-medium text-[#646464]">Size: <span className='text-lg  font-semibold text-black'>{selectedSize}</span></p>
                                <Link >
                                    <p className='text-lg underline font-medium text-[#646464]'>
                                        View size cart
                                    </p>
                                </Link>
                            </div>
                            <div className="flex gap-2 flex-wrap mt-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`px-6 py-1 border rounded-lg ${selectedSize === size ? "bg-gray-300 text-black font-semibold" : ""}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between flex-col md:flex-row gap-2 mt-4">
                            <button className="px-14 py-2.5 bg-[#6B2929] text-white rounded-lg flex items-center justify-center gap-2">
                                <FaHeart /> Add To Favorite
                            </button>
                            <button className="px-6 py-2.5 bg-white border text-black rounded-lg">Checkout Now</button>
                        </div>

                        <p className='text-sm pt-7 font-medium text-[#646464]'>
                            Delivery T&C
                        </p>
                    </div>
                </div>
        </div>
        </>
):(
    <>
        <div>
            <div
                style={{ backgroundImage: `url(${collectionBanner})` }}
                className="bg-cover flex justify-center shadow-2xl items-center bg-no-repeat bg-center b-height w-full"
            >
                <div className='container '>
                    <div className='mb-6'>
                        <Link to={ROUTES.HOME}>

                            <img src={img2} alt="" className='h-32' />
                        </Link>
                    </div>
                    <div className=' grid md:grid-cols-2 items-end'>
                        <div className=''>
                            <Link to={ROUTES.PRODUCTS}>

                                <img src={collectionTitle} alt="" />
                            </Link>
                        </div>
                    
                    </div>
                </div>
            </div>

                <div className="container mx-auto py-24 flex flex-col md:flex-row   gap-12">
                    <div className=" w-full md:w-1/2 px-4">
                        <div className="relative flex  justify-start gap-5">
                        <img
    src={selectedProduct?.img ? selectedProduct.img : ""}
    alt="Product"
    className="min-h-[600px] w-full max-w-[500px] object-cover rounded-lg"
/>

                            <div className='flex flex-col justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <button className='px-3 py-3 bg-gray-200 rounded-md'>
                                        <CiSaveUp2 size={20} />

                                    </button>
                                    <button className='px-3 py-3 bg-gray-200 rounded-md'>

                                        <CiHeart size={20} />
                                    </button>

                                </div>
                                <div className='flex flex-col gap-4'>

                                    <button onClick={prevImage} className="px-2 py-2 text-2xl bg-gray-200 rounded-md">&#8249;</button>
                                    <button onClick={nextImage} className=" px-2 py-2 text-2xl bg-gray-200 rounded-md">&#8250;</button>
                                </div>

                            </div>
                        </div>
                        <div className="flex mt-4 gap-2 ">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={selectedProduct?.img ? selectedProduct.img : ""}
                                    alt="Thumbnail"
                                    className={`w-20 h-28 object-cover cursor-pointer rounded-lg ${currentImage === index ? "border-2 border-black" : ""
                                        }`}
                                    onClick={() => setCurrentImage(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className=" w-full md:w-1/2 flex flex-col gap-2 md:pr-0 pr-0   ">
                        <h2 className="text-lg font-medium pb-5 text-[#8F8F8F]">{product.title}</h2>
                        <h2 className="text-4xl font-semibold">{selectedProduct?.name}</h2>
                        <div className='flex items-center py-5 border-b border-dashed justify-between'>
                            <div className='flex items-center gap-5'>

                                <p className="text-lg font-medium text-[#8F8F8F] line-through">Rs.{product.originalPrice}</p>
                                <p className="text-black text-2xl font-bold">Rs.{selectedProduct?.price}</p>
                            </div>
                            <div className=''>

                                <p className="text-lg font-medium text-[#8F8F8F]">{product.sold} Sold • ⭐ {product.rating}</p>
                            </div>
                        </div>

                       <div className='py-3 flex gap-3 flex-col'>

                            <h5 className='text-lg font-bold'>
                                Description</h5>
                            <p className="text-lg font-medium text-[#8F8F8F]">{selectedProduct?.desc}</p>
                        </div>
                        <div className=' flex flex-col gap-3 pt-2'>
                            <h5 className='text-lg font-bold'>
                                Key feature</h5>
                            <p className="text-lg font-medium text-[#8F8F8F]">{product.features1}</p>
                            <p className="text-lg font-medium text-[#8F8F8F]">{product.features2}</p>

                        </div>

                        <div className='py-6'>
                            <div className='flex justify-between '>

                                <p className="text-lg  font-medium text-[#646464]">Size: <span className='text-lg  font-semibold text-black'>{selectedSize}</span></p>
                                <Link >
                                    <p className='text-lg underline font-medium text-[#646464]'>
                                        View size cart
                                    </p>
                                </Link>
                            </div>
                            <div className="flex gap-2 flex-wrap mt-3">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`px-6 py-1 border rounded-lg ${selectedSize === size ? "bg-gray-300 text-black font-semibold" : ""}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <button className="px-14 py-2.5 bg-[#6B2929] text-white rounded-lg flex items-center gap-2">
                                <FaHeart /> Add To Favorite
                            </button>
                            <button className="px-6 py-2.5 bg-white border text-black rounded-lg">Checkout Now</button>
                        </div>

                        <p className='text-sm pt-7 font-medium text-[#646464]'>
                            Delivery T&C
                        </p>
                    </div>
                </div>
        </div>
        </> 
)}
</>


    )
}

export default ViewProductPage
