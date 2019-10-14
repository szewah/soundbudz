import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';
import Logout from '../logoutNavLink/logout';
import '../navbar/style.css'

class Navigation extends Component {
    state = {
        isAuthenticated: false
    }

    hideNav = (event) => {
        event.preventDefault();


    }

    render() {
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
                {this.state.isAuthenticated ? (
                     <Nav className="ml-auto">
                        <Link onClick={this.hideNav} to="/registration">Registration</Link>
                        <Link onClick={this.hideNav} to="/login">Login</Link>
                    </Nav> 
                    ) : ( 
                    <Nav className="ml-auto">
                        <Link onClick={this.hideNav} to="/chat">Chat</Link>
                        <Logout onClick={this.hideNav} to="/">Logout</Logout>
                    </Nav>
                )}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;