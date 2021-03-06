import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  DELETE_ERRORS,
} from '../actions/session_actions';

const errorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case DELETE_ERRORS:
      return [];
    default:
      return state;
  }
  return [];
};



export default errorReducer;