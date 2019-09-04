import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/homepage';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage />


    </div>
  );
}

export default App;
