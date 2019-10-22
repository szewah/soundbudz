import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Logo from '../../logo/blacklogo.png';
import './style.css'

class NavAuth extends Component {

    state = {
        isAuthenticated: false
    }

    
    onLogout = e => {
        e.preventDefault();
        window.localStorage.clear();
        this.setState({isAuthenticated: false});
        this.props.history.push('/login');
    }

    componentDidMount(){
        console.log('Component Did Mount')
        console.log('===================')
    }

    render () {
        console.log('render');
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
    componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Component Did Update')
    console.log('===================')
}
}

export default withRouter(NavAuth);