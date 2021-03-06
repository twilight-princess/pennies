import React, { Component } from 'react';

//Components 
import PennyNav from '../Nav/PennyNav';
import Home from '../Home/Home';
import Chat from '../Chat/Chat';
import Login from '../Login/Login';

//CSS
import './App.css';

class App extends Component {
  state = { isLoggedIn: true }
  render() {
    return (
      <div className="App">
        { this.state.isLoggedIn ? 
          <div className="loggedIn">
            <PennyNav />
            <Chat /> 
          </div>
          : <Login /> }
      </div>
    );
  }
}

export default App;
