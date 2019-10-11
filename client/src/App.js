import React from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/homepage';
import EventsPage from './pages/eventsPage/eventsPage';
import Login from './pages/loginPage/loginPage'
import Registration from './pages/registrationPage/registrationPage';
import LandPage from './pages/landPage/landPage';
import PrivateRoute from './components/privateRoute/privateRoute';
import AuthenticatedRoute from './utils/auth';

import { BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Switch>
            <Route exact path = "/" component={HomePage} />
            <Route exact path ="/events" component={EventsPage} />
            <Route exact path ="/registration" component={Registration}/>
            <Route exact path ="/login" component={Login}/>
            <AuthenticatedRoute>
              <Route exact path ="/landPage" component={LandPage}/>
            </AuthenticatedRoute>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
