import React, { Component } from 'react';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">N.A. Wildflower Index</h1>
        </header>
        <Search />
      </div>
    );
  }
}

export default App;
