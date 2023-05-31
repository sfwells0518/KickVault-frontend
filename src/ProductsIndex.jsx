import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { ProductsShow } from "./ProductsShow";

export function ProductsIndex(props) {
  console.log(props.products);

  // Search filter functionality
  const [searchTerm, setSearchTerm] = useState("");

  // State to handle visibility of search field
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div id="products-index" className="mt-4">
      <center>
        <h1>Men's Shoes & Sneakers</h1>
      </center>

      <div className="row">
        <div className="search">
          <center>
            <p>
              Explore:
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </p>
          </center>
        </div>

        {props.products
          .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((product) => (
            <div key={product.id} className="col-sm-4 mb-3">
              <div className="card h-100">
                <div className="card-body card-body-custom d-flex flex-column">
                  <h4 className="card-title">{product.name}</h4>
                  <h6>${product.price}</h6>

                  <Carousel
                    showThumbs={true}
                    dynamicHeight={true}
                    emulateTouch={false}
                    showIndicators={false}
                    showArrows={false}
                  >
                    {product.images.map((image, index) => (
                      <div key={index} className="thumb-images">
                        <img src={image.url} alt="Product" />
                      </div>
                    ))}
                  </Carousel>
                  <br></br>
                  <div className="mt-auto text-center">
                    <button
                      className="red-button"
                      onClick={() => {
                        props.onShowProduct(product);
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
