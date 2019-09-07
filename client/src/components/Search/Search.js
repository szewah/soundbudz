import React, {Component} from 'react';
import axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';
import {Form, FormControl, Button}  from 'react-bootstrap';
import './style.css';



class SearchField extends Component {

    state = {
        search: "",
        redirect: false,
    };


    handleChange = (event) => {
        const {name, value} = event.target;
        //this sets all the input to lower case
        this.setState({[name]: value.toLowerCase()});
    };


    apiCall = () =>{
        //cross origin set up to allow for api search
        const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
        //ticket master api
        const ticketmasterURL = "https://app.ticketmaster.com/discovery/v2/events/?keyword=";
        //api key
        const searchKey = process.env.REACT_APP_TM_KEY;
        //search term
        const term = this.state.search.split(" ").join("+");
                //axios get ticket master results 
        axios.get(corsAnywhere + ticketmasterURL + term + "&apikey=" + searchKey)
        .then(res => {
            //response of search
            console.log(res.data._embedded.events);
            // this.setState({ events: res.data._embedded.events });
            this.props.history.push({
                pathname: '/events',
                state: {events_data: JSON.stringify(res.data._embedded.events)}
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


export default withRouter(SearchField);
