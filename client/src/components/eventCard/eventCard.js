import React from 'react';
import {Card} from 'react-bootstrap'


const EventCard = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.events.images[4].url} />
                <Card.Body>
                    <Card.Title>{this.props.events.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={this.props.onClick}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default EventCard;