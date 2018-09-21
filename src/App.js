import React, { Component } from 'react';
import GlobalHeader from './components/GlobalHeader';
import WealthApp from './components/desktop/WealthApp';
import CommercialApp from './components/desktop/CommercialApp';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/desktop.css';
class App extends Component {
  render() {
    const { desktop } = this.prop;

    let renderWealth = () => {
      return ( <WealthApp /> );
    }

    let renderCommercial = () => {
      return ( <CommercialApp /> );
    }

    let renderApp = () => {
      if ( desktop === 'wealth' ){
        return renderWealth();
      }
      else {
        return renderCommercial();
      }
    }
    return (
      <div className="desktop">
        <GlobalHeader desktop={desktop} />
          <div className="desktopBody">
            {renderApp()}
          </div>
      </div>
    );
  }
}

export default App;
