import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewUser from './components/NewUser';

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
       <NewUser/>
      </div>
    );
  }
}

export default App;
