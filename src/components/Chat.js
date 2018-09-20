import React, { Component } from 'react';
import ChatBubble from './ChatBubble';
import ChatResponseOption from './ChatResponseOption';
import ChatABScheduler from './ChatABScheduler';

class Chat extends Component{

  render() {
    return (
      <div className="imessageApp">
        <div className="chat-window">
          <section role="log" className="slds-chat">
            <ul className="slds-chat-list">
              <ChatBubble boundClass="inbound" chatLabel="This is the bot talking [o_o]"/>
              <ChatBubble boundClass="outbound" chatLabel="This is the client responding (ಠ_ಠ)"/>
              <ChatBubble boundClass="inbound" chatLabel="This is the bot talking with alot more to say....like maybe too much to say"/>
              <ChatBubble boundClass="outbound" chatLabel="This is the client responding again"/>
              <ChatBubble boundClass="outbound" chatLabel="fuuuuuuuuuuuuuuuuuck!!!!!!!!!"/>
              <ChatBubble boundClass="inbound" chatLabel="Oh...is that how you feel"/>

              <div className="chat-response-options slds-grid slds-grid_align-end">
                <ChatResponseOption label="Go away!!!"/>
                <ChatResponseOption label="Fuuuuuuuuuckkkk!!!"/>
              </div>

              <ChatABScheduler />

              <ChatBubble boundClass="inbound" chatLabel="Looks like you'll be meeting this bruh"/>

              <div className="chat-banker-info-image"></div>

              <div className="chat-response-options slds-grid slds-grid_align-end">
                <ChatResponseOption label="I'm not sure about this guy"/>
              </div>

              <div className="chat-cal-event-info"></div>

            </ul>
          </section>
        </div>
        <section className="toolbar-bottom"></section>
      </div>
    );
  }
}
export default Chat;