import { SET_EMPLOYEE_ID } from '../actions/types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_EMPLOYEE_ID:
      return { employeeId: payload };
    default:
      return state;
  }
};
