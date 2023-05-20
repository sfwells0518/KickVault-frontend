import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function ProductsIndex(props) {
  console.log(props.products);
  return (
    <div id="products-index" className="mt-4">
      <center>
        <h1>All Shoes</h1>
      </center>
      <div className="row">
        {props.products.map((product) => (
          <div key={product.id} className="col-sm-4 mb-3">
            <div className="card h-100">
              <div className="card-body card-body-custom d-flex flex-column">
                <h4 className="card-title">{product.name}</h4>
                <h6>${product.price}</h6>

                <Carousel showThumbs={true} dynamicHeight={true} emulateTouch={true} showIndicators={true}>
                  {product.images.map((image, index) => (
                    <div key={index}>
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
