import "./navbar.css";

// React bootstrap components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CardWidget";

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <NavLink to="/">Ecommerce Logo</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink to={"/category/shoes"}>Shoes</NavLink>
          </Nav.Link>
          <Nav.Link href="#features">
            <NavLink to={"/category/pants"}>Pants</NavLink>
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
