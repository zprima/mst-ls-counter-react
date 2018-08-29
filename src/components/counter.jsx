import React, { Component } from "react";
import { observer } from "mobx-react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div>{this.props.counter.value}</div>
        <div>
          <button onClick={this.props.counter.plus}>+ Plus</button>
          <button onClick={this.props.counter.minus}>- Minus</button>
        </div>
      </div>
    );
  }
}

export default observer(Counter);
