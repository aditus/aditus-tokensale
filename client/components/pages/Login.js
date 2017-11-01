import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

import {reactLocalStorage} from 'reactjs-localstorage';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

import logo from '../images/logo.png';
import Input from '../components/Input';

export class Login extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          email: '',
          password: ''
      }
      this._handleInputChange = this._handleInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
      e.preventDefault();
      console.log('the email is' + this.state.email + ' and password is ' + this.state.password);
      reactLocalStorage.set('email', this.state.email);
      window.location.href = "/";
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
      <div className={cx('page', 'pageLogin')}>
          <div className={cx('loginPanel')}>
              <div className={cx('loginPanelTop')}>
                <Link to='/'>
                  <div className={cx('loginPanelLogo')}>
                    <img src={logo} />
                  </div>
                </Link>
                <div>
                  <div className={cx('serif', 'loginWelcome')}>
                    Welcome back,
                  </div>
                  <div>
                    Sign in to continue<br /> to
                    Aditus Token Sale.
                  </div>
                </div>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className={cx('loginInput')}>
                  <input type="email" name="email" placeholder="Email address" value={this.state.email} onChange={this._handleInputChange} />
                </div>
                <div className={cx('loginInput')}>
                  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this._handleInputChange} />
                </div>
                <div className={cx('loginButton')}>
                  <button>
                    Login
                  </button>
                </div>
              </form>
          </div>
      </div>
    );
  }
}
