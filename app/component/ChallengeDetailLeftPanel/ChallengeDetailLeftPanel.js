import React, { Component, Fragment } from 'react';

import './ChallengeDetailLeftPanel.css';
import PropTypes from './ChallengeDetailLeftPanel.propTypes';

export default class ChallengeDetailLeftPanel extends Component {
  render() {
    const { challenge } = this.props;
    return (
      <Fragment>
        <div className='hero hero-sm bg-gray detail-container'>
          <div className='hero-body'>
            <h1>{challenge.title}</h1>
            <p>{challenge.description}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

ChallengeDetailLeftPanel.propTypes = PropTypes;
