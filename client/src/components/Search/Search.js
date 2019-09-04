import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, FormGroup, FormControl, Button}  from 'react-bootstrap';
import './style.css';


class SearchField extends Component {

    state = {
        search: "",
        redirect: false
    };

    render(){
        return (
            <div className="search-container">
                <Form.Group>
                    <FormControl type="text" placeholder="Search"/>
                        <div className="btn-container">
                            <Button type="submit">Submit</Button>
                        </div>
                </Form.Group>
            </div>
        )
    }

}


export default SearchField;
