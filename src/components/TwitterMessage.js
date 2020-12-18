import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      typed: "",
      counter: 0
    };
  }
  handleInput = (event) => {
    const v = event.target.value
    debugger
    this.setState({
      typed: v,
      counter: this.props.maxChars - v.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.typed} onChange={event => this.handleInput(event)}/>
        {this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
