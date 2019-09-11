import React, { Component } from "react";

class App extends Component {
  state = {
    Name: null
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ Name: "Priya" });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.Name ? "Hello, " + this.state.Name : "Loading..."}
      </div>
    );
  }
}

export default App;
