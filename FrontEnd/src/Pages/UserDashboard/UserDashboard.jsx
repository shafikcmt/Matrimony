import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DashboardNavbar from "../../Components/UserDashboard/NavbarDashboard/NavbarDashboard";
import Sidebar from "../../Components/UserDashboard/NavbarDashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <DashboardNavbar />
      <Container fluid>
        <Row>
          {/* Left Sidebar */}
          <Col md={3}>
            <Sidebar />
          </Col>

          {/* Main Content */}
          <Col md={9}>
            {/* Main content goes here */}
            <h2>Welcome to Your Dashboard</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
