import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';
import '../navbar/style.css'

class Navigation extends Component {
    state = {
    }

    render() {
        return (
            <Navbar bg="light" expand="sm">
            <Navbar.Brand href="#home">
                <img
                    src={Logo}
                    className="d-inline-block align-top"
                    alt="Soundbudz logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-sm-2">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;