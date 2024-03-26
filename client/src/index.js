import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware,compose } from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk';
import reducers from './reducers';
// import posts  from './reducers/posts';
// import { combineReducers } from "redux";
// const rootReducer = combineReducers({
//   someSlice: posts,
// });

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});
// const store = configureStore(reducers, compose(applyMiddleware(thunk)));

// ReactDom.render(
// <Provider store={store}>
//     <App/>
//     </Provider>,
//     document.getElementById("root")
//     );
const root = document.getElementById('root');

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Using createRoot
const rootElement = ReactDom.createRoot(root);
rootElement.render(app);