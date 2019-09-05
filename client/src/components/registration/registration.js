import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';

class Registration extends Component {
    state = {
        name: '',
        surname: '',
    }

    render() {
        return (
            <div className="login-email-container">
                <Form>
                    <Form.Group>
                        <Form.Control type="text" name="name" placeholder="Name"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" name="surname" placeholder="Surname"></Form.Control>
                    </Form.Group>
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

export default Registration;