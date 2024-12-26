import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import { FaHeart } from 'react-icons/fa';
import LoginPopup from '../LoginPopup/LoginPopup';

const CustomNavbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const [showLogin, setShowLogin] = useState(false);

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);


  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
      <Navbar.Brand as={Link} to="/" className="brand-logo"><FaHeart className="brand-icon" /> HeavenlyMatch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Button variant="outline-primary" onClick={handleLoginShow} className="me-2">
          Login
          </Button>
          <Button variant="outline-primary" onClick={handleShowPopup}>
            Register
          </Button>
        </Navbar.Collapse>
        <LoginPopup show={showLogin} handleClose={handleLoginClose} />
        <RegistrationPopup show={showPopup} onHide={handleClosePopup} />
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
