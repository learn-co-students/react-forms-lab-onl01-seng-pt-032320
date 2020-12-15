import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleChange = (event) => { 
    //console.log(this.state.blabla.length);
    console.log(this.props.maxChars);
    console.log(this.state.blabla);
    return this.setState({blabla: event.target.value}) }
  remainingChars = () => {
    
    return (this.props.maxChars - this.state.blabla)
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} type="text" name="message" id="message" value={this.state.blabla} />
        <em>Remaining Characters:</em> {this.remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
