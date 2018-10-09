import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import promiseMiddleware from 'redux-promise'


//import App from './components/app';
import reducers from './reducers';

import PostIndex from './components/post_index';
import PostNew from './components/post_detail';
import ShowPost from './components/show_post';
 
 

//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const store = createStore(reducers,applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <div>
        <BrowserRouter>

            <Switch>
          <Route path='/post/new' component={PostNew} />
          <Route path='/post/:id' component={ShowPost} />
          <Route path='/post/:id/:catrgoty' component={ShowPost} />
          <Route path='/' component={PostIndex} />

         

          </Switch>
      </BrowserRouter>
        
    </div>
  </Provider>
  , document.querySelector('.container'));
