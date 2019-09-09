import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
//turn string into an object


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
            </div>
        )
    }
}

export default withRouter(EventsListing);
