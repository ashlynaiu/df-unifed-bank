import React, { Component } from 'react';
import { Button } from '@salesforce/design-system-react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//DCH
import dchQuestions from '../../images/desktop/dch-questions.png';
import dchEinstein from '../../images/desktop/dch-einstein.png';
import dchSummary from '../../images/desktop/dch-summary.png';
import dchScheduled from '../../images/desktop/dch-schedule-appointment.png';
import dchConnected from '../../images/desktop/dch-connected.png';
import dchAppointment from '../../images/desktop/dch-appointment.png';


class CommercialDCHBody extends Component {
  render() {
    const { updateDemoState, demoState } = this.props;
    console.log(demoState)
    //Render DCH Appointment Booking
    let renderDCHSchedule = () => {
      if(demoState === 4){
        return (
          <div className="sub-right">
            <img src={dchScheduled} alt="" onClick={() => updateDemoState(demoState)}/>
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

    //Render DCH Body
    let renderDCHBody = () => {
      if(demoState === 2) {
        return (
          <img src={dchQuestions} alt="" />
        )
      }
      else if (demoState === 3) {
        return (
          <img src={dchEinstein} alt="" onClick={() => updateDemoState(demoState)} />
        )
      }
      else if (demoState >= 4) {
        return (
            <div className="dch-summary">
              <div className="sub-left">
                <img src={dchSummary} alt="" />
              </div>
              {renderDCHSchedule()}
            </div>
        )
      }
    }

    let bodyClass = () => {
      if(demoState === 2) {
        return 'questions';
      }
      else if(demoState === 3) {
        return 'einstein';
      }
      else if (demoState >= 4) {
        return ''
      }
    }

    return (
      <div className={`dch-${bodyClass()}`}>{renderDCHBody()}</div>
    );
  }
}

export default CommercialDCHBody;
