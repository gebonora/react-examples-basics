import React from "react";

import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className={"ui container"}>
        <div>
          Select a language:
          <i
            className={"flag us"}
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className={"flag nl"}
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        {/*Uses the state in its context*/}
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value={"primary"}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>

        {/*Uses a hardcoded "dutch" value for its context*/}
        {/*<LanguageContext.Provider value={"dutch"}>*/}
        {/*  <UserCreate />*/}
        {/*</LanguageContext.Provider>*/}

        {/*/!*Uses the default value because it doesnt have a Provider*!/*/}
        {/*<UserCreate />*/}
      </div>
    );
  }
}

export default App;
