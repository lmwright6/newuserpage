import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewUser from './components/NewUser';

class App extends React.Component {


  render() {
    return (

   
        <div className="App">
          <div>
          <h1>New User</h1>
          </div>
          <NewUser/>
        </div>

    );
  }
}

export default App;
