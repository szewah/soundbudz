import React, {Component} from 'react';
import {Form, Button, Container, Nav} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import './style.css';

class Logout extends Component {

    logoutClick = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
    }

    render() {
        return 
        <Nav.Link href="" onClick={this.logoutClick}>Logout</Nav.Link>
    }
}

export default Logout;
