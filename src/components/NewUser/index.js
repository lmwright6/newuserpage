import React, { Component } from 'react';



class NewUser extends React.Component {

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
      <div>
        Email: 
       <input className="emailInput" type="text" value={this.state.emailInput} onChange={this.handleEmailInput}  />
      </div>
    );
  }
}

export default NewUser;