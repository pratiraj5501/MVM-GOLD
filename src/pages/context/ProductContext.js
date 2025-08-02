import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [collectionTitle, setCollectionTitle] = useState(""); // New state for title
  const [collectionBanner, setCollectionBanner] = useState(""); // New state for title

  return (
    <ProductContext.Provider value={{ selectedProduct, setSelectedProduct, collectionTitle, setCollectionTitle,collectionBanner, setCollectionBanner }}>
      {children}
    </ProductContext.Provider>
  );
};
