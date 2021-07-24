//カウンタの値の状態を持つstate
import _ from "lodash";
import { READ_EVENTS } from "../actions";

//受け取ったactionのタイプに応じてstateの中身を変化させる
export default (events = {}, action) => {
  //actionによって分岐させるからswitchを使う
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");

    default:
      return events;
  }
};
