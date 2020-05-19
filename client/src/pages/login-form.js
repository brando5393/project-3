import React, { Component } from "react";

class LoginForm extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    email: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`${this.state.password}\nEmail: ${this.state.email}`);
    this.setState({ password: "", email: ""});
  };

  render() {
    return (
      <form>
        <p>Email: {this.state.email}</p>
        <p>Password: {this.state.password}</p>

        <input 
          type="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          />
     
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}
export default LoginForm;