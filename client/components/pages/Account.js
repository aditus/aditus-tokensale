import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

import Navigation from '../components/Navigation';
import BackButton from '../components/BackButton';

export class Account extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className={cx('page')}>
          <div className={cx('pageContent')}>
            <div className={cx('siteTitle')}>
              Your Profile
            </div>
            <div>
              Please make sure your personal particulars are in order. The following KYC process is required to conform to the regulatory practices on international anti-money laundering laws.
            </div>
            <div className={cx('sectionSummary')}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
