import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import productReducer from '../src/reducers/productReducer'

const middleareEnchancer = applyMiddleware(thunkMiddleWare)
const compoEnchancers = compose(middleareEnchancer)
const store = createStore(productReducer, undefined, compoEnchancers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

window.store = store
reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
