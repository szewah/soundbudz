import React, {Component} from 'react';
import {Card, Form, Button} from 'react-bootstrap';


class Chat extends Component {
    state ={
        message: "",
        messages: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    sendMessage = (event) => {
        event.preventDefault();
        alert('I was clicked');
        const message = this.state.message;
        this.setState({message});       
        console.log(message);
    }


    render() {
        return(
            <div id="chatContainerForm" className="container">
                {/* chat area can only be returned if the messages are saved to database*/}
                {/* <div className="chatArea">
                    {this.state.messages.map((message, index) => {
                        return (
                            <Card key={index}>
                                <p>{message} lots of messages</p>
                            </Card>
                        )
                    })}
                </div> */}
                <Form onSubmit={this.sendMessage}>
                    <Form.Group> 
                        <Form.Control
                            type="text" 
                            value={this.state.registerName}
                            placeholder='Message'
                            onChange={this.handleChange}>
                        </Form.Control>
                    </Form.Group> 
                    <Button type="submit">Send</Button>
                </Form>
            </div>
        )
    }
}

export default Chat;