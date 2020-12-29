import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;
  // static adds a property directly to the class itself.
  // equals to doing: Button.contextType = LanguageContext; outside the class.

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className={"ui button primary"}>{text}</button>;
  }
}

export default Button;
