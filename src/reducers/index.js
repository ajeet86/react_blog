import { combineReducers } from 'redux';
import FetchPost from './reducer_fetchpost';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  FetchPost:FetchPost,
  form:formReducer

});

export default rootReducer;
