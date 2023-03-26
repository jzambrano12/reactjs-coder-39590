import { useState } from "react";
import "./navbar.css";

// React bootstrap components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CardWidget";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) setIsScrolling(true);
      else setIsScrolling(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      bg="light"
      variant="light"
      style={{ height: isScrolling ? 80 : 100 }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <NavLink to="/" style={{ cursor: "pointer" }}>
            <img
              src="/logo.png"
              alt="Ecommerce logo"
              style={{
                height: isScrolling ? 80 : 100,
                transition: "all .5s ease",
              }}
            />
          </NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <NavLink to={"/category/shoes"} className="nav-link">
              Shoes
            </NavLink>
          </Nav.Link>
          <Nav.Link href="#features">
            <NavLink to={"/category/pants"} className="nav-link">
              Pants
            </NavLink>
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
