import {
  POST_GET,
  POST_SET
} from './const';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_GET:
    case POST_SET:
    default:
      return state;
  }
};

export default reducer;
