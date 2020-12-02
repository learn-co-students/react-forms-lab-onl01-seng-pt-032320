import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)

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
    let maxChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        {maxChars}
      </div>
    );
  }
}

export default TwitterMessage;