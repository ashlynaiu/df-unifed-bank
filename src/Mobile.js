import React, { Component } from 'react';
import './styles/mobile.css';
import { Button } from '@salesforce/design-system-react';
import Chat from './components/Chat';

class Mobile extends Component {
  render() {
    return (
        <div className="mobile-frame">
            <div className="mobileContainer">
                <div className="mobileContainer-inner">
                {/* <Button label="Hello Button" /> */}
                <Chat />
                </div>
            </div>
        </div>
    );
  }
}

export default Mobile;
