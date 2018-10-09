import { combineReducers } from 'redux';
import FetchPost from './reducer_fetchpost';
import SearchPost from './reducer_searchpost';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  FetchPost:FetchPost,
  SearchPost:SearchPost,
  form:formReducer

});

export default rootReducer;
