import React, { Component } from 'react';
import Chat from './Chat';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{textAlign:"center",color:"green"}}>Example Chat Box With ReactJS</h1>
        <Chat />
      </div>
    );
  }
}

export default App;
