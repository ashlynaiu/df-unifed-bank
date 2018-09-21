import React, { Component } from 'react';
import GlobalHeader from './GlobalHeader';
import '../../styles/desktop.css';
class CommercialApp extends Component {
  render() {
    return (
        <div className="desktop">
            <GlobalHeader screen="commercialAccount" />
            <div className="desktopBody">
            <h1>CommercialApp</h1>
            </div>
        </div>
    );
  }
}

export default CommercialApp;
