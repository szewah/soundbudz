import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/homepage';
import EventsPage from './pages/eventsPage/eventsPage';
import Login from './pages/loginPage/loginPage'
import Registration from './pages/registrationPage/registrationPage';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path = "/" component={HomePage} />
        <Route exact path ="/events" component={EventsPage} />
        <Route exact path ="/registration" component={Registration}/>
        <Route exact path ="/login" component={Login}/>
      </Router>
    </div>
  );
}

export default App;
