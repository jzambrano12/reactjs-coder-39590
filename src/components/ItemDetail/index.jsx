import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pants from "../../assets/images/Pants.jpeg";
import ItemCount from "../ItemCount";
import "./itemDetail.css";

function ItemDetail({ product }) {
  const [added, setAdded] = useState(0);

  function onAdd(count) {
    setAdded(count);
  }

  return (
    <Container>
      <div className="item-detail-container">
        <div>
          <img src={Pants} alt="Product image" />
        </div>
        <div className="product-information">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span className="product-price">Price: ${product.precio}</span>
          <span className="product-stock">Stock: {product.stock}</span>

          <div>
            {added == 0 && <ItemCount stock={product.stock} onAdd={onAdd} />}
            <div className="ctas-container">
              {added >= 1 && (
                <Link to="/cart">
                  <Button>Terminar compra</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ItemDetail;
