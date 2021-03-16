import { GET_CHALLENGES, UPVOTE_CHALLENGE, EDIT_CHALLENGE, CREATE_CHALLENGE } from './types';

export const getChallenges = () => dispatch => {
  fetch('http://localhost:3000/challenges')
    .then(response => response.json())
    .then(res => {
      dispatch({ type: GET_CHALLENGES, payload: res });
    });
};

export const upvoteChallenge = (flag, empId, challengeId) => dispatch => {
  dispatch({ type: UPVOTE_CHALLENGE, payload: { flag, empId, challengeId } });
};

export const createChallenge = (challenge) => dispatch => {
  dispatch({ type: CREATE_CHALLENGE, payload: challenge });
};

export const updateChallenge = (challenge) => dispatch => {
  dispatch({ type: EDIT_CHALLENGE, payload: challenge });
};
