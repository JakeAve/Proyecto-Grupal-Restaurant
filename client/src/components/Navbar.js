import React from "react";
import { Link } from "react-router-dom";
import images from "../constants/images";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="navbar"
    >
      <Container fluid className="fs-5">
        <Navbar.Brand className="me-5">
          <Link to={"/"}>
            <img src={images.logo} alt="" height="80px" />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/order"}>
              Pedir
            </Nav.Link>
            <Nav.Link as={Link} to={"/menu"}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to={"/tragos"}>
              Tragos
            </Nav.Link>
            <Nav.Link as={Link} to={"/reservas"}>
              Reservas
            </Nav.Link>
            <Nav.Link as={Link} to={"/fiestas"}>
              Fiestas
            </Nav.Link>
            <Nav.Link as={Link} to={"/contacto"}>
              Contacto
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Item className="nav-link">
              <a
                href="https://api.whatsapp.com/send?phone=56999056122&text=Hola%20quiero%20hacer%20un%20pedido"
                target="_blank" className="text-light"
              >
                <FaWhatsapp fontSize={36} className="mx-3" />
              </a>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <a href="https://www.facebook.com/" target="_blank" className="text-light">
                <FaFacebookF fontSize={36} className="mx-3" />
              </a>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <a href="https://www.instagram.com/" target="_blank" className="text-light">
                <FaInstagram fontSize={36} className="mx-3" />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
