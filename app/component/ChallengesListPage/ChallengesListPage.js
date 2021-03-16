import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ChallengeCard from '../ChallengeCard/ChallengeCard';

import './ChallengesListPage.css';
import PropTypes from './ChallengesListPage.propTypes';

export default class ChallengesListPage extends Component {
  render() {
    const { employeeId, challenges, upvoteChallenge } = this.props;

    return (
      <div className='container'>
        <div className='columns'>
          <div className='column col-10 list-view-container'>
            {challenges.length
              ? challenges.map(challenge => (
                  <ChallengeCard
                    key={challenge.id}
                    id={challenge.id}
                    title={challenge.title}
                    description={challenge.description}
                    tag={challenge.tag}
                    upvotes={challenge.upvotes}
                    timestamp={challenge.timestamp}
                    employeeId={employeeId}
                    upvoteChallenge={upvoteChallenge}
                  />
                ))
              : 'No Challenges'}
          </div>
          <div className='column col-2 list-view-container'>
            <div className='list-right-continer'>
              {employeeId ? (
                <Link to='/challenge/add'>
                  <button className='btn btn-success'>Add Challenge</button>
                </Link>
              ) : (
                'Login to add challenges'
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChallengesListPage.propTypes = PropTypes;
