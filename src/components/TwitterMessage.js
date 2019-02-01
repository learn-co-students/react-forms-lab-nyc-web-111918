import React from "react";

class TwitterMessage extends React.Component {
  // constructor() {
  //   super();
  //
  //   this.state = {};
  // }
  // cannot redifine state outside of the construtor if you have the construtor function.

state = {
  value:""
}

handleChange = e => {
  // console.log(e.target.value);
  // console.log(this.state);
  // need to setState
  // assign the key to the target name.
  this.setState({
    value: e.target.value
  })
}



  render() {
    console.log(this.state);
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value}  /*if you want to prevent negative number you can use maxLength="140" whatever limit you want. */  />
        <h2>Remaining Chars:{this.props.maxChars - this.state.value.length}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
