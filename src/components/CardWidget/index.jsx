import { useContext } from "react";
import { Link } from "react-router-dom";
import Bag from "../../assets/images/bag.svg";
import { Context } from "../../context";
import "./cardWidget.css";

function CardWidget() {
  const { productsAdded } = useContext(Context);

  return (
    <Link to="/cart">
      <button className="card-widget">
        <img src={Bag} />
        {productsAdded.length}
      </button>
    </Link>
  );
}

export default CardWidget;
