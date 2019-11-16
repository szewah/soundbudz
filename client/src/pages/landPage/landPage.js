import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './style.css';


class landingPage extends Component  {
    
    state = {}

    render() {
        const {user} = this.props.auth;
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

export default connect(mapStateToProps, null)(withRouter(landingPage));