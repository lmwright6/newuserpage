
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

clicked(){
    console.log('the button was clicked');
}

render() {
return (
<div className="App">
Email: 
<input className="emailInput" type="text" id="textBox1" value={this.state.emailInput} onChange={this.handleEmailInput} /> <br />
FirstName:
<input className="firstNameInput" type="text" id="textBox1"  value={this.state.firstNameInput} onChange={this.handlefirstNameInput} /> <br />
LastName:
<input className="lastNameInput" type="text" id="textBox1" value={this.state.lastNameInput} onChange={this.handlelastNameInput} /><br />
Password:
<input className="passwordInput" type="text" id="textBox1" value={this.state.passwordInput} onChange={this.handlepasswordInput} /> <br />
Re-Enter Password:
<input className="reEnterInput" type="text" id="textBox1" value={this.state.reEnterInput} onChange={this.reEnterInput} /> <br />
<button onClick={this.clicked}> Create User</button>

</div>
);
}

}
export default NewUser;