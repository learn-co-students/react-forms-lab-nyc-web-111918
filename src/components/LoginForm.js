import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleChangePassword = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" onChange={(event) => this.handleChangeUsername(event)} name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={(event) => this.handleChangePassword(event)} name="password" type="password" value={this.state.password}/>
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
