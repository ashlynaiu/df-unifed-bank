import React, { Component } from 'react';

//DCH
import dchQuestions from '../../images/desktop/dch-questions.png';
import dchEinstein from '../../images/desktop/dch-einstein.png';
import dchSummary from '../../images/desktop/dch-summary.png';
import dchScheduled from '../../images/desktop/dch-schedule-appointment.png';
import dchConnected from '../../images/desktop/dch-connected.png';
import dchAppointment from '../../images/desktop/dch-appointment.png';


class CommercialDCHBody extends Component {

  componentDidMount(){
    const { callAnimation } = this.props;
    const delay = .3;
    callAnimation(delay);
    
  }

  render() {
    const { updateDemoState, demoState } = this.props;

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
      <div className={`dch-body-content dch-${bodyClass()}`}>{renderDCHBody()}</div>
    );
  }
}

export default CommercialDCHBody;
