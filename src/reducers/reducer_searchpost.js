import _ from 'lodash';

import {var_search_post} from '../actions';

export default function(state= {},action){
     //console.log('search term'+var_search_post+'tetetetetetetetetet'+action.payload);

     switch(action.type){
       case var_search_post:
      //console.log(_.mapKeys(action.payload.data, "id"));
       return action.payload.data;

       default:
       return state;
     }

    
}