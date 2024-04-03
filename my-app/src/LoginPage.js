import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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

            {/* Login */}
            <div className="text-left mb-4">
              <h1>Account Login</h1>
              <p>If you are already a member you can login with your email address and password.</p>
            </div>

            {/* Login Form */}
            <Form>

            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="text" placeholder="Password" />
              </FloatingLabel>

              <Form.Check
              type="checkbox"
              id="rememberMeCheckbox"
              label="Remember Me"
              className="mb-3"
            />

              <Button variant="primary" type="submit" style={{ width: '100%', backgroundColor: '#008080' }}>Login</Button>
              <div className="mt-3 text-center">
                Don't have an account? <Link to="/signup">Sign up here.</Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;

