import { Outlet as Page } from "react-router-dom";
import Navbar from "../NavBar";
import "./layout.css";

function Layout() {
  return (
    <main className="layout-container">
      <Navbar />
      <Page />
      <footer className="footer-container">
        <span>
          Made by{" "}
          <a href="https://jzambrano.me" target="_blank">
            Jorge Zambrano
          </a>
          🤓
        </span>
      </footer>
    </main>
  );
}

export default Layout;
