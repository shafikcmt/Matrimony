import React, { useState } from "react";
import { Container, Row, Col, Card, Nav, Button, Image, Table } from "react-bootstrap";
import { BsHeart, BsEnvelope, BsTelephone, BsGeoAlt, BsBriefcase, BsPerson } from "react-icons/bs";

const ProfileView = () => {
  const [activeTab, setActiveTab] = useState("basic");

  const profile = {
    name: "Priya Sharma",
    age: 28,
    height: "5'6\"",
    location: "Mumbai, Maharashtra",
    education: "MBA - Finance",
    occupation: "Investment Banker",
    income: "₹15-20 LPA",
    about: "I'm an ambitious and family-oriented person who loves traveling, reading, and cooking.",
    photos: [
      "https://via.placeholder.com/300x400",
      "https://via.placeholder.com/300x400",
      "https://via.placeholder.com/300x400",
    ],
    contactInfo: {
      email: "priya.s@example.com",
      phone: "+91 98765 43210",
    },
  };

  return (
    <Container className="my-4">
      {/* Profile Header */}
      <Card className="border-0 mb-4 shadow-sm">
        <Card.Header className="bg-danger text-white text-center py-4">
          <Image
            src="https://via.placeholder.com/200"
            roundedCircle
            className="border border-4 border-white shadow mb-3"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
          <h2 className="fw-bold">{profile.name}</h2>
          <p className="mb-1">
            <BsPerson className="me-2" />
            {profile.age} yrs, {profile.height}
          </p>
          <p className="mb-1">
            <BsGeoAlt className="me-2" />
            {profile.location}
          </p>
          <p>
            <BsBriefcase className="me-2" />
            {profile.occupation}
          </p>
          <div>
            <Button variant="light" className="me-2">
              <BsHeart className="me-1" /> Connect
            </Button>
            <Button variant="outline-light">
              <BsEnvelope className="me-1" /> Message
            </Button>
          </div>
        </Card.Header>
      </Card>

      {/* Profile Navigation */}
      <Card className="mb-4">
        <Card.Body className="p-0">
          <Nav variant="tabs" className="flex-nowrap overflow-auto">
            {["basic", "photos", "contact"].map((tab) => (
              <Nav.Item key={tab}>
                <Nav.Link
                  onClick={() => setActiveTab(tab)}
                  active={activeTab === tab}
                  className="text-dark px-3"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Card.Body>
      </Card>

      {/* Profile Content */}
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          {activeTab === "basic" && (
            <>
              <h4>About Me</h4>
              <p className="text-muted">{profile.about}</p>
              <h5>Details</h5>
              <Table striped bordered hover responsive>
                <tbody>
                  <tr>
                    <td>Age</td>
                    <td>{profile.age} years</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{profile.height}</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>{profile.location}</td>
                  </tr>
                  <tr>
                    <td>Education</td>
                    <td>{profile.education}</td>
                  </tr>
                  <tr>
                    <td>Occupation</td>
                    <td>{profile.occupation}</td>
                  </tr>
                  <tr>
                    <td>Income</td>
                    <td>{profile.income}</td>
                  </tr>
                </tbody>
              </Table>
            </>
          )}
          {activeTab === "photos" && (
            <>
              <h4>Photo Gallery</h4>
              <Row>
                {profile.photos.map((photo, index) => (
                  <Col sm={6} md={4} key={index} className="mb-3">
                    <Card>
                      <Card.Img variant="top" src={photo} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}
          {activeTab === "contact" && (
            <>
              <h4>Contact Information</h4>
              <p>
                <BsEnvelope className="me-2" /> {profile.contactInfo.email}
              </p>
              <p>
                <BsTelephone className="me-2" /> {profile.contactInfo.phone}
              </p>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfileView;
