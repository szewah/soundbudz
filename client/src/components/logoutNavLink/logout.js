import React, {Component} from 'react';
import {Form, Button, Container, Nav} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './style.css';

class LogoutNavLink extends Component {

    logoutClick = (event) => {
        event.preventDefault();
        alert("logged out!");
        localStorage.clear()
        this.props.history.push('/login');
    }

    render() {
        return (
        <Nav>
            <Nav.Link href="/login" onClick={this.logoutClick}>Logout</Nav.Link>
        </Nav>
        )
    }
}

export default withRouter(LogoutNavLink);
