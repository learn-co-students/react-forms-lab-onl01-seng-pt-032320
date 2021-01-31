import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
                  password: '',
                  username: '',
                  loggedIn: this.handleLogin
                }

  
  }
  handleSubmit = event => {
    event.preventDefault()
    loggedIn: event.target.value,
    // console.log("I am here")
    // let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    // let dataArray = this.state.submittedData.concat(formData)
    // this.setState({submittedData: dataArray})
    loggedIn: this.props.handleLogin
  }
  handleInputChange = event => {
    console.log( event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
     
    })
  }


  render() {
    return (
      <form onSubmit= {event => this.handleSubmit(event)} >
        <div>
          <label>
            Username
            <input id="username" name="username"  onChange={this.handleInputChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password"  onChange={this.handleInputChange} type="password" />
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
