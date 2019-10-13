import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import EventCard from '../eventCard/eventCard';
import {Button} from 'react-bootstrap';
import Moment from 'moment';
import './style.css';


class EventsListing extends Component {
    
    state = {
        eventList: [],
        isLoaded: false
    }


    render() {
        const {location} = this.props;
        const event = JSON.parse(location.state.data);
        var eventList = event.slice(0,10);
        const name = location.search;
        const search = name.substring(1);
        //uppercase the first character of the search variable and then add the rest of the 
        //letters from search.
        const searchTerm = search.charAt(0).toUpperCase() + search.slice(1);
        console.log(searchTerm);
        console.log("DEBUG" , eventList);
        return(
            <div>
                <h3>Search results for '{searchTerm}'</h3>

                {eventList.map((events) => 

                <div className="eventContainer"  key={events.id}>
                    <div className="eventCard">
                        <img src={events.images[4].url} alt="eventImage" className="cardImage"/>
                        <h5 className="cardTitle">{events.name}</h5>
                        <div className="eventDetails">
                            <p className="eventDate">Date: {Moment(
                                events.dates.start.localDate
                                ).format('LL')}
                            </p>
                            <p className="eventDate">Time: {Moment(
                                events.dates.start.localTime, 'h:mm'
                                ).format('h:mm A')}
                            </p>


                            <p className="eventVenue">Venue: {events._embedded.venues[0].name}</p>
                            <p className="eventAddress">
                                Address:{" "}{events._embedded.venues[0].address.line1}{","} 
                                            {" "}{events._embedded.venues[0].city.name}{"."}  
                            </p>
                            <div className="eventAction">   
                                <Button href={events.url} target="_blank">
                                    <i className="fas fa-ticket-alt"></i>
                                    Buy Ticket
                                </Button>
                                <Button><i className="fas fa-users"></i>Join Group</Button>
                                {/* <Button><i className="fas fa-directions"></i>Getting There</Button> */}
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
