import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './HomePage.css';
import PropTypes from './HomePage.propTypes';

class HomePage extends Component {
  render() {
    const { employeeId } = this.props;
    return (
      <div className='container'>
        <div className='columns'>
          <div className='column col-6 home-card'>
            <div className='center-container'>
              {employeeId ? (
                <Fragment>
                  <h3>{`Welcome, ${employeeId}`}</h3>
                  <p>Get Started...</p>
                  <Link to='/challenge/add'>
                    <button className='btn btn-success'>Add Challenge</button>
                  </Link>
                </Fragment>
              ) : (
                <Fragment>
                  <h3>Welome Guest</h3>
                  <p>
                    <i className='fa fa-arrow-circle-right' aria-hidden='true'></i> As a guest, your actions are limited.
                  </p>
                  <p>
                    <i className='fa fa-arrow-circle-right' aria-hidden='true'></i> You can't like, add and edit challenges.
                  </p>
                  <p>
                    <i className='fa fa-arrow-circle-right' aria-hidden='true'></i> But you can view the challenges.
                  </p>
                  <p>
                    <i className='fa fa-arrow-circle-right' aria-hidden='true'></i> Enjoy your visit here.
                  </p>
                </Fragment>
              )}
            </div>
          </div>
          <div className='column col-6 home-card border-left'>
            <div className='center-container'>
              <h1>
                View all <Link to='/challenge'>Challenges</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = PropTypes;

HomePage.defaultProps = {
  employeeId: ''
};

const mapStateToProps = state => ({
  employeeId: state.employee.employeeId
});

export default connect(mapStateToProps)(HomePage);
