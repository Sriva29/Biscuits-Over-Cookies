import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Form, FloatingLabel } from "react-bootstrap";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        fullName,
        email,
        password,
      });

      console.log(response.data);
      navigate("/", { state: { name: fullName } });
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to sign up.");
    }
  };

  return (
    <Container fluid>
      <Row>
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
            <div className="text-left mb-4 py-2">
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

              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%", backgroundColor: "#008080", marginBottom: "20px" }}
              >
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
