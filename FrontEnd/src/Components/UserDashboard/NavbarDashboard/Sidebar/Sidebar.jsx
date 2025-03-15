import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <Card>
        <Card.Header>Messages</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Inbox (0)</ListGroup.Item>
          <ListGroup.Item>Sent (0)</ListGroup.Item>
          <ListGroup.Item>Pending (0)</ListGroup.Item>
          <ListGroup.Item>Accepted (0)</ListGroup.Item>
          <ListGroup.Item>Replied (0)</ListGroup.Item>
          <ListGroup.Item>Declined (0)</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Sidebar;
