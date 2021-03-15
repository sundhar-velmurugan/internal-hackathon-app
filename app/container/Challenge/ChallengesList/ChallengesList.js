import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getChallenges, upvoteChallenge } from '../../../actions/challenge';

import ChallengesListPage from '../../../component/ChallengesListPage/ChallengesListPage';

import PropTypes from './ChallengeList.propTypes';

class ChallengesList extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.upvoteChallenge = this.upvoteChallenge.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { challenges } = this.props;
    if (!challenges.length) {
      const { getChallenges } = this.props;
      getChallenges && getChallenges();
    }
  }

  upvoteChallenge(flag, empId, challengeId) {
    const { upvoteChallenge } = this.props;
    upvoteChallenge && upvoteChallenge(flag, empId, challengeId);
  }

  render() {
    const { employeeId, challenges } = this.props;
    return (
      <ChallengesListPage employeeId={employeeId} challenges={challenges} upvoteChallenge={this.upvoteChallenge} />
    );
  }
}

ChallengesList.propTypes = PropTypes;

ChallengesList.defaultProps = {
  employeeId: '',
  challenges: []
};


const mapStateToProps = state => ({
  challenges: state.challenge.challenges,
  employeeId: state.employee.employeeId
});

export default connect(mapStateToProps, { getChallenges, upvoteChallenge })(ChallengesList);
