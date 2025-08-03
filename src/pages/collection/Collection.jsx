import React, { useContext } from "react";
import img1 from "../../assets/logo.png"
import img2 from "../../assets/collection/collection.png"
import img3 from "../../assets/collection/bg.png"
import i1 from "../../assets/collection/img1.png"
import i2 from "../../assets/collection/img2.png"
// import i2 from "../../assets/collection/purusharth.svg"
import i3 from "../../assets/collection/img3.png"
import i4 from "../../assets/collection/img4.png"
import i5 from "../../assets/collection/img5.png"
import i6 from "../../assets/collection/img6.png"
import i7 from "../../assets/collection/img7.png"
import p1 from "../../assets/purusharth/pu1.png";
import n1 from "../../assets/collection/n1.jpeg";
import n2 from "../../assets/collection/n2.jpg";
import n3 from "../../assets/collection/n3.webp";
import n4 from "../../assets/collection/n4.jpg";
import n5 from "../../assets/collection/n5.webp";
import p2 from "../../assets/purusharth/ss1.png";
import p3 from "../../assets/purusharth/ss4.png";
import p4 from "../../assets/purusharth/ss2.png";
import p5 from "../../assets/purusharth/ss3.png";
import s1 from "../../assets/shrungar/sh1.png";
import s2 from "../../assets/shrungar/sh2.png";
import s3 from "../../assets/shrungar/sh3.png";
import s4 from "../../assets/shrungar/sh4.png";
import su1 from "../../assets/sushobhita/su1.png";
import su2 from "../../assets/sushobhita/su2.png";
import su3 from "../../assets/sushobhita/su3.png";
import su4 from "../../assets/sushobhita/su4.png";
import p11 from "../../assets/parampara/p1.png";
import p12 from "../../assets/parampara/p2.png";
import p13 from "../../assets/parampara/p3.png";
import p14 from "../../assets/parampara/p4.png";
import p15 from "../../assets/parampara/p5.png";
import sv1 from "../../assets/soundary/s1.png";
import sv2 from "../../assets/soundary/s2.png";
import sv3 from "../../assets/soundary/s3.png";
import sp1 from "../../assets/special/sp1.png";
import sp2 from "../../assets/special/sp2.png";
import sp3 from "../../assets/special/sp3.png";
import sp4 from "../../assets/special/sp4.png";
import b1 from "../../assets/collection/b1.png";
import b2 from "../../assets/collection/b2.png";
import b3 from "../../assets/collection/b3.png";
import b4 from "../../assets/collection/b4.png";
import b5 from "../../assets/collection/b5.png";
import b6 from "../../assets/collection/b6.png";
import b7 from "../../assets/collection/b7.png";


