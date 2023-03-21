import { Container } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/error-page.css";

function ErrorPage() {
  const error = useRouteError();

  return (
    <main>
      <NavBar />
      <Container className="error-container">
        <h1>Oops!</h1>
        <p>Lo sentimos, un error inesperado ocurrio.</p>
        <p>
          <i className="error-message">{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="btn-back-to-home">Volver al home</button>
        </Link>
      </Container>
    </main>
  );
}

export default ErrorPage;
