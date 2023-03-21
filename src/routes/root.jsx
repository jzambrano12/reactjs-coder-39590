import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import "../styles/routes.css";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <Container className="route-container">
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id}
      />
    </Container>
  );
}

export default Root;
