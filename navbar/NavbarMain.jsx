import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, NavLink } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.css";
import "./navbarcss.css";


function NavbarMain() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <a href="#">
          <img src="../src/assets/logo.png" alt="Nie działa" srcset="" />
        </a>
        <Navbar.Brand className="text" style={{ marginRight: "40px" }}>
          <NavLink to="Oferta">O nas</NavLink>
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="text">
          Oferta
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="text">
          Galeria
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="text">
          Realizacje
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="text">
          Kontakt
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
