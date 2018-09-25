import React, { Component } from 'react';
import { Button } from '@salesforce/design-system-react';
import { Link } from 'react-router-dom';
import CommercialDCHBody from './commercialDCHBody';

//DCH
import dch from '../../images/desktop/dch-hub.png';
import dchHeader from '../../images/desktop/dch-header.png';
import actionListOne from '../../images/desktop/action-list-component-one.png';
import actionListTwo from '../../images/desktop/action-list-component-two.png';
import actionListThree from '../../images/desktop/action-list-component-three.png';


class CommercialDCH extends Component {
  render() {
    const { updateDemoState, callAnimation, stateName, demoState } = this.props;
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

    //Render DCH Header
    let renderDCHHeader = () => {
      return (
        <div>
          <div className="dch-tabs">
            <div className="open-tab">
              {stateName}
            </div>
          </div>
          <img src={dchHeader} alt="" />
        </div>
      )
    }

    //Render DCH Footer
    let renderDCHFooter = () => {
      if(demoState <= 3) {
        return (
          <div className="dch-footer">
            <Button label="Close" />
            <Button label="Finish" variant="brand" onClick={() => updateDemoState(demoState)}/>
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

    let actionListImage = renderDCHHub();

    return (
      <div className="dch">
        <div className="left">
          <img src={dch} alt="" className="slds-m-bottom_medium" />
          <img src={actionListImage} alt="" className="dch-hub"/>
        </div>
        <div className="right">
          {renderDCHHeader()}
          <div className="dch-body">
            <CommercialDCHBody callAnimation={callAnimation} demoState={demoState} updateDemoState={updateDemoState} />
            {renderDCHFooter()}
          </div>
        </div>
      </div>
    );
  }
}

export default CommercialDCH;
