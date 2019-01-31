import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    // the starting value of the state is a blank string.
    this.state = {
      onSubmit: props.onSubmit,
      username:'',
      password:''
    };
  }

// handleInputChange = e => {
//   // console.log(e.target.dataset.action);
//   console.log(e.target.value);
//   const action = e.target.dataset.action
//   this.setState({
//     [action]: e.target.value
//     // debugger
//   })
// }

handleInputChange = e => {
  const name = e.target.name
  this.setState({
    [name]: e.target.value
  })
}


handleSubmit = e => {
  e.preventDefault()
  console.log(this.state);
  //HOW CAN I TEST FOR PROPS HERE?
  // console.log(onSubmit);
  if(this.state.username && this.state.password) {
    this.state.onSubmit(this.state)
  } else {
    console.log('You done goofed')
  }
}



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
            /*data-action="username"*/
            id="username"
            name="username"
            type="text"
            onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            /*data-action="password"*/
            id="password"
            name="password"
            type="password"
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
