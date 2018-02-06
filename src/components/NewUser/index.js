
import React, { Component } from 'react';

class NewUser extends React.Component {

constructor(props) {
super(props);
this.state = {emailInput: ''}
this.state= {firstNameInput: ''}
this.state = {lastNameInput: ''}
this.state = {passwordInput: ''}
this.state = {reEnterPasswordInput:''}
this.handleEmailInput = this.handleEmailInput.bind(this);
this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
this.handleLastNameInput = this.handleLastNameInput.bind(this);
this.handlePasswordInput = this.handlePasswordInput.bind(this);
this.handleReEnterPasswordInput = this.handleReEnterPasswordInput.bind(this);
}
handleEmailInput(event) {
this.setState({emailInput: event.target.value})
}
handleFirstNameInput(event){
this.setState({lastNameInput: event.target.value})
}
handleLastNameInput(event){
this.setState({lastNameInput: event.target.value})
}
handlePasswordInput(event){
this.setState({passwordInput: event.target.value})
}
handleReEnterPasswordInput(event){
this.setState({reEnterPasswordInput: event.target.value})
}
render() {
return (
<form className="NewUser">
  Email: 
  <input className="emailInput" type="text" value={this.state.emailInput} onChange={this.handleEmailInput} />
  <br />
  FirstName:
  <input className="firstNameInput" type="text" value={this.state.firstNameInput} onChange={this.handleFirstNameInput} />
  <br />
  LastName:
  <input className="lastNameInput" type="text" value={this.state.lastNameInput} onChange={this.handleLastNameInput} />
  <br />
  Password:
  <input className="passwordInput" type="text" value={this.state.passwordInput} onChange={this.handlePasswordInput} />
  <br />
  Re-Enter Password:
  <input className="reEnterInput" type="text" value={this.state.reEnterPasswordInput} onChange={this.handleReEnterPasswordInput} />
  <br />
  <button className="newUserSubmit" type="submit" value="submit">Submit</button>

</form>
);
}

}
export default NewUser;