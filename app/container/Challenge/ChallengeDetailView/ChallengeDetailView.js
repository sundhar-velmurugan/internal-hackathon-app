import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { findChallenge } from '../../../utlis/challenge';
import { upvoteChallenge } from '../../../actions/challenge';

import NotFound from '../../../component/NotFound/NotFound';
import ChallengeDetailPage from '../../../component/ChallengeDetailPage/ChallengeDetailPage';

import PropTypes from './ChallengeDetailView.propTypes'

class ChallengeDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      challenge: {}
    };

    this.upvoteChallenge = this.upvoteChallenge.bind(this);
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

  upvoteChallenge(flag, empId, challengeId) {
    const { upvoteChallenge } = this.props;
    upvoteChallenge && upvoteChallenge(flag, empId, challengeId);
  }

  render() {
    const { challenge } = this.state;
    const { employeeId, upvoteChallenge } = this.props;

    return challenge.id ? (
      <ChallengeDetailPage challenge={challenge} employeeId={employeeId} upvoteChallenge={upvoteChallenge} />
    ) : (
      <NotFound
        iconName={'fa fa-lightbulb-o fa-5x'}
        title={'Challenge Not Found'}
        buttonText={'Go to Challenges'}
        redirectUrl={'/challenge'}
      />
    );
  }
}

ChallengeDetailView.propTypes = PropTypes;

ChallengeDetailView.defaultProps = {
  employeeId: '',
  challenges: []
};

const mapStateToProps = state => ({
  challenges: state.challenge.challenges,
  employeeId: state.employee.employeeId
});

export default withRouter(connect(mapStateToProps, { upvoteChallenge })(ChallengeDetailView));
