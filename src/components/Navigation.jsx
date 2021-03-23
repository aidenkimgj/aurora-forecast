import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Collapse,
  Container,
  Form,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { authService } from '../fbInstance';

const Navigation = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  console.log(isLoggedIn, '네비게이션에서');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const onLogout = () => {
    authService.signOut();
    history.push('/');
  };

  return (
    <Navbar color="dark" dark expand="lg" className="sticky-top">
      <Container>
        <Link to="/" className="text-white text-decoration-none blog-name">
          <h2 style={{ fontWeight: 'bold' }}>Aurora Forecast</h2>
        </Link>
        <NavbarToggler onClick={handleToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="ml-auto d-felx justify-content-around"
            navbar
            style={{ fontWeight: 'bold' }}
          >
            <NavItem>
              <Form className="col pr-3 p-1">
                <Link to="/" className="text-decoration-none">
                  Home
                </Link>
              </Form>
            </NavItem>
            <NavItem>
              <Form className="col pr-3 p-1">
                <Link to="/bestlocations" className="text-decoration-none">
                  Best Locations
                </Link>
              </Form>
            </NavItem>
            <NavItem>
              <Form className="col pr-3 p-1">
                <Link to="/auroramap" className="text-decoration-none">
                  Aurora Map
                </Link>
              </Form>
            </NavItem>
            <NavItem>
              <Form className="col pr-3 p-1">
                <Link to="/observatory" className="text-decoration-none">
                  Observatory
                </Link>
              </Form>
            </NavItem>
            {isLoggedIn ? (
              <NavItem>
                <Form className="col p-1">
                  <Link
                    onClick={onLogout}
                    to="#"
                    className="text-decoration-none"
                  >
                    Logout
                  </Link>
                </Form>
              </NavItem>
            ) : (
              ''
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
