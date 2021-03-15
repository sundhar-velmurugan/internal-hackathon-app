import { combineReducers } from 'redux';
import employee from './employee';
import challenge from './challenge';
import tag from './tag';

export default combineReducers({ employee, challenge, tag });
