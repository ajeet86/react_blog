import _ from 'lodash';
import React ,{Component} from 'react';
import { connect } from 'react-redux';
import {Link}  from 'react-router-dom';
import {abcgetpost}  from '../actions/index';





  class PostIndex extends Component{
      componentDidMount(){
     
       this.props.abcgetpost();  
      }
    
      renderPosts() {
          
        return _.map(this.props.posts, post => {
          return (
            <li className="list-group-item" key={post.id}>
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          );
        });
      }
    
      render() {
              // console.log('112'+this.props.posts)
        return (
          <div>
            <div className="text-xs-right">
             <Link className="btn btn-primery" to="post/new">Add A Post
             </Link>
            </div>
            <h3>Posts</h3>
            <ul className="list-group">
            <li>POST TITLE</li>
              {this.renderPosts()}
            </ul>
          </div>
        );
      }
    }
  

function mapStateToProps(state){
  // console.log(state.FetchPost+'list component');
    return{posts:state.FetchPost}

}
  export default connect(mapStateToProps,{abcgetpost})(PostIndex);
  