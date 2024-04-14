import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
 
function Head() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const userName = location.state?.name;
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">TradeX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {user ? (
          <Nav className="me-auto">
            <NavDropdown title={userName} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">View Business Plans</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : (
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
 
export default Head;