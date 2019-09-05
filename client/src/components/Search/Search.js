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
        this.setState({[name]: value.toLowerCase()});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        console.log("I was clicked");
        const cors = "https://cors-anywhere.herokuapp.com/";
        const ticketmasterURL = "https://app.ticketmaster.com/discovery/v2/events/?keyword=";
        const term = this.state.search.split(" ").join("+");
        console.log(term);
        const searchKey = process.env.REACT_APP_TM_KEY;

        axios.get(cors + ticketmasterURL + term + "&apikey=" + searchKey)
        .then(response => {
            console.log(response);
        })
        .catch(err => console.log(err));
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
