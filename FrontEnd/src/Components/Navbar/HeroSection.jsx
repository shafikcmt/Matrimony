import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./Navbar.css";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    lookingFor: "",
    minAge: "",
    maxAge: "",
    religion: "",
    motherTongue: "",
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const queryParams = new URLSearchParams(searchData).toString();
    navigate(`/search-results?${queryParams}`);
  };

  return (
    <div className="hero-section">
      <Container className="d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="mb-4">Find Your Perfect Match</h1>
        <p className="mb-4">Join thousands of singles looking for love and companionship.</p>

        <Form className="search-form w-100">
          <Row className="justify-content-center">
            <Col md={2} sm={4} xs={12} className="mb-2">
              <Form.Select name="lookingFor" onChange={handleChange}>
                <option value="">I'm looking for</option>
                <option value="woman">Woman</option>
                <option value="man">Man</option>
              </Form.Select>
            </Col>
            <Col md={2} sm={4} xs={12} className="mb-2">
              <Form.Control name="minAge" type="number" placeholder="Age start" onChange={handleChange} />
            </Col>
            <Col md={2} sm={4} xs={12} className="mb-2">
              <Form.Control name="maxAge" type="number" placeholder="Age end" onChange={handleChange} />
            </Col>
            <Col md={2} sm={6} xs={12} className="mb-2">
              <Form.Select name="religion" onChange={handleChange}>
                <option value="">Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="sikh">Sikh</option>
                <option value="other">Other</option>
              </Form.Select>
            </Col>
            <Col md={2} sm={6} xs={12} className="mb-2">
              <Form.Select name="motherTongue" onChange={handleChange}>
                <option value="">Mother Tongue</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="tamil">Tamil</option>
                <option value="telugu">Telugu</option>
                <option value="other">Other</option>
              </Form.Select>
            </Col>
            <Col md={2} sm={12} xs={12} className="mb-2">
              <Button variant="primary" className="w-100" onClick={handleSearch}>Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default HeroSection;
