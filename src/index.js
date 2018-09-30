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


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
        <BrowserRouter>

            <Switch>
          <Route path='/post/new' component={PostNew} />
          <Route path='/' component={PostIndex} />

         

          </Switch>
      </BrowserRouter>
        
    </div>
  </Provider>
  , document.querySelector('.container'));
