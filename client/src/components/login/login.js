import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/auth';


class Login extends Component {
    state = {
        email: '',
        password: '',
    } 

 
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) =>{

        event.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
        this.setState({email: '', password: ''});

    };

    render() {
        console.log(this.porps);
        return (
            <div className="login-email-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Control 
                            type="email" 
                            name="email"  
                            value={this.state.email} 
                            placeholder="Email" 
                            onChange={this.handleChange}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            placeholder="Password" 
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

const mapStateToProps = (state) => {
    return {
        auth: state.isAuthenticated
    }
};


export default connect(mapStateToProps, { loginUser })(Login);

