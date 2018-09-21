import React, { Component } from 'react';
import wealthHeader from '../../images/desktop/header-wealth-client.png';
import homeHeader from '../../images/desktop/header-home.png';
import commercialAccountHeader from '../../images/desktop/header-home.png';
class GlobalHeader extends Component {
    render() {
        let renderHeaderImage = () => {
            if (this.props.screen === 'home') {
                return ( <img src={homeHeader} alt="" /> );
            }
            else if (this.props.screen === 'wealth') {
                return ( <img src={wealthHeader} alt="" /> );
            }
            else if (this.props.screen === 'commercialAccount') {
                return ( <img src={commercialAccountHeader} alt="" /> );
            }
        }
        
        return (
            <div className="HeaderImage">{renderHeaderImage()}</div>
        );
    }
}

export default GlobalHeader;