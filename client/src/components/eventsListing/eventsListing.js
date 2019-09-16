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
        const name = location.search;
        const search = name.split().shift();
        console.log(search);
        console.log("DEBUG" , event);
        return(
            <div>
                <h3>Search results for "{name}"</h3>

                {event.map((events) => 

                <div className="container"  key={events.id} >
                    <div className="eventCard">
                        <img src={events.images[4].url} alt="eventImage" className="cardImage"/>
                        <h5 className="cardTitle">{events.name}</h5>
                        <div className="eventDetails">
                            <p className="eventDate">Date: {events.dates.start.localDate}</p>
                            <p className="eventDate">Time: {events.dates.start.localTime}</p>
                            <p className="eventVenue">Venue: {events._embedded.venues[0].name}</p>
                            <p className="eventAddress">Address: {events._embedded.venues[0].city.name}</p>
                            <p className="eventAddress2">Address2: {events._embedded.venues[0].address.line1}</p>
                            <div className="eventAction">
                                <span>
                                    <i className="fas fa-ticket-alt"></i>
                                    <a href={events._embedded.venues[0].url}>
                                    Buy Ticket
                                    </a>
                                </span>
                                <span><i className="fas fa-users"></i>Join Group</span>
                                <span><i className="fas fa-directions"></i>Getting There</span>
                            </div>

                        </div>
                        
                    </div>
           
                 </div>
                )}

            </div>
        )
    }
}

export default withRouter(EventsListing);
