import { useContext } from "react";
import { Context } from "../../context";

function ItemDetailContainer() {
  const { onAdd, onRemove } = useContext(Context);

  return (
    <div>
      <p>Item detail container</p>
      <button onClick={onAdd}>Add to cart</button>
      <button onClick={onRemove}>Remove from cart</button>
    </div>
  );
}

export default ItemDetailContainer;
