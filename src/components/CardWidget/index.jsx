import { useContext } from "react";
import Bag from "../../assets/images/bag.svg";
import { Context } from "../../context";
import "./cardWidget.css";

function CardWidget() {
  const { itemsAddedQuantity } = useContext(Context);

  return (
    <button className="card-widget">
      <img src={Bag} />
      {itemsAddedQuantity.length}
    </button>
  );
}

export default CardWidget;
