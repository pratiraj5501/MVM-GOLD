 import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { ROUTES } from "../constant";

// Animation variants
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  closed: { opacity: 0, y: -15, transition: { duration: 0.7 } },
};

const links = [
  { name: "Home", path: ROUTES.HOME },
  { name: "Gifting", path: ROUTES.GIFTING },
  { name: "Collections", path: ROUTES.COLLECTIONS },
  { name: "Gallery", path: ROUTES.GALLERY },
  { name: "About", path: ROUTES.ABOUT },
  { name: "Contact Us", path: ROUTES.CONTACT },
];

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👇👇👇 CLEAR CONDITIONAL RETURN 👇👇👇
  return isMobileView ? (
    // ✅ MOBILE NAVBAR
  <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-4 py-3">
  <div className="flex items-center justify-between gap-4">
    {/* Hamburger Icon */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-gray-700 focus:outline-none"
    >
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
      </svg>
    </button>

    {/* Logo */}
    <Link to={ROUTES.HOME} className="flex-1 flex justify-center">
      <img src={logo} alt="Logo" className="h-8" />
    </Link>

    {/* Search Bar */}
    <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-[65%] max-w-[260px]">
      <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.35-4.65a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none text-sm px-2 w-full"
      />
      <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 18a1.5 1.5 0 001.5-1.5H8.5A1.5 1.5 0 0010 18zm3.707-2.293a1 1 0 00-1.414-1.414L10 16.586l-2.293-2.293a1 1 0 00-1.414 1.414L8.586 18l-2.293 2.293a1 1 0 001.414 1.414L10 19.414l2.293 2.293a1 1 0 001.414-1.414L11.414 18l2.293-2.293z" />
      </svg>
    </div>
  </div>

  {/* Slide-out Menu */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={wrapperVariants}
        className="origin-top bg-gray-100 mt-3 px-6 py-5 space-y-4 rounded-md shadow"
      >
        {links.map((link) => (
          <motion.div key={link.name} variants={itemVariants}>
            <Link
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium ${
                location.pathname === link.path ? "text-[#57321A]" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</nav>


  ) : (
    // ✅ DESKTOP NAVBAR
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to={ROUTES.HOME}>
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
        <div className="flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium text-gray-700 relative group ${
                location.pathname === link.path ? "text-[#57321A]" : ""
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#57321A] transition-all duration-300 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
