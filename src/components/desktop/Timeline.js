import React, { Component } from 'react';
import '../../styles/timeline.css';
import Icon from '../Icon';
import { Button } from '@salesforce/design-system-react'; 


class Timeline extends Component {


  render(){
    return (

      <div className="dev-only-container">

        <div className="timeline-container">
          <section className="header">
            <div className="slds-grid">
              <h1>Client Insight Timeline</h1>
              <div className="slds-grid slds-col_bump-left">
                <Button >
                  <Icon object="date_input" type="utility" size="x-small" /> 
                </Button>
                <Button >
                  <Icon object="filter" type="utility" size="x-small" />
                </Button>
              </div>
            </div>
          </section>

          <section className="time-pane">
            <div className="dates slds-grid slds-grid_align-spread">
              <span>1990</span>
              <span>2000</span>
              <span>2010</span>
              <span>2020</span>
              <span>2030</span>
              <span>2040</span>
              <span>2050</span>
            </div>

            <div className="visualizer">

              <section className="v-group">
                <div className="v-day">
                  <figure className="v-event"></figure>
                </div>
                <div className="v-day">
                  <figure className="v-event"></figure>
                </div>
                <div className="v-day">
                  <figure className="v-event"></figure>
                  <figure className="v-event"></figure>
                  <figure className="v-event"></figure>
                </div>
                
              </section>
            </div>

          </section>
        </div>

      </div>

    )
  }
}

export default Timeline;