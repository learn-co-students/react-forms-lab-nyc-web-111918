import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      remainingCharacters: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      remainingCharacters: this.props.maxChars - event.target.value.length
    })
  }


  //want to create some kind of counter
  // returns 140 - event.target.value.length

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value = {this.state.value}
        onChange={this.handleChange}/>
        <p>remaining characters go here: {this.state.remainingCharacters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
