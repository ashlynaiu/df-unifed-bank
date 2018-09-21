import React, { Component } from 'react';
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
      active: this.props.active
    }
  }

  hideCard() {
    return this.setState({active: !this.state.active})
  }

  render() {
    const { image } = this.props;
    console.log(image)
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
        <div className={`successCards ${this.state.active ? '' : 'hide-card'}`} onClick={() => this.hideCard()}>
            {chooseImage()}
        </div>
    );
  }
}

export default SuccessCard;
