import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

import {reactLocalStorage} from 'reactjs-localstorage';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

import Navigation from '../components/Navigation';
import BackButton from '../components/BackButton';
import Danger from '../components/Danger';

export class Contribution extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loginEmail: "",
      addressContribution: "",
      addressDestination: ""
    }

    this._handleInputChange = this._handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    this.setState({
      loginEmail: reactLocalStorage.get('email'),
      addressContribution: reactLocalStorage.get('addressContribution'),
      addressDestination: reactLocalStorage.get('addressDestination')
    })
  }
  _handleInputChange(e) {
      let name = e.target.name;
      let value = e.target.value;
      this.setState({
          [name]: value
      })
  }
  onSubmit(e) {
      e.preventDefault();

      reactLocalStorage.set('addressContribution', this.state.addressContribution);
      reactLocalStorage.set('addressDestination', this.state.addressDestination);

      window.location.href = "/";
  }
  render() {
    let dangerDisplay;
    if(this.state.loginEmail == "" || this.state.loginEmail == undefined){
      dangerDisplay = <Danger />;
    }else{
      dangerDisplay = "";
    }

    return (
      <div>
        <Navigation />
        <div className={cx('page')}>
          <div className={cx('pageContent')}>
            <div className={cx('pageContentHeader')}>
              <div className={cx('pageContentHeaderText')}>
                <div className={cx('siteTitle')}>
                  Aditus Address Whitelisting
                </div>
                <div>
                  Please update your contribution and destination address to facilitate the Aditus token sale. <br /><br />
                Both contribution and destination address can be the same. This process is to faciliate users transferring funds from exchange.
                </div>
              </div>
              <BackButton />
              <div className={cx('clear')}></div>
              {dangerDisplay}
            </div>
            <form onSubmit={this.onSubmit}>
              <div className={cx('sectionContribution')}>
                <div className={cx('sectionContributionEntry')}>
                  <div className={cx('sectionContributionEntryTitle','serif')}>
                    Contribution address
                  </div>
                  <div className={cx('sectionContributionEntryDescription')}>
                    * This is the ETH address that you will be contributing to the token sale <span>from</span>
                  </div>
                  <div>
                    <input type="text" name="addressContribution" placeholder="0x123456789..." value={this.state.addressContribution} onChange={this._handleInputChange} />
                  </div>
                </div>
                <div className={cx('sectionContributionEntry')}>
                  <div className={cx('sectionContributionEntryTitle','serif')}>
                    Destination address
                  </div>
                  <div className={cx('sectionContributionEntryDescription')}>
                    * This is the ETH address that we will be sending your token <span>to</span>
                  </div>
                  <div>
                    <input type="text" name="addressDestination" placeholder="0x987654321..."value={this.state.addressDestination} onChange={this._handleInputChange} />
                  </div>
                </div>
                <div className={cx('sectionContributionButton')}>
                  <button>
                    Update
                  </button>
                  <Link to='/'>
                    <button className={cx('cancel')}>
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
