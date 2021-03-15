import { SET_EMPLOYEE_ID } from '../actions/types';

const initialState = {
  challenges: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHALLENGES:
    case GET_CHALLENGE:
    case EDIT_CHALLENGE:
    case DELETE_CHALLENGE:
    default:
      return state;
  }
};
