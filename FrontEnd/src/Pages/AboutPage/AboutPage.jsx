import React, { useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { FaHeart, FaHandshake, FaUsers } from "react-icons/fa";
import "./AboutPage.css";
import RegistrationPopup from "../../Components/RegistrationPopup/RegistrationPopup";

const AboutPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="about-page">
      <div className="about-banner">
        <h1 className="text-center banner-title">About Heavenlymatch</h1>
        <p className="text-center banner-subtitle">
          Helping people find love, companionship, and lifelong happiness.
        </p>
      </div>
      <Container className="about-content py-5">
        <Row className="mb-5">
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <Image
              src="https://media.istockphoto.com/id/1387151117/photo/middle-eastern-couple-with-wife-wearing-hijab-embracing-at-home.jpg?s=612x612&w=0&k=20&c=jSbwK73nFLKEs7uCWBuEfBOWYfvwErPq9rt2urxB2M8="
              alt="Happy Couple"
              className="rounded-circle about-image"
            />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h2 className="about-title">Our Mission</h2>
            <p className="about-text">
              At Heavenlymatch, we believe everyone deserves to find their special
              someone. Our mission is to connect hearts worldwide by providing a
              platform that values trust, love, and compatibility. With advanced
              matching algorithms and personalized services, we make the journey
              toward your dream partnership effortless and memorable.
            </p>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col md={4}>
            <Card className="about-card text-center">
              <Card.Body>
                <FaHandshake size={50} color="#FF3366" className="card-icon mb-3" />
                <Card.Title>Trust</Card.Title>
                <Card.Text>
                  We prioritize safety and authenticity to create a trusted space
                  for your search.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="about-card text-center">
              <Card.Body>
                <FaHeart size={50} color="#FF3366" className="card-icon mb-3" />
                <Card.Title>Love</Card.Title>
                <Card.Text>
                  Our platform fosters meaningful connections that lead to lifelong
                  relationships.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="about-card text-center">
              <Card.Body>
                <FaUsers size={50} color="#FF3366" className="card-icon mb-3" />
                <Card.Title>Compatibility</Card.Title>
                <Card.Text>
                  Matching you based on shared values, interests, and aspirations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="about-footer py-4">
        <h2 className="text-center about-footer-title">
          Start your journey with Heavenlymatch today!
        </h2>
        <p className="text-center">
          Whether you're looking for love or a lifelong companion, we're here to
          help you find your perfect match.
        </p>
        <div className="text-center">
          <Button
            variant="danger"
            size="lg"
            className="get-started-btn"
            onClick={handleShowPopup}
          >
            Get Started
          </Button>
        </div>
      </div>
      <RegistrationPopup show={showPopup} onHide={handleClosePopup} />
    </div>
  );
};

export default AboutPage;
