import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';
import '../navbar/style.css'

class Navigation extends Component {
    state = {
        
    }

    render() {
        const {isAuthenticated} = this.props.auth;
        return (
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        className="d-inline-block align-top"
                        alt="Soundbudz logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {isAuthenticated ? (
                    <Nav className="ml-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link> */}
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/dashboard">User</Nav.Link>
                        <Nav.Link href="/chat">Chat</Nav.Link>
                        <Nav.Link href="#">Logout</Nav.Link>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Nav.Link href="/registration">Registration</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                )}
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;