import { Outlet as Page } from "react-router-dom";
import Navbar from "../NavBar";

function Layout() {
  return (
    <main>
      <Navbar />
      <Page />
    </main>
  );
}

export default Layout;
