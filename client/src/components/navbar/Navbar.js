import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';

class Navbar extends Component {
    state = {
        navExpanded: false
    }

    setNavExpanded = (expanded) => {
        this.setState({navExpanded: expanded})
    }

    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Nav>

                </Nav>

            </Navbar>
        )
    }
}