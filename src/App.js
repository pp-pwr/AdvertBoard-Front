import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {};

  componentDidMount() {
    setInterval(this.hello, 150);
  }

  hello = () => {
    fetch('/api/hello')
      .then(response => response.text())
      .then(message => {
        this.setState({message: message});
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.message}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
