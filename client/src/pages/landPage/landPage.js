import React, {Component} from 'react';
import jwt from '../../_helpers/getJwt';
import jwt_decode from 'jwt-decode';
import './style.css';
import axios from 'axios';

class landingPage extends Component  {
    state = {
        // apiResponse: []
        name: ""
    }

    apiCall() {
        const token = jwt();
        var decoded = jwt_decode(token);
        var tokenId = decoded.id;
        axios.get("/user/getUser", {
            params: {ID: tokenId}
        })
        .then((response) => {
            var userName = response.data.firstName;
            console.log("Individual response: " , userName);
            this.setState({name: userName})
        })    
    };

    componentDidMount() {
        this.apiCall()
    }

    render() {
    return  (
        <div>
            <div className="container">
                <h3>Hello {this.state.name}, this is a private landing page</h3>
            </div>
        </div>
        )
    }
};

export default landingPage;