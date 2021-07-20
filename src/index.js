import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';//storeを作成するため
import {Provider} from 'react-redux';//作成したstoreを全てのcomponentに渡すコンポーネント
import thunk from 'redux-thunk'
import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import reportWebVitals from './reportWebVitals';

//storeの作成.全部のstateはこのstoreで管理される
const store = createStore(reducer, applyMiddleware(thunk))

//Providerを定義することでグローバルにstateを使用することが出来る
//Providerの中で定義したコンポーネントだけグローバルstateを使用することができる
ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
