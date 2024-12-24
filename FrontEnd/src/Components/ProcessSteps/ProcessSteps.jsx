import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserPlus, FaHandshake, FaComments } from 'react-icons/fa';
import './ProcessSteps.css';

const ProcessSteps = () => {
  return (
    <div className="process-steps py-5">
      <Container>
        <h2 className="text-center mb-4">Find Your Special Someone</h2>
        <Row className="text-center">
          {/* Step 1: Sign Up */}
          <Col md={4} className="mb-4">
            <div className="step-icon mb-3">
              <FaUserPlus size={50} color="#007bff" />
            </div>
            <h4>Sign Up</h4>
            <p>Create your profile and share your preferences to start your journey.</p>
          </Col>
          {/* Step 2: Connect */}
          <Col md={4} className="mb-4">
            <div className="step-icon mb-3">
              <FaHandshake size={50} color="#28a745" />
            </div>
            <h4>Connect</h4>
            <p>Browse through profiles and connect with like-minded individuals.</p>
          </Col>
          {/* Step 3: Interact */}
          <Col md={4} className="mb-4">
            <div className="step-icon mb-3">
              <FaComments size={50} color="#ffc107" />
            </div>
            <h4>Interact</h4>
            <p>Engage in meaningful conversations to build a lasting connection.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProcessSteps;
