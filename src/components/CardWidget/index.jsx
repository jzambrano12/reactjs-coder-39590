import { useContext } from "react";
import Bag from "../../assets/images/bag.svg";
import { Context } from "../../context";
import "./cardWidget.css";

function CardWidget() {
  const { productsAdded } = useContext(Context);

  return (
    <button className="card-widget">
      <img src={Bag} />
      {productsAdded.length}
    </button>
  );
}

export default CardWidget;
