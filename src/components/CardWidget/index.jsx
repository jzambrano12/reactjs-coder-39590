import { useContext } from "react";
import Bag from "../../assets/images/bag.svg";
import { Context } from "../../context";
import "./cardWidget.css";

function CardWidget() {
  const { itemsAddedQuantity } = useContext(Context);

  return (
    <div className="card-widget">
      <img src={Bag} />
      <span>{itemsAddedQuantity.length}</span>
    </div>
  );
}

export default CardWidget;
