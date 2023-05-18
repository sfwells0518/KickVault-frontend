export function ProductsShow(props) {
  return (
    <div>
      <p>Name: {props.product.name}</p>
      <p>Description: {props.product.name}</p>
      <p>Image(s): {props.product.image.url}</p>
    </div>
  );
}
