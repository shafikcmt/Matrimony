import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import './YourStory.css';

const YourStory = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="your-story-section">
      <h2>Your story is waiting to happen!</h2>
      <Button className="get-started-btn" onClick={handleShowPopup}>
        Get Started
      </Button>
      <RegistrationPopup show={showPopup} onHide={handleClosePopup} />
    </div>
  );
};

export default YourStory;
