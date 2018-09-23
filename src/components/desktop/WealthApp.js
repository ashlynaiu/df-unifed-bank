import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GlobalHeader from './GlobalHeader';
import Icon from '../Icon';
import '../../styles/desktop.css';

//Homepage Images
import homeChart from '../../images/desktop/home-chart.png';
import homeNews from '../../images/desktop/home-news.png';
import homeRight from '../../images/desktop/home-right.png';
import alert from '../../images/desktop/Alert.gif';

//Client Page Images
import highlight from '../../images/desktop/client-highlight-panel.png';
import map from '../../images/desktop/client-map.png';
import clientPanelOne from '../../images/desktop/client-right-panel-one.png';

//Tearsheet
import tearsheet from '../../images/desktop/tearsheet.png';

//Updated Client View
import tabs from '../../images/desktop/interactions-tab.png';
import clientPanelTwo from '../../images/desktop/client-right-panel-two.png';
import timeline from '../../images/desktop/timeline.png';
class WealthApp extends Component {
  constructor(props) {
    super(props);
    this.updateDemoState = this.updateDemoState.bind(this);
    this.openModal = this.openModal.bind(this);
    this.state = {
      demoState: [],
      modal: false
    }
  }

  componentDidMount () {
    return this.setState({demoState: parseInt(this.props.demoState, 10) })
  }

  updateDemoState(num) {
    let newState = num + 1;
    return this.setState({ demoState: newState });
  }

  openModal() {
    this.updateDemoState();
    return this.setState({ modal: true });
  }
  render() {
    let renderHome = () => {
      return (
        <div className="home">
          <div className="left">
            <img src={homeChart} alt="" />
            <div className="flex">
              <div className="sub" onClick={() => this.updateDemoState(this.state.demoState)}>
                <img src={alert} alt="" />
              </div>
              <div className="sub">
                <img src={homeNews} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <img src={homeRight} alt="" />
          </div>
        </div>
      )
    }

    let renderClient = () => {
      return(
        <div className="clientPage account">
          <img src={highlight} alt="" />
          <div className="flex">
            <div className="left">
              <img src={map} alt="" />
            </div>
            <div className="right" onClick={() => this.updateDemoState(this.state.demoState)}>
              <img src={clientPanelOne} alt="" />
            </div>
          </div>
        </div>
      )
    }

    let renderTearsheet = () => {
      return(
        <div className="tearsheet">
          {renderClient()}
          <section role="dialog" tabindex="-1" aria-labelledby="modal-heading-01" aria-modal="true" aria-describedby="modal-content-id-1" class="slds-modal slds-fade-in-open">
            <div class="slds-modal__container">
              <header class="slds-modal__header">
                <button class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse fill-white" title="Close">
                  <Icon object="close" type="utility" size="medium" />
                  <span class="slds-assistive-text">Close</span>
                </button>
                <h2 id="modal-heading-01" class="slds-text-heading_medium slds-hyphenate">Charlie Adams Tearsheet</h2>
              </header>
              <div class="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
                <img src={tearsheet} alt="" />
              </div>
              <footer class="slds-modal__footer">
                <button class="slds-button slds-button_neutral">Print</button>
                <Link to="/smart-note">
                  <button class="slds-button slds-m-left_small slds-button_brand">Close</button>
                </Link>
              </footer>
            </div>
          </section>
          <div class="slds-backdrop slds-backdrop_open"></div>
        </div>
      )
    }

    let renderClientUpdated = () => {
      return(
        <div className="clientPage account">
          <img src={highlight} alt="" />
          <div className="flex">
            <div className="left">
              <div className="client-card">
                <img src={tabs} alt="" />
                <div className="timeline">
                  <img src={timeline} alt="" />
                </div>
              </div>
            </div>
            <div className="right">
              <img src={clientPanelTwo} alt="" />
            </div>
          </div>
        </div>
      )
    }

    let renderScreenState = () => {
      let demoState = this.state.demoState;
      if(demoState === 1) {
        return renderHome();
      }
      else if(demoState === 2){
        return renderClient();
      }
      else if(demoState === 3){
        return renderTearsheet();
      }
      else if(demoState === 4){
        return renderClientUpdated();
      }
    }

    return (
      <div className={`desktop ${this.state.modal ? 'modal-background' : ''}`}>
        <GlobalHeader screen="wealth"/>
          <div className="desktopBody">
            {renderScreenState()}
          </div>
      </div>
    );
  }
}

export default WealthApp;
