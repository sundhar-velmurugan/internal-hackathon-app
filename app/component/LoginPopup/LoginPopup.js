import React, { Component } from 'react';
import PropTypes from './LoginPopup.propTypes';

export default class LoginPopup extends Component {
  render() {
    const { onSubmit, onCancel, employeeIdValue, changeEmployeeId, employeeIdErrorMsg } = this.props;
    return (
      <div className='modal modal-sm active' id='modal-id'>
        <div className='modal-container'>
          <div className='modal-header'>
            <div className='btn btn-clear float-right' aria-label='Close' onClick={onCancel}></div>
            <div className='modal-title h5'>Employee Login</div>
          </div>
          <div className='modal-body'>
            <div className='content'>
              <div className='form-group'>
                <label className='form-label' htmlFor='employee-id'>
                  Employee Id
                </label>
                <input
                  className={`form-input ${employeeIdErrorMsg ? 'is-error' : ''}`}
                  type='text'
                  id='employee-id'
                  placeholder='Your 7 digit Employee ID'
                  value={employeeIdValue}
                  onChange={changeEmployeeId}
                />
              </div>
              <p className='is-error'>{employeeIdErrorMsg}</p>
            </div>
          </div>
          <div className='modal-footer'>
            <button className='btn btn-lg btn-primary' onClick={onSubmit}>
              Submit
            </button>
            <button className='btn btn-lg btn-link' onClick={onCancel}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

LoginPopup.propTypes = PropTypes;
