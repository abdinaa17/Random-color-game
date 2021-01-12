import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  state = { color: "blue" };
  changeColor = () => {
    let arr = [
      "red",
      "green",
      "tomato",
      "pink",
      "black",
      "cyan",
      "violet",
      "purple",
      "orange"
    ];
    let randomColor = arr[Math.floor(Math.random() * arr.length)];
    this.setState({ color: randomColor });
  };
  render() {
    return (
      <div className="Button">
        <h1>The Winning Color is Cyan</h1>
        <h3>{this.state.color}</h3>
        {this.state.color === "cyan" ? (
          <h3>You are the Winner!!</h3>
        ) : (
          <button className="Btn" onClick={this.changeColor}>
            Random Color
          </button>
        )}
      </div>
    );
  }
}

export default Button;
