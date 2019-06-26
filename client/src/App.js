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
      case (type === "strike" && this.state.strikes === 2) ||
        (type === "ball" && this.state.balls === 3):
        this.setState({ balls: 0, strikes: 0 });
        break;
      case type === "ball":
        this.setState({ balls: this.state.balls + 1 });
        break;
      case type === "strike":
        this.setState({ strikes: this.state.strikes + 1 });
        break;
      case type === "foul" && this.state.strikes === 2:
        this.setState({ fouls: this.state.fouls + 1 });
        break;
      case type === "foul" && this.state.strikes < 2:
        this.setState({
          fouls: this.state.fouls + 1,
          strikes: this.state.strikes + 1
        });
        break;
      case type === "hit":
        this.setState({ hits: this.state.hits + 1, balls: 0, strikes: 0 });
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
