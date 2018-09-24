import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Opportunity from '../../images/smart-note/success-opportunity.png';
import Household from '../../images/smart-note/success-household.png';
import Goal from '../../images/smart-note/success-goal.png';
import Details from '../../images/smart-note/success-details.png';
import Compliance from '../../images/smart-note/success-compliance.png';

class SuccessCard extends Component {
  constructor(props) {
    super(props);
    this.hideCard = this.hideCard.bind(this);
    this.state = {
      active: this.props.active,
      in: false
    }
  }
  hideCard() {
    this.setState({ in: true });
  }

  render() {
    const { image } = this.props;
    let chooseImage = () => {
      if (image === 'Opportunity') {
        return (<img src={Opportunity} alt="" />)
      }
      else if (image === 'Household') {
        return (<img src={Household} alt="" />)
      }
      else if (image === 'Goal') {
        return (<img src={Goal} alt="" />)
      }
      else if (image === 'Details') {
        return (<img src={Details} alt="" />)
      }
      else if (image === 'Compliance') {
        return (<img src={Compliance} alt="" />)
      }
    }
    return (
      <CSSTransition 
        in={this.state.in} 
        timeout={300} 
        classNames="fade" 
        onEntered={() => {
          this.setState({
            active: false
          });
        }}
      >
        <div className={`successCards ${this.state.active ? '' : 'hide-card'}`} onClick={() => this.hideCard()}>
            {chooseImage()}
        </div>
      </CSSTransition>
    );
  }
}

export default SuccessCard;
