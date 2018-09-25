import React, { Component } from 'react';
import '../../styles/desktop.css';

//Homepage Images
import one from '../../images/analytics/1.png';
import two from '../../images/analytics/2.png';
import three from '../../images/analytics/3.png';
import four from '../../images/analytics/4.png';

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.updateDemoState = this.updateDemoState.bind(this);
    this.state = {
      demoState: 1
    }
  }

  updateDemoState(num) {
    let newState = num + 1;
    if(newState <= 4) {
      return this.setState({ demoState: newState });
    }
  }

  render() {

    let renderScreenState = () => {
      let demoState = this.state.demoState;
      if(demoState === 1) {
        return one;
      }
      else if(demoState === 2){
        return two;
      }
      else if(demoState === 3){
        return three;
      }
      else if(demoState === 4){
        return four;
      }
    }

    return (
      <div className="desktop">
        <img src={renderScreenState()} alt="" onClick={() => this.updateDemoState(this.state.demoState)}/>
      </div>
    );
  }
}

export default Analytics;
