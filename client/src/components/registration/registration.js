import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';

class Registration extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className="login-email-container">
                <Form>
                    <Form.Group>
                        <Form.Control type="text" name="name" value={this.state.name} placeholder="Name"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" name="surname" value={this.state.surname} placeholder="Surname"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" name="email" value={this.state.email} placeholder="Email"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" name="password" value={this.state.password} placeholder="Password "></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" name="confirmPassword" value={this.state.confirmPassword} placeholder="Confirm Password "></Form.Control>
                    </Form.Group>
                    <div className="btn-container">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Registration;