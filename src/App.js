import React, { Component } from 'react';
import './App.css';
import Ethereum from './components/Ethereum';
import Todo from './components/Todo';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Ethereum />
        <div className="bottom-container">
          <div>Events Here</div>
          <Todo />
        </div>
      </div>
    );
  }
}

export default App;
