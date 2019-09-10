import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
// import EventCard from '../eventCard/eventCard';
import {Card, Button} from 'react-bootstrap';


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
                
                    <Card key={events.id} style={{ width: '28rem' }}>
                        <Card.Img variant="top" src={events.images[4].url}/>
                        <Card.Body>
                            <Card.Title>{events.name}</Card.Title>
                            <Card.Text>
                                {events.info}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                
                )}

            </div>
        )
    }
}

export default withRouter(EventsListing);
