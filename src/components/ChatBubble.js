import React, { Component } from 'react';

class ChatBubble extends Component{
  
  
  getMarkup(){
    let markup;
    if(this.props.botTyping){ 
      markup = <span className="slds-icon-typing slds-is-animated" title="Customer is typing">
                <span className="slds-icon-typing__dot"></span>
                <span className="slds-icon-typing__dot"></span>
                <span className="slds-icon-typing__dot"></span>
                <span className="slds-assistive-text">Customer is typing</span>
              </span>
    }else {
      markup = <span>{this.props.chatLabel}</span>
    }
    return markup;
  }

  render() {
    
    return (
      <li className={"slds-chat-listitem slds-chat-listitem_" + this.props.boundClass}>
        <div className="slds-chat-message">
          <div className={"slds-chat-message__body " + this.props.animationClass}>
            <div className={"slds-chat-message__text slds-chat-message__text_" + this.props.boundClass}>
              {this.getMarkup()}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ChatBubble;