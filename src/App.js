import React, { Component } from 'react';
import './App.css';
import MyHeader from './components/MyHeader';
import Tictactoe from './tictactoe/Tictactoe';
import BankApp from './bankapp/BankApp.js';
import Cities from './cities/Cities.js';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currentApp: null
    }
  }
  handleClick(icon) {
    this.setState({currentApp:icon});
  }
  render() {
    let displayApp;
    if (this.state.currentApp === "Tictactoe") {
      displayApp=<Tictactoe />
    }
    else if (this.state.currentApp === "Banking App") {
      displayApp=<BankApp />
    }
    else if (this.state.currentApp === "Cities and Communities") {
      displayApp=<Cities />
    }
    return (
      <div className="App">

        <MyHeader handleClick={this.handleClick} />
        <h1>{this.state.currentApp}</h1>
        <div className="App-body">
          {displayApp}
        </div>
      </div>
    )
  }
}

export default App;
