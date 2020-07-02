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
      currentApp: null,
      headline: "Welcome",
    }
  }
  handleClick(icon) {
    if (icon === "Banana") {
      this.setState({ currentApp: <Tictactoe /> })
      this.setState({ headline: "Tictactoe" })
    }
    if (icon === "Shark") {
      this.setState({ currentApp: <BankApp /> })
      this.setState({ headline: "Banking App" })
    }
    if (icon === "Dog") {
      this.setState({ currentApp: <Cities /> })
      this.setState({ headline: "Cities and Communities App" })
    }
    return
  }
  render() {
    return (
      <div className="App">

        <MyHeader handleClick={this.handleClick} />
        <h1>{this.state.headline}</h1>
        <div className="App-body">
          {this.state.currentApp}
        </div>
      </div>
    )
  }
}

export default App;
