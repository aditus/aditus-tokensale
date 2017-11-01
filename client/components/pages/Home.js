import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

import {reactLocalStorage} from 'reactjs-localstorage';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

import Navigation from '../components/Navigation';

export class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loginEmail: ""
    }
  }
  componentDidMount(){
    this.setState({
      loginEmail: reactLocalStorage.get('email')
    })
  }
  render() {
    return (
      <div>
        <Navigation />
        <div className={cx('page')}>
          <div className={cx('pageContent')}>
            <div className={cx('siteTitle')}>
              Welcome to the Aditus Token Sale site.
            </div>
            <div>
              Our token sale will officially begin on the 5th of December 2017.
            </div>
            <div className={cx('sectionHome')}>
              <Link to='/registration'>
                <div className={cx('sectionHomeEntry')}>
                  <div className={cx('sectionHomeEntryIcon')}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAeUExURf///////////////////////////////////////xXYzFIAAAAJdFJOUwVaxYDqL927FpEBkUMAAABbSURBVAgdY2AAAVYwCSRMHCEsZo0wATDLUoPVAcRgnjmpwxXEsJw5U8kALDBz5mSowEwUAcmZM8ECDIqaEBUcCewQAUYFRrAWBvZJSQIgvQwthQ1gmqEDQjEAAIh5FN8aq7ivAAAAAElFTkSuQmCC" />
                  </div>
                  <div className={cx('sectionHomeEntryStep', 'serif')}>
                     Step 1
                  </div>
                  <div className={cx('sectionHomeEntryTitle', 'serif')}>
                     Account Registration
                  </div>
                  <div className={cx('sectionHomeEntryDescription')}>
                    We are required to do KYC checks before you are eligible to participate in the token sale
                  </div>
                </div>
              </Link>
              <Link to='/contribution'>
                <div className={cx('sectionHomeEntry')}>
                  <div className={cx('sectionHomeEntryIcon')}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABkSURBVDhPYxgc4N+/f0tBGMT+jwUA5aJAGMRGVw8GQI45CIPYQDWhWLAcFIeiqwcDYgwAK4QCbAYQ9AJYIRQgq6cOAJqWB8IgNtDCVViwDVghFCCrBwOKDaAYAE0bTQcDBxgYAMt6epbHZyFJAAAAAElFTkSuQmCC" />
                  </div>
                  <div className={cx('sectionHomeEntryStep', 'serif')}>
                     Step 2
                  </div>
                  <div className={cx('sectionHomeEntryTitle', 'serif')}>
                    Whitelist <br /> ETH Address
                  </div>
                  <div className={cx('sectionHomeEntryDescription')}>
                    Enter your ETH addresses to faciliate the whitelisting process of the token sale.
                  </div>
                </div>
              </Link>
              <Link to='/sale'>
                <div className={cx('sectionHomeEntry')}>
                  <div className={cx('sectionHomeEntryIcon')}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAqUExURf///////////////////////////////////////////////////////2r7TS0AAAAOdFJOU/0xFEoD3LB68ZNhVNGdpCgr1AAAAG5JREFUCB1jYGB2AQOG3ZFQhsscGMNABSLlomACZfgcSwOCdAYXzzYQg53BxZkJKOXIyODiBDLIPYTBxeUkkOEzBciYunv37gUmQIYBAwMDhwuQ4SLo4qwCYngxLEloAjF8Ga40MIMYjqEiFSkuAGizJXM1po++AAAAAElFTkSuQmCC" />
                  </div>
                  <div className={cx('sectionHomeEntryStep', 'serif')}>
                     Step 3
                  </div>
                  <div className={cx('sectionHomeEntryTitle', 'serif')}>
                    Token Contribution
                  </div>
                  <div className={cx('sectionHomeEntryDescription')}>
                    Contribute and get your ADT tokens here!
                  </div>
                </div>
              </Link>
              <Link to='/summary'>
                <div className={cx('sectionHomeEntry')}>
                  <div className={cx('sectionHomeEntryIcon')}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASUExURf///////////0dwTP///////9Lf1MwAAAAFdFJOU1c5pQCrW8xHqgAAAEJJREFUCB1jMIYCBmMRFyBwNGYwZgUxAkAMkByYYcjAIAxmGIWGKqNKwdUYhRpBpAwZDGGK0UXgimFWiIAYIEuhAADvDhjAEs9VFAAAAABJRU5ErkJggg==" />
                  </div>
                  <div className={cx('sectionHomeEntryStep', 'serif')}>
                     Step 4
                  </div>
                  <div className={cx('sectionHomeEntryTitle', 'serif')}>
                    Contribution Summary
                  </div>
                  <div className={cx('sectionHomeEntryDescription')}>
                    Check out your current contribution.
                  </div>
                </div>
              </Link>
              <div className={cx('clear')}></div>
              <div className={cx('faqLink')}>
                Have an unanswered queries about the token sale? Check out the FAQs <Link to="/faq">here</Link>.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
  <div className={cx('sectionHomeEntryPermission', 'serif')}>
    Only accessible by <br /> logged in users
  </div>
  */
