import React, { Component } from 'react';
import GlobalHeader from './GlobalHeader';
import '../../styles/desktop.css';
import CommercialDCH from './commercialDCH';
//Account Page
import accountOne from '../../images/desktop/account-one-third.png';
import accountTwo from '../../images/desktop/account-two-third.png';
import accountThree from '../../images/desktop/account-three-third.png';


class CommercialApp extends Component {
  constructor(props) {
    super(props);
    this.updateDemoState = this.updateDemoState.bind(this);
    this.state = {
      demoState: 1,
      stateName: 'Business Details'
    }
  }

  updateDemoState(num) {
    let newState = num + 1;
    if (newState === 3){
      return this.setState({
        demoState: newState,
        stateName: 'Summary',
      });
    }
    return this.setState({ demoState: newState });
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
      return ( <CommercialDCH demoState={this.state.demoState} updateDemoState={this.updateDemoState} stateName={this.state.stateName} /> );
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
