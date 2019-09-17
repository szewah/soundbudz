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
        const search = name.substring(1);
        //uppercase the first character of the search variable and then add the rest of the 
        //letters from search.
        const searchTerm = search.charAt(0).toUpperCase() + search.slice(1);
        console.log(searchTerm);
        console.log("DEBUG" , event);
        return(
            <div>
                <h3>Search results for '{searchTerm}'</h3>

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
                            <p className="eventAddress2">Address 2: {events._embedded.venues[0].address.line1}</p>
                            <div className="eventAction">

                                
                                <span>
                                    <a href={events._embedded.venues[0].url}>
                                        <i className="fas fa-ticket-alt">
                                         Buy Ticket
                                        </i>
                                    </a>
                                </span>
                                <Button><i className="fas fa-users"></i>Join Group</Button>
                                <Button><i className="fas fa-directions"></i>Getting There</Button>
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
