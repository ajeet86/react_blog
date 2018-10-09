import React ,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import {searchPost} from '../actions/index';



 class searchBox extends Component{

    constructor(props){
        super(props);
        this.state={term:''}
        this.onInputChange=this.onInputChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    onInputChange(event){
        //console.log(event.target.value);
        //console.log(event);
        //console.log('jsjsjssj'+event);
        this.setState({term:event.target.value})
        
      }
      handleClick(){
          //  console.log(this.state.term);
                this.props.searchPost(this.state.term);
                //this.setState({term:''});
      }

      renderPosts() {
        if(!this.props.SearchPost){
            return <div>loading</div>
        }else{
            var match=0;
            for (var k in this.props.SearchPost) {
                  if(this.props.SearchPost[k].title.trim()==this.state.term.trim()){
                      match=1;
                      //console.log('hhhh'+this.props.SearchPost[k].title+'match'+this.state.term);
                      return (
                        <li className="list-group-item" >
                             {this.props.SearchPost[k].title} 
                        </li>
                      );
                  }
            }
            if(match==0){
                return (
                    <li className="list-group-item">
                          No match
                    </li>
                  );

            }
               
            //return _.map(this.props.SearchPost, post => {
              //  return (
                //  <li className="list-group-item" key={post.id}>
                  //      {post.title}
                  //</li>
                //);
              //});

           

        }
      
        
          
           
          }
       
      


    render(){

        return(
            <div className="input-lg">
                  <input type="text" name="search" value={this.state.term} placeholder="search here "
                    onChange={this.onInputChange}
                  
                  />
                  <button className='btn btn-primary' onClick={this.handleClick}>search</button>

                    <div>


                    <h3>Posts</h3>
                    <ul className="list-group">
                    <li>POST TITLE</li>
                    {this.renderPosts()}
                    </ul>

                    </div>
            
            </div>
        )
    }


    

}

function mapDispatchToProps(dispatch){
   
    return bindActionCreators({searchPost},dispatch)
    
    }
    function mapStateToProps({ SearchPost }) {
        return { SearchPost };
      }
    
export default connect(mapStateToProps,mapDispatchToProps)(searchBox)
