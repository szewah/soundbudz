import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class LogoutBtn extends Component {
    onLogout = e => {
        e.preventDefault();
        window.localStorage.clear();
        this.props.history.push('/login');
    }

    render() {
        return <Button onClick={this.onLogout}>Logout</Button> 
    }
}

export default withRouter(LogoutBtn);