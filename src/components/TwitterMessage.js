import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      characters: 280
    };
  }

  handleTweet = event => {
    this.setState({
      message: event.target.value,
      characters: 280 - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
        onChange={event => this.handleTweet(event)}
        value={this.state.message} />
        <p>{this.state.characters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
