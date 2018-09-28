import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route} from 'react-router-dom';
import promiseMiddleware from 'redux-promise'


//import App from './components/app';
import reducers from './reducers';

import PostIndex from './components/post_index'


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
        <BrowserRouter>
       

          <Route path='/' component={PostIndex} />
          
        
           
      </BrowserRouter>
        
    </div>
  </Provider>
  , document.querySelector('.container'));
