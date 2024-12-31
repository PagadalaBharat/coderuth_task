import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "../App.css"


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#home"><b>CodRuth</b></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      <Link to={"/"} className='navelements' >Home</Link>
      <Link to={"/about"} className='navelements' >About</Link>
      <Link to={"/contact"} className='navelements'>Contact</Link>


    </Nav>
    <Nav>
    <Link to={"/signin"} className='navelements' >Signin</Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default Header

