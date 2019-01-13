import React, { Component } from 'react';
import MyComponent from "./components/MyComponent"
import AnotherComponent from "./components/AnotherComponent"

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
        <AnotherComponent />
      </div>
    );
  }
}

export default App;
