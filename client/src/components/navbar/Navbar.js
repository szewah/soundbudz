import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';
import '../navbar/style.css'

class Navigation extends Component {

    state = {
        isAuthenticated: null
    };

    componentDidMount() {
        const {token} = this.props;
        console.log('line 16' + token);
        if (token != null) {
        this.setState({
            isAuthenticated: !this.state.isAuthenticated
        })
    }
    }

    

    render () {
        console.log(this.state.isAuthenticated);
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

                    {this.state.isAuthenticated ? (
                            <Nav className="ml-auto">
                            <Link to="/chat">Chat</Link>
                            <Link to="/login">Logout</Link>
                        </Nav> 
                        ):(
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


export default Navigation;