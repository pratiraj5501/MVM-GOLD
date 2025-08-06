 
import React from "react";
import { FILE_URL } from "../../config/config";
const modifyPrice = (price) => {
  if (typeof price !== 'number') return '';
  return price.toLocaleString('en-IN'); // 'en-IN' for Indian number formatting
};

const MobileProductCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg  w-full">
  <img
    src={`${FILE_URL}${item?.images[0]}`}
    alt={item?.shortTitle || "Product Image"}
    className="w-full h-40 object-cover rounded-md p-3"
  />
  <div className=" w-full bg-gray-100 p-2 rounded-b-lg">

  <h3 className="mt-3 text-md font-medium text-gray-800 truncate px-3 ">
    {item?.shortTitle}
  </h3>
  <div className="flex items-center space-x-2  ml-2">
    <span className="text-base font-semibold text-black">
      ₹ {modifyPrice(item?.price)}
    </span>
    {item?.oldPrice && (
      <span className="text-sm text-gray-400 line-through">
        ₹ {modifyPrice(item?.oldPrice)}
      </span>
    )}
  </div>
  </div>

</div>

  );
};

export default MobileProductCard;
