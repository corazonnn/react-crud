import axios from "axios";
export const READ_EVENTS = "READ_EVENTS";
export const CREATE_EVENTS = "CREATE_EVENTS";
//actionをreturnするaction createrの定義
//このactionのtypeによってreduceの中での処理が変わる

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response }); //dispatchでreducerに渡してる
};
//非同期関数:async
export const postEvents = (values) => async (dispatch) => {//valuesにはformに入力されたものが入ってくる
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
  dispatch({ type: CREATE_EVENTS, response }); //dispatchでreducerに渡してる
};
