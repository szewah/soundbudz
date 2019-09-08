import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
//turn string into an object


class EventsListing extends Component {
    state = {}

    componentDidMount = () => {
        const eventData = JSON.parse(this.props.location.state);
        console.log(eventData);

    }

    render() {
        // const events_data = JSON.parse(this.props.location.state.events_data);

        return(
            <h2>Another hello</h2>

            // console.log(`These are the events: ${events_data}`);
        )
    }
}

export default EventsListing;
