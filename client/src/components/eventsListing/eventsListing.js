import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import EventCard from '../eventCard/eventCard';
import {Card, Button} from 'react-bootstrap';
import './style.css';


class EventsListing extends Component {
    
    state = {
        eventList: [],
        isLoaded: false
    }


    render() {
        const {location} = this.props;
        const event = JSON.parse(location.state.data);
        console.log("DEBUG" , event);
        return(
            <div>
                <h2>Another hello</h2>

                {event.map((events) => 

                <div className="container"  key={events.id} >
                    <div className="eventCard">
                        <img src={events.images[4].url} alt="eventImage" className="cardImage"/>
                        <h4 className="cardTitle">{events.name}</h4>
                        <p className="cardDetails">{events._embedded.venues[0].url}</p>
                    </div>
           
                 </div>
                )}

            </div>
        )
    }
}

export default withRouter(EventsListing);