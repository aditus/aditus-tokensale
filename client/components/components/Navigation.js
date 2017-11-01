import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

import {reactLocalStorage} from 'reactjs-localstorage';
// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

import logo from '../images/logo.png';
import TabLogin from '../components/TabLogin';

export default class Navigation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loginEmail: ""
    }
    this._logout = this._logout.bind(this);
  }
  componentDidMount(){
    this.setState({
      loginEmail: reactLocalStorage.get('email')
    })
  }
  _logout(e) {
      e.preventDefault();

      this.setState({
        loginEmail: ""
      })
      reactLocalStorage.set('email', "");
      reactLocalStorage.set('name', "");
      reactLocalStorage.set('addressContribution', "");
      reactLocalStorage.set('addressDestination', "");
      //window.location.href = "/";
  }
  render() {
    let loginDisplay;
    if(this.state.loginEmail == "" || this.state.loginEmail == undefined){
      loginDisplay = <TabLogin />
    }else{
      loginDisplay = (
        <div className={cx('tabLogin')}>
          <div className={cx('tabLoginEmail', 'serif')}>
            {this.state.loginEmail}
          </div>
          <div className={cx('tabLoginLogout')} onClick={this._logout}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAwUExURf///////0dwTP///////////////////////////////////////////////////69SZ6EAAAAQdFJOU/2oAJTgYCC50PF2DBNCMioh2lCEAAABBklEQVQoFa3SvYrCQBAH8D8oaA6E08ZSHdHCL7QTbNKcoI2QUiyO+AJibaH3CNf4BCJY+gg+gp2PYCfaWN7MJlmCjtU5zWx+ZHd2dxakBBSj92B1O3BWk2j9YM3mEhKFUA1WZ8aAXqAGT8B6M+4Cad+oYAX42nOeAn2LZyTEiO5ImwH/2XDhCRHVO1lPMmMZHzKKBeMFOQtHM2JsO77F/EGGjG7CGn2OAmwhE0PH4w9QDb8xhEwDF//hXMqacIGFYAlzxmJ4eiB5fYXqdLWQuiV189SGz+WDsMf81i5EvTr1kklrhzRuuOdCt3jjiFuc2j20mNTHQNqzIdIeWHieKHHjnuOf+AcpN3dQsvEaLgAAAABJRU5ErkJggg==" width="28" height="28" />
          </div>
        </div>
      )
    }

    return (
      <nav className={cx('nav')}>
        <Link to='/' activeClassName={cx('active')}>
          <img className={cx('logo')} src={logo} />
        </Link>
        {loginDisplay}
      </nav>
    );
  }
}
