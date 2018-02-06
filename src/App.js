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

        <body>
          <input type = "text" name= "email" placeholder = "Enter email"/> <br />
          <input type = "text" name= "firstname" placeholder = "Enter First Name"/> <br/>
          <input type = "text" name= "lastname" placeholder = "Enter Last Name"/> <br/>
          <input type = "text" name= "password" placeholder = "Enter Password"/><br/>
          <input type = "text" name= "password2" placeholder = "Re-type Password"/><br/>
          <select>
            <option value="Band/artist">Band/artist</option>
            <option value="Venue">Venue</option>

          </select>
        </body>
        Email: 
       <input className="emailInput" type="text" value={this.state.emailInput} onChange={this.handleEmailInput}  />

      </div>
    );
  }
}

export default App;
