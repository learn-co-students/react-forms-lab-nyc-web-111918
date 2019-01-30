import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onSubmit: props.onSubmit,
      username: '',
      password: ''
    };
  }

  handleSubmit = event => {
  event.preventDefault();
  if (this.state.username && this.state.password){
  this.state.onSubmit(this.state)
  }
}

handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  });
}


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleChange} id="password" name="password" type="password" />
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
