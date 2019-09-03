import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class Login extends Component {
    state = {

    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control type="email" name="email" place="Enter email"></Form.Control>
                </Form.Group>
            </Form>
        )
    }
}

export default Login;