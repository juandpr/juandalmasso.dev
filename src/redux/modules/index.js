import { combineReducers } from 'redux';
import blog from './blog/reducer';

const rootReducer = combineReducers({
  blog
});

export default rootReducer;
