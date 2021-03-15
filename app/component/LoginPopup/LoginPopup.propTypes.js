import PropTypes from 'prop-types';

export default {
  changeEmployeeId: PropTypes.func.isRequired,
  employeeIdErrorMsg: PropTypes.string,
  employeeIdValue: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
