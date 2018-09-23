import React, { Component } from 'react';
import '../../styles/timeline.css';
import TweenMax,  { Back } from 'gsap';
import Icon from '../Icon';
import { Button } from '@salesforce/design-system-react'; 


class Timeline extends Component {
  constructor(){
    super();
    this.state = {
      isLoading: ''
    }
  }

  componentDidMount(){

    this.setState({isLoading: true})
    window.setTimeout(() => {
      this.setState({isLoading: false})
      this.runAnimation()
    }, 2000)
  }

  runAnimation(){
    const dates = document.querySelector('.dates');
    const visualizer = document.querySelector('.visualizer');
    const allEvents = document.querySelectorAll('.v-event');
    const eventItems = document.querySelectorAll('.event-item');

    const openVisualizer = () => {
      TweenMax.to(visualizer, .5, {height:'55px', delay:0, ease: Back.easeOut.config(1.7)});
      TweenMax.staggerFrom(allEvents, .5, {y:"150", ease: Back.easeOut.config(1), delay:.2}, 0.01, showEventItems);
    }

    const showEventItems = () => {
      TweenMax.staggerTo(eventItems, .5, {transform: "translateY(0)", opacity:1, ease: Back.easeOut.config(1.7), delay:0}, 0.1);
    }
    TweenMax.to(dates, .5, {opacity:1, delay:.2, onComplete: openVisualizer});
  }

  render(){
    const renderLoader = () => {
      return (
        <div className="timeline-container">
            <div role="status" className="slds-spinner slds-spinner_medium slds-spinner_brand">
              <span className="slds-assistive-text">Loading</span>
              <div className="slds-spinner__dot-a"></div>
              <div className="slds-spinner__dot-b"></div>
            </div>
          </div>
          
      )
    }
    const renderTimeline = () => {
      return(
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

          <div className="event-window">
            <section className="event-pane">

              <article className="event-item">
                <section className="event-header slds-grid">
                  <Icon object="goals" type="standard" size="small" />
                  <h1>Home Down Payment Added</h1>
                  <figure className="dashed-line"></figure>
                  <h2 className="slds-col_bump-left">December 1, 2019</h2>
                </section>
                <section className="event-body slds-grid">
                  <div className="event-details slds-grid">
                    <figure className="event-line goals"></figure>
                    <dl>
                      <dt>Target Value</dt>
                      <dd>$450,000</dd>
                    </dl>
                    <dl>
                      <dt>Description</dt>
                      <dd>Adams family is looking to purchase a new home closer to Rachel’s job.</dd>
                    </dl>
                  </div>
                </section>
              </article>

              <article className="event-item">
                <section className="event-header slds-grid">
                  <Icon object="opportunity" type="standard" size="small" />
                  <h1>401(k) Rollover</h1>
                  <figure className="dashed-line"></figure>
                  <h2 className="slds-col_bump-left">October 30, 2018</h2>
                </section>
                <section className="event-body slds-grid">
                  <figure className="event-line opportunity"></figure>
                  <div className="event-details-related-contaier">
                    <div className="event-details slds-grid">
                      <dl>
                        <dt>Amount</dt>
                        <dd>$500,000</dd>
                      </dl>
                      <dl>
                        <dt>Status</dt>
                        <dd>New</dd>
                      </dl>
                      <dl>
                        <dt>Action Plan</dt>
                        <dd>Standard 401(k) Rollover Plan</dd>
                      </dl>
                    </div>
                    <aside className="related-activities slds-grid">
                      <Icon object="chevronright" type="utility" size="x-small" />
                      <span>Related Activities (1)</span>
                    </aside>
                  </div>
                </section>
              </article>

              <article className="event-item">
                <section className="event-header slds-grid">
                  <Icon object="household" type="standard" size="small" />
                  <h1>Adams Household Addition</h1>
                  <figure className="dashed-line"></figure>
                  <h2 className="slds-col_bump-left">September 27, 2018</h2>
                </section>
                <section className="event-body slds-grid">
                  <div className="event-details slds-grid">
                    <figure className="event-line household"></figure>
                    <dl>
                      <dt>Name</dt>
                      <dd>Claire Adams</dd>
                    </dl>
                    <dl>
                      <dt>Role</dt>
                      <dd>Daughter</dd>
                    </dl>
                  </div>
                </section>
              </article>

              <article className="event-item">
                <section className="event-header slds-grid">
                  <Icon object="event" type="standard" size="small" />
                  <h1>Discovery Meeting</h1>
                  <figure className="dashed-line"></figure>
                  <h2 className="slds-col_bump-left">September 27, 2018</h2>
                </section>
                <section className="event-body slds-grid">
                  <figure className="event-line event"></figure>
                  <div className="event-details-related-contaier">
                    <div className="event-details slds-grid">
                      
                      <dl>
                        <dt>Location</dt>
                        <dd>1 Pike St. San Francisco, CA</dd>
                      </dl>
                      <dl>
                        <dt>Attendees</dt>
                        <dd><a>Rachel Adams, Katrina Lapria</a></dd>
                      </dl>
                      <dl>
                        <dt>Expectations</dt>
                        <dd>Learn more about client’s goals, life events, and relationships.</dd>
                      </dl>
                    </div>
                    <aside className="related-activities">
                        <div className="related-header slds-grid">
                          <Icon object="chevrondown" type="utility" size="x-small" />
                          <span>Related Activities (1)</span>
                        </div>
                        <div className="related-items slds-grid">
                          <article className="slds-grid related-item">
                            <Icon object="check" type="utility" size="x-small" />
                            <span><a>All tasks completed</a></span>
                          </article>
                          <article className="slds-grid related-item">
                            <Icon object="note" type="utility" size="x-small" />
                            <span><a>1 smart note</a></span>
                          </article>
                          <article className="slds-grid related-item">
                            <Icon object="picklist_type" type="utility" size="x-small" />
                            <span><a>2 surveys sent</a></span>
                          </article>
                          <article className="slds-grid related-item">
                            <Icon object="email" type="utility" size="x-small" />
                            <span><a>9 emails sent</a></span>
                          </article>
                        </div>
                    </aside>
                  </div>
                </section>
              </article>

              <article className="event-item">
                <section className="event-header slds-grid">
                  <Icon object="event" type="standard" size="small" />
                  <h1>Commercial Banking Services</h1>
                  <figure className="dashed-line"></figure>
                  <h2 className="slds-col_bump-left">September 4, 2018</h2>
                </section>
                <section className="event-body slds-grid">
                  <figure className="event-line event"></figure>
                  <div className="event-details-related-contaier">
                    <div className="event-details slds-grid">
                      <dl>
                        <dt>Location</dt>
                        <dd>123 Mission St. San Francisco, CA</dd>
                      </dl>
                      <dl>
                        <dt>Attendees</dt>
                        <dd><a>Rachel Adams, Ricky Bobby</a></dd>
                      </dl>
                      <dl>
                        <dt>Expectations</dt>
                        <dd>Understand Charlie’s business needs</dd>
                      </dl>
                    </div>
                    <aside className="related-activities slds-grid">
                        <Icon object="chevronright" type="utility" size="x-small" />
                        <span>Related Activities (1)</span>
                    </aside>
                  </div>
                </section>
              </article>
            
            </section>
          </div>
        </div>
      )
    }

    const renderState = () => {
      let loadingTrue = this.state.isLoading;
      if(loadingTrue){
        return renderLoader();
      }else{
        return renderTimeline();
      }

    }
    return (
      <div className="dev-only-container"> 
        {renderState()}  
      </div>
    )
  }
}

export default Timeline;