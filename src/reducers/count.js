//カウンタの値の状態を持つstate

import { INCREMENT, DECREMENT } from "../actions";
const initialState = {value: 0}

//受け取ったactionのタイプに応じてstateの中身を変化させる
export default (state=initialState, action)=>{
  //actionによって分岐させるからswitchを使う
  switch (action.type){
    case INCREMENT:
      return {value: state.value +1}
    case DECREMENT:
      return {value: state.value -1}
    default:
      return state
  }
}