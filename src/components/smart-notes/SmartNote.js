import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from './CardInfo';
import '../../styles/smart-note.css';
import { Button } from '@salesforce/design-system-react';
import StatusBar from '../../images/smart-note/status-bar.png';
import RecordButton from '../../images/smart-note/record-button.png';
import Note from '../../images/smart-note/note.png';

//Success Notes
import SuccessCard from './SuccessCard';

class SmartNote extends Component {
  constructor(props) {
    super(props);
    this.updateDemoState = this.updateDemoState.bind(this);
    this.state = {
      demoState: 1,
      cards: data,
      saveLabel: 'Save'
    }
  }

  updateDemoState(num) {
    let newState = num + 1;
    if(num === 2) {
      return this.setState({saveLabel: 'Close', demoState: newState });
    }
    return this.setState({ demoState: newState });
  }

  render() {
    let demoState = this.state.demoState;

    let renderMobileHome = () => {
      return (
        <div className="mobileHome" onClick={() => this.updateDemoState(this.state.demoState)}>
          <img src={RecordButton} alt="" />
        </div>
      )
    }

    let renderNote = () => {
      return (
        <div className="mobileBody" onClick={() => this.updateDemoState(this.state.demoState)}>
          <img src={Note} alt="" />
        </div>
      )
    }

    let renderSuccess = () => {
      let cards = this.state.cards;
      return (
        <div className="mobileBody">
          {Object
            .keys(cards)
            .map(key => <SuccessCard
                key={key}
                index={key}
                active={cards[key].active}
                image={cards[key].name}/>)
          }
        </div>
      )
    }

    let renderNextButton = () => {
      if(demoState === 2) {
        return (<Button label="Save" variant="brand" onClick={() => this.updateDemoState(this.state.demoState)} />)
      }
      else if(demoState === 3) {
        return (
          <Link to="/wealth-complete">
            <Button label="Close" variant="brand" />
          </Link>
        )
      }
    }

    let renderMobileBody = () => {
      if(demoState === 1) {
        return renderMobileHome();
      }
      else if(demoState === 2) {
        return renderNote();
      }
      else if(demoState === 3) {
        return renderSuccess();
      }
    }

    return (
        <div className="mobile-frame">
            <div className="mobileContainer">
                <div className="mobileContainer-inner smartnote-background">
                    <img src={StatusBar} alt=""/>
                    <div className="mobileHeader">
                        <Button label="Back" />
                        <h1>New Smart Note</h1>
                        <div className={`${this.state.demoState === 1 ? 'hide-button' : ''}`}>
                          {renderNextButton()}
                        </div>
                    </div>
                    {renderMobileBody()}
                </div>
            </div>
        </div>
    );
  }
}

export default SmartNote;
