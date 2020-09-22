import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // we ONLY assign to state in the constructor, everything else MUST be done with setState()
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  //we need to define render for React to work
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
