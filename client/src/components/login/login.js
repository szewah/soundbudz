import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';
import { runInThisContext } from 'vm';

class Login extends Component {
    state = {
        email: '',
        password: ''
    } 

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const User = {
            email: this.state.email,
            password: this.state.password
        }

        alert('A name was submitted: ' + this.state.email + this.state.password);
        
    }

    render() {
        return (
            <div className="login-email-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control name="email" type="email" value={this.state.email} placeholder="Email" onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control name="password" type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <div className="btn-container">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Login;