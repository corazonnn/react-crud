//全部のreducerをそうかするためのファイル

import { combineReducers } from "redux"
import events from './events'

//他のreducerを一つにまとめている
//eventsにはreducer内のreturnが入っている
export default combineReducers({events})//combineReducersによって一つのstateにmergeされる。
//つまりこのアプリ内でstate(storeじゃなく)が呼ばれたらevents reducerなどが詰まったstateのことをさす
//export default combineReducers({count,cunt2,count3})