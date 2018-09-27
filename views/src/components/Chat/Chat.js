import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './Chat.css';

class Chat extends Component {
  state = { messages: [], message: '' }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({ messages: this.state.messages.push(e.target.name) })
    //console.log(this.state.message)
  }

  handleSend = (e) => {
    //e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="Chat">
        <div className="chatOut">{this.state.messages}</div>
        <input className="chatTyping" type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
        <Button id="send-chat" color="primary" size="lg" block onClick={this.handleSend}>Chat</Button>
      </div>
    )
  }
}

export default Chat;