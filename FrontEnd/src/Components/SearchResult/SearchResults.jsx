import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const dummyProfiles = [
    { id: 1, name: "Rahul Sharma", age: 28, religion: "Hindu", motherTongue: "Hindi", lookingFor: "woman" },
    { id: 2, name: "Aisha Khan", age: 25, religion: "Muslim", motherTongue: "Urdu", lookingFor: "man" },
    { id: 3, name: "John Doe", age: 30, religion: "Christian", motherTongue: "English", lookingFor: "woman" },
    { id: 4, name: "Simran Kaur", age: 27, religion: "Sikh", motherTongue: "Punjabi", lookingFor: "man" },
    { id: 5, name: "Priya Patel", age: 26, religion: "Hindu", motherTongue: "Gujarati", lookingFor: "man" },
    { id: 6, name: "Vikram Verma", age: 29, religion: "Hindu", motherTongue: "Hindi", lookingFor: "woman" },
    { id: 7, name: "Fatima Sheikh", age: 24, religion: "Muslim", motherTongue: "Urdu", lookingFor: "man" },
    { id: 8, name: "Samuel Wilson", age: 32, religion: "Christian", motherTongue: "English", lookingFor: "woman" },
    { id: 9, name: "Harpreet Singh", age: 26, religion: "Sikh", motherTongue: "Punjabi", lookingFor: "woman" },
    { id: 10, name: "Anjali Mehta", age: 27, religion: "Hindu", motherTongue: "Marathi", lookingFor: "man" },
    { id: 11, name: "Rajesh Kumar", age: 31, religion: "Hindu", motherTongue: "Tamil", lookingFor: "woman" },
    { id: 12, name: "Sophia Brown", age: 29, religion: "Christian", motherTongue: "English", lookingFor: "man" },
    { id: 13, name: "Meera Nair", age: 25, religion: "Hindu", motherTongue: "Malayalam", lookingFor: "man" },
    { id: 14, name: "Abdul Rehman", age: 28, religion: "Muslim", motherTongue: "Hindi", lookingFor: "woman" },
    { id: 15, name: "Kavita Das", age: 30, religion: "Hindu", motherTongue: "Bengali", lookingFor: "man" },
];

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const filters = {
    lookingFor: searchParams.get("lookingFor") || "",
    minAge: searchParams.get("minAge") || "",
    maxAge: searchParams.get("maxAge") || "",
    religion: searchParams.get("religion") || "",
    motherTongue: searchParams.get("motherTongue") || ""
  };

  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    let results = dummyProfiles.filter((profile) => {
      return (
        (filters.lookingFor ? profile.lookingFor === filters.lookingFor : true) &&
        (filters.minAge ? profile.age >= parseInt(filters.minAge) : true) &&
        (filters.maxAge ? profile.age <= parseInt(filters.maxAge) : true) &&
        (filters.religion ? profile.religion === filters.religion : true) &&
        (filters.motherTongue ? profile.motherTongue === filters.motherTongue : true)
      );
    });
    setFilteredProfiles(results);
  }, [filters]);

  return (
    <Container>
      <h2 className="text-center my-4">Search Results</h2>
      <Row>
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <Col md={4} key={profile.id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{profile.name}</Card.Title>
                  <Card.Text>Age: {profile.age}</Card.Text>
                  <Card.Text>Religion: {profile.religion}</Card.Text>
                  <Card.Text>Mother Tongue: {profile.motherTongue}</Card.Text>
                  <Button variant="primary">View Profile</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <h5 className="text-center">No profiles found matching your criteria.</h5>
        )}
      </Row>
    </Container>
  );
};

export default SearchResults;
