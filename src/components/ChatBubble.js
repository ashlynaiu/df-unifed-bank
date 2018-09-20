import React, { Component } from 'react';

class ChatBubble extends Component{

  render() {
    return (
      <li className={"slds-chat-listitem slds-chat-listitem_" + this.props.boundClass}>
        <div className="slds-chat-message">
          <div className="slds-chat-message__body">
            <div className={"slds-chat-message__text slds-chat-message__text_" + this.props.boundClass}>
              <span>{this.props.chatLabel}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ChatBubble;