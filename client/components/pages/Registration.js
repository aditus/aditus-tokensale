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

export class Registration extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loginEmail: "",
      name: "",
      password: "",
      passwordCheck: ""
    }
    this._handleInputChange = this._handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
    this.setState({
      name: reactLocalStorage.get('name'),
      loginEmail: reactLocalStorage.get('email')
    })
  }
  onSubmit(e) {
      e.preventDefault();

      if(this.state.password == this.state.passwordCheck){
        reactLocalStorage.set('email', this.state.loginEmail);
        reactLocalStorage.set('name', this.state.name);

        window.location.href = "/";
      }else{
        console.log("password dont match");
      }
  }
  _handleInputChange(e) {
      let name = e.target.name;
      let value = e.target.value;
      this.setState({
          [name]: value
      })
  }
  render() {
    return (
      <div>
        <Navigation />
        <div className={cx('page')}>
          <div className={cx('pageContent')}>
            <div className={cx('pageContentHeader')}>
              <div className={cx('pageContentHeaderText')}>
                <div className={cx('siteTitle')}>
                  Let's get started with onboarding you!
                </div>
                <div>
                  Fill in the form below to be eligible for the token sale
                </div>
              </div>
              <BackButton />
              <div className={cx('clear')}></div>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className={cx('sectionRegistration')}>
                <div className={cx('sectionRegistrationEntry')}>
                  <div className={cx('sectionRegistrationEntryCol2')}>
                    <div className={cx('sectionRegistrationEntryTitle','serif')}>
                      Name
                    </div>
                    <div>
                      <input type="text" name="name" placeholder="" value={this.state.name} onChange={this._handleInputChange} />
                    </div>
                  </div>
                  <div className={cx('sectionRegistrationEntryCol2')}>
                    <div className={cx('sectionRegistrationEntryTitle','serif')}>
                      Email address
                    </div>
                    <div>
                      <input type="text" name="loginEmail" placeholder="" value={this.state.loginEmail} onChange={this._handleInputChange} />
                    </div>
                  </div>
                  <div className={cx('clear')}></div>
                </div>
                <div className={cx('sectionRegistrationEntry')}>
                  <div className={cx('sectionRegistrationEntryCol2')}>
                    <div className={cx('sectionRegistrationEntryTitle','serif')}>
                      Password
                    </div>
                    <div>
                      <input type="password" placeholder="password has to be at least 8 characters long" name="password" value={this.state.password} onChange={this._handleInputChange} />
                    </div>
                  </div>
                  <div className={cx('sectionRegistrationEntryCol2')}>
                    <div className={cx('sectionRegistrationEntryTitle','serif')}>
                      Re-enter Password
                    </div>
                    <div>
                      <input type="password" name="passwordCheck" placeholder="" value={this.state.passwordCheck} onChange={this._handleInputChange} />
                    </div>
                  </div>
                  <div className={cx('clear')}></div>
                </div>
                <div className={cx('sectionRegistrationEntry')}>
                  <div className={cx('sectionRegistrationEntryAdditional')}>
                    For users contributing more than USD $50,000, additional KYC is required.
                  </div>
                  <div className={cx('sectionRegistrationEntryCol2')}>
                    <div className={cx('sectionRegistrationEntryTitle','serif')}>
                      Photo of National Identity Card or Passport
                    </div>
                    <div className={cx('sectionRegistrationEntryDescription')}>
                      * Your identity info should be clearly visible
                    </div>
                    <div className={cx('sectionRegistrationEntryBrowse')}>
                      Documents will be requested during email confirmation
                    </div>
                  </div>
                  <div className={cx('sectionRegistrationEntryCol2')}>
                    <div className={cx('sectionRegistrationEntryTitle','serif')}>
                      Photo of National Identity Card or Passport + Face
                    </div>
                    <div className={cx('sectionRegistrationEntryDescription')}>
                      * Your face and identity card / passport should be clearly visible
                    </div>
                    <div className={cx('sectionRegistrationEntryBrowse')}>
                      Documents will be requested during email confirmation
                    </div>
                  </div>
                  <div className={cx('clear')}></div>
                </div>
                <div className={cx('sectionRegistrationButton')}>
                  <button>
                    Submit
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
