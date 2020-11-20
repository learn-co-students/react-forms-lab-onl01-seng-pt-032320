import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      poemValid: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var poem = event.target.value
    var splitted = poem.split("\n")
    var line = splitted.map(line => line.split(" ").filter(word => word))
    debugger
    if (line.length !== 3) { return false }
    if (line[0].length === 5 && line[1].length === 3 && line[2].length === 5) {
    this.setState({
      poemValid: true,
      value: poem
    }, () => console.log(this.state))
    }
    else {
    this.setState({
      poemValid: false
      }, () => console.log(this.state))
    }
  }

  render() {
    let div = null;
     if (this.state.poemValid === false) {
       div = <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>;
     }

    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange}/>
        {div}
      </div>
    );
  }
}
