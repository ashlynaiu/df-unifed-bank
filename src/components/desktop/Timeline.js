import React, { Component } from 'react';
import '../../styles/timeline.css';
import TweenMax,  { Back } from 'gsap';
import Icon from '../Icon';
import { Button } from '@salesforce/design-system-react'; 


class Timeline extends Component {

  componentDidMount(){
    const dates = document.querySelector('.dates');
    const visualizer = document.querySelector('.visualizer');
    const allEvents = document.querySelectorAll('.v-event');
    const openVisualizer = () => {
      TweenMax.to(visualizer, .5, {height:'55px', delay:.2, ease: Back.easeOut.config(1.7)});
      TweenMax.staggerFrom(allEvents, .5, {y:"150", ease: Back.easeOut.config(1), delay:.3}, 0.01);
    }

    TweenMax.to(dates, .5, {opacity:1, delay:.2, onComplete: openVisualizer});
    
  }

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

            <div className="visualizer slds-grid">
              <div className="scrubber-wrap">
                <figure className="scrubber-line"></figure>
                <figure className="scrubber-triangle">
                  <Icon object="up" type="utility" size="x-small" />
                </figure>
              </div>

              <div className="v-events-wrap slds-grid">
                <section className="v-group slds-grid slds-grid_vertical-align-end">
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                </section>

                <section className="v-group slds-grid slds-grid_vertical-align-end">
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                </section>

                <section className="v-group slds-grid slds-grid_vertical-align-end">
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month"></div>
                  <div className="v-month"></div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                </section>

                <section className="v-group slds-grid slds-grid_vertical-align-end">
                  <div className="v-month">
                  <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month"></div>
                  <div className="v-month"></div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month"></div>
                  <div className="v-month"></div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                </section>

                <section className="v-group slds-grid slds-grid_vertical-align-end">
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                </section>

                <section className="v-group slds-grid slds-grid_vertical-align-end">
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                </section>

                <section className="v-group slds-grid slds-grid_vertical-align-end">
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month"></div>
                  <div className="v-month"></div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                </section>

                <section className="v-group slds-grid slds-grid_vertical-align-end">
                  <div className="v-month">
                    <figure className="v-event"></figure>
                  </div>
                </section>
              </div>



            </div>

          </section>
        </div>

      </div>

    )
  }
}

export default Timeline;