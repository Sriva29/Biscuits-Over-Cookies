import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.name;

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.length > 30 || searchTerm.split(' ').length > 3) {
      alert('Search term must be within 30 characters and up to 3 words.');
      return;
    }

    navigate('/business-plan', { state: { searchTerm } });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="py-5 px-3 px-md-5 flex-grow-1">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div>
                {userName && <h1 className="display-3">Welcome to TradeX, {userName}</h1>}
                <p className="fs-4">
                  Your essential partner for import success in Canada.
                  Generate a winning business plan and unlock the potential of
                  international trade. Just enter a product you want to import and get started.
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Enter product"
                      value={searchTerm}
                      onChange={handleInputChange}
                      className="fs-4"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="fs-4">
                    Go
                  </Button>
                </Form>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="https://imgur.com/kF0TLDQ.png"
                alt="Login"
                className="img-fluid"
                style={{ width: '100%' }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#008080" }}>
        <div className="text-center p-3 fs-4">
          © {new Date().getFullYear()} TradeX: All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
