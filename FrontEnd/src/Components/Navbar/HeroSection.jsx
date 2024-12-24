import React from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import './Navbar.css'
const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container className="d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="mb-4">Find Your Perfect Match</h1>
        <p className="mb-4">Join thousands of singles looking for love and companionship.</p>

        {/* Search Form */}
        <Form className="search-form w-100">
          <Row className="justify-content-center">
            <Col md={2} sm={4} xs={12} className="mb-2">
              <Form.Select aria-label="Looking for">
                <option value="">I'm looking for</option>
                <option value="woman">Woman</option>
                <option value="man">Man</option>
              </Form.Select>
            </Col>
            <Col md={2} sm={4} xs={12} className="mb-2">
              <Form.Control type="number" placeholder="Age start" />
            </Col>
            <Col md={2} sm={4} xs={12} className="mb-2">
              <Form.Control type="number" placeholder="Age end" />
            </Col>
            <Col md={2} sm={6} xs={12} className="mb-2">
              <Form.Select aria-label="Religion">
                <option value="">Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="sikh">Sikh</option>
                <option value="other">Other</option>
              </Form.Select>
            </Col>
            <Col md={2} sm={6} xs={12} className="mb-2">
              <Form.Select aria-label="Mother Tongue">
                <option value="">Mother Tongue</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
                <option value="other">Other</option>
              </Form.Select>
            </Col>
            <Col md={2} sm={12} xs={12} className="mb-2">
              <Button variant="primary" className="w-100">Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default HeroSection;
