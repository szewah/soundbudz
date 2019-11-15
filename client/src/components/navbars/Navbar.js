import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authAction';
import './style.css'

class NavAuth extends Component {

    state = {}

    onLogout = e => {
        e.preventDefault();
        window.localStorage.clear();
        this.props.logoutUser();
        // this.props.history.push('/login');
    }

    render () {
        const { isAuthenticated, user } = this.props.auth;
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
                    <Link style={{textDecoration: 'none'}}>{user ? `Welcome ${user.name}`: ''}</Link>
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
    )}

}

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(
    mapStateToProps,
   {logoutUser}
  )(withRouter(NavAuth));