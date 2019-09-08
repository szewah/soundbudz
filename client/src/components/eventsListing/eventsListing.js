import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
//turn string into an object

class EventsListing extends Component {
    state ={

    }

    render() {
        const {match, location,history} = this.props;
        const events_data = JSON.parse(this.props.location.state.events_data);
        // const events_data = JSON.parse(this.props.location.state.events_data);
        return(
            <h2>Another hello</h2>
            
            // console.log(`These are the events: ${events_data}`);
        )
    }
}

export default EventsListing;
