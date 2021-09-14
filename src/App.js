import React, { Component } from "react";
import Home from './pages/Home/index.js';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home title={"This is home page"}/> {/* props title */}
      </div>
    );
  }
}

export default App;
