import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';

class Registration extends Component {
    state = {
        registerName: '',
        registerSurname: '',
        registerEmail: '',
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
                        <Form.Control type="text" name="registerName" value={this.state.registerName} placeholder="Name"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" name="registerSurname" value={this.state.registerSurname} placeholder="Surname"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" name="registerEmail" value={this.state.registerEmail} placeholder="Email"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" name="password" value={this.state.registerPassword} placeholder="Password "></Form.Control>
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