import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { ROUTES } from "../../constant";
import { ProductContext } from "../context/ProductContext";
const collections = [
  {
    title: i1,
    banner:b1,
    items: [
      { img: n1, name: "हार ", desc: "A traditional Indian necklace, often made of gold and adorned with intricate designs.", code: "123456789", price: "14685" },
      { img: n2, name: "नेकलेस", desc: "Our Mala collection embraces heritage with beautifully handcrafted beaded and gemstone malas.", code: "123456789", price: "14685" },
      { img: n3, name: "बांगडी ", desc: " Circular wrist jewelry, commonly worn in pairs or sets.", code: "123456789", price: "14685" },
      { img: n4, name: "माळा ", desc: "Our Mala collection embraces heritage with beautifully handcrafted beaded and gemstone malas. ", code: "123456789", price: "14685" },
      // { img: n5, name: "जोडवे ", desc: "A traditional Indian ornament primarily worn by married women. ", code: "123456789", price: "14685" },
    ]
  },
  {
    
    title: i2,
    banner:b2,
    items: [
      { img: p1, name: "ब्रोचेस", desc: "Adorn yourself with our intricately designed brooches, crafted to add a touch of sophistication to any outfit. From floral motifs to vintage-inspired pieces, our collection is perfect for elevating your style.", code: "123456789", price: "14685" },
      { img: p2, name: "माळा", desc: "Our Mala collection embraces heritage with beautifully handcrafted beaded and gemstone malas.", code: "123456789", price: "14685" },
      { img: p3, name: "ब्रेसलेट", desc: "Keep your style a cut above the rest when you adorn this circular bracelet, crafted in 22 karat yellow gold", code: "123456789", price: "14685" },
      { img: p4, name: "अंगठी", desc: "Discover our rings collection, featuring stunning designs in gold, silver, and diamond settings. ", code: "123456789", price: "14685" },
      // { img: p5, name: "टाय पिन", desc: "Complete your formal look with our tie pins, designed for the modern gentleman. Crafted with precision, these accessories add a touch of class to your attire, making every moment special.", code: "123456789", price: "14685" },
    ]
  }, {

    title: i3,
    banner:b3,
    items: [
      { img: p11, name: "मोहन माळ ", desc: "The Mohan Mala is a simple yet graceful necklace, known for its evenly spaced round gold beads and classic design. ", code: "123456789", price: "14685" },
      { img: p12, name: "बोर माळ ", desc: "The Bor Mala is a delicate yet elegant necklace known for its fine craftsmanship and traditional appeal.", code: "123456789", price: "14685" },
      { img: p13, name: "राणी हार ", desc: "The Rani Haar is a grand and majestic necklace that embodies the essence of royalty. ", code: "123456789", price: "14685" },
      { img: p14, name: "चपला हार ", desc: "The Chapla Haar is a stunningly intricate necklace made of fine gold beads. Its elegant design enhances a bride’s look, making it perfect for weddings and grand celebrations.", code: "123456789", price: "14685" },
      // { img: p15, name: "ठुशी", desc: "The Thushi is a beautifully handcrafted Maharashtrian necklace made of closely woven gold beads. ", code: "123456789", price: "14685" },
    ],
  },
  {
    title: i4,
    banner:b4,
    items: [
      { img: s1, name: "पाटल्या ", desc: "The Patlya are solid, thick gold bangles with minimal yet elegant designs, ideal for daily wear and special events. ", code: "123456789", price: "14685" },
      { img: s2, name: "बांगड्या ", desc: "A woman’s jewelry collection is incomplete without bangles. From delicate gold bangles to intricately designed temple jewelry styles, our collection brings you a mix of elegance and tradition, perfect for every occasion.", code: "123456789", price: "14685" },
      { img: s3, name: "तोडे ", desc: "The Tode are thick, sturdy gold bangles worn traditionally by married women, symbolizing strength and prosperity. ", code: "123456789", price: "14685" },
      { img: s4, name: "ब्रेसलेट", desc: "Our bracelets are crafted with intricate designs, blending modern aesthetics with traditional charm.", code: "123456789", price: "14685" },
    ],

  },
  {
    title: i5,
    banner:b5,
    items: [
      { img: su1, name: "कर्णभूषणे", desc: "The Karnabhushana or traditional earrings come in a variety of designs, from classic Bugadi to intricate Jhumkas. ", code: "123456789", price: "14685" },
      { img: su2, name: "अंगठी", desc: "Our rings collection features exquisite gold, diamond, and gemstone-studded designs. ", code: "123456789", price: "14685" },
      { img: su3, name: "वाकी ", desc: "The Vaki, also known as an armlet, is a beautifully crafted gold ornament worn on the upper arm.", code: "123456789", price: "14685" },
      { img: su4, name: "नथ", desc: "The Nath is an iconic Maharashtrian nose ring, adorned with pearls, diamonds, and intricate gold work.", code: "123456789", price: "14685" },
    ],
  },
  {
    title: i6,
    banner:b6,
    items: [
      { img: sp1, name: "मंगळसूत्र", desc: "The Mangalsutra is a sacred necklace that signifies marital harmony and commitment. ", code: "123456789", price: "14685" },
      { img: sp2, name: "लक्ष्मी हार ", desc: "The Lakshmi Haar is a long gold necklace featuring intricate carvings of Goddess Lakshmi, symbolizing wealth and prosperity. ", code: "123456789", price: "14685" },
      { img: sp3, name: "१ ग्रॅम गोल्ड ", desc: "Our 1 Gram Gold Jewelry collection offers exquisitely designed ornaments that resemble pure gold, perfect for those who want elegance at an affordable price.", code: "123456789", price: "14685" },
      { img: sp4, name: "नथ", desc: "The Nath is an iconic Maharashtrian nose ring, adorned with pearls, diamonds, and intricate gold work.", code: "123456789", price: "14685" },
    ],

  },

  {
    title: i7,
    banner:b7,
    items: [
      { img: sv1, name: "मॉडर्न डिझाईन ", desc: "For those who love minimal yet stylish jewelry, our modern designs include sleek gold, rose gold, and diamond jewelry that complement everyday outfits. From geometric patterns to trendy statement pieces, these designs offer a chic and sophisticated look.", code: "123456789", price: "14685" },
      { img: sv2, name: "चांदी ", desc: "Explore our exquisite silver jewelry collection, featuring intricately crafted silver necklaces, bangles, rings, and anklets. With a blend of tradition and modernity, these pieces are perfect for both ethnic and casual wear.", code: "123456789", price: "14685" },
      { img: sv3, name: "नेकलेस सेट", desc: "Our Necklace Sets are designed to add grandeur to any occasion.", code: "123456789", price: "14685" },

    ],
  },
];

