import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = ({
      username: '',
      password: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username !== '' && this.state.password !== ''){
      this.props.onSubmit(this.state.username, this.state.password)
    }
  }

  handleChange = (e) => {
    if (e.target.name === 'username'){
      this.setState({
        username: (e.target.value)
      })
    } else {
      this.setState({
        password: (e.target.value)
      })
    }
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange} />
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
