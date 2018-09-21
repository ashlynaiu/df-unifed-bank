import React, { Component } from 'react';
import { Button } from '@salesforce/design-system-react';
import {Icon} from '@salesforce/design-system-react'; 
import {IconSettings} from '@salesforce/design-system-react';

class ChatABScheduler extends Component{

  handleClick = (event) => {
    this.props.onButtonClick(event);
  }

  render(){
    return(
      <div className={"ab-scheduler "  + this.props.animationClass}>
            <div className="header">
            <IconSettings iconPath="/assets/icons">
              <Icon category="utility" name="chevronright"/>
            </IconSettings>
                <span className="heading-title">Monday, Sep 24, 2018</span>
            <IconSettings iconPath="/assets/icons">
              <Icon category="utility" name="chevronright"/>
            </IconSettings>
                <span className="time-zone">Time Zone: GMT-07</span>

            </div>
            <div className="content">
              <Button onClick={this.handleClick} label="9:30 - 10:30am"/>
              <Button onClick={this.handleClick} label="10:30 - 11:30am"/>
              <Button onClick={this.handleClick} label="11:30am - 12:30pm"/>
              <Button onClick={this.handleClick} label="12:30pm - 1:30pm"/>
            </div>
          </div>
    )
  }
}

export default ChatABScheduler