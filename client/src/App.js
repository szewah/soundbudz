import React, {Component} from 'react';
import Navbar from './components/navbars/Navbar';
import HomePage from './pages/homepage/homepage';
import EventsPage from './pages/eventsPage/eventsPage';
import Login from './pages/loginPage/loginPage'
import Registration from './pages/registrationPage/registrationPage';
import LandPage from './pages/landPage/landPage';
import Private from './components/privateRoute/privateRoute';
import ChatPage from './pages/chat/chatPage';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import Store from './_helpers/store';


class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <div className="App">
          <Navbar/>
              <Switch>
                <Route exact path = "/" component={HomePage} />
                <Route exact path ="/events" component={EventsPage} />
                <Route exact path ="/registration" component={Registration}/>
                <Route exact path ="/login" component={Login}/>
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
