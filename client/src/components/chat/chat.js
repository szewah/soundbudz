import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';


class Chat extends Component {
    state ={
        message: "",
        messages: []
    }

    render() {
        return(
            <div className="container">
                <Card 
                type="text" 
                name="messageContent" 
                placeholder='Mesage'
                value={this.state.message} 
                />
                <Button>Send</Button>
            </div>
        )
    }
}

export default Chat;