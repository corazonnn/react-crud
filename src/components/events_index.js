import React, { Component } from "react";
import { connect } from "react-redux";
import { readEvents } from "../actions";
import _ from "lodash";
import { Link } from "react-router-dom";
class EventsIndex extends Component {
  componentDidMount() {
    //componentsがマウント時に実行されるcallback
    this.props.readEvents(); //外部のapiにつなぎデータを取得したい
  }
  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
          {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>{this.renderEvents()}</tbody>
        </table>

        <Link to="/events/new">新規作成ページ</Link>
      </React.Fragment>
    );
  }
}

//【役割】mapStateToPropsはstateの情報を取り出してcomponent内のpropsとしてマッピングする
//【理由】state.eventsに入っているのはreducer内で記述されているから
const mapStateToProps = (state) => ({ events: state.events });
//events: state.eventと言うのは全reducerのボス(state)の内のevents　reducerを指す
//dispatch...あるactionが実行された際にreducerにtypeに応じた状態遷移を実行させるための関数
const mapDispatchToProps = {
  readEvents,
};

//stateとactionを関連づける部分
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

// export default App;
