import { UPDATE_TAGS } from '../actions/types';

const initialState = {
  tags: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_TAGS:
    default:
      return state;
  }
};
