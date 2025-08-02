import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Home from "./mainpage/Home";
import Aboutmain from "./pages/About/Aboutmain";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import { ROUTES } from "./constant";
import Loader from "./pages/layout/Loader";
import Products from "./pages/Product/Products";
import ViewProductPage from "./pages/Product/ViewProductPage";
import Gallery from "./pages/gallery/Gallery";
import ViewGallery from "./pages/gallery/ViewGallery";
import Collection from "./pages/collection/Collection";
import { ProductProvider } from "./pages/context/ProductContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {loading && <Loader />} 
      {!loading && (
        <>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<Aboutmain />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.PRODUCTVIEW} element={<ViewProductPage />} />
            <Route path={ROUTES.GALLERY} element={<Gallery />} />
            <Route path={ROUTES.COLLECTIONS} element={<Collection />} />
            <Route path={ROUTES.GALLERYVIEW} element={<ViewGallery />} />
          </Routes>
          <Footer />
        </>
      )}

      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="scroll-top"
          initial={{ y: -450, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: 450, opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <FaArrowUp size={20} />
        </motion.button>
      )}
    </>
  );
}

function App() {
  return (
    <ProductProvider>
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  </ProductProvider>
  );
}

export default App;
