import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleChange}
          maxchars={this.props.maxChars}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          maxLength="280"
        />
        <div>
          {this.state.message.length <= 280
            ? 280 - this.state.message.length
            : 280} / 0
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
