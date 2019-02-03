import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  charsRemaining = () => {
    return (this.props.maxChars - this.state.value.length)
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.value}/>
        {this.charsRemaining()}
      </div>
    );
  }
}

export default TwitterMessage;
