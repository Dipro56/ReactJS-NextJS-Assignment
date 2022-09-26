import Image from 'next/image';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo/ecommerce_logo.png';
import { FaCartPlus } from 'react-icons/fa';

export const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="nav-color bg-white shadow-sm"
    >
      <Container>
        <Nav.Link href="/" className="fs-6 link-color">
          <Image src={logo} alt="Home Page" width={100} height={100} />
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/myOrder" className="fs-5 link-dark">
              My Order
            </Nav.Link>
            <Nav.Link href={`/item`} className="fs-5 link-dark">
              <FaCartPlus size={27} className="me-2" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
