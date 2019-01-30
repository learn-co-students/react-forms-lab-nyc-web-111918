import React from "react";

export default class TwitterMessage extends React.Component {

  state = {
    message: ''
  }

  handleInput = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleInput} value={this.state.message} />
        {this.props.maxChars-this.state.message.length}
      </div>
    )
  }
}
