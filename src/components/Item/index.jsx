function Item({ product }) {
  return (
    <div>
      <p>{product.name}</p>
      <img src={product.image} />
    </div>
  );
}

export default Item;
