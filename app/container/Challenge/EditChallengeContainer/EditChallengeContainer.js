import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import ChallengeFormContainer from '../ChallengeFormContainer/ChallengeFormContainer';

import { findChallenge } from '../../../utlis/challenge';

import PropTypes from './EditChallengeContainer.propTypes';

class EditChallengeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      challenge: {}
    };
  }

  componentDidMount() {
    const { challenges } = this.props;
    if (challenges.length) {
      const { match } = this.props;
      const index = findChallenge(challenges, Number(match.params.challengeId));
      if (index !== -1) {
        this.setState({
          challenge: challenges[index]
        });
      }
    }
  }

  render() {
    const { challenge } = this.state;
    return <ChallengeFormContainer isEditForm={true} challenge={challenge} />;
  }
}

EditChallengeContainer.propTypes = PropTypes;

EditChallengeContainer.defaultProps = {
  employeeId: '',
  challenges: []
};

const mapStateToProps = state => ({
  challenges: state.challenge.challenges,
  employeeId: state.employee.employeeId
});

export default withRouter(connect(mapStateToProps)(EditChallengeContainer));
