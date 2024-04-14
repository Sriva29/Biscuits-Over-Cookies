import React, {useState} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useAuth } from './AuthContext'; 


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log(response.data);
      login({ token: response.data.token, userId: response.data.userId });
      navigate('/', { state: { name: email } });
    } catch (error) {
      console.error('Login error:', error.response?.data);
      alert('Failed to login.');
    }
  };
  return (
    <Container fluid>
      <Row>
        {/* Image */}
        <Col md={5} className="p-0">
        <img src="https://i.imgur.com/Rp5OuNh.png" alt="Login" className="img-fluid float-start" />
        </Col>
        <Col md={7} className="d-flex align-items-center justify-content-center">
          <div style={{ maxWidth: '300px' }}> 
            {/* <Button variant="secondary" className="mb-3">Back</Button> */}

            {/* Login */}
            <div className="text-left mb-4">
              <h1>Account Login</h1>
              <p>If you are already a member, you can login with your username or email address and password.</p>
            </div>

            <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingInput" label="Username / Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                <Form.Control type="text" placeholder="Password" value={password} onChange = {(e)=> setPassword(e.target.value)} />
              </FloatingLabel>
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