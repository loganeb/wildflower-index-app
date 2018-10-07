import React, { Component } from 'react';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">North American Wildflower Index</h1>
          <a 
          href="http://loganbynes.com/" 
          className="author" 
          target="_blank"
          rel="noopener noreferrer"
          >
            Built by Logan Bynes
          </a>
        </header>
        <Search />

        <footer>
          <a href="http://loganbynes.com/">
            &copy; Copyright Logan Bynes 2018 &nbsp;- 
          </a>
          <a href="https://www.instagram.com/jahooclouseau/">
            &nbsp; Background Image by Jahoo Clouseau
          </a>
        </footer>
        
      </div>
    );
  }
}

export default App;
