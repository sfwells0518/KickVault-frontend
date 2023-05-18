export function ProductsShow(props) {
  return (
    <div>
      <p>Shoe Name: {props.product.name}</p>
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p>Image(s): {props.product.images[0].url}</p>
    </div>
  );
}
