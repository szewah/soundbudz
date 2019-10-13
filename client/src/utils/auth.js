//authorization route to see logged in pages
import axios from 'axios';
import React, {Component} from 'react';
import getJwt from './getJwt';
import {withRouter} from 'react-router-dom';

class Authentication extends Component {
    state = {
        user: undefined
    }

    componentDidMount() {
        var jwt = getJwt();
        console.log("this is the token " + jwt)
        if (!jwt) {
            this.props.history.push('/login');
        }
        axios.get('/getUser', {headers: {Authorization: jwt}})
        .then(res => {
            this.setState({user: res.data})
        })
        .catch(err => {
            localStorage.removeItem('cool-jwt');
            console.log(err);
        })
    }

    render() {
        if(this.state.user === undefined) {
            return (
                <div>
                <h1>Loading</h1>
                </div>
            )
        }
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default withRouter(Authentication);