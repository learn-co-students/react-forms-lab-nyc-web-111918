import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    charCounter: this.props.maxChars
    };
  }

  typingHandler = event => {
    this.setState({
      message: event.target.value,
      charCounter: this.props.maxChars - event.target.value.length
    })
    console.log(this.state.message, this.state.charCounter)
  }

  render() {

    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event) => this.typingHandler(event)} value={this.state.message} type="text" />
        <div>characters left {this.state.charCounter} </div>
      </div>
    );
  }
}

export default TwitterMessage;
