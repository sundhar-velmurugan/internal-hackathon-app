import { GET_CHALLENGES, UPVOTE_CHALLENGE } from './types';

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
