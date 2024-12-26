import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { FaUser, FaLocationArrow, FaGraduationCap, FaHome } from 'react-icons/fa';
import './ProfileUpdate.css';

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    personalInfo: '',
    locationInfo: '',
    education: '',
    familyInfo: '',
    aboutMe: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="profile-update">
      <Card className="step-card">
  <Card.Body>
    <h3><FaUser /> Personal Information</h3>
    <Form onSubmit={handleSubmit}>
      {/* Email Field */}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </Form.Group>

      {/* Password Field */}
      <Form.Group className="mb-3">
        <Form.Label>Login Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </Form.Group>

      {/* Religion Field */}
      <Form.Group className="mb-3">
        <Form.Label>Religion</Form.Label>
        <Form.Control
          as="select"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
        >
          <option value="">Select Religion</option>
          <option value="hindu">Hindu</option>
          <option value="muslim">Muslim</option>
          <option value="christian">Christian</option>
          <option value="sikh">Sikh</option>
          {/* Add more religions as needed */}
        </Form.Control>
      </Form.Group>

      {/* Sect Field */}
      <Form.Group className="mb-3">
        <Form.Label>Sect</Form.Label>
        <Form.Control
          as="select"
          name="sect"
          value={formData.sect}
          onChange={handleChange}
        >
          <option value="">Select Sect</option>
          <option value="vaishnav">Vaishnav</option>
          <option value="shaiv">Shaiv</option>
          <option value="sunni">Sunni</option>
          <option value="shia">Shia</option>
          {/* Add more sects as needed */}
        </Form.Control>
      </Form.Group>

      {/* Mother Tongue Field */}
      <Form.Group className="mb-3">
        <Form.Label>Mother Tongue</Form.Label>
        <Form.Control
          as="select"
          name="motherTongue"
          value={formData.motherTongue}
          onChange={handleChange}
        >
          <option value="">Select Mother Tongue</option>
          <option value="hindi">Hindi</option>
          <option value="punjabi">Punjabi</option>
          <option value="english">English</option>
          <option value="tamil">Tamil</option>
          {/* Add more languages as needed */}
        </Form.Control>
      </Form.Group>

      {/* Date of Birth Field */}
      <Form.Group className="mb-3">
  <Form.Label>Date of Birth</Form.Label>
  <div className="d-flex">
    {/* Day Dropdown */}
    <Form.Control
      as="select"
      name="dobDay"
      value={formData.dobDay}
      onChange={handleChange}
      className="me-2"
    >
      <option value="">Day</option>
      {[...Array(31).keys()].map((i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </Form.Control>

    {/* Month Dropdown */}
    <Form.Control
      as="select"
      name="dobMonth"
      value={formData.dobMonth}
      onChange={handleChange}
      className="me-2"
    >
      <option value="">Month</option>
      {[
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ].map((month, index) => (
        <option key={index + 1} value={index + 1}>
          {month}
        </option>
      ))}
    </Form.Control>

    {/* Year Dropdown */}
    <Form.Control
      as="select"
      name="dobYear"
      value={formData.dobYear}
      onChange={handleChange}
    >
      <option value="">Year</option>
      {Array.from({ length: 100 }, (_, i) => 2024 - i).map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </Form.Control>
  </div>
</Form.Group>


      {/* Marital Status Field */}
      <Form.Group className="mb-3">
        <Form.Label>Marital Status</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Single"
            name="maritalStatus"
            value="single"
            checked={formData.maritalStatus === 'single'}
            onChange={handleChange}
          />
          <Form.Check
            inline
            type="radio"
            label="Divorced"
            name="maritalStatus"
            value="divorced"
            checked={formData.maritalStatus === 'divorced'}
            onChange={handleChange}
          />
          <Form.Check
            inline
            type="radio"
            label="Widowed"
            name="maritalStatus"
            value="widowed"
            checked={formData.maritalStatus === 'widowed'}
            onChange={handleChange}
          />
        </div>
      </Form.Group>

      {/* Height Field */}
      <Form.Group className="mb-3">
        <Form.Label>Height</Form.Label>
        <Form.Control
          as="select"
          name="height"
          value={formData.height}
          onChange={handleChange}
        >
          <option value="">Select Height</option>
          <option value="short">Short (5'0" - 5'4")</option>
          <option value="average">Average (5'5" - 5'8")</option>
          <option value="tall">Tall (5'9" - 6'2")</option>
          <option value="veryTall">Very Tall (6'3" and above)</option>
        </Form.Control>
      </Form.Group>

      {/* Physical Status Field */}
      <Form.Group className="mb-3">
        <Form.Label>Physical Status</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Normal"
            name="physicalStatus"
            value="normal"
            checked={formData.physicalStatus === 'normal'}
            onChange={handleChange}
          />
          <Form.Check
            inline
            type="radio"
            label="Physically Challenged"
            name="physicalStatus"
            value="physicallyChallenged"
            checked={formData.physicalStatus === 'physicallyChallenged'}
            onChange={handleChange}
          />
        </div>
      </Form.Group>

      
    </Form>
  </Card.Body>
</Card>


<Card className="step-card">
  <Card.Body>
    <h3><FaLocationArrow /> Location Information</h3>
    <Form>
      {/* Country Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>Country Lived In</Form.Label>
        <Form.Control
          as="select"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="Bangladesh">Bangladesh</option>
          {/* Add more countries as needed */}
        </Form.Control>
      </Form.Group>

      {/* District Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>District</Form.Label>
        <Form.Control
          as="select"
          name="district"
          value={formData.district}
          onChange={handleChange}
        >
          <option value="">Select District</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chittagong">Chittagong</option>
          <option value="Rajshahi">Rajshahi</option>
          {/* Add more districts as needed */}
        </Form.Control>
      </Form.Group>

      {/* Sub-District Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>Sub-District</Form.Label>
        <Form.Control
          as="select"
          name="subDistrict"
          value={formData.subDistrict}
          onChange={handleChange}
        >
          <option value="">Select Sub-District</option>
          <option value="Mirpur">Mirpur</option>
          <option value="Banani">Banani</option>
          <option value="Bashundhara">Bashundhara</option>
          {/* Add more sub-districts as needed */}
        </Form.Control>
      </Form.Group>

      {/* City Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control
          as="select"
          name="city"
          value={formData.city}
          onChange={handleChange}
        >
          <option value="">Select City</option>
          <option value="Dhaka City">Dhaka City</option>
          <option value="Chittagong City">Chittagong City</option>
          <option value="Rajshahi City">Rajshahi City</option>
          {/* Add more cities as needed */}
        </Form.Control>
      </Form.Group>
    </Form>
  </Card.Body>
</Card>


      <Card className="step-card">
  <Card.Body>
    <h3><FaGraduationCap /> Education & Profession</h3>
    <Form>
      {/* Highest Education */}
      <Form.Group className="mb-3">
        <Form.Label>Highest Education</Form.Label>
        <Form.Control
          as="select"
          name="highestEducation"
          value={formData.highestEducation}
          onChange={handleChange}
        >
          <option value="">Select Education</option>
          <option value="highschool">High School</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="phd">PhD</option>
        </Form.Control>
      </Form.Group>

      {/* Employed In */}
      <Form.Group className="mb-3">
        <Form.Label>Employed In</Form.Label>
        <Form.Control
          as="select"
          name="employedIn"
          value={formData.employedIn}
          onChange={handleChange}
        >
          <option value="">Select Industry</option>
          <option value="it">Information Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="engineering">Engineering</option>
        </Form.Control>
      </Form.Group>

      {/* Occupation (Replaced with Dropdown) */}
      <Form.Group className="mb-3">
        <Form.Label>Occupation</Form.Label>
        <Form.Control
          as="select"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        >
          <option value="">Select Occupation</option>
          <option value="softwareEngineer">Software Engineer</option>
          <option value="doctor">Doctor</option>
          <option value="teacher">Teacher</option>
          <option value="entrepreneur">Entrepreneur</option>
          <option value="manager">Manager</option>
        </Form.Control>
      </Form.Group>

      {/* Annual Income (Replaced with Dropdown) */}
      <Form.Group className="mb-3">
        <Form.Label>Annual Income</Form.Label>
        <Form.Control
          as="select"
          name="annualIncome"
          value={formData.annualIncome}
          onChange={handleChange}
        >
          <option value="">Select Annual Income</option>
          <option value="lessThan30000">Less than $30,000</option>
          <option value="30000to60000">$30,000 - $60,000</option>
          <option value="60000to100000">$60,000 - $100,000</option>
          <option value="above100000">Above $100,000</option>
        </Form.Control>
      </Form.Group>
    </Form>
  </Card.Body>
</Card>


      <Card className="step-card">
        <Card.Body>
          <h3><FaHome /> Family Information & About Me</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Family Information</Form.Label>
              <Form.Control
                type="text"
                name="familyInfo"
                value={formData.familyInfo}
                onChange={handleChange}
                placeholder="Enter your family details"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>About Me</Form.Label>
              <Form.Control
                as="textarea"
                name="aboutMe"
                value={formData.aboutMe}
                onChange={handleChange}
                placeholder="Write something about yourself"
                rows={4}
              />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <Button className="submit-btn" variant="primary" type="submit">Submit</Button>
    </div>
  );
};

export default ProfileUpdate;
