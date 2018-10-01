import _ from 'lodash';

import {VAR_Fetch_post} from '../actions'
import {VAR_Get_post} from '../actions'

export default function(state= {},action){
  
      // console.log('dddddddddd'+action.type+'sssss'+action.payload);
    // console.log('dddd'+VAR_Fetch_post);
     switch(action.type){
          case VAR_Get_post:
          // const post=action.payload.data;
          // const newState ={...state};
          // newState[post.id]=post;
          // return newState;
          //key interpolation
        return {...state,[action.payload.data.id]:action.payload.data}
       case VAR_Fetch_post:
       return _.mapKeys(action.payload.data, "id");
       default:
       return state;
     }

    
}