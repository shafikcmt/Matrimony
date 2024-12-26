import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './LoginPopup.css';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';

const LoginPopup = ({ show, handleClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    handleClose(); // Close the Login popup
    setShowPopup(true); // Show the Registration popup
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login to Heavenlymatch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <p className="text-muted small">
            Don't have an account?{' '}
            <a href="#" onClick={handleShowPopup}>
              Register here
            </a>
          </p>
        </Modal.Footer>
      </Modal>

      {/* Registration Popup */}
      <RegistrationPopup show={showPopup} onHide={handleClosePopup} />
    </>
  );
};

export default LoginPopup;
