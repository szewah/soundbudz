//Form component for registration
import API from '../../utils/api'
import React, {Component} from 'react';
import {Form, Button, Nav} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import './style.css';


class Registration extends Component {
    state = {
        registerName: '',
        registerSurname: '',
        registerEmail: '',
        password: '',
        confirmPassword: '',
        regSuccess: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    //front end route to the server
    sendRegFormData = (event) => {
        event.preventDefault();
        const newUser = {
            firstName: this.state.registerName,
            lastName: this.state.registerSurname,
            email: this.state.registerEmail,
            password: this.state.password
        }
        API.postNewUser(newUser);
        this.setState({
            registerName: '',
            registerSurname:'',
            registerEmail: '',
            password: '',
            confirmPassword: ''
        })
    };

    render() {
        return (
            <div className="login-email-container">
                <Form onSubmit={this.sendRegFormData}>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            name="registerName" 
                            value={this.state.registerName} 
                            id="nameInput"
                            placeholder="Name" 
                            onChange={this.handleChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            name="registerSurname" 
                            value={this.state.registerSurname} 
                            id="surnameInput"
                            placeholder="Surname" 
                            onChange={this.handleChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="email" 
                            name="registerEmail" 
                            value={this.state.registerEmail} 
                            id="emailInput"
                            placeholder="Email" 
                            onChange={this.handleChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            value={this.state.registerPassword} 
                            id="passwordInput"
                            placeholder="Password" 
                            onChange={this.handleChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="password" 
                            name="confirmPassword" 
                            value={this.state.confirmPassword} 
                            id="confirmPWInput"
                            placeholder="Confirm Password" 
                            onChange={this.handleChange}>
                        </Form.Control>
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