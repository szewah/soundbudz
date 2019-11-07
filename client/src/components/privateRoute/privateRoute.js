import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render={props => (
                auth.isAuthenticated ?
                    <Component {...props}/>
                : <Redirect to="/login"/>
            )}
        />
    );
};

export default PrivateRoute;