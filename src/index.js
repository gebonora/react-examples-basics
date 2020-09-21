import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click Me!";
}

const App = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ color: "white", backgroundColor: "blue" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
