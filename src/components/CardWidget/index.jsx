import Bag from "../../assets/images/bag.svg";
import "./cardWidget.css";

function CardWidget() {
  return (
    <div className="card-widget">
      <img src={Bag} />
      <span>3</span>
    </div>
  );
}

export default CardWidget;
