import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import {withRouter, Link} from 'react-router-dom';
import './style.css';

class LogoutNavLink extends Component {

    logoutClick = (event) => {
        event.preventDefault();
        localStorage.clear()
        this.props.history.push('/');
    }

    render() {
        return (
        <Nav>
            <Link to="/login" onClick={this.logoutClick}>Logout</Link>
        </Nav>
        )
    }
}

export default withRouter(LogoutNavLink);
