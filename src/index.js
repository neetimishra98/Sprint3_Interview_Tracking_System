import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {combineReducers,  createStore, applyMiddleware, compose } from 'redux';
import 'mdbreact/dist/css/mdb.css';
import { MDBTimePicker, MDBCol } from "mdbreact";
import InterviewReducer from './reducers/adminInterviewReducer';
import PanelMemberReducer from './reducers/adminPanelMemberReducer';
import CandidateReducer from './reducers/adminCandidateReducer';
import userReducer from './reducers/loginReducer';


import HRReducer from './reducers/hrReducer';
import TechReducer from './reducers/techreducer';
import EmployeeReducer from './reducers/adminEmployeeReducer';

let allReducers = combineReducers({'CandidateReducer': CandidateReducer, 'InterviewReducer' : InterviewReducer,'PanelMemberReducer' : PanelMemberReducer, 'EmployeeReducer' : EmployeeReducer, 'TechReducer' : TechReducer, 'HRReducer' : HRReducer, 'userReducer' : userReducer});
let store = createStore(allReducers,applyMiddleware(ReduxThunk));
store.subscribe(()=>console.log('Store state: ' ,store.getState()));

store.subscribe(()=>console.log('Current State: ', store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
