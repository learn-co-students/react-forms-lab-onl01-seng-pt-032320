import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  //This component takes one prop: 
  //handleLogin which is a function — this function is called when the form is being submitted
//   <input
//   id="username"
//   type="text"
//   name="username"
//   value={this.state.username}
//   onChange={this.handleInputChange}
// />

handleInputChange = (event) => {
  //console.log(event.target.value)
  this.setState({
    username: event.target.value, 
  })
}

handlePasswordChange = (event) => {
  //console.log(event.target.value)
  this.setState({
    password: event.target.value, 
  })
}

handleSubmit = event => {
  event.preventDefault()
  if ((this.state.username !== "") && (this.state.password !=="")) {
    //debugger
    this.props.handleLogin(this.state)
  }
}

// handleSubmit = event => {
//   event.preventDefault()
//   this.sendFormDataSomewhere(this.state)
// }

  render() {
    return (
      // callback prop should call the `handleLogin` callback prop when the form is being submitted
      <form onSubmit={this.handleSubmit}> 
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
                 value={this.state.username}
                 onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
