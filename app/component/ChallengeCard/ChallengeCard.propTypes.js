import PropTypes from 'prop-types';

export default {
  description: PropTypes.string,
  employeeId: PropTypes.string,
  id: PropTypes.number,
  tag: PropTypes.array,
  timestamp: PropTypes.string,
  title: PropTypes.string,
  upvoteChallenge: PropTypes.func,
  upvotes: PropTypes.array
};
