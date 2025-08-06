
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "@heroicons/react/24/solid"; // ✅ v2 path
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // ✅ Correct


const MobileDropdown = ({selectedMobileCategories,setSelectedMobileCategories ,categories}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Category");
        // const [selectedCategories, setSelectedCategories] = useState([]);
          const dropdownRef = useRef();

 const toggleCategory = (categoryId) => {
  console.log("Toggled Category ID:", categoryId); // ✅ Console here

  setSelectedMobileCategories((prev) =>
    prev.includes(categoryId)
      ? prev.filter((c) => c !== categoryId)
      : [...prev, categoryId]
  );
};
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
     <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between space-x-2 bg-purple-500 text-white text-sm 
        font-semibold hover:bg-purple-600 focus:outline-none p-3 w-32 m-4 rounded-2xl"
      >
        <span>{selected}</span>
        <ChevronDownIcon className="h-4 w-4 text-white" />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute z-10 mt-2 w-56 flex flex-col items-start bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          >
            {categories?.map((item, index) => (
              <div key={index} className="flex items-center mb-3 ml-6">
                <input
                  type="checkbox"
                  id={item.category}
                  className="mr-3 w-5 h-5"
                  checked={selectedMobileCategories.includes(item._id)}
                  onChange={() => toggleCategory(item._id)}
                />
                <label htmlFor={item.category} className="font-normal text-sm">
                  {item.category}
                </label>
              </div>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileDropdown;
