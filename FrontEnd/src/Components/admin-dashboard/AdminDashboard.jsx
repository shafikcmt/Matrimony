import React, { useState } from 'react';
import { Table, Button, Container, Row, Col, Card, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Rahul Sharma', age: 28, status: 'Pending', subscription: 'Free', reports: 0 },
    { id: 2, name: 'Aisha Khan', age: 25, status: 'Verified', subscription: 'Premium', reports: 1 },
    { id: 3, name: 'John Doe', age: 30, status: 'Pending', subscription: 'Free', reports: 2 },
    { id: 4, name: 'Simran Kaur', age: 27, status: 'Verified', subscription: 'Premium', reports: 0 },
    { id: 5, name: 'Priya Patel', age: 26, status: 'Pending', subscription: 'Free', reports: 3 }
  ]);

  const toggleStatus = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: user.status === 'Pending' ? 'Verified' : 'Pending' } : user));
  };

  return (
    <>
      <Container className="mt-4">
        <Row className="mb-3">
          <Col md={4}>
            <Card className="p-3 text-center">
              <h5>Total Users</h5>
              <h2>{users.length}</h2>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 text-center">
              <h5>Verified Profiles</h5>
              <h2>{users.filter(user => user.status === 'Verified').length}</h2>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 text-center">
              <h5>Pending Profiles</h5>
              <h2>{users.filter(user => user.status === 'Pending').length}</h2>
            </Card>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Subscription</th>
              <th>Reports</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.status}</td>
                <td>{user.subscription}</td>
                <td>{user.reports}</td>
                <td>
                  <Button
                    variant={user.status === 'Pending' ? 'success' : 'danger'}
                    onClick={() => toggleStatus(user.id)}
                  >
                    {user.status === 'Pending' ? 'Verify' : 'Revoke'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default AdminDashboard;
