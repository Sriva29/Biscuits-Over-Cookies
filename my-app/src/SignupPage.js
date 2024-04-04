import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const SignupPage = () => {
  return (
    <Container fluid>
      <Row>
        {/* Image */}
        <Col md={5} className="p-0">
        <img src="https://i.imgur.com/Rp5OuNh.png" alt="Login" className="img-fluid float-start" />
        </Col>
        <Col md={7} className="d-flex align-items-center justify-content-center">
          <div style={{ maxWidth: '300px' }}> 
            <Button variant="secondary" className="mb-3">Back</Button>

            {/* Account Signup */}
            <div className="text-left mb-4">
              <h1>Register</h1>
              <p>Become a member and enjoy saving the business plans you created!</p>
            </div>

            {/* Login Form */}
            <Form>
              <FloatingLabel controlId="floatingFullName" label="Full Name" className="mb-3">
                <Form.Control type="text" placeholder="Full Name" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <Button variant="primary" type="submit" style={{ width: '100%', backgroundColor: '#008080' }}>Register</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;