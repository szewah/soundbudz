import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter, Redirect} from 'react-router-dom';
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
    }

    render () {

        const { isAuthenticated, user } = this.props.auth;
        if (!isAuthenticated) return <Redirect to='/login' />

        const authLinks = (
            <Nav className="ml-auto">
                <span>{user ? `Welcome ${user.name}`: ''}</span>
                <Link to="/chat">Chat</Link>
                <Link to="/login" onClick = {this.onLogout}>Logout</Link>
            </Nav> 
        );

        const guestLinks = (
            <Nav className="ml-auto">
                <Link to="/registration">Registration</Link>
                <Link to="/login">Login</Link>
            </Nav>
        );

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
                {isAuthenticated ? authLinks : guestLinks}
            </Navbar.Collapse>
        </Navbar>
    )}
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
    auth: state.auth
    }
  };

export default connect(
    mapStateToProps,
   {logoutUser}
  )(withRouter(NavAuth));