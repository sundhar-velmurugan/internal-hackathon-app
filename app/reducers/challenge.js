import { GET_CHALLENGES, GET_CHALLENGE, EDIT_CHALLENGE, DELETE_CHALLENGE, UPVOTE_CHALLENGE } from '../actions/types';
import { findChallenge } from '../utlis/challenge';

const initialState = {
  challenges: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHALLENGES:
      return { challenges: payload };
    case UPVOTE_CHALLENGE:
      const { flag, empId, challengeId } = payload;
      const { challenges } = state;
      const index = findChallenge(challenges, challengeId);
      if (index !== -1) {
        const newState = Object.assign({}, state);
        const newChallenges = [...newState.challenges];
        if (flag) {
          newChallenges[index].upvotes.push(empId);
        } else {
          const upvoteIndex = newChallenges[index].upvotes.indexOf(empId);
          if (index > -1) {
            newChallenges[index].upvotes = newChallenges[index].upvotes
              .slice(0, upvoteIndex)
              .concat(newChallenges[index].upvotes.slice(upvoteIndex + 1));
          }
        }
        return { challenges: newChallenges };
      }
      return state;
    case GET_CHALLENGE:
    case EDIT_CHALLENGE:
    case DELETE_CHALLENGE:
    default:
      return state;
  }
};
