import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxChars: props.maxChars,
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    },()=> {this.setState({
      maxChars: this.props.maxChars - this.state.value.length},() => {console.log(this.state.maxChars)})});
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input id="tweet-input" type="text" onChange={this.handleChange} value={this.state.value}/>
        <label>{this.state.maxChars}</label>
      </div>
    );
  }
}

export default TwitterMessage;
