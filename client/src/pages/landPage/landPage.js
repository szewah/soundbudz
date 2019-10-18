import React, {Component} from 'react';
import Button from '../../components/logoutBtn/logoutBtn';
// import axios from 'axios';
import jwt from '../../_helpers/getJwt';
import jwt_decode from 'jwt-decode';
import './style.css';
import axios from 'axios';

class landingPage extends Component  {
    state = {
        apiResponse: []
    }

    apiCall() {
        axios.get("/user/all")
        .then((response) => {
            var response1 = response.data;
            console.log(response1);
            this.setState({apiResponse: response1})
        })    
    };

    componentDidMount() {
        this.apiCall()
    }

    render() {
        const token = jwt();
        var decoded = jwt_decode(token);
        var tokenId = decoded.id;
        console.log("This is the decoded part on the landing page", tokenId);
        const items = this.state.apiResponse.map((item, key) => {
            if (item.id === tokenId) {
            return <span key={item.id}>{item.firstName}</span>
            }
        })
    return  (
        <div>
            <div className="container">
                <h3>Hello {items}, this is a private landing page</h3>
                <Button/>
            </div>
        </div>
        )
    }
};

export default landingPage;