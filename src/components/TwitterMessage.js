import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChar: props.maxChars,
      inputText: "",
    };
  }

  updateText = event => {
    this.setState({
      inputText: event.target.value,
    }, () => this.setState({maxChar: (this.props.maxChars - this.state.inputText.length)}))
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.updateText}
          value={this.state.inputText}/>
          {this.state.maxChar} {"/"}
          {`${this.props.maxChars} letters left`}
      </div>
    );
  }
}

export default TwitterMessage;
