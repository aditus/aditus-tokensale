import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

export default class BackButton extends React.Component {
  render() {
    return (
      <div className={cx('pageContentHeaderButton')}>
        <Link to="/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAeUExURf///////////////////////////////////////xXYzFIAAAAJdFJOUwRvKbvp5R6xQrq6wtgAAAC0SURBVCgVvdA7DsIwEATQlV1AmStQuE+FlCPkCHTchjpCCO1t8W9m1+5DKnv0FO+OyB+/l3sr3Nvluq+Wps+zXi76ZhgeurTLpivSpEc/RlKDIqQGRUA9JPUQdISdjrDRGVY6w0q5DDYplMtYGBVbWyZJrQHE+Wk2gCzDgw0gLDOiAWQFsgGEbZmJ9mWGv2LrgXJrRwHRa32J0A1g0NHo69l6LWFfMG+m336+WSbigI/POf8Atu071S1yQmAAAAAASUVORK5CYII=" width="28" height="28" />
        </Link>
      </div>
    );
  }
}
