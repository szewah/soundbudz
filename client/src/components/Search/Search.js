import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, FormControl, Button}  from 'react-bootstrap';
import './style.css';


class SearchField extends Component {

    state = {
        search: "",
        redirect: false
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value.toLowerCase()});
    };

    handleSubmit = (event) => {
        event.preventDefault();
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
