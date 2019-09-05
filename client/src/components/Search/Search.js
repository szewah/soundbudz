import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, FormGroup, FormControl, Button}  from 'react-bootstrap';
import './style.css';


class SearchField extends Component {

    state = {
        search: "",
        redirect: false
    };

    handleChange = (event) => {

    };

    handleSubmit = (event) => {

    };

    render(){
        return (
            <div className="search-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <FormControl type="text" placeholder="Search" value={this.state.search} onChange={this.handleChange}/>
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
