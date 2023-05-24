import axios from "axios";
import { Login } from "./Login";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsShow } from "./ProductsShow";

import { Modal } from "./Modal";


import { Routes, Route } from "react-router-dom";


export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  const handleShowProduct = (myProduct) => {
    setIsProductsShowVisible(true);
    setCurrentProduct(myProduct)
  };

  const handleClose = () => {
    setIsProductsShowVisible(false);
  };

  
  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductsIndex products={products} onShowProduct={handleShowProduct} />} />
      </Routes>

      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </div>
  );

}