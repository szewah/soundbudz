import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/homepage';
import EventsPage from './pages/eventsPage/eventsPage';
import Login from './pages/loginPage/loginPage'
import Registration from './pages/registrationPage/registrationPage';
import LandPage from './pages/landPage/landPage';
import AuthenticatedRoute from './_helpers/auth';
import ChatPage from './pages/chat/chatPage';
import getJWT from './_helpers/getJwt';

import { BrowserRouter, Route, Switch} from "react-router-dom";


class App extends Component {

  state = {
    auth: false
  }

  componentDidMount() {
    var token = getJWT();
    if (token) {
      this.setState({auth: true})
    } else{
      this.setState({auth: false})
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar isAuth={this.state.auth}/>
            <Switch>
              <Route exact path = "/" component={HomePage} />
              <Route exact path ="/events" component={EventsPage} />
              <Route exact path ="/registration" component={Registration}/>
              <Route exact path ="/login" component={Login}/>
              <AuthenticatedRoute>
                <Route exact path ="/landPage" component={LandPage}/>
                <Route exact path ="/chat" component={ChatPage}/>
              </AuthenticatedRoute>
            </Switch>
        </div>
      </BrowserRouter>
    )};
}

export default App;
