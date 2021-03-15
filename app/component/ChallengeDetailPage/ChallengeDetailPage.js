import React, { Component } from 'react';

import ChallengeDetailRightPanel from '../ChallengeDetailRightPanel/ChallengeDetailRightPanel';
import ChallengeDetailLeftPanel from '../ChallengeDetailLeftPanel/ChallengeDetailLeftPanel';

import './ChallengeDetailPage.css';
import PropTypes from './ChallengeDetailPage.propTypes';

export default class ChallengeDetailPage extends Component {
  render() {
    const { employeeId, challenge, upvoteChallenge } = this.props;
    return (
      <div className='container'>
        <div className='columns'>
          <div className='column col-9 detail-view-container'>
            <ChallengeDetailLeftPanel challenge={challenge} />
          </div>
          <div className='column col-3 detail-view-container'>
            <ChallengeDetailRightPanel
              challenge={challenge}
              employeeId={employeeId}
              upvoteChallenge={upvoteChallenge}
            />
          </div>
        </div>
      </div>
    );
  }
}

ChallengeDetailPage.propTypes = PropTypes;
