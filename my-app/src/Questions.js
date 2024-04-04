import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, ProgressBar, Nav, Navbar, DropdownButton, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons'; // Make sure to install react-bootstrap-icons if you haven't

// Example countries list
const countries = ["Canada", "United States", "Mexico", "Germany", "France"];

// GreyHeader Component
const Questions = () => {
  const navigate = useNavigate();
  const [exportCountry, setExportCountry] = useState('');
  const [importCountry, setImportCountry] = useState('');
  const [budget, setBudget] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log({ exportCountry, importCountry, budget });
    // navigate('/next-page'); // Redirect user to the next page after submission
  };

  return (
    <div>
      <Navbar bg="light" variant="light" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Button variant="outline-primary" onClick={() => navigate(-1)}>
            <ArrowLeft /> Back
          </Button>
        </Container>
      </Navbar>
      <Container>
        <Row className="mt-4">
          <Col xs={12}>
            <h2>Answer some questions to get your business plan</h2>
            <p>Give us some more information before we give you a curated business plan.</p>
          </Col>
          <Col xs={12}>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Export From:</Form.Label>
                <Form.Select
                  aria-label="Export from"
                  value={exportCountry}
                  onChange={e => setExportCountry(e.target.value)}
                  required
                >
                  <option value="">Select a country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Import To:</Form.Label>
                <Form.Select
                  aria-label="Import to"
                  value={importCountry}
                  onChange={e => setImportCountry(e.target.value)}
                  required
                >
                  <option value="">Select a country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Approximate Budget:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter budget"
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Go
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ProgressBar className="my-4">
        <ProgressBar variant="success" now={33.33} key={1} />
        <ProgressBar variant="info" now={33.33} key={2} />
        <ProgressBar variant="info" now={33.33} key={3} />
      </ProgressBar>
    </div>
  );
};

export default Questions;
