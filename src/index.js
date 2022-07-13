import React from "react";
import ReactDOM from "react-dom";

const fName = "Alexis";
const lName = "Ojeda";
const luckyNum = 12;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
