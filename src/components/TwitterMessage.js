import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let countLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={event => this.handleChange(event)} type="text" name="message" id="message" />
        {countLeft}
      </div>
    );
  }
}

export default TwitterMessage;
