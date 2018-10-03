import React,{Component} from 'react';
import { connect } from 'react-redux';
import {getPost,deletePost} from '../actions/index'; 
import {Link} from 'react-router-dom';

class ShowPost extends Component
{
        componentDidMount(){
                const { id } = this.props.match.params;
                this.props.getPost(id);
               }
               
 onDeleteClick() {
                const { id } = this.props.match.params;
                
                this.props.deletePost(id,()=>{
                this.props.history.push('/');
        });
}

   render(){
        const { post } = this.props;

        if (!post) {
          return <div>Loading...</div>;
        }
           // console.log(this.props.match.params.id);
            return(
                    <div>
                            <Link to='/'>Back  to list</Link>
                            <button 
                            className="btn btn-danger pull-xs-right"
                             onClick={this.onDeleteClick.bind(this)}>
                            delete post</button>
                             <h3>{post.title}</h3>
                            <h2>{post.id}</h2> 
                            <h1>{post.category}</h1>
                              Show Post With IDd</div>

            )
   }

}
function mapStateToProps({FetchPost},ownProps){
      // console.log(FetchPost[ownProps.match.params.id] +'dddddd');
       return { post: FetchPost[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{getPost,deletePost})(ShowPost);

