//Form component for registration
import axios from ('axios');
import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
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
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('api/user/new', {
            firstName: this.state.registerName,
            surnameName: this.state.registerSurname,
        })

        this.emptyForm();
    };

    emptyForm = () => {
        document.getElementById('nameInput').value = ""
        document.getElementById('surnameInput').value = ""
        document.getElementById('emailInput').value = ""
        document.getElementById('passwordInput').value = ""
        document.getElementById('confirmPWInput').value = ""
    }

    render() {
        return (
            <div className="login-email-container">
                <Form onSubmit={this.handleSubmit}>
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