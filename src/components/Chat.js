import React, { Component } from 'react';
import ChatBubble from './ChatBubble';
import ChatResponseOption from './ChatResponseOption';
import ChatABScheduler from './ChatABScheduler';
import TweenMax,  { Back } from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";

// import scrollTo from '../node_modules/gsap/ScrollToPlugin';


class Chat extends Component{
  constructor(props) {
    super(props);
    this.state = {
      timeoutFn: (config) => {
        window.setTimeout(() =>{
          config.fn(config)
        }, config.timing)
      },
      endBotTypingFn: (config) => {
        this.setState({ [config.typingBotString]: false });
      },
      popChatBubbleFn: (config) => {
        TweenMax.to(config.element, .3, {transform:"translateY(0) scale(1)", opacity:1, delay:.2, ease: Back.easeOut.config(1.7)});
        if(config.botIsTyping){
          config.timing = config.typingTime || 2500;
          config.fn = this.state.endBotTypingFn;
          this.state.timeoutFn(config);
        }
      },
      showResponseOptionsFn: (config) => {
        TweenMax.to(config.element, .5, {opacity:1, delay:.2, ease: Back.easeOut.config(1.7)});
      },
      firstTypingBubble : true,
      secondTypingBubble : true,
      thirdTypingBubble : true,
      fourthTypingBubble: true,
      fifthTypingBubble: true,
      sixthTypingBubble: true,
      seventhTypingBubble: true
      
    }
  }

