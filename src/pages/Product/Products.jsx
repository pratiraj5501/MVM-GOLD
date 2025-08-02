import React, { useContext, useState } from 'react'
import img1 from "../../assets/product/product-banner.png"
import img2 from "../../assets/MVM3.png"
import img3 from "../../assets/product/mangalsutra.png"
import img4 from "../../assets/product/premacha-dhaga.png"
import card1 from "../../assets/product/card1.png"
import card from "../../assets/product/main-card.png"

import { IoMdHeart } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../constant'
import { ProductContext } from '../context/ProductContext'

const categories = ["Charms (33)", "Earrings (23)", "Ring (55)", "Necklace (55)", "Bracelet (11)"];
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

const Products = () => {
  const location = useLocation();
  const { selectedProduct ,collectionTitle ,collectionBanner} = useContext(ProductContext); 
  console.log("Products", location, selectedProduct);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const filteredProducts = selectedCategories.length
    ? products.filter((p) => selectedCategories.includes(p.category))
    : products;

  return (
    <div>

      <div className=' '>
        <div
          style={{ backgroundImage: `url(${collectionBanner})` }}
          className="bg-cover flex justify-center items-center shadow-2xl bg-no-repeat bg-center b-height w-full"
        >
          <div className='container '>
            <div className='mb-6'>
              <Link to={ROUTES.HOME}>

                <img src={img2} alt="" className='h-32' />
              </Link>
            </div>
            <div className=' grid md:grid-cols-2 items-center md:justify-center justify-start'>
              <div className=''>
                <img src={collectionTitle}alt="" className='' />
              </div>
       </div>
          </div>
        </div>

        <div className='container'>
          <div className='flex justify-end pt-6'>
            <p className='font-light text-sm'>200 Results</p>
          </div>
          <div className="flex min-h-screen px-1 flex-col sm:flex-row  py-15">
            <div className="w-[284px]  p-4">
              <div className='border-b  '>

                <h2 className="text-3xl font-normal mb-4">Categories</h2>
                {categories.map((category) => (
                  <div key={category} className="flex  items-center mb-3">
                    <input
                      type="checkbox"
                      id={category}
                      className="mr-8 p-3 w-5 h-5"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <label htmlFor={category} className="font-normal text-[18px]">{category}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-full  p-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">

          {selectedProduct &&  
           <div key={selectedProduct?.code} className="card">
                  <div className="relative group">
                    <Link to={ROUTES.PRODUCTVIEW}>
                      <img src={selectedProduct?.img} alt={selectedProduct?.name} className="card-img mb-3 w-full" />
                    </Link>

                    <div className="absolute bottom-7 left-0 right-0 h-10 flex justify-center items-center">
                      <button className="w-56 h-9 bg-black/100 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>



                  <div className="flex gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="color" className="hidden peer" />
                      <div className="w-5 h-5 bg-gradient-to-r to-gray-400 from-gray-600 rounded-full 
    border-2 border-white peer-checked:border-gray-700"></div>
                    </label>

                    <label className="cursor-pointer">
                      <input type="radio" name="color" className="hidden peer" />
                      <div className="w-5 h-5 bg-gradient-to-r to-yellow-400 from-yellow-600 rounded-full 
    border-2 border-white peer-checked:border-gray-700"></div>
                    </label>

                    <label className="cursor-pointer">
                      <input type="radio" name="color" className="hidden peer" />
                      <div className="w-5 h-5 bg-gradient-to-r to-[#B53A3A] from-red-900 rounded-full 
    border-2 border-white peer-checked:border-gray-700"></div>
                    </label>
                  </div>

                  <div className='flex flex-col pt-2 gap-1'>


                    <h3 className="card-title">{selectedProduct?.name}</h3>
                    <p className="card-subtitle break-words line-clamp-2">{selectedProduct?.desc}</p>
                    <p className='price'>₹{selectedProduct?.price}   <span className='price-wrong'>₹232323</span></p>
                  </div>
                  <button className="absolute top-6 right-6 text-gray-500 hover:text-red-500">
                    <IoMdHeart size={30} />
                  </button>
                </div>}
              {filteredProducts.map((product) => (
                <div key={product.id} className="card">
                  <div className="relative group">
                 
                      <img src={product.image} alt={product.name} className="card-img mb-3 w-full" />
                   

                    <div className="absolute bottom-7 left-0 right-0 h-10 flex justify-center items-center">
                      <button className="w-56 h-9 bg-black/100 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>



                  <div className="flex gap-2">
                    <label className="cursor-pointer">
                      <input type="radio" name="color" className="hidden peer" />
                      <div className="w-5 h-5 bg-gradient-to-r to-gray-400 from-gray-600 rounded-full 
    border-2 border-white peer-checked:border-gray-700"></div>
                    </label>

                    <label className="cursor-pointer">
                      <input type="radio" name="color" className="hidden peer" />
                      <div className="w-5 h-5 bg-gradient-to-r to-yellow-400 from-yellow-600 rounded-full 
    border-2 border-white peer-checked:border-gray-700"></div>
                    </label>

                    <label className="cursor-pointer">
                      <input type="radio" name="color" className="hidden peer" />
                      <div className="w-5 h-5 bg-gradient-to-r to-[#B53A3A] from-red-900 rounded-full 
    border-2 border-white peer-checked:border-gray-700"></div>
                    </label>
                  </div>

                  <div className='flex flex-col pt-2 gap-1'>


                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-subtitle">{product.category}</p>
                    <p className='price'>₹534534   <span className='price-wrong'>₹232323</span></p>
                  </div>
                  <button className="absolute top-6 right-6 text-gray-500 hover:text-red-500">
                    <IoMdHeart size={30} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>




      </div>

    </div>
  )
}

export default Products



// import React, { useContext, useState } from 'react'
// import img2 from "../../assets/MVM3.png"
// import card from "../../assets/product/main-card.png"
// import { IoMdHeart } from 'react-icons/io'
// import { Link, useLocation } from 'react-router-dom'
// import { ROUTES } from '../../constant'
// import { ProductContext } from '../context/ProductContext'

// const categories = ["Charms (33)", "Earrings (23)", "Ring (55)", "Necklace (55)", "Bracelet (11)"];
// const products = [
//   { id: 1, name: "Gold Necklace", category: "Necklace", image: card },
//   { id: 2, name: "Gold Necklace", category: "Necklace", image: card },
//   { id: 3, name: "Silver Bracelet", category: "Bracelet", image: card },
//   { id: 4, name: "Ruby Ring", category: "Ring", image: card },
//   { id: 5, name: "Pearl Necklace", category: "Necklace", image: card },
//   { id: 6, name: "Pearl Necklace", category: "Necklace", image: card },
//   { id: 7, name: "Pearl Necklace", category: "Necklace", image: card },
//   { id: 8, name: "Pearl Necklace", category: "Necklace", image: card },
//   { id: 9, name: "Pearl Necklace", category: "Necklace", image: card },
//   { id: 10, name: "Pearl Necklace", category: "Necklace", image: card },
//   { id: 11, name: "Pearl Necklace", category: "Necklace", image: card },
// ];

// const Products = () => {
//   const location = useLocation();
//   const { selectedProduct ,collectionTitle ,collectionBanner} = useContext(ProductContext); 
//   console.log("Products", location, selectedProduct);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const toggleCategory = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
//     );
//   };

//   const filteredProducts = selectedCategories.length
//     ? products.filter((p) => selectedCategories.includes(p.category))
//     : products;

//   return (
//      <div>
//       <div>
//         <div
//           style={{ backgroundImage: `url(${collectionBanner})` }}
//           className="bg-cover flex justify-center items-center shadow-2xl bg-no-repeat bg-center b-height w-full">

//           <div className="container">
//             <div className="mb-6">
//               <Link to={ROUTES.HOME}>
//                 <img src={img2} alt="" className="h-32" />
//               </Link>
//             </div>
//             <div className="grid md:grid-cols-2 items-center justify-center">
//               <div>
//                 <img src={collectionTitle} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container">
//           <div className="flex justify-end pt-6">
//             <p className="font-light text-sm">200 Results</p>
//           </div>
//           <div className="flex min-h-screen px-6 flex-col sm:flex-row py-15">
//             <div className="w-[284px] p-4">
//               <div className="border-b">
//                 <h2 className="text-3xl font-normal mb-4">Categories</h2>
//                 {categories.map((category) => (
//                   <div key={category} className="flex items-center mb-3">
//                     <input
//                       type="checkbox"
//                       id={category}
//                       className="mr-8 p-3 w-5 h-5"
//                       checked={selectedCategories.includes(category)}
//                       onChange={() => toggleCategory(category)}
//                     />
//                     <label htmlFor={category} className="font-normal text-[18px]">
//                       {category}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="w-full h-full p-4 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
//               {selectedProduct ? (
//                 <div key={selectedProduct.code} className="card">
//                   <div className="relative group">
//                     <Link to={ROUTES.PRODUCTVIEW}>
//                       <img src={selectedProduct.img} alt={selectedProduct.name} className="card-img mb-3 w-full" />
//                     </Link>
//                     <div className="absolute bottom-7 left-0 right-0 h-10 flex justify-center items-center">
//                       <button className="w-56 h-9 bg-black/100 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex gap-2">
//                     <label className="cursor-pointer">
//                       <input type="radio" name="color" className="hidden peer" />
//                       <div className="w-5 h-5 bg-gradient-to-r to-gray-400 from-gray-600 rounded-full border-2 border-white peer-checked:border-gray-700"></div>
//                     </label>
//                     <label className="cursor-pointer">
//                       <input type="radio" name="color" className="hidden peer" />
//                       <div className="w-5 h-5 bg-gradient-to-r to-yellow-400 from-yellow-600 rounded-full border-2 border-white peer-checked:border-gray-700"></div>
//                     </label>
//                     <label className="cursor-pointer">
//                       <input type="radio" name="color" className="hidden peer" />
//                       <div className="w-5 h-5 bg-gradient-to-r to-[#B53A3A] from-red-900 rounded-full border-2 border-white peer-checked:border-gray-700"></div>
//                     </label>
//                   </div>

//                   <div className="flex flex-col pt-2 gap-1">
//                     <h3 className="card-title">{selectedProduct.name}</h3>
//                     <p className="card-subtitle break-words line-clamp-2">{selectedProduct.desc}</p>
//                     <p className="price">₹{selectedProduct.price} <span className="price-wrong">₹232323</span></p>
//                   </div>
//                   <button className="absolute top-6 right-6 text-gray-500 hover:text-red-500">
//                     <IoMdHeart size={30} />
//                   </button>
//                 </div>
//               ) : (
//                 filteredProducts.map((product) => (
//                   <div key={product.id} className="card">
//                     <div className="relative group">
//                       <Link to={ROUTES.PRODUCTVIEW} state={{ product }}>
//                         <img src={product.image} alt={product.name} className="card-img mb-3 w-full" />
//                       </Link>
//                       <div className="absolute bottom-7 left-0 right-0 h-10 flex justify-center items-center">
//                         <button className="w-56 h-9 bg-black/100 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                           Add to Cart
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flex gap-2">
//                       <label className="cursor-pointer">
//                         <input type="radio" name="color" className="hidden peer" />
//                         <div className="w-5 h-5 bg-gradient-to-r to-gray-400 from-gray-600 rounded-full border-2 border-white peer-checked:border-gray-700"></div>
//                       </label>
//                       <label className="cursor-pointer">
//                         <input type="radio" name="color" className="hidden peer" />
//                         <div className="w-5 h-5 bg-gradient-to-r to-yellow-400 from-yellow-600 rounded-full border-2 border-white peer-checked:border-gray-700"></div>
//                       </label>
//                       <label className="cursor-pointer">
//                         <input type="radio" name="color" className="hidden peer" />
//                         <div className="w-5 h-5 bg-gradient-to-r to-[#B53A3A] from-red-900 rounded-full border-2 border-white peer-checked:border-gray-700"></div>
//                       </label>
//                     </div>

//                     <div className="flex flex-col pt-2 gap-1">
//                       <h3 className="card-title">{product.name}</h3>
//                       <p className="card-subtitle">{product.category}</p>
//                       <p className="price">₹534534 <span className="price-wrong">₹232323</span></p>
//                     </div>
//                     <button className="absolute top-6 right-6 text-gray-500 hover:text-red-500">
//                       <IoMdHeart size={30} />
//                     </button>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Products

