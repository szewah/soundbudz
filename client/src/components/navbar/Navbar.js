import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';
import '../navbar/style.css'

class Navigation extends Component {
    state = {
        isLoggedOut: null,
        updateView: null
    }

    updateNavigation = view => {
        this.setState({updateView: view});
    } 

    logoutClick = (event) => {
        event.preventDefault();
        this.setState({isLoggedOut: true});
        window.localStorage.clear();
    }

    render() {
        return (
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        className="d-inline-block align-top"
                        alt="Soundbudz logo"
                        style={{height: '60px'}}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    {this.props.auth? (
                            <Nav className="ml-auto" upDateNav={this.updateNavigation}>
                                <Link to="/registration">Registration</Link>
                                <Link to="/login">Login</Link>
                        </Nav> 
                        ):(
                        <Nav className="ml-auto">
                            <Link to="/chat">Chat</Link>
                            <Link to="/login" onClick={this.logoutClick}>Logout</Link>
                        </Nav>
                    )}

                </Navbar.Collapse>
            </Navbar>
        )}
}

export default Navigation;