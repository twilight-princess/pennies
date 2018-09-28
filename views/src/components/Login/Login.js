import React, { Component } from 'react';

//CSS
import './Login.css'

class Login extends Component {
  state ={ loggedIn: false , user: { username: '', password: ''}}

  handleChange = e => {
    this.setState({
      user: {[e.target.name]: e.target.value}
    })
  }

  handleLogin = () => {
    this.setState({
      user: {
        username: this.state.username,
        password: this.state.password
      },
      loggedIn: true
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="Login">
        <form name="loginForm">
          <input type="text" placeHolder="Username" name="user.username" value={this.state.username} onChange={this.handleChange} />
          <input type="password" placeHolder="Password" name="user.password" value={this.state.password} onChange={this.handleChange} />
          <br />
          <input type="button" value="Login" onClick={this.handleLogin} />
        </form>
      </div>
    )
  }
}

export default Login;