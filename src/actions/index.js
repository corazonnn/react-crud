import axios from "axios";
export const READ_EVENTS = "READ_EVENTS";
export const READ_EVENT = "READ_EVENT";
export const CREATE_EVENTS = "CREATE_EVENTS";
export const PUT_EVENTS = "PUT_EVENTS";
export const UPDATE_EVENTS = "UPDATE_EVENTS";
export const DELETE_EVENTS = "DELETE_EVENTS";
//actionをreturnするaction createrの定義
//このactionのtypeによってreduceの中での処理が変わる

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

export const readEvents = () => async (dispatch) => {
  // console.log(id)
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response }); //dispatchでreducerに渡してる
};
//非同期関数:async
export const postEvents = (values) => async (dispatch) => {
  //valuesにはformに入力されたものが入ってくる
  const response = await axios.post(
    `${ROOT_URL}/events${QUERYSTRING}`,
    values
  );
  dispatch({ type: CREATE_EVENTS, response }); //dispatchでreducerに渡してる
};

export const putEvent = (values) => async (dispatch) => {
  const response = await axios.put(
    `${ROOT_URL}/events/${values.id}${QUERYSTRING}`,
    values
  ); //valuesには更新内容が入ってる
  dispatch({ type: UPDATE_EVENTS, response }); //dispatchでreducerに渡してる
};

export const deleteEvent = (id) => async (dispatch) => {
  //削除のコードを書いてる。ここで本当に削除している
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`); //ここがよくわからん
  dispatch({ type: DELETE_EVENTS, id }); //dispatchでreducerに渡してる
};
export const getEvent = (id) => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`); //apiサーバから情報をとってきてる
  dispatch({ type: READ_EVENT, response });
};
