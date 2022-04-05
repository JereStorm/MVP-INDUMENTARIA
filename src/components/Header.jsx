import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    // <header className="header bg-light d-flex align-items-center ">
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        bg="dark"
        className="text-light"
      >
        <Navbar.Brand>
          <h1 className="title-header text-uppercase font-italic m-3">
            mvp indumentaria deportiva
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-3">
            <NavDropdown title="Admin" className="text-info">
              <NavDropdown.Item as={NavLink} to="/admin/users">
                Usuarios
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Productos">
              <NavDropdown.Item as={NavLink} to="/products?remeras">
                Remeras
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products?pantalones">
                Pantalones
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/camperas">
                Camperas
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/buzos">
                Buzos
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/zapatillas">
                Zapatillas
              </NavDropdown.Item>
              <NavDropdown.Item>Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-3">
            <Nav.Link as={NavLink} to="/login">
              Iniciar Sesion
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              Registrarse
            </Nav.Link>
            <Nav.Link as={NavLink} to="/account">
              Mi Cuenta
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
