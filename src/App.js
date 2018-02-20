import React, { Component } from 'react';
import './App.css';
import Ethereum from './components/Ethereum';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Ethereum />
      </div>
    );
  }
}

export default App;