  componentDidMount(){
    const response1 = document.querySelector('.response1');
    const firstTypingBubble = document.querySelector('.firstTypingBubble');
    const response2 = document.querySelector('.response2');
    const secondTypingBubble = document.querySelector('.secondTypingBubble');
    const thirdTypingBubble = document.querySelector('.thirdTypingBubble');
    const fourthTypingBubble = document.querySelector('.fourthTypingBubble');
    const firstChatResponses = document.querySelector('.firstChatResponses');
    

    let config = {
      "element": response1,
      "botIsTyping": false,
      "typingBotString": null,
      "timing": 500,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

    config = {
      "element": firstTypingBubble,
      "botIsTyping": true,
      "typingBotString": "firstTypingBubble",
      "timing": 1000,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

    config = {
      "element": response2,
      "botIsTyping": false,
      "typingBotString": null,
      "timing": 4200,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

    config = {
      "element": secondTypingBubble,
      "botIsTyping": true,
      "typingBotString": "secondTypingBubble",
      "timing": 4700,
      "fn": this.state.popChatBubbleFn,
      "typingTime": 1000
    }
    this.state.timeoutFn(config)

    config = {
      "element": thirdTypingBubble,
      "botIsTyping": true,
      "typingBotString": "thirdTypingBubble",
      "timing": 6000,
      "fn": this.state.popChatBubbleFn,
      "typingTime": 1000
    }
    this.state.timeoutFn(config)

    config = {
      "element": fourthTypingBubble,
      "botIsTyping": true,
      "typingBotString": "fourthTypingBubble",
      "timing": 7000,
      "fn": this.state.popChatBubbleFn,
      "typingTime": 2000
    }
    this.state.timeoutFn(config)

    config = {
      "element": firstChatResponses,
      "botIsTyping": false,
      "typingBotString": null,
      "timing": 9500,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

  }

  handleFirstClick = () => {
    const chatWindow = document.querySelector('.chat-window');
    const firstChatResponses = document.querySelector('.firstChatResponses');
    const firstSelectedOption = document.querySelector('.firstSelectedOption');
    const fifthTypingBubble = document.querySelector('.fifthTypingBubble');
    const abScheduler = document.querySelector('.abScheduler');
    

    TweenMax.to(firstChatResponses, 0, {display:"none"});
    TweenMax.to(chatWindow, .8, {scrollTo: 350, delay:1});
    let config = {
      "element": firstSelectedOption,
      "botIsTyping": false,
      "typingBotString": null,
      "timing": 0,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

    config = {
      "element": fifthTypingBubble,
      "botIsTyping": true,
      "typingBotString": "fifthTypingBubble",
      "timing": 500,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

    config = {
      "element": abScheduler,
      "botIsTyping": false,
      "typingBotString": null,
      "timing": 3500,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

  }

  handleSchedulerClick = (event) => {
    const abScheduler = document.querySelector('.abScheduler');
    const selectedAppointment = document.querySelector('.selectedAppointment');
    const sixthTypingBubble = document.querySelector('.sixthTypingBubble');
    const chatBankerInfoImage = document.querySelector('.chatBankerInfoImage');
    const secondChatResponses = document.querySelector('.secondChatResponses');

    TweenMax.to(abScheduler, 0, {display:"none"});
    selectedAppointment.querySelector('.slds-chat-message__text').textContent = event.target.textContent
    let config = {
      "element": selectedAppointment,
      "botIsTyping": false,
      "typingBotString": null,
      "timing": 0,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

    config = {
      "element": sixthTypingBubble,
      "botIsTyping": true,
      "typingBotString": "sixthTypingBubble",
      "timing": 400,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

    config = {
      "element": chatBankerInfoImage,
      "botIsTyping": false,
      "typingBotString": null,
      "timing": 3000,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

    config = {
      "element": secondChatResponses,
      "botIsTyping": false,
      "typingBotString": null,
      "timing": 3500,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

  }

  handleBankerConfimation = () => {
    const chatWindow = document.querySelector('.chat-window');
    const secondChatResponses = document.querySelector('.secondChatResponses');
    const bankerConfimationResponse = document.querySelector('.bankerConfimationResponse');
    const seventhTypingBubble = document.querySelector('.seventhTypingBubble');
    const chatCalEventInfo = document.querySelector('.chatCalEventInfo');

    TweenMax.to(secondChatResponses, 0, {display:"none"});
    TweenMax.to(chatWindow, .8, {scrollTo: 600, delay:.5});
    let config = {
      "element": bankerConfimationResponse,
      "botIsTyping": false,
      "typingBotString": null,
      "timing": 0,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

    config = {
      "element": seventhTypingBubble,
      "botIsTyping": true,
      "typingBotString": "seventhTypingBubble",
      "timing": 1000,
      "typingTime": 1000,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)

    config = {
      "element": chatCalEventInfo,
      "botIsTyping": false,
      "typingBotString": null,
      "timing": 2500,
      "fn": this.state.popChatBubbleFn
    }
    this.state.timeoutFn(config)


  }

  render() {
    return (
      <div className="imessageApp">
        <div className="chat-window">
          <section role="log" className="slds-chat">
            <ul className="slds-chat-list">
              <ChatBubble animationClass="hidden response1 ascending" boundClass="outbound" chatLabel="I'm leaving for a business trip to Brazil on Saturday date for 10 days and would like to use my credit card"/>
              <ChatBubble botTyping={this.state.firstTypingBubble} animationClass="hidden loading firstTypingBubble ascending" boundClass="inbound" chatLabel="To get started let's verify your account. I sent you a 5 digit code for confirmation, enter those five digits so we can access your account."/>
              <ChatBubble animationClass="hidden response2 ascending" boundClass="outbound" chatLabel="547612"/>
              <ChatBubble animationClass="secondTypingBubble hidden ascending" botTyping={this.state.secondTypingBubble} boundClass="inbound" chatLabel="Great, let me review your card information."/>
              <ChatBubble animationClass="thirdTypingBubble hidden ascending" botTyping={this.state.thirdTypingBubble} boundClass="inbound" chatLabel="I have made a note on your account and have activated Brazil for the dates specified."/>
              <ChatBubble animationClass="fourthTypingBubble hidden ascending" botTyping={this.state.fourthTypingBubble} boundClass="inbound" chatLabel=" After reviewing the details of your account, I've noticed that you are paying your international suppliers with checks, would you like to meet with a Relationship Manager to learn more about our Wire Transfer Service?"/>
              
              
              <div onClick={this.handleFirstClick} className="hidden-response-options ascending firstChatResponses chat-response-options slds-grid slds-grid_align-end">
                <ChatResponseOption label="No Thanks"/>
                <ChatResponseOption label="Sure!"/>
              </div>
              
              
              <ChatBubble animationClass="firstSelectedOption hidden ascending" boundClass="outbound" chatLabel="Sure!"/>
              <ChatBubble animationClass="fifthTypingBubble hidden ascending" botTyping={this.state.fifthTypingBubble} boundClass="inbound" chatLabel="What date and time works best for you to meet with the relationship manager?"/>

              <ChatABScheduler onButtonClick={this.handleSchedulerClick} animationClass="abScheduler hidden ascending" />
              <ChatBubble animationClass="selectedAppointment hidden ascending" boundClass="outbound" chatLabel="Sure!"/>

              <ChatBubble animationClass="sixthTypingBubble hidden ascending" botTyping={this.state.sixthTypingBubble} boundClass="inbound" chatLabel="You will be meeting with Andrew Collins"/>

              <div className="chatBankerInfoImage hidden ascending chat-banker-info-image"></div>

              <div onClick={this.handleBankerConfimation} className="hidden-response-options secondChatResponses ascending chat-response-options slds-grid slds-grid_align-end">
                <ChatResponseOption label="Change Banker"/>
                <ChatResponseOption label="Sounds Good!"/>
              </div>

              <ChatBubble animationClass="bankerConfimationResponse hidden ascending" boundClass="outbound" chatLabel="Sounds Good!"/>
              <ChatBubble animationClass="seventhTypingBubble hidden ascending" botTyping={this.state.seventhTypingBubble} boundClass="inbound" chatLabel="You're all set! See you soon."/>


              <div className="hidden chatCalEventInfo ascending chat-cal-event-info"></div>

            </ul>
          </section>
        </div>
        <section className="toolbar-bottom"></section>
      </div>
    );
  }
}
export default Chat;