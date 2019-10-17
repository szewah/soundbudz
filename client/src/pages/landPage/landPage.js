import React, {Component} from 'react';
import Button from '../../components/logoutBtn/logoutBtn';
import axios from 'axios';
import './style.css';


class landingPage extends Component  {
    state = {
        name: []
    }


    apiCall() {
        axios.get("/user/oneUser")
        .then((response) => {
            // var response1 = response.data[1].firstName;
            var response1 = response.data;
            console.log(response1);
            this.setState({name: response1})
        })    
    };

    componentDidMount() {
        this.apiCall()
    }

    render() {
        const items = this.state.name.map((item, key) => {
            return <li key={item.id}>
                Id: {item.id} 
                Name: {item.firstName} {item.lastName} 
                </li>
        })
    return  (
        <div>
            <div className="container">
                <p>Hello, this is a private landing page</p>
                <ul>{items}</ul>
                <Button/>
            </div>
            
        </div>
        )
    }
};

export default landingPage;