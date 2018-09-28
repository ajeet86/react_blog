import _ from 'lodash';

import {VAR_Fetch_post} from '../actions'

export default function(state= {},action){
  
      // console.log('dddddddddd'+action.type+'sssss'+action.payload);
    // console.log('dddd'+VAR_Fetch_post);
     switch(action.type){
       case VAR_Fetch_post:
       return _.mapKeys(action.payload.data, "id");
       default:
       return state;
     }

    
}