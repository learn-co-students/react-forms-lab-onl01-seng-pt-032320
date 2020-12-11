import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {username: "", password: ""};
  }

  handleInputChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

  handleSubmit = (e) => {
    e.preventDefault();
    let formData = { username: this.state.username, password: this.state.password };
    if (formData.username && formData.password) {this.props.handleLogin(formData);}
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username
            <input id="username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>Password
            <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
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
