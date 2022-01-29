import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap'

import "./style.css";

const NavBar = () => {
    return (
        <Navbar expand="sm" sticky="top">
            <Navbar.Brand href="/">Peyton Wilde</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="nav-links">
                <Nav className="mx-auto">
                    <LinkContainer to="/">
                        <Nav.Link className="links" id="home">HOME</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link className="links" id="about">ABOUT</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;