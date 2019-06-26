import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hits: 0
  };

  increment = type => {
    switch (true) {
      case type === "ball":
        this.setState({ balls: this.state.balls + 1 });
        break;
      case type === "strike":
        this.setState({ strikes: this.state.strikes + 1 });
        break;
      case type === "foul":
        this.setState({ fouls: this.state.fouls + 1 });
        break;
      case type === "hit":
        this.setState({ hits: this.state.hits + 1 });
        break;
      default:
        return;
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Balls + strikes 💯👌😂⚾️</h1>
        <button onClick={() => this.increment("ball")}>
          balls: {this.state.balls}{" "}
        </button>
        <button onClick={() => this.increment("strike")}>
          strikes: {this.state.strikes}
        </button>
        <button onClick={() => this.increment("foul")}>
          fouls: {this.state.fouls}
        </button>
        <button onClick={() => this.increment("hit")}>
          hits: {this.state.hits}
        </button>
      </div>
    );
  }
}

export default App;
