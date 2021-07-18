//全部のreducerをそうかするためのファイル

import { combineReducers } from "redux"
import count from './count'

//他のreducerを一つにまとめている
export default combineReducers({count})
//export default combineReducers({count,cunt2,count3})