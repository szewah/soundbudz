import React, {Component} from 'react';

class Events extends Component {
    state ={

    }

    render() {
        const events_data = JSON.parse(this.props.location.state.events_data);
        console.log(`These are the events: ${events_data}`);
    }
}
