//カウンタの値の状態を持つstate
import _ from "lodash";
import { READ_EVENTS, DELETE_EVENTS } from "../actions";

//受け取ったactionのタイプに応じてstateの中身を変化させる
export default (events = {}, action) => {
  //actionによって分岐させるからswitchを使う
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENTS: //どこからここに飛んでくるのか？？
      delete events[action.id]; //event情報が書き換えられる
      return { ...events };

    default:
      return events;
  }
};
