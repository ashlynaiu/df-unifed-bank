import React, { Component } from 'react';
import GlobalHeader from './GlobalHeader';
import '../../styles/desktop.css';
import CommercialDCH from './commercialDCH';
//Account Page
import accountOne from '../../images/desktop/account-one-third.png';
import accountTwo from '../../images/desktop/account-two-third.png';
import accountThree from '../../images/desktop/account-three-third.png';
import TweenMax,  { Back } from 'gsap';

class CommercialApp extends Component {
  constructor(props) {
    super(props);
    this.updateDemoState = this.updateDemoState.bind(this);
    this.state = {
      demoState: 1,
      stateName: 'Business Details'
    }
  }

  updateState = (num) => {
    let newState = num + 1;
    if (newState === 3){
      this.handleAnimationIn();
      return this.setState({
        demoState: newState,
        stateName: 'Summary',
      });
    }
    this.handleAnimationIn();
    return this.setState({ demoState: newState });
  }

  updateDemoState(num) {
    this.handleAnimationOut(this.updateState, num);
  }

  handleAnimationOut = (updateState, num) => {
    const dchBodyContent = document.querySelector('.dch-body-content')
    if(dchBodyContent){
      TweenMax.to(dchBodyContent, .3, {opacity:0, delay:0, transform:"translateY(10%)", ease: Back.easeIn.config(1.7), onComplete: updateState, onCompleteParams: [num]});
    } else{
      this.updateState(num)
    }
  }

  handleAnimationIn= (delay) => {
    let timeDelay = delay || 0;
    const dchBodyContent = document.querySelector('.dch-body-content')
    if(dchBodyContent){
      TweenMax.to(dchBodyContent, .3, {opacity:1, transform: "translateY(0)", ease: Back.easeOut.config(1.7), delay:timeDelay});
    }
  }

  render() {
    //Render Account
    let demoState = this.state.demoState;
    let renderAccount = () => {
      return(
        <div className="accountPage">
          <div className="one-third">
            <img src={accountOne} alt="" />
          </div>
          <div className="two-third">
            <img src={accountTwo} alt="" />
          </div>
          <div className="three-third">
            <img src={accountThree} alt="" onClick={() => this.updateDemoState(demoState)}/>
          </div>
        </div>
      )
    }

    //Render DCH
    let renderDCH = () => {
      return ( <CommercialDCH callAnimation={this.handleAnimationIn} demoState={this.state.demoState} updateDemoState={this.updateDemoState} stateName={this.state.stateName} /> );
    }

    //Decide State Header
    let renderStateHeader = () => {
      if(demoState === 1) {
        return 'commercialAccount';
      }
      else if(demoState > 1) {
        return 'commercialDCH';
      }
    }
    return (
      <div className="desktop">
          <GlobalHeader screen={renderStateHeader()} />
          <div className="desktopBody">
            {demoState > 1 ? renderDCH() : renderAccount()}
          </div>
      </div>
    );
  }
}

export default CommercialApp;
