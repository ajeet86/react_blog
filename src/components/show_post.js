import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getPost} from '../actions/index'; 

class ShowPost extends Component
{
   render(){
            return(
                    <div>Show Post With IDd</div>

            )
   }

}

export default connect(null,{getPost})(ShowPost);