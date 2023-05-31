

export function ProductsShow(props) {
  return (
    <div className="products-show">
      <h3>{props.product.name}</h3>
      <h6>Price: ${props.product.price}</h6>
      <subtitle>{props.product.description}</subtitle>

      <div className="product-images">
        {props.product.images.map((image, index) => (
          <img key={index} src={image.url} alt={`Product ${props.product.name}`} className="product-image" />
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button className="add-to-bag-button">Add to Bag</button>
        <button className="favorite-button">
          Favorite{" "}
          <img
            src="https://cdn2.iconfinder.com/data/icons/4web-3/139/favourite-512.png"
            alt="heart"
            style={{ width: "28px", marginRight: "-3px" }}
          />
        </button>
      </div>
    </div>
  );
}
