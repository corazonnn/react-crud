//カウンタの値の状態を持つstate
import _ from "lodash";
import {
  READ_EVENTS,
  READ_EVENT,
  CREATE_EVENTS,
  DELETE_EVENTS,
  UPDATE_EVENTS,
} from "../actions";

//受け取ったactionのタイプに応じてstateの中身を変化させる
export default (events = {}, action) => {
  //actionによって分岐させるからswitchを使う
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, "id");
    case CREATE_EVENTS://responseを渡してもらって状態を更新する
    case READ_EVENT: //ここに来たらデータの更新を行いたい.urlに直接アクセスが来た時用に
    case UPDATE_EVENTS: //UPDATE_EVENTSのアクションが飛んできたら以下の処理を行う
      const data = action.response.data;
      return { ...events, [data.id]: data }; //何してるの？？eventsデータを展開してdata.idだけ中身を更新する

    case DELETE_EVENTS: //どこからここに飛んでくるのか？？
      delete events[action.id]; //event情報が書き換えられる
      return { ...events };

    default:
      return events;
  }
};
