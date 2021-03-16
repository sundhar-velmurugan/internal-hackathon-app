import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './ChallengeDetailRightPanel.css';
import PropTypes from './ChallengeDetailRightPanel.propTypes';

export default class ChallengeDetailRightPanel extends Component {
  constructor(props) {
    super(props);

    this.upvoteChallenge = this.upvoteChallenge.bind(this);
  }

  upvoteChallenge(flag) {
    const { upvoteChallenge, employeeId, challenge } = this.props;
    employeeId && upvoteChallenge && upvoteChallenge(flag, employeeId, challenge.id);
  }

  render() {
    const { employeeId, challenge } = this.props;
    return (
      <div className='right-panel-container'>
        <div>
          {challenge.authorId === employeeId ? (
            <Fragment>
              <Link to={`/challenge/${challenge.id}/edit`}>
                <button className='btn btn-primary'>Edit</button>
              </Link>
              <button className='btn btn-link text-error'>Delete</button>
            </Fragment>
          ) : (
            <Fragment>
              <button className='btn btn-primary' disabled tabIndex='-1'>
                Edit
              </button>
              <button className='btn btn-link text-error' disabled tabIndex='-1'>
                Delete
              </button>
            </Fragment>
          )}
        </div>
        <dl>
          <dt>Tag</dt>
          <dd>
            {challenge.tag.length
              ? challenge.tag.map(tagName => (
                  <span className='chip' key={tagName}>
                    <Link to={`/tag/${tagName}`}>{tagName}</Link>
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <div>
          {challenge.upvotes.find(e => e === employeeId) ? (
            <Fragment>
              <i
                className='fa fa-thumbs-up like-button'
                aria-hidden='true'
                onClick={this.upvoteChallenge.bind(this, false)}
              ></i>
              {` ${challenge.upvotes.length} `}
              <span className='label label-secondary'>Liked</span>
            </Fragment>
          ) : (
            <Fragment>
              <i
                className={`fa fa-thumbs-o-up ${employeeId ? 'like-button' : 'like-button-disabled'}`}
                aria-hidden='true'
                onClick={this.upvoteChallenge.bind(this, true)}
                title={`${employeeId ? '' : 'You need to login to like'}`}
              ></i>
              {` ${challenge.upvotes.length} `}
              <span className='label'>Like</span>
            </Fragment>
          )}
        </div>
        <dl>
          <dt>Created by </dt>
          <dd>{challenge.authorId === employeeId ? 'You' : challenge.authorId}</dd>
        </dl>
        <dl>
          <dt>Created Time</dt>
          <dd>{new Date(challenge.timestamp).toDateString()}</dd>
        </dl>
      </div>
    );
  }
}

ChallengeDetailRightPanel.propTypes = PropTypes;
