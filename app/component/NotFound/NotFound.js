import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from './NotFound.propTypes';
import './NotFound.css';

export default class NotFound extends Component {
  render() {
    const { iconName, title, buttonText, needRedirectButton, redirectUrl } = this.props;
    return (
      <div className='empty not-found'>
        <div className='empty-icon'>
          <i className={iconName} aria-hidden='true'></i>
        </div>
        <p className='empty-title h5'>{title}</p>
        {needRedirectButton ? (
          <div className='empty-action'>
            <Link to={redirectUrl}>
              <button className='btn btn-primary'>{buttonText}</button>
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}

NotFound.propTypes = PropTypes;

NotFound.defaultProps = {
  iconName: 'fa fa-code fa-5x',
  title: 'Page Not Found',
  buttonText: 'Go to Home Page',
  needRedirectButton: true,
  redirectUrl: '/'
};
