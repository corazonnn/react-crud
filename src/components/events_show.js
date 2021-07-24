import React, { Component } from "react";
import { connect } from "react-redux"; //reduxを使用するから必要(state管理)
import { Field, reduxForm } from "redux-form";
import { getEvent, deleteEvent, putEvent } from "../actions";
import { Link } from "react-router-dom";

class EventsShow extends Component {
  constructor(props){//なんのためにここで処理しているの？？
    super(props)//なんでsuperしてるんだ？？onSubmit??
    this.onDeleteClick = this.onDeleteClick.bind(this)//bindってなんだっけ??なんか同期的に変更させるための処理だったような
  }
  renderField(field){
    const {input,label, type, meta: {touched,error}}= field //このfieldからは様々な属性が受け取れる
    return (
    <div>
      <input {...input} placeholder={type} />
      {touched && error && <span>{error}</span>}
    </div>
    )
  }

  async onDeleteClick() {//非同期処理なのでasync.delteボタンが押された時の処理を書いていく
    //console.log(this.props.match)//クリックした投稿の情報が取得できる
    const {id} = this.props.match.params
    await this.props.deleteEvent(id)//deleteEventというactionに投稿のidを渡す
    this.props.history.push('/')
  }
  //非同期処理なのでasyncってどう言うこと？？非同期処理の関数にはasyncを使うらしい。
  //asyncはPromiseを返す
  //Promiseを返すってなんだっけ？？何かしらの処理に対して成功か失敗かが帰ってくる
  //function onSubmit →　async onSubmit
  async onSubmit(values){//この関数の中では何がしたいの？？自作のアクションであるpostEventにフォームから得られた各値(values)を
    //渡し、APIコールを行うこと
    //await this.props.postEvents(values) //awaitってなんだっけ？？ .().then(result => {})みたいなやつを簡略化するためのもの
    this.props.history.push('/')//historyって何？？SPA上の画面遷移ではないけど必要なもの
  }
  //handlesubmit(関数)...handlesubmitはsubmitボタンをクリックした際に入力された値をvaluesとして設定し、
  //そのvalues(入力された値)を第一引数の関数(今はthis.onSubmit)へ送られる
  render() {
    const {handleSubmit, pristine,submitting} = this.props//pristineはフォームに触ってない時はsubmitボタンが押せない
    console.log(submitting);//submittingボタンが押されたらtrueになる
    return (
    <form　onSubmit={handleSubmit(this.onSubmit)}>
      <div>
        <Field label="Title" name="title" type="text" component={this.renderField} />
        <Field label="Body" name="body" type="text" component={this.renderField} />
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/" >キャンセル</Link>
          <Link to="/" onClick={this.onDeleteClick}>  削除</Link>

        </div>
      </div>
    </form>
    )
  }
}
/*
Submitの流れ
1.submitが押されたら,handleSubmit関数に引数(this.onSubmit)が渡される
2.引数のthis.onSubmitはconstructor内で定義されている
3.onSubmitとは入力フォームから受け取った文字列？？
4.handleSubmit関数内では
*/

const validate = values => {//Q.エラーの管理するが、valuesを使っていないのはなぜ？？勝手にerrors配列の中にエラー文が入っていくとは思えない
  const errors = {}
  if (!values.title) errors.title = "Enter title, please"
  if (!values.body) errors.body = "Enter body, please"
  return errors
}
const mapDispatchToProps = ({deleteEvent});//このコンポーネントにdeleteeventをbindしないとコンポーネントの中で使用することができない

//stateとactionを関連づける部分
//mapDispatchToPropsにpostEventを書くことで、このコンポーネントに関係するfunctionですよーーと教えてあげる
export default connect(null, mapDispatchToProps)(
  reduxForm({validate,form: 'eventShowForm'})(EventsShow)//EventsNewコンポーネントのデコレート作業が必要
);
//(イベントに関する描画をする必要がある時は作る, )
// export default App;
