// ACA EL CODIGO DE REACT
import CardWidget from "../CardWidget";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <button>Mouse</button>
        </li>
        <li>
          <button>Teclado</button>
        </li>
      </ul>
      <CardWidget />
    </div>
  );
}

export default NavBar;
