import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <Container className="registration-page py-5">
      <h2 className="text-center mb-4">Create Your Account</h2>
      <Form className="registration-form">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Create a password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm your password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Register Now
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
