import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';
import './style.css'

class NavAuth extends Component {

    state = {
        isLoggedOut: null
    }

    componentDidMount() {
        console.log('Component did Mount')
        console.log('===================')
    }

    onLogout = e => {
        e.preventDefault();
        window.localStorage.clear();
        this.setState({isAuthenticated: true});
        this.props.history.push('/login');
    }

    render () {
        console.log();
        const authenticated = this.props.history.location.state;
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
                {authenticated ? (
                <Nav className="ml-auto">
                    <Link to="/chat">Chat</Link>
                    <Link to="/login" onClick = {this.onLogout}>Logout</Link>
                </Nav> 
                ) :(
                <Nav className="ml-auto">
                    <Link to="/registration">Registration</Link>
                    <Link to="/login">Login</Link>
                </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    )
}

}

export default withRouter(NavAuth);