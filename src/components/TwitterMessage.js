import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleChange = (event) => {
    //console.log(event.target.value)
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        <p><strong>Characters Remaining: {this.props.maxChars - this.state.message.length} </strong></p>
      </div>
    );
  }
}

export default TwitterMessage;

//This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have. 
//This prop is being passed in from the App component with the value 280.
