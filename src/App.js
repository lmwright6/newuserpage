import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewUser from './components/NewUser';

class App extends React.Component {

  render() {
    return (
      <div className="App">
       <NewUser/>
      </div>
    );
  }
}

export default App;
