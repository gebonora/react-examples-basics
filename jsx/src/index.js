import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click Me!";
}

/*
jsx cannot show plain Objects, we can use .text to cheat it
We can use objects in jsx as properties, eg in style, as long as they are not being printed
 */

const App = () => {
  const nameText = "Enter name:";
  return (
    <div>
      <label className="label" for="name">
        {nameText}
      </label>
      <input id="name" type="text" />
      <button style={{ color: "white", backgroundColor: "blue" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
