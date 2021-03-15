import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from './Header.propTypes';

export default class Header extends Component {
  render() {
    const { employeeId, setEmployeeId, toggleLoginPopup } = this.props;
    return (
      <header className='navbar nav-header'>
        <section className='navbar-section'>
          <Link to='/' className='btn btn-link text-bold'>
            <i className='fa fa-cogs' aria-hidden='true'></i> Hack News
          </Link>
        </section>
        <section className='navbar-section'>
          <Link to='/challenge' className='btn btn-link'>
            Challenges
          </Link>
          <Link to='/tag' className='btn btn-link'>
            Tags
          </Link>
          {employeeId ? (
            <Fragment>
              <i className='fa fa-user-circle fa-lg profile-icons' aria-hidden='true' title={employeeId}></i>
              <i
                className='fa fa-sign-out fa-lg profile-icons'
                aria-hidden='true'
                title='Log out'
                onClick={() => setEmployeeId('')}
              ></i>
            </Fragment>
          ) : (
            <button className='btn btn-primary input-group-btn' onClick={() => toggleLoginPopup(true)}>
              Login
            </button>
          )}
        </section>
      </header>
    );
  }
}

Header.propTypes = PropTypes;
