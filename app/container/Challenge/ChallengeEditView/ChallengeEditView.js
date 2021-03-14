import React, { Component } from 'react'
import { withRouter } from 'react-router';

class ChallengeEditView extends Component {
  render() {
    const { match } = this.props;
    return <div>ChallengeEditView {match.params.challengeId}</div>;
  }
}

export default withRouter(ChallengeEditView);
