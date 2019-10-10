import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';
import auth from '../../utils/auth';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Login extends Component {
    state = {
        email: '',
        password: ''
    } 

    componentDidMount() {
        //If the user is authenticated already and goes to the login page, redirect the user to the landing page
        console.log(this.props)
        if(auth.login) {
            this.props.history.push('/landPage');
        }

    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const loginUser = {
            email: this.state.email,
            password: this.state.password
        }
        console.log("This is the front end log " + loginUser.password)
        axios.post('/user/login', loginUser);
        this.setState({email: '', password: ''})
    };

    render() {
        return (
            <div className="login-email-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control type="email" name="email"  value={this.state.email} placeholder="Email" onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <div className="btn-container">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default withRouter(Login);

