import { combineReducers } from 'redux';
import FetchPost from './reducer_fetchpost';

const rootReducer = combineReducers({
  FetchPost:FetchPost
});

export default rootReducer;
