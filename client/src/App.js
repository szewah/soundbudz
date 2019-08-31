import React from 'react';
import './App.css';
import SearchField from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to soundbudz
        </p>
        <SearchField></SearchField>
      </header>

    </div>
  );
}

export default App;
