import React, { Component } from "react";
import _ from "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Counter from "./components/counter.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <Counter counter={this.props.counterModel} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
