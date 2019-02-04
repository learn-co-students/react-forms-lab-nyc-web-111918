import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      remainingChars: 0,
      maxChars: props.maxChars,
      value: ''
    })
  }

  handleChange = (e) => {
    console.log(e.target.value.length)
    this.setState({
      value: e.target.value,
      remainingChars: (this.state.maxChars - e.target.value.length)
    })
  }


  render() {
    console.log(this.state);
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}/>
          <div>Remaining Chars: {this.state.remainingChars}</div>
          <div>maxChars: {this.state.maxChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
