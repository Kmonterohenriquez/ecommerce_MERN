import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" id="navbar">
      <Container>
        <Link to="/">
          <Navbar.Brand>Kevin Electronic</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/cart">
                <i className="fas fa-shopping-cart "></i>Cart
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">
                <i className="fas fa-user"></i>Sign In
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
