import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

export default class Footer extends React.Component {
    render() {
      return (
        <div className={cx('footer')}>
          For more information regarding Aditus, please <a href="https://aditus.net">refer to our main site</a>.
        </div>
      )
    }
}
