import React from 'react';
import {Card, Button} from 'react-bootstrap'
import './style.css';


const EventCard = () => {
    return (
        <div>
            <div className="container">
            <Card style={{ width: '28rem' }}>
                <Card.Img variant="top" src={this.props.events.images[4].url}/>
                <Card.Body>
                    <Card.Title>Testing</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default EventCard;