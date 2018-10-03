import axios from 'axios';

 export const VAR_Fetch_post='fetch_post';
 export const Get_post='get_post';
 export const Var_Create_post='create_post';
 export const Delete_post='delete_post';
 
 
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


export function createPost(values,callback){
 //console.log('action');

    
     const request=axios.post(`${ROOT_URL}/posts${APP_KEY}`,values)
     .then(()=>callback());
//this is for after add blog redirect to list

    return{
        type:Var_Create_post,
        payload:request
    }
 
 }

 export function getPost(id){
    //console.log(id);
   
   //console.log(Var_Get_post);
        const request=axios.get(`${ROOT_URL}/posts/${id}/${APP_KEY}`);
       // console.log(`${ROOT_URL}/posts/${id}/${APP_KEY}`);
   
   
       return{
           type:Get_post,
           payload:request
       }
    
    }
    export function deletePost(id,callback){
        //console.log(id);
       
       //console.log(Var_Get_post);
            const request=axios.delete(`${ROOT_URL}/posts/${id}/${APP_KEY}`).then(()=>callback());
           // console.log(`${ROOT_URL}/posts/${id}/${APP_KEY}`);
       
       
           return{
               type:Delete_post,
               payload:id
           }
        
        }