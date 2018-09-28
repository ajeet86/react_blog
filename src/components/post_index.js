import _ from 'lodash';
import React ,{Component} from 'react';
import { connect } from 'react-redux'; 
import {abcgetpost}  from '../actions/index';



  class PostIndex extends Component{
      componentDidMount(){
     
       this.props.abcgetpost();  
      }
    
      renderPosts() {
          
        return _.map(this.props.posts, post => {
          return (
            <li className="list-group-item" key={post.id}>
              
                {post.title}
                {post.id}
              
            </li>
          );
        });
      }
    
      render() {
              // console.log('112'+this.props.posts)
        return (
          <div>
            <div className="text-xs-right">
             
            </div>
            <h3>Posts</h3>
            <ul className="list-group">
              {this.renderPosts()}
            </ul>
          </div>
        );
      }
    }
  

function mapStateToProps(state){
  // console.log(state.FetchPost);
    return{posts:state.FetchPost}

}
  export default connect(mapStateToProps,{abcgetpost})(PostIndex);
  