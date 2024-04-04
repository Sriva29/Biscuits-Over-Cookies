import React from 'react';
import { Container, Row, Col, Button, Form, ProgressBar } from 'react-bootstrap';

function HomePage() {
  return (
    <div>
      <Container fluid>
        <Row>
          {/* Image */}
          <Col md={7} className="d-flex align-items-center justify-content-center">
            <div>
              <h1>Welcome to TradeInsight</h1>
              <p>
                Your essential partner for import and export success in Canada.
                Generate a winning business plan and unlock the potential of
                international trade. Just enter a product you want to import or
                export and get started.
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="text" placeholder="Enter product" />
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
      <ProgressBar>
        <ProgressBar variant="success" now={33.33} key={1} />
        <ProgressBar variant="info" now={33.33} key={2} />
        <ProgressBar variant="info" now={33.33} key={3} />
      </ProgressBar>
    </div>
  );
}

export default HomePage;
