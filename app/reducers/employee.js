import { SET_EMPLOYEE_ID } from '../actions/types';

const initialState = {
  employeeId: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_EMPLOYEE_ID:
      return { employeeId: payload };
    default:
      return state;
  }
};
