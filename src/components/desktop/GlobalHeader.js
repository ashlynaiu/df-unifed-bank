import React, { Component } from 'react';
import Icon from '../Icon';
import header__logo from '@salesforce-ux/design-system/assets/images/logo-noname.svg';
import ashlyn from '../../images/desktop/ashlyn.png';
import pam from '../../images/desktop/pam.png';


class GlobalHeader extends Component {
  handleChange(){

  }

  render() {
    let renderAvatar = () => {
      if (this.props.screen === 'home' || this.props.screen === 'wealth') {
        return ashlyn;
      }
      if (this.props.screen === 'commercialAccount' || this.props.screen === 'commercialDCH') {
        return pam;
      }
    }

    let renderHeaderImage = () => {
      let firstRowTabPresent;
      let secondRowTabPresent;
      let thirdRowTabPresent;
      let firstRowTabLabel;
      let secondRowTabLabel;
      let thirdRowTabLabel;

      if (this.props.screen === 'home') {
        // no tab open
        // no sub tab
        firstRowTabPresent = false;
        secondRowTabPresent = false;
      }
      else if (this.props.screen === 'wealth') {
        // tab open showing charlie
        // sub tab open showing charlie
        firstRowTabPresent = true;
        firstRowTabLabel = "Charlie Adams";
        secondRowTabPresent = true;
        secondRowTabLabel = "Charlie Adams";
        
      }
      else if (this.props.screen === 'commercialAccount') {
        // tab open showing nimbus
        // sub tab open showing nimbus
        firstRowTabPresent = true;
        firstRowTabLabel = "Charlie's Java";
        secondRowTabPresent = true;
        secondRowTabLabel = "Charlie's Java";

      }
      else if (this.props.screen === 'commercialDCH') {
        // tab open showing nimbus
        // sub tab open showing nimbus
        // sub tab open showing smart discovery
        firstRowTabPresent = true;
        firstRowTabLabel = "Charlie's Java";
        secondRowTabPresent = true;
        secondRowTabLabel = "Charlie's Java";
        thirdRowTabPresent = true;
        thirdRowTabLabel = "Smart Discovery";
        
      }


      let firstRowTab = <li className="slds-context-bar__item slds-context-bar__item_tab slds-is-active" role="presentation">
                        <a href="" className="slds-context-bar__label-action" role="tab" title="Tab Item 1" aria-selected="true" tabIndex="0" aria-controls="context-tab-panel-2" id="context-tab-id-2">
                          <span className="slds-indicator-container"></span>
                          <div className="slds-icon_container icon-override-account" title="Case">
                            {/* <svg className="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#case" />
                            </svg> */}
                            <Icon object="account" type="standard" size="x-small" />
                            <span className="slds-assistive-text">Case</span>
                          </div>
                          <span className="slds-truncate" title="Tab Item 1">{firstRowTabLabel}</span>
                        </a>
                        <div className="slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none">
                          <button className="slds-button slds-button_icon slds-button_icon-container slds-button_icon-x-small" aria-haspopup="true" tabIndex="0" title="Actions for Tab Item 1">
                            {/* <svg className="slds-button__icon" aria-hidden="true">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
                            </svg> */}
                            <Icon object="chevrondown" type="utility" size="x-small" />
                            <span className="slds-assistive-text">Actions for Tab Item 1</span>
                          </button>
                          <div className="slds-dropdown slds-dropdown_right">
                            <ul className="slds-dropdown__list" role="menu">
                              <li className="slds-dropdown__item" role="presentation">
                                <a href="" role="menuitem" tabIndex="-1">
                                  <span className="slds-truncate" title="Refresh Tab">Refresh Tab</span>
                                  <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                                    <span className="slds-assistive-text">:</span>r</span>
                                </a>
                              </li>
                              <li className="slds-dropdown__item" role="presentation">
                                <a href="" role="menuitem" tabIndex="-1">
                                  <span className="slds-truncate" title="Open in a new window">Open in a new window</span>
                                  <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                                    <span className="slds-assistive-text">:</span>⇧ + n</span>
                                </a>
                              </li>
                              <li className="slds-dropdown__item" role="presentation">
                                <a href="" role="menuitem" tabIndex="-1">
                                  <span className="slds-truncate" title="Pin Tab">Pin Tab</span>
                                  <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                                    <span className="slds-assistive-text">:</span>p</span>
                                </a>
                              </li>
                              <li className="slds-dropdown__item" role="presentation">
                                <a href="" role="menuitem" tabIndex="-1">
                                  <span className="slds-truncate" title="Close Tab">Close Tab</span>
                                  <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                                    <span className="slds-assistive-text">:</span>w</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="slds-context-bar__icon-action slds-col_bump-left slds-p-left_none">
                          <button className="slds-button slds-button_icon slds-button_icon-container slds-button_icon-x-small" tabIndex="0" title="Close Tab Item 1">
                            {/* <svg className="slds-button__icon" aria-hidden="true">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" />
                            </svg> */}
                            <Icon object="close" type="utility" size="x-small" />
                            <span className="slds-assistive-text">Close Tab Item 1</span>
                          </button>
                        </div>
                      </li>


      
      let secondRowTab = <li className="slds-tabs_default__item slds-sub-tabs__item slds-grid slds-grid_vertical-align-center slds-active" role="presentation">
                          <a aria-controls="subtab-tabpanel-01" aria-selected="true" className="slds-tabs_default__link slds-p-horizontal_xx-small" href="" id="subtab-tabitem-01" role="tab" tabIndex="0" title="00071938">
                            <span className="slds-indicator-container"></span>
                            <div className="slds-icon_container icon-override-account" title="Case">
                              {/* <svg className="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#case" />
                              </svg> */}
                              <Icon object="account" type="standard" size="x-small" />
                              <span className="slds-assistive-text">Case:</span>
                            </div>
                            <span className="slds-truncate" title="00071938">{secondRowTabLabel}</span>
                          </a>
                          <div className="slds-col_bump-left slds-p-left_none slds-p-right_none">
                            <button className="slds-button icon-override-account slds-button_icon slds-button_icon-container slds-button_icon-x-small" tabIndex="0" title="Close 00071938">
                              {/* <svg className="slds-button__icon" aria-hidden="true">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" />
                              </svg> */}
                              <Icon object="close" type="utility" size="x-small" />
                              <span className="slds-assistive-text">Close 00071938</span>
                            </button>
                          </div>
                        </li>

        let thirdRowTab = <li className="slds-tabs_default__item slds-sub-tabs__item slds-grid slds-grid_vertical-align-center slds-active" role="presentation">
                            <a aria-controls="subtab-tabpanel-01" aria-selected="true" className="slds-tabs_default__link slds-p-horizontal_xx-small" href="" id="subtab-tabitem-01" role="tab" tabIndex="0" title="00071938">
                              <span className="slds-indicator-container"></span>
                              <div className="slds-icon_container icon-override-account" title="Case">
                                {/* <svg className="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#case" />
                                </svg> */}
                                <Icon object="account" type="standard" size="x-small" />
                                <span className="slds-assistive-text">Case:</span>
                              </div>
                              <span className="slds-truncate" title="00071938">{thirdRowTabLabel}</span>
                            </a>
                            <div className="slds-col_bump-left slds-p-left_none slds-p-right_none">
                              <button className="slds-button icon-override-account slds-button_icon slds-button_icon-container slds-button_icon-x-small" tabIndex="0" title="Close 00071938">
                                {/* <svg className="slds-button__icon" aria-hidden="true">
                                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close" />
                                </svg> */}
                                <Icon object="close" type="utility" size="x-small" />
                                <span className="slds-assistive-text">Close 00071938</span>
                              </button>
                            </div>
                            </li>

      const getFirstRowTab = () => {
        if(firstRowTabPresent){
          return firstRowTab;
        }
        return null;
      }

      const getSecondRowTab = () => {
        if(secondRowTabPresent){
          return secondRowTab;
        }
        return null;
      }

      const getThirdRowTab = () => {
        if(thirdRowTabPresent){
          return thirdRowTab;
        }
        return null;
      }
      
      return (
        <div className="demo-only">
          <div className="slds-context-bar slds-context-bar_tabs">
            <div className="slds-context-bar__primary">
              <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
                <div className="slds-context-bar__icon-action">
                  <button className="slds-button slds-icon-waffle_container slds-context-bar__button" title="Description of the icon when needed">
                    <span className="slds-icon-waffle">
                      <span className="slds-r1"></span>
                      <span className="slds-r2"></span>
                      <span className="slds-r3"></span>
                      <span className="slds-r4"></span>
                      <span className="slds-r5"></span>
                      <span className="slds-r6"></span>
                      <span className="slds-r7"></span>
                      <span className="slds-r8"></span>
                      <span className="slds-r9"></span>
                    </span>
                    <span className="slds-assistive-text">Open App Launcher</span>
                  </button>
                </div>
                <span className="slds-context-bar__label-action slds-context-bar__app-name">
                  <span className="slds-truncate" title="App Name">Financial Services Cloud</span>
                </span>
              </div>
              <div className="slds-context-bar__item slds-context-bar__object-switcher slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click">
                <a href="" className="slds-context-bar__label-action">
                  <span className="slds-truncate" title="Object">Customers</span>
                </a>
                <div className="slds-context-bar__icon-action">
                  <button className="slds-button slds-button_icon slds-button_icon-container slds-button_icon-x-small" aria-haspopup="true" title="Open object switcher menu">
                    {/* <svg className="slds-button__icon" aria-hidden="true">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
                    </svg> */}
                    <Icon object="chevrondown" type="utility" size="x-small" />
                    <span className="slds-assistive-text">Open object switcher menu</span>
                  </button>
                </div>
                <div className="slds-dropdown slds-dropdown_right">
                  <ul className="slds-dropdown__list" role="menu">
                    <li className="slds-dropdown__item" role="presentation">
                      <a href="" role="menuitem" tabIndex="-1">
                        {/* <span className="slds-truncate" title="[object Object],Accounts">
                          <svg className="slds-icon slds-icon_small slds-icon-standard-account slds-m-right_small" aria-hidden="true">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account" />
                          </svg>Accounts</span> */}
                          <span className="slds-truncate" title="[object Object],Accounts">
                            <Icon object="account" type="standard" size="x-small" />
                            Accounts</span>
                      </a>
                    </li>
                    <li className="slds-dropdown__item" role="presentation">
                      <a href="" role="menuitem" tabIndex="-1">
                        {/* <span className="slds-truncate" title="[object Object],Cases">
                          <svg className="slds-icon slds-icon_small slds-icon-standard-case slds-m-right_small" aria-hidden="true">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#case" />
                          </svg>Cases</span> */}
                          <span className="slds-truncate" title="[object Object],Cases">
                            <Icon object="case" type="standard" size="x-small" />
                            Cases</span>
                      </a>
                    </li>
                    <li className="slds-dropdown__item" role="presentation">
                      <a href="" role="menuitem" tabIndex="-1">
                        {/* <span className="slds-truncate" title="[object Object],Insights">
                          <svg className="slds-icon slds-icon_small slds-icon-standard-work-order slds-m-right_small" aria-hidden="true">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#work_order" />
                          </svg>Insights</span> */}
                          <span className="slds-truncate" title="[object Object],Insights">
                            <Icon object="work_order" type="standard" size="x-small" />
                            Insights</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="slds-context-bar__item slds-dropdown-trigger slds-dropdown-trigger_click">
                <div className="slds-context-bar__icon-action">
                  <button className="slds-button slds-button_icon slds-button_icon-container slds-button_icon-small" title="Open a New Tab">
                    {/* <svg className="slds-button__icon" aria-hidden="true">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
                    </svg> */}
                    <Icon object="add" type="utility" size="x-small" />
                    <span className="slds-assistive-text">Open a New Tab</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="slds-context-bar__secondary">
              <div className="slds-context-bar__vertical-divider"></div>
              <ul className="slds-grid" role="tablist">
                <li className="slds-context-bar__item slds-context-bar__item_tab slds-is-pinned" role="presentation">
                  <a href="" className="slds-context-bar__label-action" role="tab" title="Home" aria-selected="false" tabIndex="-1" aria-controls="context-tab-panel-1" id="context-tab-id-1">
                    <span className="slds-indicator-container"></span>
                    <div className="slds-icon_container" title="Home">
                      {/* <svg className="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#home" />
                      </svg> */}
                      <Icon object="home" type="utility" size="x-small" />
                      <span className="slds-assistive-text">Home</span>
                    </div>
                    <span className="slds-truncate slds-assistive-text" title="Home">Home</span>
                  </a>
                  <div className="slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none">
                    <button className="slds-button slds-button_icon slds-button_icon-container slds-button_icon-x-small" aria-haspopup="true" tabIndex="-1" title="Actions for Home">
                      {/* <svg className="slds-button__icon" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
                      </svg> */}
                      <Icon object="chevrondown" type="utility" size="x-small" />
                      <span className="slds-assistive-text">Actions for Home</span>
                    </button>
                    <div className="slds-dropdown slds-dropdown_right">
                      <ul className="slds-dropdown__list" role="menu">
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Refresh Tab">Refresh Tab</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>r</span>
                          </a>
                        </li>
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Open in a new window">Open in a new window</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>⇧ + n</span>
                          </a>
                        </li>
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Pin Tab">Pin Tab</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>p</span>
                          </a>
                        </li>
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Close Tab">Close Tab</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>w</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="slds-context-bar__item slds-context-bar__item_tab slds-is-pinned" role="presentation">
                  <a href="" className="slds-context-bar__label-action" role="tab" title="Home" aria-selected="false" tabIndex="-1" aria-controls="context-tab-panel-1" id="context-tab-id-1">
                    <span className="slds-indicator-container"></span>
                    <div className="slds-icon_container" title="Home">
                      {/* <svg className="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#home" />
                      </svg> */}
                      <Icon object="event" type="utility" size="x-small" />
                      <span className="slds-assistive-text">Home</span>
                    </div>
                    <span className="slds-truncate slds-assistive-text" title="Home">Home</span>
                  </a>
                  <div className="slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none">
                    <button className="slds-button slds-button_icon slds-button_icon-container slds-button_icon-x-small" aria-haspopup="true" tabIndex="-1" title="Actions for Home">
                      {/* <svg className="slds-button__icon" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
                      </svg> */}
                      <Icon object="chevrondown" type="utility" size="x-small" />
                      <span className="slds-assistive-text">Actions for Home</span>
                    </button>
                    <div className="slds-dropdown slds-dropdown_right">
                      <ul className="slds-dropdown__list" role="menu">
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Refresh Tab">Refresh Tab</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>r</span>
                          </a>
                        </li>
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Open in a new window">Open in a new window</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>⇧ + n</span>
                          </a>
                        </li>
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Pin Tab">Pin Tab</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>p</span>
                          </a>
                        </li>
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Close Tab">Close Tab</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>w</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="slds-context-bar__item slds-context-bar__item_tab slds-is-pinned" role="presentation">
                  <a href="" className="slds-context-bar__label-action" role="tab" title="Home" aria-selected="false" tabIndex="-1" aria-controls="context-tab-panel-1" id="context-tab-id-1">
                    <span className="slds-indicator-container"></span>
                    <div className="slds-icon_container" title="Home">
                      {/* <svg className="slds-icon slds-icon_small slds-icon-text-default" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#home" />
                      </svg> */}
                      <Icon object="task" type="utility" size="x-small" />
                      <span className="slds-assistive-text">Home</span>
                    </div>
                    <span className="slds-truncate slds-assistive-text" title="Home">Home</span>
                  </a>
                  <div className="slds-context-bar__icon-action slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-p-left_none slds-p-right_none">
                    <button className="slds-button slds-button_icon slds-button_icon-container slds-button_icon-x-small" aria-haspopup="true" tabIndex="-1" title="Actions for Home">
                      {/* <svg className="slds-button__icon" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
                      </svg> */}
                      <Icon object="chevrondown" type="utility" size="x-small" />
                      <span className="slds-assistive-text">Actions for Home</span>
                    </button>
                    <div className="slds-dropdown slds-dropdown_right">
                      <ul className="slds-dropdown__list" role="menu">
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Refresh Tab">Refresh Tab</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>r</span>
                          </a>
                        </li>
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Open in a new window">Open in a new window</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>⇧ + n</span>
                          </a>
                        </li>
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Pin Tab">Pin Tab</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>p</span>
                          </a>
                        </li>
                        <li className="slds-dropdown__item" role="presentation">
                          <a href="" role="menuitem" tabIndex="-1">
                            <span className="slds-truncate" title="Close Tab">Close Tab</span>
                            <span className="slds-text-body_small slds-text-color_weak slds-p-left_large">
                              <span className="slds-assistive-text">:</span>w</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {getFirstRowTab()}
              </ul>
            </div>
          </div>

          <div id="context-tab-panel-1" className="slds-show" role="tabpanel" aria-labelledby="context-tab-id-1">
            <div className="slds-tabs_default slds-sub-tabs">
              <ul className="slds-tabs_default__nav" role="tablist">
                {getSecondRowTab()}
                {getThirdRowTab()}
              </ul>
            </div>
          </div>
        </div>
      )
    }
    
    return (
      <div className="header-and-nav">
        <header className="slds-global-header_container">
          <a href="" className="slds-assistive-text slds-assistive-text_focus">Skip to Navigation</a>
          <a href="" className="slds-assistive-text slds-assistive-text_focus">Skip to Main Content</a>
          <div className="slds-global-header slds-grid slds-grid_align-spread">
            <div className="slds-global-header__item">
              <div className="slds-global-header__logo" style={{backgroundImage: `url(${header__logo})`}}></div>
            </div>
            <div className="slds-global-header__item slds-global-header__item_search">
              <div className="slds-form-element">
                <label className="slds-form-element__label slds-assistive-text" htmlFor="combobox-id-17">Search Salesforce</label>
                <div className="slds-form-element__control">
                  <div className="slds-combobox-group">
                    <div className="slds-combobox_object-switcher slds-combobox-addon_start">
                      <div className="slds-form-element">
                        <label className="slds-form-element__label slds-assistive-text" htmlFor="objectswitcher-combobox-id-17">Filter Search by:</label>
                        <div className="slds-form-element__control">
                          <div className="slds-combobox_container">
                            <div className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-controls="primary-search-combobox-id-1" aria-expanded="false" aria-haspopup="listbox" role="combobox">
                              <div className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right" role="none">
                                <input type="text" className="slds-input slds-combobox__input slds-combobox__input-value" id="objectswitcher-combobox-id-17" aria-controls="objectswitcher-listbox-id-17" onChange={this.handleChange} autoComplete="off" placeholder=" " value="Accounts"/>
                                <span className="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right">
                                  {/* <svg className="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                  </svg> */}
                                  <Icon object="down" type="utility" size="x-small" />
                                </span>
                              </div>
                              <div id="objectswitcher-listbox-id-17" className="slds-dropdown slds-dropdown_length-5 slds-dropdown_x-small slds-dropdown_left" role="listbox">
                                <ul className="slds-listbox slds-listbox_vertical" role="group" aria-label="Suggested for you">
                                  <li role="presentation" className="slds-listbox__item">
                                    <div id="object0" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="presentation">
                                      <h3 className="slds-text-title_caps" role="presentation">Suggested for you</h3>
                                    </div>
                                  </li>
                                  <li role="presentation" className="slds-listbox__item">
                                    <div id="object1" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-is-selected" role="option" aria-selected="false">
                                      <span className="slds-media__figure slds-listbox__option-icon">
                                        <span className="slds-icon_container slds-icon-utility-check slds-current-color">
                                          {/* <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
                                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                          </svg> */}
                                          <Icon object="check" type="utility" size="x-small" />
                                        </span>
                                      </span>
                                      <span className="slds-media__body">
                                        <span className="slds-truncate" title="Accounts">
                                          <span className="slds-assistive-text">Current Selection:</span> Accounts</span>
                                      </span>
                                    </div>
                                  </li>
                                  <li role="presentation" className="slds-listbox__item">
                                    <div id="object2" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option" aria-selected="false">
                                      <span className="slds-media__figure slds-listbox__option-icon"></span>
                                      <span className="slds-media__body">
                                        <span className="slds-truncate" title="Reports"> Reports</span>
                                      </span>
                                    </div>
                                  </li>
                                  <li role="presentation" className="slds-listbox__item">
                                    <div id="object3" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option" aria-selected="false">
                                      <span className="slds-media__figure slds-listbox__option-icon"></span>
                                      <span className="slds-media__body">
                                        <span className="slds-truncate" title="Contacts"> Contacts</span>
                                      </span>
                                    </div>
                                  </li>
                                  <li role="presentation" className="slds-listbox__item">
                                    <div id="object4" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option" aria-selected="false">
                                      <span className="slds-media__figure slds-listbox__option-icon"></span>
                                      <span className="slds-media__body">
                                        <span className="slds-truncate" title="Files"> Files</span>
                                      </span>
                                    </div>
                                  </li>
                                  <li role="presentation" className="slds-listbox__item">
                                    <div id="object5" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option" aria-selected="false">
                                      <span className="slds-media__figure slds-listbox__option-icon"></span>
                                      <span className="slds-media__body">
                                        <span className="slds-truncate" title="Groups"> Groups</span>
                                      </span>
                                    </div>
                                  </li>
                                  <li role="presentation" className="slds-listbox__item">
                                    <div id="object6" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option" aria-selected="false">
                                      <span className="slds-media__figure slds-listbox__option-icon"></span>
                                      <span className="slds-media__body">
                                        <span className="slds-truncate" title="Leads"> Leads</span>
                                      </span>
                                    </div>
                                  </li>
                                  <li role="presentation" className="slds-listbox__item">
                                    <div id="object7" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small" role="option" aria-selected="false">
                                      <span className="slds-media__figure slds-listbox__option-icon"></span>
                                      <span className="slds-media__body">
                                        <span className="slds-truncate" title="Notes"> Notes</span>
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slds-combobox_container slds-combobox-addon_end">
                      <div className="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click" aria-expanded="false" aria-haspopup="listbox" id="primary-search-combobox-id-1" role="combobox" aria-controls="">
                        <div className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left slds-global-search__form-element" role="none">
                          <span className="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_left">
                            {/* <svg className="slds-icon slds-icon slds-icon_xx-small slds-icon-text-default" aria-hidden="true">
                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                            </svg> */}
                            <Icon object="search" type="utility" size="x-small" />
                          </span>
                          <input type="text" className="slds-input slds-combobox__input" id="combobox-id-17" aria-autocomplete="list" aria-controls="search-listbox-id-1" autoComplete="off"  placeholder="Search Salesforce" />
                        </div>
                        <div id="search-listbox-id-1" className="slds-dropdown slds-dropdown_length-with-icon-7 slds-dropdown_fluid" role="listbox">
                          <ul className="slds-listbox slds-listbox_vertical" role="group" aria-label="Recent Items">
                            <li role="presentation" className="slds-listbox__item">
                              <div id="option0" className="slds-media slds-listbox__option slds-listbox__option_plain slds-media_center" role="presentation">
                                <h3 className="slds-text-title_caps" role="presentation">Recent Items</h3>
                              </div>
                            </li>
                            <li role="presentation" className="slds-listbox__item">
                              <div id="option1" className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option" aria-selected="false">
                                <span className="slds-media__figure slds-listbox__option-icon">
                                  <span className="slds-icon_container slds-icon-standard-opportunity">
                                    {/* <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#opportunity"></use>
                                    </svg> */}
                                    <Icon object="opportunity" type="standard" size="x-small" />
                                  </span>
                                </span>
                                <span className="slds-media__body">
                                  <span className="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce - 1,000 Licenses</span>
                                  <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">Opportunity • Propecting</span>
                                </span>
                              </div>
                            </li>
                            <li role="presentation" className="slds-listbox__item">
                              <div id="option2" className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option" aria-selected="false">
                                <span className="slds-media__figure slds-listbox__option-icon">
                                  <span className="slds-icon_container slds-icon-standard-contact">
                                    {/* <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
                                    </svg> */}
                                    <Icon object="contact" type="standard" size="x-small" />
                                  </span>
                                </span>
                                <span className="slds-media__body">
                                  <span className="slds-listbox__option-text slds-listbox__option-text_entity">Art Vandelay</span>
                                  <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">Contact • avandelay@vandelay.com</span>
                                </span>
                              </div>
                            </li>
                            <li role="presentation" className="slds-listbox__item">
                              <div id="option3" className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option" aria-selected="false">
                                <span className="slds-media__figure slds-listbox__option-icon">
                                  <span className="slds-icon_container slds-icon-standard-account">
                                    {/* <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
                                    </svg> */}
                                    <Icon object="account" type="standard" size="x-small" />
                                  </span>
                                </span>
                                <span className="slds-media__body">
                                  <span className="slds-listbox__option-text slds-listbox__option-text_entity">Vandelay Industries</span>
                                  <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">Account • San Francisco</span>
                                </span>
                              </div>
                            </li>
                            <li role="presentation" className="slds-listbox__item">
                              <div id="option4" className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option" aria-selected="false">
                                <span className="slds-media__figure slds-listbox__option-icon">
                                  <span className="slds-icon_container slds-icon-standard-event">
                                    {/* <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
                                    </svg> */}
                                    <Icon object="event" type="standard" size="x-small" />
                                  </span>
                                </span>
                                <span className="slds-media__body">
                                  <span className="slds-listbox__option-text slds-listbox__option-text_entity">Salesforce UK 2016 Events</span>
                                  <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">Event • $20,000</span>
                                </span>
                              </div>
                            </li>
                            <li role="presentation" className="slds-listbox__item">
                              <div id="option5" className="slds-media slds-listbox__option slds-listbox__option_entity slds-listbox__option_has-meta" role="option" aria-selected="false">
                                <span className="slds-media__figure slds-listbox__option-icon">
                                  <span className="slds-icon_container slds-icon-standard-lead">
                                    {/* <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                      <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#lead"></use>
                                    </svg> */}
                                    <Icon object="lead" type="standard" size="x-small" />
                                  </span>
                                </span>
                                <span className="slds-media__body">
                                  <span className="slds-listbox__option-text slds-listbox__option-text_entity">H.E. Pennypacker</span>
                                  <span className="slds-listbox__option-meta slds-listbox__option-meta_entity">Lead • Nursing</span>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slds-global-header__item">
              <ul className="slds-global-actions">
                <li className="slds-global-actions__item">
                  <div className="slds-global-actions__favorites slds-dropdown-trigger slds-dropdown-trigger_click">
                    <div className="slds-button-group">
                      <button className="slds-button slds-button_icon slds-global-actions__favorites-action slds-button_icon slds-button_icon-border slds-button_icon-small" aria-pressed="false" title="Toggle Favorites">
                        {/* <svg className="slds-button__icon" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"></use>
                        </svg> */}
                        <Icon object="favorite" type="utility" size="x-small" />
                        <span className="slds-assistive-text">Toggle Favorite</span>
                      </button>
                      <button className="slds-button slds-button_icon slds-global-actions__favorites-more slds-button_icon slds-button_icon-border slds-button_icon-small" title="View Favorites">
                        {/* <svg className="slds-button__icon slds-button__icon_small" aria-hidden="true">
                          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                        </svg> */}
                        <Icon object="down" type="utility" size="x-small" />
                        <span className="slds-assistive-text">View Favorites</span>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="slds-global-actions__item">
                  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                    <button className="icon-color-override slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__task slds-global-actions__item-action" aria-haspopup="true" title="Global Actions">
                      {/* <svg className="slds-button__icon" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add"></use>
                      </svg> */}
                      <Icon object="add" type="utility" size="x-small" />
                      <span className="slds-assistive-text">Global Actions</span>
                    </button>
                  </div>
                </li>
                <li className="slds-global-actions__item">
                  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                    <button className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
                      {/* <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#question"></use>
                      </svg> */}
                      <Icon object="question" type="utility" size="x-small" />
                      <span className="slds-assistive-text">Help and Training</span>
                    </button>
                  </div>
                </li>
                <li className="slds-global-actions__item">
                  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                    <button className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__setup slds-global-actions__item-action" aria-haspopup="true" title="Setup">
                      {/* <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#setup"></use>
                      </svg> */}
                      <Icon object="setup" type="utility" size="x-small" />
                      <span className="slds-assistive-text">Setup</span>
                    </button>
                  </div>
                </li>
                <li className="slds-global-actions__item">
                  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                    <button className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
                      {/* <svg className="slds-button__icon slds-global-header__icon" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
                      </svg> */}
                      <Icon object="notification" type="utility" size="x-small" />
                      <span className="slds-assistive-text">no new notifications</span>
                    </button>
                    <span aria-hidden="true" className="slds-notification-badge">0</span>
                  </div>
                </li>
                <li className="slds-global-actions__item">
                  <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                    <button className="slds-button slds-global-actions__avatar slds-global-actions__item-action" title="person name" aria-haspopup="true">
                      <span className="slds-avatar slds-avatar_circle slds-avatar_medium">
                        <img alt="Person name" src={renderAvatar()} title="User avatar" />
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {renderHeaderImage()}
        </header>
      </div>
    );
  }
}

export default GlobalHeader;