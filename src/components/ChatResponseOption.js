import React, { Component } from 'react';

class ChatResponseOption extends Component{

  render() {
    return (
      <button className="chat-response-option">
        {this.props.label}
      </button>
    );
  }
}

export default ChatResponseOption;