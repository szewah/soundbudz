import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';

class Registration extends Component {
    state = {

    }

    render() {
        return (
            <div className="login-email-container">
                <Form>
                    <Form.Group>
                        <Form.Control type="email" name="email" placeholder="Email"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" name="password" placeholder="Password "></Form.Control>
                    </Form.Group>
                    <div className="btn-container">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
                <div className="container">
                    <p style={{marginTop:"20px"}}>Don't have an account? Register here</p>
                </div>
            </div>
        )
    }
}

export default Registration;