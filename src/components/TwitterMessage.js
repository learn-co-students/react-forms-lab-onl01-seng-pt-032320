import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {value: '',
        remaining: props.maxChars

  };
    

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
      remaining: this.props.maxChars - event.target.value.length
      
    });
    
    
  }


  render() {
    return (
      <div>
        <strong>{this.state.remaining}:</strong>
        <input type="text" value ={this.state.value} onChange={this.handleChange} name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