const Collection = () => {


  const { setSelectedProduct,setCollectionTitle,setCollectionBanner  } = useContext(ProductContext);
  const handleProductChange = (item, title,banner) => {
    console.log("Item", item);
    console.log("title", title);
    console.log("banner", banner);
    setSelectedProduct(item);
    setCollectionTitle(title);
    setCollectionBanner(banner);

  };
  return (
    <div
      className="relative bg-repeat bg-contain bg-center z-10 p-6"
      style={{ backgroundImage: `url(${img3})` }}
    >
      <div className="max-w-7xl mx-auto relative ">
        <nav className="bg-transparent px-10 mb-10">
          <div className="container mx-auto flex justify-between items-center">
            <img src={img2} alt="" className='h-12 w-auto' />
            <Link to="/">
              <img
                src={img1}
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </nav>
        <div className="relative pb-8">
          <div className="absolute inset-0 pb-8 bg-[#660033] mix-blend-overlay"></div>

          <div className="px-10 py-5">

            <>

            </>
            {collections.map((collection, i) =>
              <>
                <div key={i} className="container mb-10"
                
                >
                  <div className="flex items-end pt-8 pb-2 relative">
                    {/* <img src={collection.banner} alt="" className="z-10 h-16" /> */}
                    <img src={collection.title} alt="" className="z-10 h-16" />

                    <div className="flex-grow border-b border-dashed border-white mx-3"></div>

                    <div className="absolute right-[50px] top-0 h-full w-[1px] 
            bg-[radial-gradient(circle,_white_10%,_transparent_20%)] 
            bg-repeat-y bg-[length:2px_5px]">
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8  flex flex-row">
                  {collection.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border-2 border-red-700 rounded-lg shadow-md overflow-hidden transition-transform 
             duration-300 ease-in-out z-10 hover:translate-y-[-10px] hover:shadow-2xl hover:scale-105"
             onClick={() => handleProductChange(item, collection.title,collection.banner)}
             >
                      <Link
                        to={{
                          pathname: ROUTES.PRODUCTS,
                          state: { product: item, title: collection.title ,banner:collection.banner},
                        }}
                      >

                        <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
                      </Link>
                      <div className="px-4 py-3">
                        <h3 className="text-lg pb-1 text-[#121212] font-medium">{item.name}</h3>
                        <p className="text-sm pb-1 text-gray-500 break-words line-clamp-2">
                          {item.desc}
                        </p>
                        <p className="text-sm pt-1 text-gray-800">₹{item.price}</p>
                        <div className="flex justify-end py-2">
                          <Link to={ROUTES.PRODUCTS}>

                            <FaArrowRight className="text-gray-400" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}





          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
