import axios from 'axios';

 export const VAR_Fetch_post='fetch_post';
 
 const ROOT_URL='http://reduxblog.herokuapp.com/api';
 const APP_KEY='?key=ajeet1233212';


export function abcgetpost(){
   // console.log('action');
   
    const request=axios.get(`${ROOT_URL}/posts${APP_KEY}`);
   return{
       type:VAR_Fetch_post,
       payload:request
   }

}