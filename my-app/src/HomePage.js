import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'; //Removed ProgressBar

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Handler for changing the input field
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Validate the search term (e.g., not more than 30 characters and up to 3 words)
    if (searchTerm.length > 30 || searchTerm.split(' ').length > 3) {
      alert('Search term must be within 30 characters and up to 3 words.');
      return;
    }

    //opening business plan page
    navigate('/business-plan', {state:{searchTerm}});
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={7} className="d-flex align-items-center justify-content-center">
            <div>
              <h1>Welcome to TradeInsight</h1>
              <p>
                Your essential partner for import and export success in Canada.
                Generate a winning business plan and unlock the potential of
                international trade. Just enter a product you want to import or
                export and get started.
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter product"
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Go
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={5} className="p-0">
            <img
              src="https://imgur.com/kF0TLDQ.png"
              alt="Login"
              className="img-fluid float-start"
            />
          </Col>
        </Row>
      </Container>
      {/* <ProgressBar>
        <ProgressBar variant="success" now={33.33} key={1} />
        <ProgressBar variant="info" now={33.33} key={2} />
        <ProgressBar variant="info" now={33.33} key={3} />
      </ProgressBar> */}
    </div>
  );
}

export default HomePage;
