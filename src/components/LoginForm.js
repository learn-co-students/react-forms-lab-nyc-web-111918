import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  saveUsername = (event) => {
    this.setState({username: event.target.value})
  }
  savePassword = (event) => {
    this.setState({password: event.target.value})
  }
  handleSubmit2 = (e) => {
    e.preventDefault()
    if (this.state.username!=="" && this.state.password!==""){
      this.props.onSubmit(this.state.username, this.state.password)
    }
  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmit2(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" onChange={event => this.saveUsername(event)} value={this.state.username} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" onChange={event => this.savePassword(event)} type="password" />
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
