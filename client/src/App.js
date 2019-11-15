import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

//components and pages
import Navbar from './components/navbars/Navbar';
import HomePage from './pages/homepage/homepage';
import EventsPage from './pages/eventsPage/eventsPage';
import Login from './pages/loginPage/loginPage'
import Registration from './pages/registrationPage/registrationPage';
import LandPage from './pages/landPage/landPage';
import Private from './components/privateRoute/privateRoute';
import ChatPage from './pages/chat/chatPage';

//redux
import {Provider} from 'react-redux';
import Store from './_helpers/store';

//authentication
import jwt_decode from 'jwt-decode';
import setAuthToken from './_helpers/setAuthToken';
import { setCurrentUser, logoutUser } from "./actions/authAction";


if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);
  Store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    Store.dispatch(logoutUser());

    window.location.href = "/login";
  }
}

class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <div className="App">
          <Navbar/>

                <Route exact path = "/" component={HomePage} />
                <Route exact path ="/events" component={EventsPage} />
                <Route exact path ="/registration" component={Registration}/>
                <Route exact path ="/login" component={Login}/>
                <Switch>
                  <Private>
                    <Route exact path ="/landPage" component={LandPage}/>
                    <Route exact path ="/chat" component={ChatPage}/>
                  </Private>
              </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
