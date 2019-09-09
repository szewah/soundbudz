import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import EventCard from '../eventCard/eventCard';


class EventsListing extends Component {
    
    state = {
        eventList: [],
        isLoaded: false
    }


    render() {
        const {match, location, history} = this.props;
        return(
            <div>
                <h2>Another hello</h2>
                {/* <div>{location.state.data}</div> */}
                <EventCard />
            </div>
        )
    }
}

export default withRouter(EventsListing);
