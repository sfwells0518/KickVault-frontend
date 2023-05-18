import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";


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
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} /> 
      </Modal>
    </div>
  );

}