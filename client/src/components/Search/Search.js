import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Form, FormControl, Button}  from 'react-bootstrap';
import './style.css';


class SearchField extends Component {

    state = {
        search: "",
        events:[],
        redirect: false
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        //this sets all the input to lower case
        this.setState({[name]: value.toLowerCase()});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        //cross origin set up to allow for api search
        const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
        //ticket master api
        const ticketmasterURL = "https://app.ticketmaster.com/discovery/v2/events/?keyword=";
        //concat search terms
        const term = this.state.search.split(" ").join("+");
        console.log("DEBUG" + term);
        //api key
        const searchKey = process.env.REACT_APP_TM_KEY;

        //axios get ticket master results 
        axios.get(corsAnywhere + ticketmasterURL + term + "&apikey=" + searchKey)
        .then(response => {
            //response of search
            console.log(response.data._embedded.events);
            const events = this.state.events;
            this.setState({events: response.data._embedded.events})
            //set event state to show results of the api call


        })
        .catch(err => console.log(err));

        //set the redirect state to true
        this.setState({redirect: true});
    };

    render(){
        if (this.state.redirect) {
            return <Redirect to={`/events/${this.state.search.split(" ").join("+")}`}/>
        }
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
                        <div className="btn-container">
                            <Button type="submit">Submit</Button>
                        </div>
                    </Form.Group>
                </Form>
            </div>
        )
    }

}


export default SearchField;
