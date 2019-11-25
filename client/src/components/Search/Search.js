import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {Form, FormControl, Button}  from 'react-bootstrap';
import './style.css';



class SearchField extends Component {

    state = {
        search: ""
    };


    handleChange = (event) => {
        const {name, value} = event.target;
        //this sets all the input to lower case
        this.setState({[name]: value.toLowerCase()});
    };


    apiCall = () => {

        //ticket master api
        const ticketmasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=";
        //api key
        const searchKey = process.env.REACT_APP_TM_KEY;
        //search term: taking out the white spaces with split("") between words 
        //and using '+' to join the terms
        const term = this.state.search.split(" ").join("+");
        //axios makes a get call to the ticket master api
        axios.get("https://cors-anywhere.herokuapp.com/" + ticketmasterURL + term + "&apikey=" + searchKey)
        .then(res => {
            // results of the search
            console.log(res.data._embedded.events[0]._embedded);
            this.props.history.push({
                pathname: "/events/",
                search: `?${this.state.search.split(" ").join("+")}`,
                //turn object into a string in order to send data to the events page
                state: {data: JSON.stringify(res.data._embedded.events)}
            })
        })
        .catch(err => console.log(err));
    };


    handleSubmit = (event) => {
        event.preventDefault();
        this.apiCall();
        //set the redirect state to true
        this.setState({redirect: true});
    };


    render(){
        return (
            <div className="search-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <FormControl 
                            type="text" 
                            placeholder="Search" 
                            name="search"
                            value={this.state.search} 
                            onChange={this.handleChange}
                        />
                        <div className="searchbtn-container">
                            <Button type="submit">Submit</Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        )
    }

}


export default withRouter(SearchField);
