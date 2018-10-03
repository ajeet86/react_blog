import _ from 'lodash';

import {VAR_Fetch_post,Get_post} from '../actions';
console.log('aaaa'+Get_post);

export default function(state= {},action){
  
     
     console.log('dddd'+VAR_Fetch_post);
     switch(action.type){
          case Get_post:
          // const post=action.payload.data;
          // const newState ={...state};
          // newState[post.id]=post;
          // return newState;
          //key interpolation
         // console.log('reducer');
          //console.log(action.payload.data);
        return {...state,[action.payload.data.id]:action.payload.data}

       case VAR_Fetch_post:
       return _.mapKeys(action.payload.data, "id");

       default:
       return state;
     }

    
}