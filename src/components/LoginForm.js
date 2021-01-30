import React from "react";

class LoginForm extends React.Component {
  constructor(props) {

    super(props);

    this.state = {value: '',
                  password: '',
                  username: ''


  }
   this.handleInputChange = this.handleInputChange.bind(this);
   this.handlePassWordChange = this.handleInputChange.bind(this);
    
  }
  handleInputChange(event){
      console.log(event.target.value)
    this.setState({value: event.target.value,
      
          username: ''

    })
 // console.log(this.state.value)
 handlePassWordChange =(event) =>{
  this.setState({value: event.target.value,

    password: ''

  })
   
      
    }
   
  }
  


  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.value} onChange={this.handleInputChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} onChange={this.handlePassWordChange} type="password" />
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
