import { Container } from "react-bootstrap";
import ItemDetailContainer from "../components/ItemDetailContainer";
import "../styles/routes.css";

function Item() {
  return (
    <Container className="route-container">
      <ItemDetailContainer />
    </Container>
  );
}

export default Item;
