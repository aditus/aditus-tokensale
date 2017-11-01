import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);


export default class TabLogin extends React.Component {
  render() {
    return (
      <div className={cx('tabLogin')}>
        <Link to='/login'>
          <div className={cx('textIcon')}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAnUExURf///////////////////////////////////////////////////1G6/RIAAAANdFJOUwUYlDvj/KZnud+BNmo+N2XzAAAAYUlEQVQIHWNgQIANrAwbQDymCawMk0AMDQZWBg4FBgbmCUAGw2QGBrYCEOMYAwOnAIghyQAiIYhFgCs0ikEErGbpApAaoC5mBkagLqA5DGBzGJimC4iDTWYwc3XbABTFAADLdw01Te8zSQAAAABJRU5ErkJggg==" />
          </div>
          <div className={cx('textIconLabel','serif')}>
            Login
          </div>
          <div className={cx('clear')}></div>
        </Link>
      </div>
    );
  }
}
