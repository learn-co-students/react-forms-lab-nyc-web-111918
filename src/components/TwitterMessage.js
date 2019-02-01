import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  handleTweet = (e) => {
    this.setState({message: e.target.value})
    // this.setState({message: e.target.input.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleTweet} value={this.state.message}/>
        <p>Remaing Characters: {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
