import React, { useState } from 'react';
import { Modal, Button, ProgressBar, Form, Card, Nav, Tab, Badge } from 'react-bootstrap';
import { Bell, Heart, MessageSquare, Lock, Crown } from 'lucide-react';

const Dashboard = () => {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const dummyData = {
    profileCompletion: 75,
    suggestedMatches: [
      { id: 1, name: 'Safiqul sir', age: 28, location: 'India', compatibility: 85 },
      { id: 2, name: 'Rahul', age: 30, location: 'india', compatibility: 78 }
    ],
    shortlistedProfiles: [
      { id: 1, name: 'Shubham', age: 26, location: 'india', shortlistedDate: '2024-02-15' }
    ],
    recentVisitors: [
      { id: 1, name: 'Suraj', time: '2h ago' },
      { id: 2, name: 'Soniya', time: '5h ago' }
    ],
    connectionRequests: [
      { id: 1, name: 'Amit Kumar', age: 29, location: 'india', time: '3h ago' }
    ]
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-white shadow-sm p-3">
        <span className="navbar-brand text-primary fw-bold">HeavenlyMatch</span>
        <div>
          <Button variant="light" className="position-relative me-2">
            <Bell size={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">3</span>
          </Button>
          <Button variant="light" className="position-relative">
            <MessageSquare size={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">2</span>
          </Button>
        </div>
      </nav>

      <div className="container py-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <Card className="mb-3">
              <Card.Body className="text-center">
                <div className="rounded-circle bg-secondary d-inline-block" style={{ width: 96, height: 96 }}></div>
                <h5 className="mt-3">Priya Sharma</h5>
                <Badge bg="warning" className="text-dark">
                  <Crown size={12} className="me-1" /> Premium
                </Badge>
                <div className="mt-3">
                  <p className="mb-1">Profile Completion</p>
                  <ProgressBar now={dummyData.profileCompletion} label={`${dummyData.profileCompletion}%`} />
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                {['Profile', 'Matches', 'Messages', 'Favorites', 'Settings'].map((item, index) => (
                  <Button key={index} variant="light" className="w-100 text-start mb-2">{item}</Button>
                ))}
              </Card.Body>
            </Card>
          </div>
          {/* Main Content */}
          <div className="col-md-9">
            <Tab.Container defaultActiveKey="matches">
              <Nav variant="tabs">
                {['matches', 'shortlisted', 'visitors', 'requests', 'preferences', 'privacy'].map((tab) => (
                  <Nav.Item key={tab}>
                    <Nav.Link eventKey={tab} className="text-capitalize">{tab}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="matches">
                  <div className="row">
                    {dummyData.suggestedMatches.map((match) => (
                      <div className="col-md-4 mb-3" key={match.id}>
                        <Card>
                          <Card.Body className="text-center">
                            <div className="rounded-circle bg-secondary d-inline-block" style={{ width: 80, height: 80 }}></div>
                            <h6 className="mt-2">{match.name}</h6>
                            <p className="text-muted">{match.age} • {match.location}</p>
                            <Badge bg="primary">{match.compatibility}% Match</Badge>
                            <div className="mt-3">
                              <Button variant="outline-primary" className="me-2" onClick={() => {
                                setSelectedProfile(match);
                                setShowMessageModal(true);
                              }}>Message</Button>
                              <Button variant="outline-danger"><Heart size={16} /></Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="shortlisted">
                  <p>Shortlisted profiles will be displayed here.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="visitors">
                  <p>Recent visitors will be shown here.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="requests">
                  <p>Connection requests will appear here.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="preferences">
                  <p>Set your preferences here.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="privacy">
                  <Card>
                    <Card.Body>
                      <h5>Privacy & Security</h5>
                      <Form.Check type="switch" label="Profile Visibility" />
                      <Form.Check type="switch" label="Show Online Status" />
                      <Button variant="outline-dark" className="mt-3"><Lock size={16} className="me-1" />Change Password</Button>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      <Modal show={showMessageModal} onHide={() => setShowMessageModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Send Message to {selectedProfile?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" placeholder="Type your message here..." rows={3} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowMessageModal(false)}>Cancel</Button>
          <Button variant="primary">Send Message</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
