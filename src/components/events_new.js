import React, { Component } from "react";
import { connect } from "react-redux";//reduxを使用するから必要(state管理)
//import { postEvent } from "../actions";
import { Link } from "react-router-dom";
class EventsNew extends Component {
  render() {
    console.log("ここにはきてるで")
    return (
      <React.Fragment>
        <div>雷帝</div>
      </React.Fragment>
    );
  }
}

//const mapDispatchToProps = {postEvent};

//stateとactionを関連づける部分
export default connect(null, null)(EventsNew);
//(イベントに関する描画をする必要がある時は作る, )
// export default App;
