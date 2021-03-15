import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPopup from '../../component/LoginPopup/LoginPopup';
import { SET_EMPLOYEE_ID } from '../../actions/types';
import './AppHeader.css';
import PropTypes from './AppHeader.propTypes';

class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginPopup: false,
      employeeIdValue: '',
      employeeIdErrorMsg: ''
    };

    this.toggleLoginPopup = this.toggleLoginPopup.bind(this);
    this.changeEmployeeId = this.changeEmployeeId.bind(this);
    this.loginEmployee = this.loginEmployee.bind(this);
    this.validateEmployeeId = this.validateEmployeeId.bind(this);
  }

  toggleLoginPopup(flag) {
    this.setState({
      isLoginPopup: flag
    });
  }

  changeEmployeeId(e) {
    this.setState({
      employeeIdValue: e.target.value
    });
  }

  validateEmployeeId() {
    const { employeeIdValue } = this.state;
    const alphaNumeric = /^[0-9a-zA-Z]+$/;
    if (!employeeIdValue.match(alphaNumeric)) {
      this.setState({
        employeeIdErrorMsg: 'Employee Id should only contain alphanumeric values.'
      });
      return false;
    }
    if (employeeIdValue.length !== 7) {
      this.setState({
        employeeIdErrorMsg: 'Enter your 7 digit Employee Id.'
      });
      return false;
    }
    return true;
  }

  loginEmployee() {
    if (this.validateEmployeeId()) {
      const { setEmployeeId } = this.props;
      const { employeeIdValue } = this.state;
      setEmployeeId(employeeIdValue);
      this.setState({
        employeeIdValue: '',
        employeeIdErrorMsg: ''
      });
      this.toggleLoginPopup(false);
    }
  }

  render() {
    const { employeeId, setEmployeeId } = this.props;
    const { isLoginPopup, employeeIdValue, employeeIdErrorMsg } = this.state;
    return (
      <Fragment>
        <header className='navbar nav-header'>
          <section className='navbar-section'>
            <Link to='/' className='btn btn-link'>
              <i className='fa fa-cogs' aria-hidden='true'></i> Challenge Management Tool
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
              <button className='btn btn-primary input-group-btn' onClick={this.toggleLoginPopup.bind(this, true)}>
                Login
              </button>
            )}
          </section>
        </header>
        {isLoginPopup ? (
          <LoginPopup
            onSubmit={this.loginEmployee}
            onCancel={this.toggleLoginPopup.bind(this, false)}
            employeeIdValue={employeeIdValue}
            changeEmployeeId={this.changeEmployeeId}
            employeeIdErrorMsg={employeeIdErrorMsg}
          />
        ) : null}
      </Fragment>
    );
  }
}

AppHeader.propTypes = PropTypes;

AppHeader.defaultProps = {
  employeeId: ''
};

const mapStateToProps = state => ({
  employeeId: state.employeeId
});

const mapDispatchToProps = dispatch => {
  return {
    setEmployeeId: employeeId => dispatch({ type: SET_EMPLOYEE_ID, payload: employeeId })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
