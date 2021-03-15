import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './ChallengeCard.css';
import PropTypes from './ChallengeCard.propTypes';

export default class ChallengeCard extends Component {
  constructor(props) {
    super(props);

    this.upvoteChallenge = this.upvoteChallenge.bind(this);
  }

  upvoteChallenge(flag) {
    const { upvoteChallenge, employeeId, id } = this.props;
    employeeId && upvoteChallenge && upvoteChallenge(flag, employeeId, id);
  }

  render() {
    const { id, title, description, tag, upvotes, timestamp, employeeId } = this.props;

    return (
      <div className='hero hero-sm bg-gray challenge-card'>
        <div className='hero-body'>
          <Link to={`/challenge/${id}`}>
            <h1>{title}</h1>
          </Link>
          <p className='truncate'>{description}</p>
          <p>
            Tags:{' '}
            {tag.map(tagName => (
              <span className='chip' key={tagName}>
                <Link to={`/tag/${tagName}`}>{tagName}</Link>
              </span>
            ))}
          </p>
          <div className='container'>
            <div className='columns'>
              <div className='column col-6'>
                {upvotes.find(e => e === employeeId) ? (
                  <Fragment>
                    <i
                      className='fa fa-thumbs-up like-button'
                      aria-hidden='true'
                      onClick={this.upvoteChallenge.bind(this, false)}
                    ></i>
                    {` ${upvotes.length}`}
                  </Fragment>
                ) : (
                  <Fragment>
                    <i
                      className={`fa fa-thumbs-o-up ${employeeId ? 'like-button' : 'like-button-disabled'}`}
                      aria-hidden='true'
                      onClick={this.upvoteChallenge.bind(this, true)}
                      title={`${employeeId ? '' : 'You need to login to like'}`}
                    ></i>
                    {` ${upvotes.length}`}
                  </Fragment>
                )}
              </div>
              <div className='column col-6'>{new Date(timestamp).toDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChallengeCard.propTypes = PropTypes;
