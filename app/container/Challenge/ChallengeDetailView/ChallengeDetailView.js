import React, { Component } from 'react'
import { withRouter } from 'react-router';

class ChallengeDetailView extends Component {
  render() {
    const { match } = this.props;
    return <div>ChallengeDetailView {match.params.challengeId}</div>;
  }
}

export default withRouter(ChallengeDetailView);
