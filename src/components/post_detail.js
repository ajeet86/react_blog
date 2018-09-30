
import React ,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/index'




  class PostNew extends Component{
    renderField(field){

        const className=`form-group${field.meta.touched && field.meta.error ? 'has-danger':''}`
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input type="text" {...field.input} />
                <div className="text-help">
                {field.meta.touched?field.meta.error:''}
                </div>
               
            </div>
        )
    }

    onSubmit(values){
        //console.log(values);
       // this.props.history.push('/');
        this.props.createPost(values,()=>{
            this.props.history.push('/');
        });
    }

      render() {
              // console.log('112'+this.props.posts)
              const { handleSubmit }=this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                     
                        <Field label='Title' name='title' component={this.renderField} />
                        <Field label='Categories' name='categories' component={this.renderField} />
                        <Field label='Post Content' name='content' component={this.renderField} />
                        <button type='submit' className='btn btn-primery' >submit</button>
                        <Link className="btn btn-primery" to="/" >Cancel</Link>

                </form>
                    
            </div>
        );
      }
    }
  function validate(values){
     // console.log('sssss');
     //console.log(values)->{title:'asd',categories:'ddd'}
    const error={};
    //validate the inputs form 'values'
    if(!values.title ||values.title.length < 3){
        error.title="Enter a title with atleast 3 charector";

    }

    // if error is empty the form is fine to submit 
    //if error has any property     redux form assume form is invalid
    return error;


  }


  export default reduxForm({
      validate:validate,
        form:'PostsNewForm001'//provide unique key always in redux form 


  })(
      connect(null,{createPost})(PostNew)
      );
  