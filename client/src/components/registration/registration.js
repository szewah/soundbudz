//Form component for registration
import axios from 'axios';
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
        console.log(newUser);
        axios
            .post('/api/newuser', newUser)
            .then((data) => {
                console.log(data);
                if(data) {
                    // this.setState({regSuccess: true});
                    this.emptyForm();
                }
            })
            .catch((err) => {console.log(err)});
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
            {this.state.regSuccess &&
                <div className='alert alert-success alert-dismissible' role="alert">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <p> <i className='fa fa-check'> </i> Registration Successful </p>
                  <p><Nav.Link to='/login'>Login</Nav.Link></p>
                </div>
              }    
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