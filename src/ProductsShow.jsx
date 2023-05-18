export function ProductsShow(props) {
  return (
    <div>
      <p>Name: {props.product.name}</p>
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p>Image(s): {props.product.images.url}</p>
    </div>
  );
}
