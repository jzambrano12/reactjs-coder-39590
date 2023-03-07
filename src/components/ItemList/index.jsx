import Item from "../Item";
import "./itemList.css";

function ItemList({ products }) {
  return (
    <div className="products-container">
      <ul className="products-list">
        {products.map((product, index) => (
          <Item product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
