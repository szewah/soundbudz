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
                        <div className="eventDetails">
                            <p className="eventDate">Date: {events.dates.start.localDate}</p>
                            <p className="eventDate">Time: {events.dates.start.localTime}</p>
                            <p className="eventVenue">Venue: {events._embedded.venues[0].name}</p>
                            <a href={events._embedded.venues[0].url}>
                            See more
                            </a>
                        </div>
                        
                    </div>
           
                 </div>
                )}

            </div>
        )
    }
}

export default withRouter(EventsListing);
