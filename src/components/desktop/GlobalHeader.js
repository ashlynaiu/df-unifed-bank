import React, { Component } from 'react';
import wealthHeader from '../../images/desktop/header-wealth-client.png';
import homeHeader from '../../images/desktop/header-home.png';
import commercialAccountHeader from '../../images/desktop/header-commercial-account.png';
import commercialDCHHeader from '../../images/desktop/header-commercial-dch.png';
class GlobalHeader extends Component {
  render() {
    let renderHeaderImage = () => {
      if (this.props.screen === 'home') {
        return homeHeader;
      }
      else if (this.props.screen === 'wealth') {
        return wealthHeader;
      }
      else if (this.props.screen === 'commercialAccount') {
        return commercialAccountHeader;
      }
      else if (this.props.screen === 'commercialDCH') {
        return commercialDCHHeader;
      }
    }
    
    return (
      <div className="HeaderImage"> 
        <img src={renderHeaderImage()} alt="" />
      </div>
    );
  }
}

export default GlobalHeader;