import React, { Component } from "react";
import { GetName } from "../services/NameService";

class App extends Component {
  state = {
    Name: null
  };
  componentDidMount() {
    GetName(res => {
      this.setState({ Name: res.data.Name });
    });
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
