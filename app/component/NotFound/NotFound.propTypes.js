import PropTypes from 'prop-types';

export default {
  buttonText: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  needRedirectButton: PropTypes.bool,
  redirectUrl: PropTypes.string,
  title: PropTypes.string.isRequired
};
