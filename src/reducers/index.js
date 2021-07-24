//全部のreducerをそうかするためのファイル
import { combineReducers } from "redux"
import {reducer as form } from 'redux-form'//reduxformを使うためには必要になってくる
import events from './events'

//他のreducerを一つにまとめている
//eventsにはreducer内のreturnが入っている
export default combineReducers({events,form})//combineReducersによって一つのstateにmergeされる。
//つまりこのアプリ内でstate(storeじゃなく)が呼ばれたらevents reducerなどが詰まったstateのことをさす
//export default combineReducers({count,cunt2,count3})