import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "test"
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleMessageChange(event)} value={this.state.message}/>
        Characters left: {this.props.maxChars-this.state.message.length}{this.props.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
