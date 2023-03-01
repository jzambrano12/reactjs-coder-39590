// ACA EL CODIGO DE REACT
import CardWidget from "../CardWidget";
import "./navbar.css";

function NavBar({ changeValue }) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <button onClick={changeValue}>Cambiar valor del estado</button>
        </li>
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
