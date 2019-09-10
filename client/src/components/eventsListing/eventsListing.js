import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
// import EventCard from '../eventCard/eventCard';


class EventsListing extends Component {
    
    state = {
        eventList: [],
        isLoaded: false
    }


    render() {
        const {match, location, history} = this.props;
        const event = JSON.parse(location.state.data);
        console.log("DEBUG" , event);
        return(
            <div>
                <h2>Another hello</h2>
                {event.map((events) => 
                        <li key={events.id}>{events.name}</li>
                    )}
            </div>
        )
    }
}

export default withRouter(EventsListing);
