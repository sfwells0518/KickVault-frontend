export function ProductsIndex(props) {
  return (
    <div>
      <h3>All Products</h3>
      {props.products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <h5>{product.description}</h5>
          <p>{product.price}</p>
          <img src={product.image.url} />
        </div>

      ))}
    </div>
  )

}