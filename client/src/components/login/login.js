import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';
import axios from 'axios';

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
        const loginUser = {
            email: this.state.email,
            password: this.state.password
        }
        console.log("This is the front end log " + loginUser.password)
        axios.post('/user/login', loginUser);
        this.setState({email: '', password: ''})
    };

    render() {
        return (
            <div className="login-email-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control type="email" name="email"  value={this.state.email} placeholder="Email" onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}></Form.Control>
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