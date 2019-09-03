import React from 'react';
import './App.css';
import SearchField from './components/Search/Search';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <header className="App-header">
        <p>
         Welcome to soundbudz
        </p>
        <SearchField />
      </header>

    </div>
  );
}

export default App;
