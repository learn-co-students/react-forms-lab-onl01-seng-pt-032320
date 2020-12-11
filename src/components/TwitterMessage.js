import React from "react";

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxChars: this.props.maxChars, message: "" };
  }

  handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }
  remainingChars = () => { return this.state.maxChars - this.state.message.length; }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message} name="message" id="message" />
        <div> Remaining characters: {this.remainingChars()} </div>
      </div>
    );
  }
}