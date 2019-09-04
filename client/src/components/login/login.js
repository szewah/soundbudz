import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';

class Login extends Component {
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
            </div>
        )
    }
}

export default Login;