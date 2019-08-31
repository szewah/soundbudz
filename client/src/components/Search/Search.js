import React, {Component} from 'react';
import {Form, FormControl, Button}  from 'react-bootstrap';


class SearchField extends Component {

    state = {
        search: "",
        redirect: false
    };

    render(){
        return (
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit">Submit</Button>
            </Form>
        )
    }

}


export default SearchField;
