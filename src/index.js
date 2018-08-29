import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { CounterModel } from "./models/counterModel.js";
import { onSnapshot, getSnapshot } from "mobx-state-tree";

let initState = {
  value: 0
};

if (localStorage.getItem("counterApp")) {
  initState = JSON.parse(localStorage.getItem("counterApp"));
}

let counterModel = CounterModel.create(initState);

onSnapshot(counterModel, snapshot => {
  localStorage.setItem("counterApp", JSON.stringify(snapshot));
});

function renderApp() {
  ReactDOM.render(
    <App counterModel={counterModel} />,
    document.getElementById("root")
  );
}

renderApp();

if (module.hot) {
  module.hot.accept(["./App"], () => {
    renderApp();
  });

  module.hot.accept(["./models/counterModel"], () => {
    const snapshot = getSnapshot(counterModel);
    counterModel = CounterModel.create(snapshot);
    renderApp();
  });
}

registerServiceWorker();
