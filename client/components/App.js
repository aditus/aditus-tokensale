import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

// Using CSS Modules so we assign the styles to a variable
import s from './styles/App.styl';
const cx = classnames.bind(s);

// Favicon link is in the template, this just makes webpack package it up for us
import './favicon.ico';

import Footer from './components/Footer';
/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export class App extends React.Component {
  static propTypes = {
    children: T.node,
  };

  render() {
    return (
      <div className={cx('App')}>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
