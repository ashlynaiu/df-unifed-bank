import React, { Component } from 'react';
import ChatBubble from './ChatBubble';
import ChatResponseOption from './ChatResponseOption';


class Chat extends Component{


  render() {
    return (
      <section role="log" className="slds-chat">
        <ul className="slds-chat-list">
          <ChatBubble boundClass="inbound" chatLabel="This is the bot talking"/>
          <ChatBubble boundClass="outbound" chatLabel="This is the client responding"/>

          <ChatBubble boundClass="inbound" chatLabel="This is the bot talking with alot more to say....like maybe too much to say"/>
          <ChatBubble boundClass="outbound" chatLabel="This is the client responding again"/>
          <ChatBubble boundClass="outbound" chatLabel="fuuuuuuuuuuuuuuuuuck!!!!!!!!!"/>
          <ChatBubble boundClass="inbound" chatLabel="Oh...is that how you feel"/>

          <ChatResponseOption label="Go away!!!"/>
          <ChatResponseOption label="Fuuuuuuuuuckkkk!!!"/>




        </ul>
      </section>
    );
  }


}
export default Chat;