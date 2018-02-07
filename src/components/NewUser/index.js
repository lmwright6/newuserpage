
import React, { Component } from 'react';

class NewUser extends React.Component {

constructor(props) {
super(props);
this.state = {emailInput: ''}
this.state= {firstNameInput: ''}
this.state = {lastNameInput: ''}
this.state = {passwordInput: ''}
this.state = {reEnterInput:''}
this.handleEmailInput = this.handleEmailInput.bind(this);
}
handleEmailInput(event) {
this.setState({emailInput: event.target.value})
}
handlefirstNameInput(event){
this.setState({lastNameInput: event.target.value})
}
handlelastNameInput(event){
this.setState({lastNameInput: event.target.value})
}
handlepasswordInput(event){
this.setState({passwordInput: event.target.value})
}
handlereEnterInput(event){
this.setState({reEnterInput: event.target.value})
}
render() {
return (
<div className="App">
Email: 
<input className="emailInput" type="text" value={this.state.emailInput} onChange={this.handleEmailInput} />
FirstName:
<input className="firstNameInput" type="text" value={this.state.firstNameInput} onChange={this.handlefirstNameInput} />
LastName:
<input className="lastNameInput" type="text" value={this.state.lastNameInput} onChange={this.handlelastNameInput} />
Password:
<input className="passwordInput" type="text" value={this.state.passwordInput} onChange={this.handlepasswordInput} />
Re-Enter Password:
<input className="reEnterInput" type="text" value={this.state.reEnterInput} onChange={this.reEnterInput} />
</div>
);
}

}
export default NewUser;