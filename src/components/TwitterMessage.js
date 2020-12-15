import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      blabla: ""
    };
  }

  handleChange = (event) => { 
    console.log(this.props.maxChars);
    this.setState({blabla: event.target.value}, ()=> console.log(this.state.blabla.length))     
  }
  
    remainingChars = () => {
    //clearly doesn't work.
    return (this.props.maxChars - this.state.blabla.length)
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.blabla} />
        <em>Remaining Characters:</em> {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
