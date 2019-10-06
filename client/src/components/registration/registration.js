//Form component for registration
import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import './style.css';
import axios from 'axios';


class Registration extends Component {
    state = {
        registerName: '',
        registerSurname: '',
        registerEmail: '',
        password: '',
        confirmPassword: '',
        regSuccess: false,
        apiResponse: []
    }

    apiCall() {
        axios.get("/user/all")
        .then((response) => {
            // var response1 = response.data[1].firstName;
            var response1 = response.data;
            console.log(response1);
            this.setState({apiResponse: response1})
        })    
        };

    componentDidMount(){
        this.apiCall();
    };

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
        axios.post('/user/new', newUser);
        this.setState({
            registerName: '',
            registerSurname:'',
            registerEmail: '',
            password: '',
            confirmPassword: ''
        })
    };

    render() {

        const items = this.state.apiResponse.map((item, key) => {
            return <li key={item.id}>
                Id: {item.id} 
                Name: {item.firstName} {item.lastName} 
                Email: {item.email} 
                Password: {item.password}</li>
        })
        return (
            <div className="login-email-container">
                <p className='apiTest'>This is testing the response: </p>
                <ul>{items}</ul>
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