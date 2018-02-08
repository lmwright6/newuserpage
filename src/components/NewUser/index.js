
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
this.setState({firstNameInput: event.target.value})
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
<input className="emailInput" type="text" id="textBox1" placeholder="Email" value={this.state.emailInput} onChange={this.handleEmailInput} /><br />
<input className="firstNameInput" type="text" placeholder="First Name" value={this.state.firstNameInput} onChange={this.handlefirstNameInput} /><br />
<input className="lastNameInput" type="text" placeholder="Last Name" value={this.state.lastNameInput} onChange={this.handlelastNameInput} /><br />
<input className="passwordInput" type="text" placeholder="Paswword" value={this.state.passwordInput} onChange={this.handlepasswordInput} /><br />
<input className="reEnterInput" type="text" placeholder="Re-enter Password" value={this.state.reEnterInput} onChange={this.reEnterInput} /><br />

<button onClick={this.clicked}> Create User</button>

</div>
);
}

}
export default NewUser;