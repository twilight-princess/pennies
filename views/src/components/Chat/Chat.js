import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';


//CSS
import './Chat.css';

class Chat extends Component {
  state = { theirMessages: [], messages: [], message: '' }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    //console.log(this.state.message)
  }

  handleSend = (e) => {
    this.setState({ messages: [...this.state.messages, this.state.message]})
    let newMessage = this.state.message
    console.log(this.state)
  }

  handleReceive = (e) => {
    this.setState({ theirMessages: [...this.state.theirMessages, this.state.message]})
  }

  render() {
    return (
      <div className="Chat">
        <div className="chatOut">
          { this.state.messages.map((message, i) => 
            //You should make this a box that displays most recent messages but the box is a set size and doesn't scroll
              <div className="eachMessage" key={i}>{message}</div> )
          } 
        </div>
        <div className="chatOut">
          { this.state.theirMessages.map((message, i) => 
              <div className="theirMessages" key={i+message}>{message}</div> )
          }
        </div>
        <input className="chatTyping" type="text" ref="textBox" name="message" value={this.state.message} onChange={this.handleChange} />
        <button id="sendChat" onClick={this.handleSend}>Chat</button>
        <button id="receiveChat" onClick={this.handleReceive}>Chat</button>
      </div>
    )
  }
}

export default Chat;