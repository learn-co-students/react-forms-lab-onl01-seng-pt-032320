import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      counter: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })

    this.setState(previousState => {
      return {
        counter: previousState.counter - 1
      }
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} name="message" id="message" value={this.state.message} />
        <p>Characters Left: {this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
