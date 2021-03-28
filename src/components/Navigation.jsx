import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Collapse,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';
import { authService } from '../fbInstance';

const Navigation = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const history = useHistory();

  console.log(isLoggedIn, '네비게이션에서');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const mouseOn = () => setDropdownOpen(prevState => !prevState);

  const onLogout = () => {
    authService.signOut();
    history.push('/');
  };

  return (
    <Navbar color="dark" dark expand="lg" className="sticky-top">
      <Container>
        <Link to="/" className="text-white text-decoration-none blog-name">
          <h2 style={{ fontWeight: 'bold' }}>Aurora World</h2>
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
                <NavLink>
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                </NavLink>
              </Form>
            </NavItem>
            <NavItem>
              <Form className="col pr-3 p-1">
                <NavLink>
                  <Link to="/bestlocations" className="text-decoration-none">
                    Best Locations
                  </Link>
                </NavLink>
              </Form>
            </NavItem>
            <NavItem>
              <Form className="col pr-3 p-1">
                <NavLink>
                  <Link to="/auroramap" className="text-decoration-none">
                    Aurora Map
                  </Link>
                </NavLink>
              </Form>
            </NavItem>
            <NavItem>
              <Form className="col pr-3 p-1">
                <div className="drop-menu">
                  <Dropdown nav isOpen={dropdownOpen}>
                    <DropdownToggle nav caret onMouseEnter={mouseOn}>
                      Observatory
                    </DropdownToggle>
                    <DropdownMenu onMouseLeave={mouseOn}>
                      <DropdownItem>
                        <Link to="/live" className="text-decoration-none">
                          AuroraMax Live
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/replay" className="text-decoration-none">
                          AuroraMax Replay
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Form>
            </NavItem>
            {isLoggedIn ? (
              <NavItem>
                <Form className="col p-1">
                  <NavLink>
                    <Link
                      onClick={onLogout}
                      to="#"
                      className="text-decoration-none"
                    >
                      Logout
                    </Link>
                  </NavLink>
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

<Link to="/auroramax" className="text-decoration-none">
  AuroraMax
</Link>;
