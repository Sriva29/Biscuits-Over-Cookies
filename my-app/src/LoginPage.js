import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      login({ token: response.data.token, userId: response.data.userId });
      navigate("/", { state: { name: email } });
    } catch (error) {
      console.error("Login error:", error.response?.data);
      alert("Failed to login.");
    }
  };

  return (
    <Container fluid>
      <Row>
        {/* Image */}
        <Col md={6} className="p-0">
          <img
            src="https://i.imgur.com/Rp5OuNh.png"
            alt="Login"
            className="img-fluid float-start d-none d-md-block"
            style={{ height: "100vh", objectFit: "cover", width: "100%" }}
          />
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div style={{ maxWidth: "300px" }}>
            {/* Login */}
            <div className="text-left mb-4 py-2">
              <h1>Account Login</h1>
              <p>
                If you are already a member, you can login with your username or
                email address and password.
              </p>
            </div>

            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Username / Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%", backgroundColor: "#008080" }}
              >
                Login
              </Button>
              <div
                className="mt-3 text-center"
                style={{ marginBottom: "20px" }}
              >
                Don't have an account? <Link to="/signup">Sign up here.</Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
