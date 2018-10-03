import _ from 'lodash';

import {VAR_Fetch_post,Get_post,Delete_post} from '../actions';

export default function(state= {},action){
  
     
     console.log('dddd'+VAR_Fetch_post);
     switch(action.type){
          case Delete_post:
            return _.omit(state,action.payload.data);


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