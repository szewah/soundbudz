import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';
import '../navbar/style.css'

class Navigation extends Component {
    state = {
    }

    render() {
        console.log(this.props.auth);
        // const {isAuthenticated} = this.props.auth;
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
                     <Nav className="ml-auto">
                        <Nav.Link href="/registration">Registration</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;