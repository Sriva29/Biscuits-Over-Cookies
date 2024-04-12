import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from causing a page reload

    try {
      // Replace the URL with your actual backend endpoint
      const response = await axios.post('http://localhost:5000/api/signup', {
        fullName,
        email,
        password,
      });

      console.log(response.data); // Handle response data as needed
      alert('Signup successful!'); // Notify the user
      // Redirect the user to login page or dashboard as necessary
    } catch (error) {
      console.error('Signup error:', error);
      alert('Failed to sign up.');
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={5} className="p-0">
          <img src="https://i.imgur.com/Rp5OuNh.png" alt="Login" className="img-fluid float-start" />
        </Col>
        <Col md={7} className="d-flex align-items-center justify-content-center">
          <div style={{ maxWidth: '300px' }}>
            {/* <Button variant="secondary" className="mb-3">Back</Button> */}

            <div className="text-left mb-4">
              <h1>Register</h1>
              <p>Become a member and enjoy saving the business plans you created!</p>
            </div>

            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingFullName" label="Full Name" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>

              <Button variant="primary" type="submit" style={{ width: '100%', backgroundColor: '#008080' }}>
                Register
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
