import React, { Component } from "react";
import _ from "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Counter from "./components/counter.jsx";
import { CounterModel } from "./models/counterModel.js";

import { onSnapshot } from "mobx-state-tree";

let initState = {
  value: 0
};

if (localStorage.getItem("counterApp")) {
  initState = JSON.parse(localStorage.getItem("counterApp"));
}

const counterModel = CounterModel.create(initState);

onSnapshot(counterModel, snapshot => {
  localStorage.setItem("counterApp", JSON.stringify(counterModel));
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <Counter counter={counterModel} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
