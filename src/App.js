import React, { Component } from 'react';
import './App.css';
import Ethereum from './components/Ethereum';
// import Todo from './components/Todo';
import Events from './components/Events';
import Video from './components/Video';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Ethereum />
        <Events />
      </div>
    );
  }
}

export default App;
