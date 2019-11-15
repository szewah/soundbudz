import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import './style.css';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authAction';

class Login extends Component {
    state = {
        email: '',
        password: ''
    } 

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        console.log('This is the prop from state', this.props);
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/landPage");
        }
    };
    
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            console.log('This is part of componentWillReceive')
            this.props.history.push("/landPage");
          }
        if (nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
        }
    };
 
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) =>{
        alert('This was clicked');
        event.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    };

    render() {
        console.log('This is after the render ', this.props.auth.isAuthenticated);
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
        auth: state.auth
    }
};
//connect function from react-redux react login component to redux store
export default connect(mapStateToProps, { loginUser }) (withRouter(Login));

