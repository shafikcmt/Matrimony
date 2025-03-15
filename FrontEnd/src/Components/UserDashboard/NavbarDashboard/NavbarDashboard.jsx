import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Navbar.css";

const DashboardNavbar = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg" className="dashboard-navbar">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="navbar-logo"
          />{" "}
          Bangladeshi Matrimony
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">MY HOME</Nav.Link>
            <Nav.Link href="#matches">MATCHES</Nav.Link>
            <Nav.Link href="#inbox">INBOX</Nav.Link>
            <Nav.Link href="#search">SEARCH</Nav.Link>
            <Nav.Link href="#daily-matches">DAILY MATCHES</Nav.Link>
            <Nav.Link href="#upgrade">
              <Button variant="outline-light">Upgrade</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <img
          src="/user-avatar.png"
          alt="User Avatar"
          className="user-avatar"
        />
      </Container>
    </Navbar>
  );
};

export default DashboardNavbar;
