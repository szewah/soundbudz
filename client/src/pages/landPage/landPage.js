import React, {Component} from 'react';
import Button from '../../components/logoutBtn/logoutBtn';
// import axios from 'axios';
import jwt from '../../_helpers/getJwt';
import jwt_decode from 'jwt-decode';
import './style.css';
import axios from 'axios';

class landingPage extends Component  {
    state = {
        name: null
    }


    // apiCall(id) {

        
    //     axios.get("/user/oneUser")
    //     .then((response) => {
    //         var response1 = response.data;
    //         console.log(response1);
    //         this.setState({name: response1})
    //     })    
    // };

    componentDidMount() {
        // this.apiCall()
            const token = jwt();
            let decoded = jwt_decode(token);
            // console.log("This is the decoded part ", decoded.id);
            axios.get('/user/oneUser', {
                params: {
                    id: decoded.id
                }
            })
            .then(response => {
                console.log(response);
                // var response1 = response.data;
                // console.log(response1[0].name);
                // this.setState({name: response1})
            })
            .catch(response => {console.log(response)});
    }

    render() {



    return  (
        <div>
            <div className="container">
                <p>Hello, this is a private landing page</p>
                <ul>Yes yes</ul>
                <Button/>
            </div>
            
        </div>
        )
    }
};

export default landingPage;