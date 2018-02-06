import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {emailInput: ''}

    this.handleEmailInput = this.handleEmailInput.bind(this);
  }
  handleEmailInput(event) {
    this.setState({emailInput: event.target.value})
  }
  render() {
    return (
      <div className="App">
        Email: 
       <input className="emailInput" type="text" value={this.state.emailInput} onChange={this.handleEmailInput}  />

      </div>
    );
  }
}

export default App;
