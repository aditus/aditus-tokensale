import React from 'react';
import T from 'prop-types';
import { Link, IndexLink } from 'react-router';
import classnames from 'classnames/bind';

// Using CSS Modules so we assign the styles to a variable
import s from '../styles/App.styl';
const cx = classnames.bind(s);

export default class Input extends React.Component {
    render() {
        return <input
           name={this.props.name}
           type={this.props.type}
           placeholder={this.props.placeholder}
           value={this.props.value}
           onChange={this.props.onChange}
        />
    }
}
