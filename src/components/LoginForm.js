import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
                  password: '',
                  username: '',
          
                }

  
  }
  handleSubmit = event => {
    event.preventDefault()
   this.props.handleLogin()
    
  }
  handleInputChange = event => {
    console.log( event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
     
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username}  onChange={this.handleInputChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password"value={this.state.password}  onChange={this.handleInputChange} type="password" />
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
