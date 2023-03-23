function ItemDetail({ product }) {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.precio}</p>
      <p>{product.stock}</p>
    </div>
  );
}

export default ItemDetail;
