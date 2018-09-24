import React, { Component } from 'react';
import GlobalHeader from './GlobalHeader';
import '../../styles/desktop.css';
import { Button } from '@salesforce/design-system-react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//Account Page
import accountOne from '../../images/desktop/account-one-third.png';
import accountTwo from '../../images/desktop/account-two-third.png';
import accountThree from '../../images/desktop/account-three-third.png';

//DCH
import dch from '../../images/desktop/dch-hub.png';
import actionListOne from '../../images/desktop/action-list-component-one.png';
import actionListTwo from '../../images/desktop/action-list-component-two.png';
import actionListThree from '../../images/desktop/action-list-component-three.png';
import dchHeader from '../../images/desktop/dch-header.png';
import dchQuestions from '../../images/desktop/dch-questions.png';
import dchEinstein from '../../images/desktop/dch-einstein.png';
import dchSummary from '../../images/desktop/dch-summary.png';
import dchScheduled from '../../images/desktop/dch-schedule-appointment.png';
import dchConnected from '../../images/desktop/dch-connected.png';
import dchAppointment from '../../images/desktop/dch-appointment.png';


class CommercialApp extends Component {
  constructor(props) {
    super(props);
    this.updateToSecondState = this.updateToSecondState.bind(this);
    this.updateToThirdState = this.updateToThirdState.bind(this);
    this.updateDemoState = this.updateDemoState.bind(this);
    this.state = {
      demoState: 1,
      stateName: 'Business Details'
    }
  }

  // toggleEnterState = () => {
  //   this.setState({ in: !this.state.in });
  // }

  updateToSecondState() {
    return this.setState({demoState: 2});
  }

  updateToThirdState() {
    return this.setState({
      demoState: 3,
      stateName: 'Summary',
      appearScreen: true
    });
  }

  updateDemoState(num) {
    let newState = num + 1;
    return this.setState({ demoState: newState });
  }

  render() {
    //Render Account
    const demoState = this.state.demoState;
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
            <img src={accountThree} alt="" onClick={() => this.updateToSecondState()}/>
          </div>
        </div>
      )
    }

    //Render DCH Header
    let renderDCHHeader = () => {
      return (
        <div>
          <div className="dch-tabs">
            <div className="open-tab">
              {this.state.stateName}
            </div>
          </div>
          <img src={dchHeader} alt="" />
        </div>
      )
    }

    //Render DCH Appointment Booking
    let renderDCHSchedule = () => {
      if(demoState === 4){
        return (
          <div className="sub-right">
            <img src={dchScheduled} alt="" onClick={() => this.updateDemoState(demoState)}/>
            <img src={dchConnected} alt="" />
          </div>
        )
      }
      else if(demoState === 5) {
        return (
          <div className="sub-right">
            <img src={dchAppointment} alt="" />
            <img src={dchConnected} alt="" />
          </div>
        )
      }
    }

    //Render DCH Action List Component
    let renderDCHHub = () => {
      if(demoState === 2) {
        return actionListOne;
      }
      else if (demoState === 3) {
        return actionListTwo;
      }
      else if (demoState >= 4) {
        return actionListThree;
      }
    }

    //Render DCH Footer
    let renderDCHFooter = () => {
      if(demoState <= 3) {
        return (
          <div className="dch-footer">
            <Button label="Close" />
            <Button label="Finish" variant="brand" onClick={() => this.updateToThirdState()}/>
          </div>
        )
      }
      if(demoState > 3) {
        return (
          <div className="dch-footer">
            <Button label="Close" />
            <Link to="/wealth">
              <Button label="Finish" variant="brand" />
            </Link>
          </div>
        )
      }
    }

    //Render DCH Body
    let renderDCHBody = () => {
      if(demoState === 2) {
        return (
          <CSSTransition in={true} timeout={800} appear={true} classNames="fade" unmountOnExit>
            <div className="dch-questions"><img src={dchQuestions} alt="" /></div>
          </CSSTransition>
        )
      }
      else if (demoState === 3) {
        return (
          <CSSTransition timeout={800} in={demoState === 3} appear={true} classNames="fade">
            <div className="dch-einstein" onClick={() => this.updateDemoState(demoState)}><img src={dchEinstein} alt="" /></div>
          </CSSTransition>
        )
      }
      else if (demoState >= 4) {
        return (
          <CSSTransition timeout={800} classNames="fade">
            <div className="dch-summary">
              <div className="sub-left">
                <img src={dchSummary} alt="" />
              </div>
              {renderDCHSchedule()}
            </div>
          </CSSTransition>
        )
      }
    }

    //Render DCH UI
    let renderDCH = () => {
      let actionListImage = renderDCHHub();
      return(
          <div className="dch">
              <div className="left">
                <img src={dch} alt="" className="slds-m-bottom_medium" />
                <img src={actionListImage} alt="" className="dch-hub"/>
              </div>
            <div className="right">
              {renderDCHHeader()}
              <div className="dch-body">
                {renderDCHBody()}
                {renderDCHFooter()}
              </div>
            </div>
          </div>
      )
    }

    //Decide Account vs DCH
    let renderScreenState = () => {
      if(demoState === 1) {
        return renderAccount();
      }
      else if (demoState >= 2) {
        return renderDCH();
      }
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
              {renderScreenState()}
            </div>
        </div>
    );
  }
}

export default CommercialApp;
