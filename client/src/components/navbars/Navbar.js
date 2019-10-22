import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';
import getJWT from '../../_helpers/getJwt';
import './style.css'

class NavAuth extends Component {

    state = {
        isAuthenticated: false
    }

    componentDidMount() {
        var jwt = getJWT();
        if (jwt) {
        this.setState({isAuthenticated: true})
        }
        console.log('Component did Mount')
        console.log('===================')
    }

    onLogout = e => {
        e.preventDefault();
        window.localStorage.clear();
        this.setState({isAuthenticated: false});
        this.props.history.push('/login');
    }

    render () {
        const isAuthenticated = this.state.isAuthenticated;
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
                {isAuthenticated ? (
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