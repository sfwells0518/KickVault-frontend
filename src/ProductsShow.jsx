export function ProductsShow(props) {
  return (
    <div className="products-show">
      <h4>{props.product.name}</h4>
      <p>{props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <div className="product-images">
        {props.product.images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Product ${props.product.name}`}
            className="product-image"
          />
        ))}
      </div>
    </div>
  );
}
