import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/logo.png";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="/">
        <img src={logo} alt="" style={{width: '3.5rem'}}/> &nbsp;
          Meal Mate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="link"
                       style={({ isActive }) => ({
                        color: isActive?'white':'var(--green-200)',
                        backgroundColor: isActive ? 'var(--green-200)': '',
                      })}>Home</NavLink>
            <NavLink to="/menu" className="link"
                        style={({ isActive }) => ({
                          color: isActive?'white':'var(--green-200)',
                          backgroundColor: isActive ? 'var(--green-200)': '',
                        })}>Menu</NavLink>
            <NavLink to="/plans" className="link"
                        style={({ isActive }) => ({
                          color: isActive?'white':'var(--green-200)',
                          backgroundColor: isActive ? 'var(--green-200)': '',
                        })}>Our Plans</NavLink>
            <NavLink to="/about-us" className="link"
                       style={({ isActive }) => ({
                        color: isActive?'white':'var(--green-200)',
                        backgroundColor: isActive ? 'var(--green-200)': '',
                      })}>About Us</NavLink>     
          </Nav>
          <Nav>
            <Link to="/contact-us" className='link-btn'>Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;