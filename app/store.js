import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  employeeId: null
};

const store = createStore(rootReducer, initialState);

export default store;
