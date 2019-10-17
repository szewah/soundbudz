import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './style.css'

class LogoutBtn extends Component {
    state = {
        isAuthenticated: true
    }

    onLogout = e => {
        e.preventDefault();
        window.localStorage.clear();
        this.setState({isAuthenticated: false});
        this.props.history.push('/login');
    }

    render() {
        return  (
            <div className='logoutbtn-container'>
                <Button onClick={this.onLogout}>Logout</Button> 
            </div>
        )
    }
}

export default withRouter(LogoutBtn);