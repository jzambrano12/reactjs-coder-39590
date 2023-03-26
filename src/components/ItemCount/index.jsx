import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./itemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="item-count-container">
      <div className="controls-container">
        <div>
          <Button
            variant="dark"
            className="controls"
            onClick={() => setCount((prevState) => prevState - 1)}
            disabled={count < 2}
          >
            -
          </Button>
        </div>

        <div className="counter">{count}</div>
        <div>
          <Button
            variant="dark"
            className="controls"
            disabled={count === stock}
            onClick={() => setCount((prevState) => prevState + 1)}
          >
            +
          </Button>
        </div>
      </div>
      <div className="add-to-cart">
        <Button variant="dark" onClick={() => onAdd(count)}>
          Añadir al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
