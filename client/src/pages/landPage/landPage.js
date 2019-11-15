import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';


class landingPage extends Component  {
    
    state = {}

    render() {
        const {user} = this.props.auth;
        console.log(user);
    return  (
        <div>
            <div className="container">
                <h3>Hello {user.name}, this is a private landing page</h3>
            </div>
        </div>
        )
    }
};

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, null)(landingPage);