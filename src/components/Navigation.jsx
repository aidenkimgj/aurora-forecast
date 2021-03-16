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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const onLogout = () => {
    authService.signOut();
    history.push('/');
  };
  //   <ul>
  //   <li>
  //     <Link to="/">Home</Link>
  //   </li>
  //   <li>
  //     <Link to="/bestlocations">Best Locations</Link>
  //   </li>
  //   <li>
  //     <Link to="/auroramap">Aurora Map</Link>
  //   </li>
  //   <li>
  //     <Link to="/gallery">Gallery</Link>
  //   </li>
  // </ul>

  return (
    <Navbar color="dark" dark expand="lg" className="sticky-top">
      <Container>
        <Link to="/" className="text-white text-decoration-none blog-name">
          <h2 style={{ fontWeight: 'bold' }}>Aurora Forecast</h2>
        </Link>
        <NavbarToggler onClick={handleToggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto d-felx justify-content-around" navbar>
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
                <Link to="/gallery" className="text-decoration-none">
                  Gallery
                </Link>
              </Form>
            </NavItem>
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
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
