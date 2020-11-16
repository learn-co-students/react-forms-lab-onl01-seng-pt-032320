import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:''
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let maxChars = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleMessage} value={this.state.message} name="message" id="message" />
        <p>{maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
