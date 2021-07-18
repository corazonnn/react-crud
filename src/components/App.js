import React, { Component } from "react";
import PropsTypes from "prop-types";
import { connect } from "react-redux";
import {increment,decrement} from '../actions'
class App extends Component {

  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>count: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

//mapStateToPropsはstateの情報を取り出してcomponent内のpropsとしてマッピングする
const mapStateToProps = state => ({value: state.count.value})

//dispatch...あるactionが実行された際にreducerにtypeに応じた状態遷移を実行させるための関数
const mapDispatchToProps = dispatch =>({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

//stateとactionを関連づける部分
export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;
