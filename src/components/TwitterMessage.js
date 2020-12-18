import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      typed: "",
      counter: this.props.maxChars
    };
  }
  handleInput = (event) => {
    const v = event.target.value
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
        {this.state.counter}
      </div>
    );
  }
}

export default TwitterMessage;
